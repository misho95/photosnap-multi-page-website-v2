import Image from "next/image";

const CreateAndShare = () => {
  return (
    <section className="w-full h-[650px] flex">
      <div className="w-[42.36%] bg-black">text</div>

      <Image
        src="/home/desktop/create-and-share.jpg"
        alt="create-and-share"
        width={500}
        height={500}
        className="w-[57.64%]  object-cover"
      />
    </section>
  );
};

export default CreateAndShare;
