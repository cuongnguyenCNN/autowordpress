"use client";
import { useEffect } from "react";

import { supabase } from "@/src/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/contexts/userscontext";

export default function AuthCallback() {
  const router = useRouter();
  const { user, refreshUser } = useUser();
  useEffect(() => {
    const checkSessionAndRedirect = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session) {
        router.push("/dashboard");
      } else {
        // Retry in 500ms if no session yet
        setTimeout(checkSessionAndRedirect, 500);
      }
    };
    checkSessionAndRedirect();
    refreshUser();
  }, [user]);

  return <div>Loading...</div>;
}
