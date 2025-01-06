import PageTitle from "../_components/page-title/page-title";
import Cart from "./_components/cart";

const CartPage = () => {
  return (
    <div className="w-full">
      <PageTitle pageName="Giỏ hàng" />
      <div className="container py-20 w-full">
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;
