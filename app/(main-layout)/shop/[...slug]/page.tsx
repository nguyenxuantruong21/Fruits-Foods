import Category from "./_components/category";
import Product from "./_components/product";

const CategoryProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  if (slug.length > 1) {
    return <Product />;
  }
  return <Category />;
};

export default CategoryProductPage;
