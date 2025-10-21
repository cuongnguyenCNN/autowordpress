"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Post, NewPost } from "@/src/types";
import { supabase } from "../lib/supabaseClient";
import { useUser } from "./userscontext";

type PostsContextType = {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
  readPosts: (userId: string) => Promise<void>;
  createPost: (newPost: NewPost) => Promise<void>;
  updatePost: (id: string, updates: Partial<Post>) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
};

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setIsLoading(true);
    console.log("fetch Post", user?.id);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("user_id", user?.id)
      .order("created_at", { ascending: false });
    if (error) setError(error.message);
    else setPosts(data as Post[]);
    setIsLoading(false);
  };

  const readPosts = async (userId: string) => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });
    if (error) setError(error.message);
    else setPosts(data as Post[]);
    setIsLoading(false);
  };

  const createPost = async (newPost: NewPost) => {
    const { error } = await supabase.from("posts").insert(newPost);
    if (error) setError(error.message);
    else await fetchPosts();
  };

  const updatePost = async (id: string, updates: Partial<Post>) => {
    const { error } = await supabase.from("posts").update(updates).eq("id", id);
    if (error) setError(error.message);
    else await fetchPosts();
  };

  const deletePost = async (id: string) => {
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) setError(error.message);
    else await fetchPosts();
  };

  useEffect(() => {
    if (user?.id) {
      fetchPosts(); // sẽ chỉ chạy sau khi user có ID
    }
  }, [user?.id]);

  return (
    <PostsContext.Provider
      value={{
        posts,
        isLoading,
        error,
        fetchPosts,
        readPosts,
        createPost,
        updatePost,
        deletePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};
