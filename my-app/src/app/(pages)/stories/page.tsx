import ImageCollectionArticle from "@/app/components/home/image-collection-article";
import StoriesHeaderMain from "@/app/components/stories/header-main";
import { images } from "@/data/image-collections";

const StoriesPage = () => {
  return (
    <>
      <StoriesHeaderMain />
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
