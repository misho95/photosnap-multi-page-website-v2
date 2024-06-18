"use client";

import Image from "next/image";
import ArrowButton from "../arrow-button";
import { animated, useInView } from "@react-spring/web";

const StoriesHeaderMobile = () => {
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
    <section ref={ref} className="w-full flex flex-col items-center sm:hidden">
      <Image
        src={"/stories/desktop/moon-of-appalacia.jpg"}
        width={375}
        height={317}
        alt="cover"
        className="aspect-[375:317] w-full object-cover"
      />
      <div className="bg-black p-[29px]">
        <animated.article
          style={springs}
          className="w-fit text-white  flex flex-col gap-[24px] "
        >
          <h5 className="text-xs leading-[2px] font-bold">
            LAST MONTH’S FEATURED STORY
          </h5>
          <h2 className="uppercase leading-[40px] tracking-[3.333px] font-bold text-[40px]">
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
      </div>
    </section>
  );
};

export default StoriesHeaderMobile;
