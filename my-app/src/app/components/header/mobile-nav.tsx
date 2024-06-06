"use client";

import { useEffect, useState } from "react";
import MobileNavDrop from "./mobile-nav-drop";
import Image from "next/image";

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add("overflow-hidden");
      window.scroll(0, 0);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navOpen]);

  useEffect(() => {
    const handleResize = () => {
      setNavOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => setNavOpen(!navOpen)}
        className="size-5 flex sm:hidden"
      >
        {navOpen ? (
          <Image
            src={"/shared/mobile/close.svg"}
            alt="open"
            width={20}
            height={6}
            className="w-auto h-auto"
          />
        ) : (
          <Image
            src={"/shared/mobile/menu.svg"}
            alt="open"
            width={16}
            height={15}
            className="w-auto h-auto"
          />
        )}
      </button>
      {navOpen && <MobileNavDrop />}
    </>
  );
};

export default MobileNav;
