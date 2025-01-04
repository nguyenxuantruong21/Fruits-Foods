"use client";

import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", handleScrollToTop);
    };
  });

  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className={cn(
        "p-4 bg-primaryColor fixed bottom-14 right-14 rounded-full cursor-pointer border-2 border-white",
        "hover:border-secondaryColor",
        isScroll ? "block" : "hidden"
      )}
    >
      <ArrowUp className="text-black font-bold" size={25} />
    </button>
  );
};

export default ScrollToTopButton;
