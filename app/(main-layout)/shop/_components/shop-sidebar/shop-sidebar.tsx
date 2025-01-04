"use client";

import { useSearchParams } from "next/navigation";
import Categories from "../widgets/categories";
import ResetFilter from "../widgets/reset-filter";
import PriceFilter from "../widgets/price-filter";
import AttributeFilter from "../widgets/attributes-filter";
import sidebarImage from "../../images/banner-fruits.jpg";
import Image from "next/image";

const ShopSideBar = ({ isFilter = true }: { isFilter?: boolean }) => {
  const searchParams = useSearchParams();
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-[4rem] font-[600] mb-5">Fresh fruits</h2>
      <Categories />
      {isFilter && (
        <>
          {[...searchParams.keys()].length ? <ResetFilter /> : ""}
          <PriceFilter />
          <AttributeFilter />
        </>
      )}
      <div className="w-full h-full overflow-hidden object-cover rounded-xl">
        <Image
          src={sidebarImage}
          height={300}
          width={300}
          alt="sidebar_images"
        />
      </div>
    </div>
  );
};

export default ShopSideBar;
