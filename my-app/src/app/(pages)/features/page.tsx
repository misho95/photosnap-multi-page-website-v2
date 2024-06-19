import BetaFooter from "@/app/components/beta-footer";
import Features from "@/app/components/home/features";
import PostMain from "@/app/components/home/post-main";

const FeaturesPage = () => {
  return (
    <>
      <PostMain
        title={"FEATURES"}
        text={
          "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        }
        button={""}
        imgs={[
          { type: "desktop", url: "/features/desktop/hero.jpg" },
          { type: "tablet", url: "/features/tablet/hero.jpg" },
          { type: "mobile", url: "/features/mobile/hero.jpg" },
        ]}
        color={"black"}
        side={"left"}
        sideColor
      />
      <Features full />
      <BetaFooter />
    </>
  );
};

export default FeaturesPage;
