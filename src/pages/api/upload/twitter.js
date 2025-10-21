// pages/api/twitter/upload.ts

import { TwitterApi } from "twitter-api-v2";
import formidable from "formidable";
// import fs from "fs";

// Ngăn Next xử lý body
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = formidable({ multiples: false, maxFileSize: 200 * 1024 * 1024 });

  form.parse(req, async (err, fields) => {
    if (err) {
      console.error("Form parse error", err);
      return res.status(500).send("Error parsing form");
    }
    // const accessToken = fields.accessToken;
    // const accessSecret = fields.accessSecret;
    // const title = fields.title || "Default caption";
    // const filePath = files.media.filepath;
    const { accessToken, accessSecret } = fields;
    // const file = files.media?.[0];
    const title = fields.title?.[0];
    console.log("Access token:", accessToken);
    console.log("Access secret:", accessSecret);
    // console.log("File path:", file.filePath);
    // console.log("File exists:", fs.existsSync(file.filePath));
    // const fileStream = fs.createReadStream(filePath);
    const userClient = new TwitterApi({
      appKey: process.env.API_KEY,
      appSecret: process.env.API_SECRET_KEY,
      accessToken,
      accessSecret,
    });

    try {
      // const mediaId = await userClient.v1.uploadMedia(filePath, {
      //   mimeType: "video/mp4",
      //   longVideo: true,
      // });

      // await userClient.v1.tweet(title, {
      //   media_ids: [mediaId],
      // });
      // const mediaId = await userClient.v1.uploadMedia(file.filepath, {
      //   mimeType: file.mimetype, // ex: image/jpeg or image/png
      // });

      // await userClient.v1.tweet(title, {
      //   media_ids: [mediaId],
      // });

      await userClient.v2.tweet(title);

      res.status(200).json({ message: "Tweet posted with video!" });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ message: "Tweet error!" });
    }
  });
}

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

//   const form = formidable({ keepExtensions: true });

//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       console.error("Formidable error:", err);
//       return res.status(500).json({ error: "Form parsing failed" });
//     }

//     const accessToken = fields.accessToken?.[0];
//     const title = fields.title?.[0];
//     const file = files.media?.[0];
//     console.log(accessToken);
//     if (!accessToken || !title || !file) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     const mediaBuffer = fs.readFileSync(file.filepath);
//     const mediaType = file.mimetype!;
//     const totalBytes = mediaBuffer.length;
//     console.log(mediaType);
//     console.log(totalBytes);
//     try {
//       // STEP 1: INIT
//       const initRes = await fetch(
//         "https://upload.twitter.com/1.1/media/upload.json",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//           },
//           body: new URLSearchParams({
//             command: "INIT",
//             total_bytes: totalBytes.toString(),
//             media_type: mediaType,
//             media_category: "tweet_video",
//           }),
//         }
//       );

//       if (!initRes.ok) {
//         const errText = await initRes.text();
//         console.error("INIT upload failed:", errText);
//         throw new Error("INIT upload failed");
//       }

//       let initJson: any;

//       try {
//         initJson = await initRes.json();
//       } catch (e) {
//         const text = await initRes.text();
//         console.error("Failed to parse JSON:", text);
//         throw new Error("Invalid JSON response from Twitter INIT");
//       }
//       const media_id_string = initJson.media_id_string;

//       if (!media_id_string) throw new Error("INIT failed");

//       // STEP 2: APPEND (Twitter yêu cầu phân đoạn nếu >5MB, ở đây dùng 1 đoạn luôn)
//       await fetch("https://upload.twitter.com/1.1/media/upload.json", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//         },
//         body: new URLSearchParams({
//           command: "APPEND",
//           media_id: media_id_string,
//           segment_index: "0",
//           media: mediaBuffer.toString("base64"),
//         }),
//       });

//       // STEP 3: FINALIZE
//       await fetch("https://upload.twitter.com/1.1/media/upload.json", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//         },
//         body: new URLSearchParams({
//           command: "FINALIZE",
//           media_id: media_id_string,
//         }),
//       });

//       // STEP 4: POST tweet
//       const tweetRes = await fetch("https://api.twitter.com/2/tweets", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           text: title,
//           media: {
//             media_ids: [media_id_string],
//           },
//         }),
//       });

//       const tweetData = await tweetRes.json();
//       return res.status(200).json(tweetData);
//     } catch (e) {
//       console.error("Upload error:", e);
//       return res.status(500).json({ error: "Upload failed" });
//     }
//   });
// }
