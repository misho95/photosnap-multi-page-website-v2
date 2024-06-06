"use client";

import { createContext } from "react";
import Post from "./desktop/post";
import PostMobile from "./mobile/post-mobile";

type PropsType = {
  title: string;
  text: string;
  button: string;
  imgs: { type: string; url: string }[];
  color: string;
  side: string;
  sideColor: boolean;
};

export const PropsContext = createContext<any>(null);

const PostMain = ({
  title,
  text,
  button,
  imgs,
  color,
  side,
  sideColor,
}: PropsType) => {
  return (
    <PropsContext.Provider
      value={{ title, text, button, imgs, color, side, sideColor }}
    >
      <Post />
      <PostMobile />
    </PropsContext.Provider>
  );
};

export default PostMain;
