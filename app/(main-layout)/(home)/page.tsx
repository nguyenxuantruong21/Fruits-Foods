import BestSeller from "./best-seller/best-seller";
import CallToAction from "./call-to-action/call-to-action";
import Fact from "./fact/fact";
import Feature from "./feature/feature";
import Hero from "./hero/hero";
import Products from "./products/products";
import Services from "./services/services";
import Testimonials from "./testimonials/testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Products />
      <Services />
      <CallToAction />
      <BestSeller />
      <Fact />
      <Testimonials />
    </>
  );
};

export default HomePage;
