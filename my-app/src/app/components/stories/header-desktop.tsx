"use client";

import Image from "next/image";
import ArrowButton from "../arrow-button";
import { animated, useInView } from "@react-spring/web";

const StoriesHeaderDesktop = () => {
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
    <section ref={ref} className="w-full relative hidden items-center sm:flex">
      <animated.article
        style={springs}
        className="absolute max-w-[387px] w-fit h-fit z-20 text-white mx-[36px] lg:mx-[112px] flex flex-col gap-[24px]"
      >
        <h5 className="text-xs leading-[2px] font-bold">
          LAST MONTH’S FEATURED STORY
        </h5>
        <h2 className="uppercase leading-[48px] tracking-[4.167px] font-bold text-[40px]">
          HAZY FULL MOON OF APPALACHIA
        </h2>
        <h6 className="text-[13px] ">
          <span className="opacity-75">March 2nd 2020</span>{" "}
          <span>by John Appleseed</span>
        </h6>
        <p className="text-[15px] opacity-60 leading-[25px]">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <span className="w-fit">
          <ArrowButton title={"READ THE STORY"} variant={"light"} />
        </span>
      </animated.article>
      <Image
        src={"/stories/desktop/moon-of-appalacia.jpg"}
        width={1440}
        height={650}
        alt="cover"
        className="aspect-[144:65] w-full object-cover hidden lg:flex"
      />
      <Image
        src={"/stories/tablet/moon-of-appalacia.jpg"}
        width={768}
        height={650}
        alt="cover"
        className="aspect-[384:325] w-full object-cover sm:flex lg:hidden"
      />
    </section>
  );
};

export default StoriesHeaderDesktop;
