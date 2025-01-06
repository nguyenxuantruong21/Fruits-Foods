import { cn } from "@/lib/utils";
import BestSellerProduct from "../../_components/best-seller-product/best-seller-product";
import products from "@/app/data/products_best_seller.json";

const BestSeller = () => {
  return (
    <section className="lg:py-28">
      <div className="container flex flex-col gap-12">
        <div className="mb-10 text-center lg:w-1/2 mx-auto flex flex-col lg:gap-16">
          <h2 className="font-[800] text-[5.6rem] text-center">
            Bestseller Products
          </h2>
          <p>
            Latin words, combined with a handful of model sentence structures,
            to generate Lorem Ipsum which looks reasonable.
          </p>
        </div>
        <div
          className={cn(
            "grid gap-10",
            "grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          )}
        >
          {products.map((product) => (
            <BestSellerProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
