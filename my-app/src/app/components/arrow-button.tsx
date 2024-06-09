import clsx from "clsx";
import ArrowSVG from "/public/shared/desktop/arrow.svg";

type PropsType = {
  variant: "dark" | "light";
  title: string;
};

const ArrowButton = ({ variant, title }: PropsType) => {
  return (
    <button
      className={clsx(
        " flex pl-[2px] justify-between items-center gap-[16px] flex-shrink-0 uppercase active:underline sm:hover:underline w-full",
        {
          "text-white fill-white": variant === "light",
          "text-black": variant === "dark",
        }
      )}
    >
      <span className="text-xs font-bold tracking-[2px]">{title}</span>

      <ArrowSVG stroke={variant === "light" ? "white" : "black"} />
    </button>
  );
};

export default ArrowButton;
