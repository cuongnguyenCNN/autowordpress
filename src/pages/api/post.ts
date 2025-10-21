import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { title, content, status = "publish" } = req.body;

  try {
    const response = await fetch(process.env.WP_API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.WP_USER}:${process.env.WP_APP_PASS}`
          ).toString("base64"),
      },
      body: JSON.stringify({
        title,
        content,
        status,
      }),
    });

    const data = await response.json();
    if (!response.ok) return res.status(response.status).json(data);

    return res.status(200).json({ success: true, post: data });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error posting to WordPress", error: err });
  }
}
