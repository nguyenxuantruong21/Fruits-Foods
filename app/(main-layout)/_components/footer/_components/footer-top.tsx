import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
export default function FooterTop() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <Link href={"/"} className="flex flex-col gap-12">
            <span className="block text-[4rem] font-[600]">Fruitables</span>
            <span className="text-secondaryColor">Fresh products</span>
          </Link>
        </div>
        <div className="flex w-[50%] bg-white rounded-full">
          <Input
            placeholder="Your email"
            className="border-0 bg-white py-10 px-8 lg:text-[1.6rem] rounded-full rounded-tr-none rounded-br-none"
          />
          <Button
            size={null}
            className="py-5 px-8 lg:text-[1.6rem] bg-primaryColor text-white rounded-full"
          >
            Subscribe Now
          </Button>
        </div>
        <div className="flex gap-3">
          <Link
            href={""}
            className={cn(
              "border-[1px] border-secondaryColor p-4 rounded-full group",
              "hover:bg-secondaryColor"
            )}
          >
            <Twitter
              size={20}
              className="text-secondaryColor group-hover:text-black "
            />
          </Link>
          <Link
            href={""}
            className={cn(
              "border-[1px] border-secondaryColor p-4 rounded-full group",
              "hover:bg-secondaryColor"
            )}
          >
            <Facebook
              size={20}
              className="text-secondaryColor group-hover:text-black"
            />
          </Link>
          <Link
            href={""}
            className={cn(
              "border-[1px] border-secondaryColor p-4 rounded-full group",
              "hover:bg-secondaryColor"
            )}
          >
            <Youtube
              size={20}
              className="text-secondaryColor group-hover:text-black"
            />
          </Link>
          <Link
            href={""}
            className={cn(
              "border-[1px] border-secondaryColor p-4 rounded-full group",
              "hover:bg-secondaryColor"
            )}
          >
            <Linkedin
              size={20}
              className="text-secondaryColor group-hover:text-black "
            />
          </Link>
        </div>
      </div>
      <Separator className="bg-secondaryColor" />
    </div>
  );
}
