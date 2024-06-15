"use client";

import { animated, useInView, useTrail } from "@react-spring/web";
import ImageCollectionArticle from "./image-collection-article";
import { images } from "@/data/image-collections";

const ImageCollection = () => {
  const [ref, inView] = useInView();

  const trails = useTrail(4, {
    scale: inView ? 1 : 0,
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
          <animated.div style={props}>
            <ImageCollectionArticle
              key={i}
              img={images[i].img}
              title={images[i].title}
              author={images[i].author}
            />
          </animated.div>
        );
      })}
    </section>
  );
};

export default ImageCollection;
