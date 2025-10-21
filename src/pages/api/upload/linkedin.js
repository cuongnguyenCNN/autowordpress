import fs from "fs/promises";
import formidable from "formidable";
export const config = {
  api: {
    bodyParser: false, // Vì ta xử lý binary video
  },
};

export default async function handler(req, res) {
  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(400).json({ error: "Invalid form data" });
    }

    const accessToken = fields.token?.[0];
    const personId = fields.personId?.[0];
    const title = fields.title?.[0];
    const mediaFile = files.media?.[0]; // có thể undefined

    if (!accessToken || !personId || !title) {
      return res.status(400).json({
        error: "Missing required fields: token, personId, or title",
      });
    }

    try {
      let mediaPayload = null;
      let shareMediaCategory = "NONE";

      // 🖼️ Nếu có file thì upload lên LinkedIn
      if (mediaFile) {
        const contentType = mediaFile.mimetype;
        const fileBuffer = new Uint8Array(
          await fs.readFile(mediaFile.filepath)
        );

        let mediaType;
        if (contentType.startsWith("image/")) {
          mediaType = "urn:li:digitalmediaRecipe:feedshare-image";
          shareMediaCategory = "IMAGE";
        } else if (contentType.startsWith("video/")) {
          mediaType = "urn:li:digitalmediaRecipe:feedshare-video";
          shareMediaCategory = "VIDEO";
        } else {
          throw new Error(`Unsupported media type: ${contentType}`);
        }

        // Step 1: Register upload
        const registerRes = await fetch(
          "https://api.linkedin.com/v2/assets?action=registerUpload",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              registerUploadRequest: {
                owner: `urn:li:person:${personId}`,
                recipes: [mediaType],
                serviceRelationships: [
                  {
                    relationshipType: "OWNER",
                    identifier: "urn:li:userGeneratedContent",
                  },
                ],
              },
            }),
          }
        );

        const registerJson = await registerRes.json();
        const uploadUrl =
          registerJson.value.uploadMechanism[
            "com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest"
          ].uploadUrl;
        const asset = registerJson.value.asset;

        // Step 2: Upload binary to LinkedIn storage
        await fetch(uploadUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/octet-stream",
            "Content-Length": fileBuffer.length.toString(),
          },
          body: fileBuffer,
        });

        mediaPayload = {
          status: "READY",
          media: asset,
          title: { text: "Uploaded via PostsBridge" },
          description: { text: "Media post" },
        };
      }

      // Step 3: Create the LinkedIn Post (text-only or media)
      const postBody = {
        author: `urn:li:person:${personId}`,
        lifecycleState: "PUBLISHED",
        specificContent: {
          "com.linkedin.ugc.ShareContent": {
            shareCommentary: { text: title },
            shareMediaCategory,
            ...(mediaPayload ? { media: [mediaPayload] } : {}),
          },
        },
        visibility: {
          "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
        },
      };

      const postRes = await fetch("https://api.linkedin.com/v2/ugcPosts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      });

      const postJson = await postRes.json();

      if (!postRes.ok) {
        throw new Error(JSON.stringify(postJson, null, 2));
      }

      res.status(200).json({
        success: true,
        type: mediaFile ? "media" : "text",
        post: postJson,
      });
    } catch (error) {
      console.error("❌ LinkedIn post failed:", error);
      res.status(500).json({ error: error.message || error });
    }
  });
}
// export default async function handler(req, res) {
//   const form = formidable();

//   form.parse(req, async (err, fields, files) => {
//     const accessToken = fields.token[0];
//     const videoFile = files.media[0];
//     const personId = fields.personId[0];
//     const title = fields.title[0];
//     console.log(fields);
//     console.log(videoFile);
//     try {
//       // Step 1: Register Upload
//       const contentType = videoFile?.mimetype;
//       let media_type;
//       if (contentType?.startsWith("image/")) {
//         media_type = "urn:li:digitalmediaRecipe:feedshare-image";
//       } else if (contentType?.startsWith("video/")) {
//         media_type = "urn:li:digitalmediaRecipe:feedshare-video";
//       } else {
//         throw new Error(`❌ Unsupported media type: ${contentType}`);
//       }

//       const fileBuffer = videoFile
//         ? new Uint8Array(await fs.readFile(videoFile.filepath))
//         : new Uint8Array();
//       const registerRes = await fetch(
//         "https://api.linkedin.com/v2/assets?action=registerUpload",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             registerUploadRequest: {
//               owner: `urn:li:person:${personId}`,
//               recipes: [media_type],
//               serviceRelationships: [
//                 {
//                   relationshipType: "OWNER",
//                   identifier: "urn:li:userGeneratedContent",
//                 },
//               ],
//             },
//           }),
//         }
//       );
//       const registerJson = await registerRes.json();
//       const uploadUrl =
//         registerJson.value.uploadMechanism[
//           "com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest"
//         ].uploadUrl;
//       const asset = registerJson.value.asset;
//       // Step 2: Decode base64 buffer to Uint8Array
//       // Step 3: Upload video
//       await fetch(uploadUrl, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/octet-stream",
//           "Content-Length": fileBuffer.length.toString(),
//         },
//         body: fileBuffer,
//       });
//       const mediaPayload = contentType.startsWith("image/")
//         ? {
//             status: "READY",
//             media: asset,
//             title: {
//               text: "My Image ",
//             },
//             description: {
//               text: "Uploaded via PostsBridge",
//             },
//           }
//         : {
//             status: "READY",
//             media: asset,
//             title: {
//               text: "My Video ",
//             },
//             description: {
//               text: "A test video upload",
//             },
//           };
//       // Step 4: Create UGC Post
//       const postRes = await fetch("https://api.linkedin.com/v2/ugcPosts", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           author: `urn:li:person:${personId}`,
//           lifecycleState: "PUBLISHED",
//           specificContent: {
//             "com.linkedin.ugc.ShareContent": {
//               shareCommentary: {
//                 text: title,
//               },
//               shareMediaCategory: contentType.startsWith("image/")
//                 ? "IMAGE"
//                 : "VIDEO",
//               media: [mediaPayload],
//             },
//           },
//           visibility: {
//             "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
//           },
//         }),
//       });
//       console.log(postRes);
//       res.status(200).json({ success: true, post: postRes.data });
//     } catch (error) {
//       console.error("Upload LinkedIn Faile", error);
//       res.status(300).json({ error: error });
//     }
//     // try {
//     //   const registerRes = await axios.post(
//     //     "https://api.linkedin.com/v2/assets?action=registerUpload",
//     //     {
//     //       registerUploadRequest: {
//     //         owner: `urn:li:person:${personId}`,
//     //         recipes: ["urn:li:digitalmediaRecipe:feedshare-video"],
//     //         serviceRelationships: [
//     //           {
//     //             relationshipType: "OWNER",
//     //             identifier: "urn:li:userGeneratedContent",
//     //           },
//     //         ],
//     //       },
//     //     },
//     //     {
//     //       headers: {
//     //         Authorization: `Bearer ${accessToken}`,
//     //         "Content-Type": "application/json",
//     //       },
//     //     }
//     //   );

//     //   const uploadUrl =
//     //     registerRes.data.value.uploadMechanism[
//     //       "com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest"
//     //     ].uploadUrl;
//     //   const asset = registerRes.data.value.asset;

//     //   // Use buffer instead of stream
//     //   const fileBuffer = fs.readFileSync(videoFile.filepath);

//     //   await axios.put(uploadUrl, fileBuffer, {
//     //     headers: {
//     //       "Content-Type": "application/octet-stream",
//     //       "Content-Length": fileBuffer.length,
//     //     },
//     //   });
//     //   console.log(fileBuffer);
//     //   // Now share the post
//     //   const postRes = await axios.post(
//     //     "https://api.linkedin.com/v2/ugcPosts",
//     //     {
//     //       author: `urn:li:person:${personId}`,
//     //       lifecycleState: "PUBLISHED",
//     //       specificContent: {
//     //         "com.linkedin.ugc.ShareContent": {
//     //           shareCommentary: { text: title },
//     //           shareMediaCategory: "VIDEO",
//     //           media: [
//     //             {
//     //               status: "READY",
//     //               description: { text: "A test video upload" },
//     //               media: asset,
//     //               title: { text: "My Video Title" },
//     //             },
//     //           ],
//     //         },
//     //       },
//     //       visibility: {
//     //         "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
//     //       },
//     //     },
//     //     {
//     //       headers: {
//     //         Authorization: `Bearer ${accessToken}`,
//     //         "Content-Type": "application/json",
//     //       },
//     //     }
//     //   );

//     //   console.log(postRes);
//     //   res.status(200).json({ success: true, post: postRes.data });
//     // } catch (error) {
//     //   console.log(error);
//     //   res.status(300).json({ error: error });
//     // }
//   });
// }
