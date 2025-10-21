export type User = {
  id: string; // uuid
  email: string;
  name: string | null;
  created_at: string; // ISO date string
  picture: string | null;
  password: string; // Nếu dùng Supabase Auth thì không nên lưu password ở đây
  plan: string;
  is_limited: boolean;
  post_limit: number;
  post_used: number;
  updated_at: string; // ISO date string
};
