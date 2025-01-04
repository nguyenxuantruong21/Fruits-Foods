import PageTitle from "../_components/page-title/page-title";
import TestimonialList from "./_components/testimonial-list";

const TestimonialPage = () => {
  return (
    <div>
      <PageTitle pageName="Đánh giá khách hàng" />
      <div className="container py-20">
        <TestimonialList />
      </div>
    </div>
  );
};

export default TestimonialPage;
