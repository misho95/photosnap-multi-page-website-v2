import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../primary-button";
import MobileNav from "./mobile-nav";
import { navigation } from "@/data/navigation-links";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between h-[72px] bg-white px-[24px] sm:px-[40px] lg:px-[165px] py-[28px] sm:py-[16px] relative">
      <Link href="/">
        <Image
          src={"/logo-black.svg"}
          alt="logo"
          width={170}
          height={16}
          className="w-[170px] h-[16px]"
          priority
        />
      </Link>

      <nav className="hidden sm:flex gap-[37px] text-[#000] text-xs font-bold uppercase">
        {navigation.map((l, i) => {
          return (
            <Link key={i} href={l.href} className=" active:opacity-30">
              {l.title}
            </Link>
          );
        })}
      </nav>
      <span className="hidden sm:flex">
        <PrimaryButton variant="light" title="get an invite" />
      </span>
      <MobileNav />
    </header>
  );
};

export default Header;
