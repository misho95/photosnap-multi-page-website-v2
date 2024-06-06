import PostMain from "../components/home/post-main";

export default function Home() {
  return (
    <main>
      <PostMain
        title="Create and share your photo stories."
        text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        button="GET AN INVITE"
        imgs={[
          { type: "desktop", url: "/home/desktop/create-and-share.jpg" },
          { type: "tablet", url: "/home/tablet/create-and-share.jpg" },
          { type: "mobile", url: "/home/mobile/create-and-share.jpg" },
        ]}
        color="black"
        side="left"
        sideColor
      />
      <PostMain
        title="BEAUTIFUL STORIES
        EVERY TIME"
        text="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        button="VIEW THE STORIES"
        imgs={[
          { type: "desktop", url: "/home/desktop/beautiful-stories.jpg" },
          { type: "tablet", url: "/home/tablet/beautiful-stories.jpg" },
          { type: "mobile", url: "/home/mobile/beautiful-stories.jpg" },
        ]}
        color="white"
        side="right"
        sideColor={false}
      />
      <PostMain
        title="DESIGNED FOR EVERYONE"
        text="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
        button="VIEW THE STORIES"
        imgs={[
          { type: "desktop", url: "/home/desktop/designed-for-everyone.jpg" },
          { type: "tablet", url: "/home/tablet/designed-for-everyone.jpg" },
          { type: "mobile", url: "/home/mobile/designed-for-everyone.jpg" },
        ]}
        color="white"
        side="left"
        sideColor={false}
      />
      <div className="bg-white py-20">space</div>
    </main>
  );
}
