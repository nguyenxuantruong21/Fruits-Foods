import { Apple } from "lucide-react";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="mb-5 flex flex-col gap-3">
      <h3 className="text-[2.4rem] font-[600]">Categories</h3>
      <ul className="mt-5 flex flex-col gap-3">
        <li>
          <Link href={"#"} className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <Apple size={16} fill="#81c408" /> Apples
            </div>
            <span>(1)</span>
          </Link>
        </li>
        <li>
          <Link href={"#"} className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <Apple size={16} fill="#81c408" /> Oranges
            </div>
            <span>(7)</span>
          </Link>
        </li>
        <li>
          <Link href={"#"} className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <Apple size={16} fill="#81c408" /> Banana
            </div>
            <span>(9)</span>
          </Link>
        </li>
        <li>
          <Link href={"#"} className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <Apple size={16} fill="#81c408" /> Strawbery
            </div>
            <span>(5)</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
