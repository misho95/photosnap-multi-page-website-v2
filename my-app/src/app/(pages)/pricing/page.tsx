import PostMain from "@/app/components/home/post-main";

const PricingPage = () => {
  return (
    <>
      <PostMain
        title={"PRICING"}
        text={
          "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        }
        button={""}
        imgs={[
          { type: "desktop", url: "/pricing/desktop/hero.jpg" },
          { type: "tablet", url: "/pricing/tablet/hero.jpg" },
          { type: "mobile", url: "/pricing/mobile/hero.jpg" },
        ]}
        color={"black"}
        side={"left"}
        sideColor
      />
    </>
  );
};

export default PricingPage;
