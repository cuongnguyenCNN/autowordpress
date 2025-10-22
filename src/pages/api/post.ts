import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { title, content, status = "publish" } = req.body;

  try {
    const response = await fetch(localStorage.getItem("access_site_url")!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("access_token")}`,
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
