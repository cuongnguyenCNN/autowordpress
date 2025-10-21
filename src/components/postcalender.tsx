import React, { JSX, useEffect, useMemo, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventDropArg } from "@fullcalendar/core";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaPinterest,
  FaLinkedin,
  FaYoutube,
  FaImage,
  FaPhotoVideo,
} from "react-icons/fa";
import {
  CalendarIcon,
  ClockIcon,
  PencilIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { SiThreads, SiBluesky, SiX } from "react-icons/si";
import { Post } from "../types";
import { supabase } from "../lib/supabaseClient";
import { usePosts } from "../contexts/postscontext";
import { useUser } from "../contexts/userscontext";
type CalendarEvent = {
  id: string;
  title: string;
  start: string;
  allDay: boolean;
  color: string;
  extendedProps: Post;
};

type Props = {
  onEventDrop?: (updated: CalendarEvent[]) => void;
  onDateClick?: () => void;
};

const platformIconMap: Record<string, JSX.Element> = {
  facebook: <FaFacebook className="text-blue-600" />,
  instagram: <FaInstagram className="text-red-500" />,
  tiktok: <FaTiktok className="text-black" />,
  pinterest: <FaPinterest className="text-red-500" />,
  linkedin: <FaLinkedin className="text-blue-700" />,
  youtube: <FaYoutube className="text-red-600" />,
  image: <FaImage className="text-blue-500" />,
  threads: <SiThreads className="text-black" />,
  bluesky: <SiBluesky className="text-blue-400" />,
  "twitter/x": <SiX className="text-black" />,
};

const mapPostsToEvents = (posts: Post[]): CalendarEvent[] => {
  return posts.map((post) => ({
    id: post.id,
    title: post.content.slice(0, 40) + "...",
    start: post.scheduled_time,
    allDay: false,
    color:
      post.status === "scheduled"
        ? "red"
        : post.status === "posted"
        ? "green"
        : post.status === "draft"
        ? "red"
        : "gray",
    extendedProps: post,
  }));
};

const PostCalendar: React.FC<Props> = ({ onDateClick }) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const { posts, fetchPosts } = usePosts();
  const { user } = useUser();
  const tabs = [
    { label: "Calendar", icon: CalendarIcon },
    {
      label: "Scheduled",
      icon: ClockIcon,
      count: posts.filter((post) => post.status === "scheduled").length,
    },
    {
      label: "Draft",
      icon: PencilIcon,
      count: posts.filter((post) => post.status === "draft").length,
    },
    {
      label: "Posted",
      icon: CheckCircleIcon,
      count: posts.filter((post) => post.status === "posted").length,
    },
  ];
  const handleEventDrop = async (info: EventDropArg) => {
    await handleSaveOneEvent(
      info.event.id,
      info.event.start?.toISOString() || ""
    );
    const updated = events.map((event) =>
      event.id === info.event.id
        ? { ...event, start: info.event.start?.toISOString() || "" }
        : event
    );
    setEvents(updated);
  };
  const handleSaveOneEvent = async (id: string, scheduled_time: string) => {
    const { error } = await supabase
      .from("posts")
      .update({ scheduled_time })
      .eq("id", id)
      .eq("user_id", user?.id);

    if (error) {
      console.error(`❌ Lỗi khi cập nhật event ${id}:`, error);
    } else {
      console.log(`✅ Đã lưu event ${id}`);
    }
    fetchPosts();
    setEvents(mapPostsToEvents(posts));
  };
  // const handleSave = async () => {
  //   for (const event of events) {
  //     const id = event.id; // id từ event, là UUID
  //     const scheduled_time = event.start; // ISO string: 2025-05-20T07:50:00+00:00

  //     const { error } = await supabase
  //       .from("posts")
  //       .update({ scheduled_time })
  //       .eq("id", id)
  //       .eq("user_id", user?.id);

  //     if (error) {
  //       console.error(`❌ Lỗi khi cập nhật event ${id}:`, error);
  //     } else {
  //       console.log(`✅ Đã lưu event ${id}`);
  //     }
  //   }
  //   fetchPosts();
  //   setEvents(mapPostsToEvents(posts));
  // };
  const [activeTab, setActiveTab] = useState("Calendar");
  const handleClick = (label: string) => {
    setActiveTab(label);
  };
  const filteredPosts = useMemo(() => {
    if (!events || events.length === 0) return [];

    if (activeTab === "Calendar") return events;

    return events.filter(
      (p) => p.extendedProps?.status === activeTab.toLowerCase()
    );
  }, [activeTab, events]);

  useEffect(() => {
    setEvents(mapPostsToEvents(posts));
    setActiveTab("Calendar");
  }, [posts]);
  return (
    <div dir="ltr" data-orientation="horizontal" className="h-full space-y-6">
      <div className="sticky top-0 z-10 bg-[#F3F4EF] backdrop-blur-lg pb-2">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="text-muted-foreground w-full flex overflow-x-auto scrollbar-hide justify-between items-center h-12 md:h-14 bg-[#EEEFE8] rounded-xl p-1 md:p-2"
          data-orientation="horizontal"
          style={{ outline: "none;" }}
        >
          <div className="flex gap-1 md:gap-2">
            {tabs.map(({ label, icon: Icon, count }) => (
              <button
                key={label}
                onClick={() => handleClick(label)}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium border
            ${
              activeTab === label
                ? "bg-white text-blue-600 border-gray-300 shadow-sm"
                : "bg-[#f5f6f4] text-gray-700 border-transparent hover:bg-white"
            }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
                {count !== undefined && <span>({count})</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        droppable={true}
        events={filteredPosts}
        dateClick={onDateClick}
        eventDrop={handleEventDrop}
        eventContent={(arg) => {
          const post = arg.event.extendedProps as Post;
          const platforms = post.platforms
            .split(",")
            .map((p) => p.trim().toLowerCase())
            .filter((p) => p.length > 0);
          const start = arg.event.start;
          const hours = start?.getHours();
          const minutes = start?.getMinutes();
          const formattedTime = `${String(hours).padStart(2, "0")}:${String(
            minutes
          ).padStart(2, "0")}`;
          let statusColor = "#6b7280"; // default gray
          if (post.status === "scheduled") statusColor = "#f59e0b";
          else if (post.status === "posted") statusColor = "#10b981";
          else if (post.status === "draft") statusColor = "#ef4444";

          return (
            <div className="max-h-[80px] overflow-y-auto custom-scrollbar">
              <div
                style={{
                  gap: "6px",
                }}
                className="bg-white border border-gray-200 rounded-md p-1 text-xs flex flex-col justify-between min-h-[50px]"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#f5f6f7", // hoặc #f0f2f5
                    padding: "4px 8px",
                    borderRadius: "8px",
                    fontSize: "11px",
                    fontWeight: 500,
                    color: statusColor,
                  }}
                >
                  <div>{post.status}</div>
                  <strong style={{ marginLeft: "8px" }}>
                    [{formattedTime}]
                  </strong>
                </div>
                <div className="font-semibold text-gray-800 truncate flex">
                  <FaPhotoVideo className="text-blue-500 mr-1" />
                  {arg.event.title.slice(0, 20) + "..."}
                </div>
                <div className="flex items-center gap-1 flex-wrap text-[10px] mt-1">
                  {platforms.map((platform, idx) =>
                    platformIconMap[platform] ? (
                      <span key={idx}>{platformIconMap[platform]}</span>
                    ) : null
                  )}
                </div>
                <div className="h-1 rounded bg-blue-600 mt-1" />
              </div>
            </div>
          );
        }}
        // headerToolbar={{
        //   right: "saveCalendar today prev,next", // 👈 Thêm nút tùy chỉnh
        // }}
        // customButtons={{
        //   saveCalendar: {
        //     text: "Save Calendar",
        //     click: () => {
        //       handleSave();
        //     },
        //   },
        // }}
      />
    </div>
  );
};

export default PostCalendar;
