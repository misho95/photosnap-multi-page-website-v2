import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./primary-button";

const navigation = [
  {
    title: "stories",
    href: "/",
  },
  {
    title: "features",
    href: "/",
  },
  {
    title: "pricing",
    href: "/",
  },
];

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between h-[72px] bg-white px-[24px] sm:px-[40px] lg:px-[165px] py-[28px] sm:py-[16px]">
      <Link href="/">
        <Image
          src={"/logo-black.svg"}
          alt="logo"
          width={170}
          height={16}
          className="w-[170px] h-[16px]"
        />
      </Link>

      <nav className="hidden sm:flex gap-[37px]">
        {navigation.map((l, i) => {
          return (
            <Link
              key={i}
              href={l.href}
              className="text-[#000] active:opacity-30 text-xs font-bold uppercase"
            >
              {l.title}
            </Link>
          );
        })}
      </nav>
      <span className="hidden sm:flex">
        <PrimaryButton variant="light" title="get an invite" />
      </span>
    </header>
  );
};

export default Header;
