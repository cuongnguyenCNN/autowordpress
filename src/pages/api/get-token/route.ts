import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { siteUrl, username, appPassword } = await req.json();

  if (!siteUrl || !username || !appPassword) {
    return NextResponse.json(
      { error: "Thiếu thông tin cần thiết" },
      { status: 400 }
    );
  }

  try {
    // WordPress App Password dùng Basic Auth
    const token = Buffer.from(`${username}:${appPassword}`).toString("base64");

    // Thử gọi 1 endpoint để kiểm tra có đúng không
    const res = await fetch(`${siteUrl}/wp-json/wp/v2/users/me`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { error: `Xác thực thất bại: ${errorText}` },
        { status: 401 }
      );
    }

    // Nếu đúng, trả về token
    return NextResponse.json({ token: `Basic ${token}` });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
