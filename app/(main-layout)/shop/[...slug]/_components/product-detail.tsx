import PageTitle from "@/app/(main-layout)/_components/page-title/page-title";
import ShopSideBar from "../../_components/shop-sidebar/shop-sidebar";
import ProductInfo from "./product-info";
import product from "@/app/data/product.json";
import productAttributes from "@/app/data/attribute_filter.json";

interface ProductDetailProps {
  slug: string;
}
const ProductDetail = ({ slug }: ProductDetailProps) => {
  return (
    <div>
      <PageTitle pageName={`${slug}`} />
      <div className="container py-20">
        <div className="md:flex-row flex flex-col-reverse">
          <div className="md:w-[75%] px-10">
            <ProductInfo attributes={productAttributes} product={product} />
          </div>
          <div className="w-full md:w-[25%] px-10">
            <ShopSideBar isFilter={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
