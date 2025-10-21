export type Post = {
  id: string;
  user_id: string;
  content: string;
  media_url: string;
  scheduled_time: string;
  status: string;
  created_at: string;
  platforms: string; // CSV string, e.g. "Twitter/X,Facebook"
};
export type NewPost = Omit<Post, "id" | "created_at">;
export const parsePlatforms = (platforms: string): string[] =>
  platforms.split(",").map((p) => p.trim());
