"use client";

import clsx from "clsx";
import ArrowSVG from "/public/shared/desktop/arrow.svg";
import { animated, useInView, useTrail } from "@react-spring/web";

type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  variant: "dark" | "light";
  title: string;
};

const ArrowButton = ({ variant, title, ...props }: ButtonProps) => {
  const [ref, inView] = useInView();
  const item = title.split("");

  const trails = useTrail(item.length, {
    y: inView ? 0 : 100,
    config: {
      mass: 5,
      friction: 120,
      tension: 120,
      duration: 50,
    },
  });

  return (
    <button
      ref={ref}
      {...props}
      className={clsx(
        " flex pl-[2px] justify-between items-center gap-[16px] flex-shrink-0 uppercase w-full border-b-[1px] border-transparent pb-[1px]",
        {
          "text-white fill-white active:border-white sm:hover:border-white":
            variant === "light",
          "text-black active:border-black sm:hover:border-black":
            variant === "dark",
        }
      )}
    >
      <span className="text-xs font-bold tracking-[2px] flex w-fit h-fit overflow-hidden">
        {trails.map((props, i) => (
          <animated.div key={i} style={props} className={"size-[12px]"}>
            {item[i]}
          </animated.div>
        ))}
      </span>

      <ArrowSVG stroke={variant === "light" ? "white" : "black"} />
    </button>
  );
};

export default ArrowButton;
