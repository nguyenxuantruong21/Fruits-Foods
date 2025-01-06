import { cn } from "@/lib/utils";
import Link from "next/link";

const Menu = () => {
  return (
    <ul className={cn("flex gap-10 text-[1.6rem]", "hidden lg:flex")}>
      <li>
        <Link href={"/"} className="text-primaryColor hover:text-primaryColor">
          Home
        </Link>
      </li>
      <li>
        <Link href={"/shop"} className="text-baseColor hover:text-primaryColor">
          Shop
        </Link>
      </li>
      <li>
        <Link href="#" className="text-baseColor hover:text-primaryColor">
          Shop Detail
        </Link>
      </li>
      <li>
        <Link href="#" className="text-baseColor hover:text-primaryColor">
          Pages
        </Link>
      </li>
      <li>
        <Link href={"/contact"} className="text-baseColor">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
