import ArrowButton from "@/app/components/arrow-button";
import ImageCollectionArticle from "@/app/components/home/image-collection-article";
import { images } from "@/data/image-collections";
import Image from "next/image";

const StoriesPage = () => {
  return (
    <>
      <section className="w-full bg-cover bg-center bg-no-repeat relative flex items-center ">
        <article className="absolute max-w-[387px] w-fit h-fit z-20 text-white mx-[36px] lg:mx-[112px] flex flex-col gap-[24px]">
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
        </article>
        <Image
          src={"/stories/desktop/moon-of-appalacia.jpg"}
          width={1440}
          height={650}
          alt="cover"
          className="aspect-[144:65] w-full object-cover"
        />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((d, i) => {
          return (
            <ImageCollectionArticle
              key={i}
              img={d.img}
              title={d.title}
              author={d.author}
              date={d.date}
            />
          );
        })}
      </section>
    </>
  );
};

export default StoriesPage;
