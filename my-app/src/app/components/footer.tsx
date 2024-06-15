import Image from "next/image";
import Link from "next/link";
import FaceBookSVG from "/public/shared/desktop/facebook.svg";
import YouTubeSVG from "/public/shared/desktop/youtube.svg";
import TwitterSVG from "/public/shared/desktop/twitter.svg";
import PinterestSVG from "/public/shared/desktop/pinterest.svg";
import InstagramSVG from "/public/shared/desktop/instagram.svg";
import ArrowButton from "./arrow-button";
import { navigation } from "@/data/navigation-links";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col sm:flex-row items-center justify-between gap-10 sm:h-[284px] lg:h-[250px] bg-black text-white px-[33px] sm:px-[171px] py-[56px] sm:py-[64px] relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-[50px_121px] lg:gap-[85px_100px]">
        <Link href="/">
          <Image
            src={"/logo-white.svg"}
            alt="logo"
            width={170}
            height={16}
            className="w-[170px] h-[16px]"
          />
        </Link>
        <nav className="lg:row-span-2 uppercase flex flex-col sm:flex-row lg:flex-col gap-[35px] text-[12px] font-bold leading-[2px] items-center">
          <Link href="/" className=" active:opacity-30">
            home
          </Link>
          {navigation.map((l, i) => {
            return (
              <Link key={i} href={l.href} className=" active:opacity-30">
                {l.title}
              </Link>
            );
          })}
        </nav>
        <div className="flex gap-4">
          <FaceBookSVG className="fill-white hover:fill-[#63AFDB]" />
          <YouTubeSVG className="fill-white hover:fill-[#D3205A]" />
          <TwitterSVG className="fill-white hover:fill-[#65FFEB]" />
          <PinterestSVG className="fill-white hover:fill-[#F6C683]" />
          <InstagramSVG className="fill-white hover:fill-[#BC7198]" />
        </div>
      </div>
      <div className="h-full flex flex-col justify-between gap-5">
        <ArrowButton variant={"light"} title={"GET AN INVITE"} />
        <p className="text-[15px] opacity-50">
          Copyright 2019. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
