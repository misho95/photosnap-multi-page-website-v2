"use client";

import Image from "next/image";
import ArrowButton from "../arrow-button";
import { animated, useInView, useTrail } from "@react-spring/web";

const ImageCollection = () => {
  const images = [
    {
      img: "/stories/desktop/mountains.jpg",
      title: "The Mountains",
      author: "John Appleseed",
    },
    {
      img: "/stories/desktop/cityscapes.jpg",
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
    },
    {
      img: "/stories/desktop/18-days-voyage.jpg",
      title: "18 Days Voyage",
      author: "Alexei Borodin",
    },
    {
      img: "/stories/desktop/architecturals.jpg",
      title: "Architecturals",
      author: "Samantha Brooke",
    },
  ];

  const [ref, inView] = useInView();

  const trails = useTrail(images.length, {
    opacity: inView ? 1 : 0,
    rootMargin: "-40% 0%",
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    >
      {trails.map((props, i) => {
        return (
          <animated.article
            style={props}
            key={i}
            className="aspect-[0.72] w-full relative lg:hover:-translate-y-[30px] duration-200 group"
          >
            <Image
              src={images[i].img}
              alt="title"
              width={360}
              height={500}
              className="object-cover w-full"
            />
            <div
              className="w-full aspect-[1.02] absolute bottom-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.27%, rgba(0, 0, 0, 0.66) 100%)",
              }}
            />
            <div className="absolute top-0 w-full h-full flex flex-col justify-end items-start gap-5 p-[40px] text-white z-20">
              <h3 className="font-bold text-[18px] leading-[25px]">
                {images[i].title}
              </h3>
              <h5 className="text-[13px] font-normal">by {images[i].author}</h5>
              <div className="w-full h-[1px] bg-white/25" />
              <ArrowButton variant={"light"} title={"read story"} />
            </div>
            <div
              className="w-full h-[6px] absolute bottom-0 z-30 hidden lg:group-hover:flex duration-200"
              style={{
                background:
                  "linear-gradient(27deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%)",
              }}
            />
          </animated.article>
        );
      })}

      {/* {images.map((d, i) => {
        return (
          <article
            key={i}
            className="aspect-[0.72] w-full relative lg:hover:-translate-y-[30px] duration-200 group"
          >
            <Image
              src={d.img}
              alt="title"
              width={360}
              height={500}
              className="object-cover w-full"
            />
            <div
              className="w-full aspect-[1.02] absolute bottom-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.27%, rgba(0, 0, 0, 0.66) 100%)",
              }}
            />
            <div className="absolute top-0 w-full h-full flex flex-col justify-end items-start gap-5 p-[40px] text-white z-20">
              <h3 className="font-bold text-[18px] leading-[25px]">
                {d.title}
              </h3>
              <h5 className="text-[13px] font-normal">by {d.author}</h5>
              <div className="w-full h-[1px] bg-white/25" />
              <ArrowButton variant={"light"} title={"read story"} />
            </div>
            <div
              className="w-full h-[6px] absolute bottom-0 z-30 hidden lg:group-hover:flex duration-200"
              style={{
                background:
                  "linear-gradient(27deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%)",
              }}
            />
          </article>
        );
      })} */}
    </section>
  );
};

export default ImageCollection;
