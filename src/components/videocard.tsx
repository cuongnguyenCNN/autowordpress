"use client";

import { useRouter } from "next/navigation";

interface Props {
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
}

export default function VideoCard({
  title,
  description,
  icon,
  color,
  href,
}: Props) {
  const router = useRouter();

  return (
    <div
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer"
      onClick={() => router.push(href)}
    >
      <div
        className={`flex items-center justify-center w-12 h-12 ${color} rounded-md mb-4`}
      >
        <span className="text-xl">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <span className="text-blue-500 font-medium text-sm flex items-center gap-1">
        Get started →
      </span>
    </div>
  );
}
