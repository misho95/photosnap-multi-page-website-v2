"use client";

import { useState } from "react";
import MobileNavDrop from "./mobile-nav-drop";
import Image from "next/image";

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <button onClick={() => setNavOpen(!navOpen)} className="size-5">
        {navOpen ? (
          <Image
            src={"/menu-close.svg"}
            alt="open"
            width={20}
            height={20}
            className="w-auto h-auto"
          />
        ) : (
          <Image
            src={"/menu.svg"}
            alt="open"
            width={20}
            height={20}
            className="w-auto h-auto"
          />
        )}
      </button>
      {navOpen && <MobileNavDrop />}
    </>
  );
};

export default MobileNav;
