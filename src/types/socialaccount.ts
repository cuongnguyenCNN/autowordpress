export interface SocialAccount {
  id: string; // primary key (UUID hoặc auto-increment)
  user_id: string; // foreign key to users table
  provider: "youtube" | string; // có thể mở rộng sau này
  account_name: string; // tên tài khoản (ví dụ: kênh YouTube)
  access_token: string;
  access_secret: string;
  refresh_token?: string;
  connected: boolean;
  channel_id: string;
  channel_title: string;
  avatar_url: string;
  expires_at: string; // ISO format nếu lưu dạng string, hoặc `Date` nếu dùng kiểu timestamp
  created_at?: string; // nếu Supabase tự tạo
  updated_at?: string; // nếu có
}
