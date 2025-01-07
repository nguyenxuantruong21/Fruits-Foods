import { cn } from "@/lib/utils";
import PageTitle from "../_components/page-title/page-title";
import Pagination from "../_components/pagination/pagination";
import Product from "../_components/product/product";
import ShopSideBar from "./_components/shop-sidebar/shop-sidebar";
import products from "@/app/data/products.json";
import ScrollToTopButton from "../_components/scroll-to-top-button/scroll-to-top-button";

const ShopPage = () => {
  return (
    <div>
      <PageTitle pageName="Sản phẩm" />
      <div className="container py-20">
        <div className={cn("md:flex-row", "flex flex-col gap-10")}>
          <div className="md:w-[25%] px-10">
            <ShopSideBar />
          </div>
          <div className="md:w-[75%] px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
            <Pagination
              pageSize={10}
              page={1}
              isPushParams={true}
              prevBtn={true}
              nextBtn={true}
            />
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default ShopPage;
