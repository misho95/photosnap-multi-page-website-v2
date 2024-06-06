import Image from "next/image";
import ArrowButton from "../../arrow-button";

const CreateAndShare = () => {
  return (
    <section className="w-full aspect-[1.1815] lg:aspect-[2.215] hidden sm:flex relative">
      <div className="w-[64.45%] lg:w-[42.36%] bg-black text-white flex justify-center items-center flex-shrink-0">
        <div className="max-w-[387px] flex flex-col gap-[21px] justify-center items-start">
          <h1 className="text-[40px]  font-bold leading-[48px] tracking-[4.167px] uppercase ">
            Create and share your photo stories.
          </h1>
          <p className="text-[15px] font-[400] leading-[25px] opacity-60 ">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <ArrowButton variant="light" title="get an invite" />
        </div>
      </div>
      <>
        <Image
          src="/home/tablet/create-and-share.jpg"
          alt="create-and-share"
          width={830}
          height={650}
          className="block lg:hidden w-[35.55%] object-cover object-center"
        />
        <Image
          src="/home/desktop/create-and-share.jpg"
          alt="create-and-share"
          width={830}
          height={650}
          className="hidden lg:block w-[57.64%]  object-cover object-center"
        />
      </>

      <div
        className="w-[6px] h-[46.77%] absolute left-0 top-1/2 -translate-y-1/2"
        style={{
          background:
            "linear-gradient(27deg, #FFC593 0%, #BC7198 41.67%, #5A77FF 83.33%)",
        }}
      />
    </section>
  );
};

export default CreateAndShare;
