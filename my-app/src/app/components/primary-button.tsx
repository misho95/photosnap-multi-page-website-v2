import { clsx } from "clsx";

type PropsType = {
  variant: "dark" | "light";
  title: string;
};

const PrimaryButton = ({ variant, title }: PropsType) => {
  return (
    <button
      className={clsx(
        "px-[24px] py-[12px] text-[12px] tracking-[2px] font-bold sm:hover:bg-[#DFDFDF] sm:hover:text-[#000000] active:bg-[#DFDFDF] active:text-[#000000] uppercase",
        {
          "bg-[#000000] text-[#ffffff] ": variant === "light",
          "bg-[#ffffff] text-[#000000] ": variant === "dark",
        }
      )}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
