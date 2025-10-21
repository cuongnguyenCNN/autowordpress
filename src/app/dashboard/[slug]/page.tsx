"use client";
import ContentStudio from "../contentstudio";
import Connections from "../connections";
import Create from "../create";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      {slug === "content-studio" && <ContentStudio></ContentStudio>}
      {slug === "connections" && <Connections></Connections>}
      {slug === "create" && <Create></Create>}
    </>
  );
}
