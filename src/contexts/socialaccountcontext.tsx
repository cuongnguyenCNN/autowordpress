import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { SocialAccount } from "../types/socialaccount";
import { supabase } from "../lib/supabaseClient";
import { useUser } from "./userscontext";

// Interface mô tả dữ liệu tài khoản mạng xã hội
// Interface cho context
interface SocialAccountContextProps {
  socialAccounts: SocialAccount[];
  loading: boolean;
  fetchSocialAccount: (userId: string) => Promise<void>;
  addSocialAccount: (account: SocialAccount) => Promise<SocialAccount[]>;
  removeSocialAccount: (id: string) => Promise<void>;
  updateSocialAccount: (
    id: string,
    data: Partial<SocialAccount>
  ) => Promise<void>;
}

// Tạo context
const SocialAccountContext = createContext<
  SocialAccountContextProps | undefined
>(undefined);

// Supabase client (có thể thay bằng API của bạn)

// Provider component
export const SocialAccountProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [socialAccounts, setSocialAccounts] = useState<SocialAccount[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  // ✅ Fetch danh sách tài khoản theo user_id
  const fetchSocialAccount = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("social_accounts")
      .select("*")
      .eq("user_id", user?.id);

    if (error) console.error("Fetch error:", error);
    else setSocialAccounts(data || []);

    setLoading(false);
  };

  const addSocialAccount = async (account: SocialAccount) => {
    console.log("📦 addSocialAccount() called with:", account);

    const { data, error } = await supabase
      .from("social_accounts")
      .upsert([account], { onConflict: "user_id, provider" })
      .select();

    if (error) {
      console.error("❌ Supabase Add error:", error);
      throw error; // ⚠️ Cực kỳ quan trọng để hàm gọi catch được
    }

    console.log("✅ Supabase Add success:", data);
    setSocialAccounts((prev) => [...prev, ...(data || [])]);
    return data; // ⚠️ Bắt buộc có return để chỗ gọi nhận được phản hồi
  };

  // ✅ Xóa tài khoản theo id
  const removeSocialAccount = async (id: string) => {
    const { error } = await supabase
      .from("social_accounts")
      .delete()
      .eq("id", id);
    if (error) console.error("Remove error:", error);
    else setSocialAccounts((prev) => prev.filter((a) => a.id !== id));
  };

  // ✅ Cập nhật tài khoản
  const updateSocialAccount = async (
    id: string,
    data: Partial<SocialAccount>
  ) => {
    const { data: updated, error } = await supabase
      .from("social_accounts")
      .update(data)
      .eq("id", id)
      .select();

    if (error) console.error("Update error:", error);
    else
      setSocialAccounts((prev) =>
        prev.map((a) => (a.id === id ? { ...a, ...updated?.[0] } : a))
      );
  };

  useEffect(() => {
    if (user?.id) {
      fetchSocialAccount(); // sẽ chỉ chạy sau khi user có ID
    }
  }, [user?.id]);
  return (
    <SocialAccountContext.Provider
      value={{
        socialAccounts,
        loading,
        fetchSocialAccount,
        addSocialAccount,
        removeSocialAccount,
        updateSocialAccount,
      }}
    >
      {children}
    </SocialAccountContext.Provider>
  );
};

// ✅ Custom hook dùng trong component
export const useSocialAccounts = () => {
  const context = useContext(SocialAccountContext);
  if (!context) {
    throw new Error(
      "useSocialAccounts must be used within a SocialAccountProvider"
    );
  }
  return context;
};
