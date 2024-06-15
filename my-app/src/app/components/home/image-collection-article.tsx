import Image from "next/image";
import ArrowButton from "../arrow-button";

type PropsType = {
  img: string;
  title: string;
  author: string;
};

const ImageCollectionArticle = ({ img, title, author }: PropsType) => {
  return (
    <article className="aspect-[0.72] w-full relative lg:hover:-translate-y-[30px] duration-200 group">
      <Image
        src={img}
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
        <h3 className="font-bold text-[18px] leading-[25px]">{title}</h3>
        <h5 className="text-[13px] font-normal">by {author}</h5>
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
};

export default ImageCollectionArticle;
