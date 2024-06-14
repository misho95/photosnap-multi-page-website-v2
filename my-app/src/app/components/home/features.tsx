"use client";

import { animated, useInView } from "@react-spring/web";
import clsx from "clsx";
import Image from "next/image";

const Features = ({ full = false }: { full?: boolean }) => {
  const featuresData = [
    {
      img: "/features/desktop/responsive.svg",
      title: "100% Responsive",
      text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    },
    {
      img: "/features/desktop/no-limit.svg",
      title: "No Photo Upload Limit",
      text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    },
    {
      img: "/features/desktop/embed.svg",
      title: "Available to Embed",
      text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
    },
    {
      img: "/features/desktop/custom-domain.svg",
      title: "Custom Domain",
      text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    },
    {
      img: "/features/desktop/boost-exposure.svg",
      title: "Boost Your Exposure",
      text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    },
    {
      img: "/features/desktop/drag-drop.svg",
      title: "Drag & Drop Image",
      text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    },
  ];

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
