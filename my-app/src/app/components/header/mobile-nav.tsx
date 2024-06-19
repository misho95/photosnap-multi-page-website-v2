"use client";

import { useEffect, useState } from "react";
import MobileNavDrop from "./mobile-nav-drop";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
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

  useEffect(() => {
    if (currentPath !== pathname) {
      setCurrentPath(pathname);
      setNavOpen(false);
    }
  }, [pathname]);

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
