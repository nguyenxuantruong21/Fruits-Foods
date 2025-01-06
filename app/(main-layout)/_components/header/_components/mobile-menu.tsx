"use client";

import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AlignJustify, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleOpen = () => {
    return setIsOpen(!isOpen);
  };
  return (
    <Sheet open={isOpen} onOpenChange={handleToggleOpen}>
      <SheetTrigger asChild>
        <div className="flex items-center justify-center lg:hidden">
          <AlignJustify size={30} className="" />
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="w-[380px]">
        <SheetTitle className="w-full text-4xl text-center text-primaryColor font-bold">
          Fruitables
        </SheetTitle>
        <div className="w-full h-full flex flex-col gap-4 py-10">
          <button
            className={cn(
              "w-full px-6 py-4 bg-primaryColor rounded-xl cursor-pointer border-[1px] shadow-lg text-white font-[500]",
              "hover:bg-slate-300 border-none hover:bg-secondaryColor"
            )}
          >
            Home
          </button>
          <button
            className={cn(
              "w-full px-6 py-4 bg-primaryColor rounded-xl cursor-pointer border-[1px] shadow-lg text-white font-[500]",
              "hover:bg-slate-300 border-none hover:bg-secondaryColor"
            )}
          >
            Shop
          </button>
          <button
            className={cn(
              "w-full px-6 py-4 bg-primaryColor rounded-xl cursor-pointer border-[1px] shadow-lg text-white font-[500]",
              "hover:bg-slate-300 border-none hover:bg-secondaryColor"
            )}
          >
            Shop Detail
          </button>
          <button
            className={cn(
              "w-full px-6 py-4 bg-primaryColor rounded-xl cursor-pointer border-[1px] shadow-lg text-white font-[500]",
              "hover:bg-slate-300 border-none hover:bg-secondaryColor"
            )}
          >
            Pages
          </button>
          <button
            className={cn(
              "w-full px-6 py-4 bg-primaryColor rounded-xl cursor-pointer border-[1px] shadow-lg text-white font-[500]",
              "hover:bg-slate-300 border-none hover:bg-secondaryColor"
            )}
          >
            Contact
          </button>
          <button
            className={cn(
              "w-full px-6 py-4 bg-slate-700 rounded-xl cursor-pointer border-[1px] shadow-lg text-white font-[500]",
              "flex items-center justify-center gap-4 "
            )}
          >
            <User className="font-bold" />
            <span>Xuan Truong</span>
          </button>
          <div className="w-full mb-0 mt-auto flex flex-col items-center">
            <Separator />
            <Link href={"/"}> 123 Street, New York</Link>
            <Separator />
            <Link href={"/"}> Email@Example.com</Link>
            <Separator />
            <Link href={"/"}> Privacy Policy</Link>
            <Separator />
            <Link href={"/"}> Terms of Use</Link>
            <Separator />
            <Link href={"/"}>Sales and Refunds</Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
