"use client";

import Image from "next/image";
import ArrowButton from "./arrow-button";
import { animated, useInView } from "@react-spring/web";

const BetaFooter = () => {
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
      rootMargin: "0% 0%",
    }
  );

  return (
    <section ref={ref} className="relative">
      <Image
        src={"/shared/desktop/bg-beta.jpg"}
        alt="bg"
        width={1440}
        height={280}
        className="hidden lg:block w-full aspect-[37:7] object-cover"
      />
      <Image
        src={"/shared/tablet/bg-beta.jpg"}
        alt="bg"
        width={768}
        height={280}
        className="hidden sm:block lg:hidden w-full aspect-[96:35] object-cover"
      />
      <Image
        src={"/shared/mobile/bg-beta.jpg"}
        alt="bg"
        width={375}
        height={288}
        className="block sm:hidden w-full aspect-[125:96] object-cover"
      />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full ">
        <animated.div
          style={springs}
          className={
            "flex flex-col justify-between items-start gap-7 py-[68px] px-[39px] lg:px-[165px]"
          }
        >
          <h1 className="text-white text-[40px] font-bold leading-[48px] tracking-[4.167px] uppercase max-w-[400px]">
            We’re in beta. Get your invite today!
          </h1>
          <span>
            <ArrowButton title={"GET AN INVITE"} variant={"light"} />
          </span>
        </animated.div>
      </div>
    </section>
  );
};

export default BetaFooter;
