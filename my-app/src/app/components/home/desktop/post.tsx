"use client";

import Image from "next/image";
import ArrowButton from "../../arrow-button";
import { useContext } from "react";
import { PropsContext } from "../post-main";
import clsx from "clsx";
import { animated, useInView } from "@react-spring/web";

const Post = () => {
  const { title, text, button, imgs, color, side, sideColor } =
    useContext(PropsContext);

  const desktopImage = imgs.find((img: any) => img.type === "desktop");

  const tabletImage = imgs.find((img: any) => img.type === "tablet");

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-40% 0%",
    }
  );

  return (
    <article
      ref={ref}
      className="w-full aspect-[1.1815] lg:aspect-[2.215] hidden sm:flex"
    >
      {side === "right" && (
        <>
          <Image
            src={tabletImage.url}
            alt="create-and-share"
            width={273}
            height={650}
            className="block lg:hidden w-[35.55%] object-cover object-center"
          />
          <Image
            src={desktopImage.url}
            alt="create-and-share"
            width={830}
            height={650}
            className="hidden lg:block w-[57.64%]  object-cover object-center"
          />
        </>
      )}

      <div
        className={clsx(
          "w-[64.45%] lg:w-[42.36%]   flex justify-center items-center flex-shrink-0 relative p-5",
          {
            "bg-black text-white": color === "black",
            "bg-white text-black": color === "white",
          }
        )}
      >
        <animated.div
          style={springs}
          className="max-w-[387px] flex flex-col gap-[21px] justify-center items-start"
        >
          <h1 className="text-[40px]  font-bold leading-[48px] tracking-[4.167px] uppercase ">
            {title}
          </h1>
          <p className="text-[15px] font-[400] leading-[25px] opacity-60 ">
            {text}
          </p>
          {button && (
            <span>
              <ArrowButton
                variant={color === "black" ? "light" : "dark"}
                title={button}
              />
            </span>
          )}
        </animated.div>
        {sideColor && (
          <div
            className="w-[6px] h-[46.77%] absolute left-0 top-1/2 -translate-y-1/2"
            style={{
              background:
                "linear-gradient(27deg, #FFC593 0%, #BC7198 41.67%, #5A77FF 83.33%)",
            }}
          />
        )}
      </div>
      {side === "left" && (
        <>
          <Image
            src={tabletImage.url}
            alt="create-and-share"
            width={273}
            height={650}
            className="block lg:hidden w-[35.55%] object-cover object-center"
          />
          <Image
            src={desktopImage.url}
            alt="create-and-share"
            width={830}
            height={650}
            className="hidden lg:block w-[57.64%]  object-cover object-center"
          />
        </>
      )}
    </article>
  );
};

export default Post;
