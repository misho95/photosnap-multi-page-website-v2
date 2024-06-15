"use client";

import { featuresData } from "@/data/features-data";
import { animated, useInView } from "@react-spring/web";
import clsx from "clsx";
import Image from "next/image";

const Features = ({ full = false }: { full?: boolean }) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-15% 0%",
    }
  );

  return (
    <section ref={ref} className="flex justify-center items-center my-[160px]">
      <animated.div
        style={springs}
        className={clsx("grid  gap-[104px_44px]", {
          "grid-cols 1 lg:grid-cols-3": full === false,
          "grid-cols 1 sm:grid-cols-2 lg:grid-cols-3": full === true,
        })}
      >
        {full
          ? featuresData.map((d, i) => {
              return (
                <FeaturesPost
                  key={i}
                  img={d.img}
                  title={d.title}
                  text={d.text}
                />
              );
            })
          : featuresData.slice(0, 3).map((d, i) => {
              return (
                <FeaturesPost
                  key={i}
                  img={d.img}
                  title={d.title}
                  text={d.text}
                />
              );
            })}
      </animated.div>
    </section>
  );
};

export default Features;

const FeaturesPost = ({
  img,
  title,
  text,
}: {
  img: string;
  title: string;
  text: string;
}) => {
  return (
    <article className="max-w-[350px] flex flex-col justify-start items-center gap-[16px]">
      <Image
        src={img}
        width={72}
        height={72}
        alt={title}
        className="size-[72px] object-contain"
      />
      <h3 className="text-[18px] font-bold leading-[25px]">{title}</h3>
      <p className="text-[15px] font-normal leading-[25px] opacity-60 text-center">
        {text}
      </p>
    </article>
  );
};
