import { getProductUrl } from "@/app/utils/url";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type ProductProps = {
  product: {
    id: number;
    image: string;
    slug: string;
    name: string;
    category: string;
    description: string;
    price: string;
  };
};

const Product = ({ product }: ProductProps) => {
  return (
    <Card
      className={cn(
        "rounded-[10px] border-[1px] border-secondaryColor",
        "hover:shadow-[0_8px_30px_4px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out"
      )}
    >
      <div className="p-0 relative overflow-hidden rounded-[10px] rounded-bl-none rounded-br-none">
        <Link href={getProductUrl(product.slug)}>
          <Image
            src={product.image}
            alt={product.name}
            className={cn(
              "rounded-[10px] rounded-bl-none rounded-br-none",
              "hover:scale-125 transition-all duration-300 ease-in"
            )}
            width={1000}
            height={1000}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Link>
        <span className="absolute bg-secondaryColor text-white top-[5px] left-[5px] px-[16px] py-[4px] rounded-[10px]">
          {product.category}
        </span>
      </div>
      <CardContent className="text-center">
        <h3 className="py-5">
          <Link
            href={getProductUrl(product.slug)}
            className="text-[rgb(69,89,91)] font-[600] text-[2.4rem] "
          >
            {product.name}
          </Link>
        </h3>
        <p>{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-[2rem] text-[#45595b] font-[600]">
          {product.price}
        </span>
        <Button
          variant={`outline`}
          className="text-[1.6rem] font-[600] text-primaryColor py-[6px] px-[16px] rounded-[999px] border-secondaryColor hover:bg-secondaryColor hover:text-white [&_svg]:size-6"
          size={null}
        >
          <ShoppingBag className="text-primaryColor" />
          Thêm vào giỏ
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Product;
