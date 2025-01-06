import PageTitle from "@/app/(main-layout)/_components/page-title/page-title";
import ShopSideBar from "../../_components/shop-sidebar/shop-sidebar";
import Product from "@/app/(main-layout)/_components/product/product";
import Pagination from "@/app/(main-layout)/_components/pagination/pagination";
import products from "@/app/data/products.json";

interface ProductCategoryProps {
  slug: string;
}

const ProductCategory = ({ slug }: ProductCategoryProps) => {
  return (
    <div>
      <PageTitle pageName={`Chuyên mục: ${slug}`} />
      <div className="container py-20">
        <div className="md:flex-row flex flex-col gap-10">
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
    </div>
  );
};

export default ProductCategory;
