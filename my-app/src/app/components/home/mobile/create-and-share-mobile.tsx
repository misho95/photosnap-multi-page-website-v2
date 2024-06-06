import Image from "next/image";
import ArrowButton from "../../arrow-button";

const CreateAndShareMobile = () => {
  return (
    <section className="w-full flex flex-col sm:hidden relative">
      <Image
        src="/home/mobile/create-and-share.jpg"
        alt="create-and-share"
        width={375}
        height={294}
        className="w-full object-cover object-center"
      />
      <div className="bg-black text-white flex justify-center items-center flex-shrink-0 relative min-h-[419px]">
        <div className="max-w-[318px] flex flex-col gap-[21px] justify-center items-start">
          <h1 className="text-[32px]  font-bold leading-[40px] tracking-[3.333px] uppercase ">
            Create and share your photo stories.
          </h1>
          <p className="text-[15px] font-[400] leading-[25px] opacity-60 ">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <ArrowButton variant="light" title="get an invite" />
        </div>

        <div
          className="w-[128px] h-[6px] absolute left-[32px] top-0"
          style={{
            background:
              "linear-gradient(27deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%)",
          }}
        />
      </div>
    </section>
  );
};

export default CreateAndShareMobile;
