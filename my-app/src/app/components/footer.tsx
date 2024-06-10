import Image from "next/image";
import Link from "next/link";
import { navigation } from "./header/header";
import FaceBookSVG from "/public/shared/desktop/facebook.svg";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-between h-[250px] bg-black text-white px-[171px] py-[64px] relative">
      <div className="grid grid-cols-2 grid-rows-2 gap-[85px_100px]">
        <Link href="/">
          <Image
            src={"/logo-white.svg"}
            alt="logo"
            width={170}
            height={16}
            className="w-[170px] h-[16px]"
          />
        </Link>
        <nav className="row-span-2 uppercase flex flex-col gap-[19px] text-[12px] font-bold leading-[2px]">
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
        <div>
          <FaceBookSVG />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
