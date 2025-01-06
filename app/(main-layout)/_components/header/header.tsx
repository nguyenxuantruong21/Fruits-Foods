"use client";

import { useEffect, useState } from "react";
import Account from "./_components/account";
import Logo from "./_components/logo";
import Menu from "./_components/menu";
import Topbar from "./_components/topbar";
import { cn } from "@/lib/utils";
import MobileMenu from "./_components/mobile-menu";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div
        className={cn(
          "transition-all duration-300 ease-in-out ",
          "hidden lg:block",
          isScroll
            ? "absolute top-0 left-0 w-full -translate-y-full opacity-0"
            : "translate-y-0 opacity-100 "
        )}
      >
        <Topbar />
      </div>
      <div className={cn("flex items-center justify-between container py-3")}>
        <Logo />
        <Menu />
        <Account />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
