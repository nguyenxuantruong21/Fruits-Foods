import ProductCategory from "./_components/product-category";
import ProductDetail from "./_components/product-detail";

const CategoryProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  if (slug.length > 1) {
    return <ProductDetail slug={slug[1]} />;
  }
  return <ProductCategory slug={slug[0]} />;
};

export default CategoryProductPage;
