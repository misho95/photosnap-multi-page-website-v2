import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import PrimaryButton from "../primary-button";
import { navigation } from "@/data/navigation-links";

const MobileNavDrop = () => {
  const [body, setBody] = useState<any>(null);

  useEffect(() => {
    setBody(document.body);
  }, []);

  if (!body) {
    return null;
  }

  return createPortal(
    <div className="fixed top-[71px] left-0 w-full h-screen bg-black/50 z-40 block sm:hidden ">
      <div className="flex flex-col gap-5 w-full bg-white p-[32px] ">
        <nav className="flex flex-col gap-5 items-center text-[#000] text-[15px] font-bold uppercase ">
          {navigation.map((l, i) => {
            return (
              <Link key={i} href={l.href} className="active:opacity-30">
                {l.title}
              </Link>
            );
          })}
        </nav>
        <div className="bg-black opacity-25 h-[1px] w-full" />
        <PrimaryButton variant="light" title="get an invite" />
      </div>
    </div>,
    body
  );
};

export default MobileNavDrop;
