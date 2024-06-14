"use client";

import { animated, useSpring } from "@react-spring/web";
import { ReactNode, useEffect, useRef, useState } from "react";

const AnimatedHeader = ({ children }: { children: ReactNode }) => {
  const [scrollY, setScrollY] = useState(0);
  const prevY = useRef(0);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const totalScrollableHeight = scrollHeight - clientHeight;
    const currentScrollProgress = (scrollTop / totalScrollableHeight) * 100;

    prevY.current = scrollY;
    setScrollY(currentScrollProgress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const props = useSpring({
    transform:
      scrollY > prevY.current ? "translate(0%, -100%)" : "translate(0%, 0%)",
    config: {
      mass: 5,
      friction: 120,
      tension: 120,
      duration: 200,
    },
  });

  return (
    <animated.div style={{ ...props }} className="sticky top-0 z-50 w-full">
      {children}
    </animated.div>
  );
};

export default AnimatedHeader;
