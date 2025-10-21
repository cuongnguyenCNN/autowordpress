// /pages/api/schedule-post.ts
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/src/lib/supabaseClient";
export const config = {
  api: {
    bodyParser: false,
  },
};

import formidable from "formidable";
import fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    const { content, scheduledAt, platforms, user_id } = fields;
    const videoFile = files.media?.[0];
    // const mediaFiles = files["media[]"];

    // Upload file lên Supabase storage
    // const mediaUrls: string[] = [];
    let mediaUrl = null;
    console.log(fields);
    console.log(files);
    try {
      if (videoFile) {
        const fileBuffer = fs.readFileSync(videoFile.filepath);
        const filePath = `media/${Date.now()}-${videoFile.originalFilename}`;
        const { error } = await supabase.storage
          .from("uploads")
          .upload(filePath, fileBuffer, {
            contentType: videoFile.mimetype ?? undefined,
          });
        if (error) throw error;

        const { publicUrl } = supabase.storage
          .from("uploads")
          .getPublicUrl(filePath).data!;
        mediaUrl = publicUrl;
      }
      console.log(videoFile);
      // const uploadPromises = Array.isArray(mediaFiles)
      //   ? mediaFiles.map(async (file) => {
      //       const fileBuffer = fs.readFileSync(file.filepath);
      //       const filePath = `media/${Date.now()}-${file.originalFilename}`;
      //       const { data, error } = await supabase.storage
      //         .from("uploads")
      //         .upload(filePath, fileBuffer, {
      //           contentType: file.mimetype ?? undefined,
      //         });
      //       if (error) throw error;
      //       const { publicUrl } = supabase.storage
      //         .from("uploads")
      //         .getPublicUrl(filePath).data!;
      //       mediaUrls.push(publicUrl);
      //     })
      //   : [];

      // await Promise.all(uploadPromises);

      // Lưu vào DB
      const { error } = await supabase.from("posts").insert({
        user_id: user_id?.[0],
        content: content?.[0],
        platforms,
        media_url: mediaUrl,
        scheduled_time: scheduledAt?.[0],
        status: "scheduled",
      });
      console.log(error);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });
}
