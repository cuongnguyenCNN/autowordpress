//import Link from "next/link";
"use client";
import PostCalendar from "@/src/components/postcalender";
import ProfileModal from "@/src/components/profilemodal";
import { usePosts } from "@/src/contexts/postscontext";
import { useUser } from "@/src/contexts/userscontext";
import { useEffect, useState } from "react";
// const tabs = [
//   { label: "Social Media", icon: <Notebook size={18} />, id: "socialmedia" },
//   {
//     label: "Subscription",
//     icon: <AlertCircle size={18} />,
//     id: "subscription",
//   },
//   { label: "Account", icon: <Zap size={18} />, id: "account" },
// ];
export default function Scheduled() {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const dates = [];
  for (let index = 0; index < 30; index++) {
    dates[index] = index + 1;
  }
  const { fetchPosts } = usePosts();
  const { user } = useUser();
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <main className="flex-1 overflow-auto rounded-[10px] bg-[#F3F4EF] md:pr-1 pt-14 md:pt-0 w-full">
      <div className="min-h-screen bg-[#F3F4EF]">
        <div className="bg-[#F3F4EF] w-full">
          <div className="container mx-auto py-2 md:py-4 px-3 md:px-4 max-w-7xl">
            <div className="space-y-4">
              <div className="space-y-8 m-1">
                <PostCalendar
                  onDateClick={
                    (user?.post_used ?? 0) >= (user?.post_limit ?? 0)
                      ? () => setOpenModalCreate(false)
                      : () => setOpenModalCreate(true)
                  }
                />
                <ProfileModal
                  isOpen={openModalCreate}
                  onClose={() => setOpenModalCreate(false)}
                  content=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
