import Image from "next/image";
import ArrowButton from "../../arrow-button";
import { useContext } from "react";
import { PropsContext } from "../post-main";
import clsx from "clsx";

const PostMobile = () => {
  const { title, text, button, imgs, color, sideColor } =
    useContext(PropsContext);

  const mobileImage = imgs.find((img: any) => img.type === "desktop");

  return (
    <section className="w-full flex flex-col sm:hidden relative">
      <Image
        src={mobileImage.url}
        alt="create-and-share"
        width={375}
        height={294}
        className="w-full object-cover object-center"
      />
      <div
        className={clsx(
          " flex justify-center items-center flex-shrink-0 relative min-h-[419px] p-3",
          {
            "bg-black text-white": color === "black",
            "bg-white text-black": color === "white",
          }
        )}
      >
        <div className="max-w-[318px] flex flex-col gap-[21px] justify-center items-start">
          <h1 className="text-[32px]  font-bold leading-[40px] tracking-[3.333px] uppercase ">
            {title}
          </h1>
          <p className="text-[15px] font-[400] leading-[25px] opacity-60 ">
            {text}
          </p>
          <span>
            <ArrowButton
              variant={color === "black" ? "light" : "dark"}
              title={button}
            />
          </span>
        </div>

        {sideColor && (
          <div
            className="w-[128px] h-[6px] absolute left-[32px] top-0"
            style={{
              background:
                "linear-gradient(27deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%)",
            }}
          />
        )}
      </div>
    </section>
  );
};

export default PostMobile;
