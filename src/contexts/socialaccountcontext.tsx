import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { createClient } from "@supabase/supabase-js";
import { SocialAccount } from "../types/socialaccount";
import { supabase } from "../lib/supabaseClient";
import { useUser } from "./userscontext";

// Interface mô tả dữ liệu tài khoản mạng xã hội
// Interface cho context
interface SocialAccountContextProps {
  socialAccounts: SocialAccount[];
  loading: boolean;
  fetchSocialAccount: (userId: string) => Promise<void>;
  addSocialAccount: (account: SocialAccount) => Promise<void>;
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

  // ✅ Thêm tài khoản mới
  const addSocialAccount = async (account: SocialAccount) => {
    const { data, error } = await supabase
      .from("social_accounts")
      .insert([account])
      .select();

    if (error) console.error("Add error:", error);
    else setSocialAccounts((prev) => [...prev, ...(data || [])]);
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
