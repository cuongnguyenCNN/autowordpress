// context/UserContext.tsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabaseClient";
import { User } from "../types";
import { useRouter } from "next/navigation";

type UserContextType = {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => void;
  signOut: () => void;
  fetchUser: () => void;
  refreshUser: () => Promise<void>;
};

const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
  signInWithGoogle: () => {},
  signOut: () => {},
  fetchUser: () => {},
  refreshUser: async () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    // const {
    //   data: { session },
    // } = await supabase.auth.getSession();
    // const currentUser = session?.user;
    const { data: userData } = await supabase.auth.getUser();

    if (!userData?.user) {
      setUser(null);
      setLoading(false);
      return;
    }
    const currentUser = userData.user;
    // Lấy user từ bảng `users`
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", currentUser.id)
      .single();

    if (error && error.code === "PGRST116") {
      // Nếu user chưa có trong bảng `users`, tạo mới
      const { user_metadata } = currentUser;
      const { email, name, avatar_url } = user_metadata;

      const { data: insertedUser, error: insertError } = await supabase
        .from("users")
        .insert({
          id: currentUser.id,
          email,
          name,
          picture: avatar_url,
        })
        .select()
        .single();

      if (insertError) {
        console.error("Lỗi tạo user:", insertError);
      } else {
        setUser(insertedUser as User);
      }
    } else {
      setUser(data as User);
    }

    setLoading(false);
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`, // cần set cái này
      },
    });
    if (error) console.error("Login failed:", error.message);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Sign out failed:", error.message);
      return;
    }
    setUser(null);
    localStorage.removeItem("sb-iqthffdhrpeyjkzihfnl-auth-token");
    router.push("/");
  };

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if ((event === "INITIAL_SESSION" || event === "SIGNED_IN") && session)
          await fetchUser();
        if (event === "SIGNED_OUT") setUser(null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        signInWithGoogle,
        signOut,
        fetchUser,
        refreshUser: fetchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
