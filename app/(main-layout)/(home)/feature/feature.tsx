import { ArrowLeftRight, Car, Phone, ShieldCheck } from "lucide-react";

const Feature = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="flex gap-10">
          <div className="w-1/4 rounded-[10px] bg-[#f4f6f8] p-[24px]">
            <div
              className={`mx-auto relative w-[120px] h-[120px] rounded-[50%] bg-secondaryColor after:w-[35px] after:h-[35px] after:absolute after:-bottom-[10px] after:-left-[0] after:right-[0] after:transform after:rotate-45 after:bg-secondaryColor after:mx-auto`}
            >
              <Car
                size={60}
                className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <h3 className="text-center mt-10 text-[2rem] font-[600]">
              Free Shipping
            </h3>
            <p className="text-center mt-5 text-[1.6rem]">
              Free on order over $300
            </p>
          </div>
          <div className="w-1/4 rounded-[10px] bg-[#f4f6f8] p-[24px]">
            <div
              className={`mx-auto relative w-[120px] h-[120px] rounded-[50%] bg-secondaryColor after:w-[35px] after:h-[35px] after:absolute after:-bottom-[10px] after:-left-[0] after:right-[0] after:transform after:rotate-45 after:bg-secondaryColor after:mx-auto`}
            >
              <ShieldCheck
                size={60}
                className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <h3 className="text-center mt-10 text-[2rem] font-[600]">
              Security Payment
            </h3>
            <p className="text-center mt-5 text-[1.6rem]">
              100% security payment
            </p>
          </div>
          <div className="w-1/4 rounded-[10px] bg-[#f4f6f8] p-[24px]">
            <div
              className={`mx-auto relative w-[120px] h-[120px] rounded-[50%] bg-secondaryColor after:w-[35px] after:h-[35px] after:absolute after:-bottom-[10px] after:-left-[0] after:right-[0] after:transform after:rotate-45 after:bg-secondaryColor after:mx-auto`}
            >
              <ArrowLeftRight
                size={60}
                className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <h3 className="text-center mt-10 text-[2rem] font-[600]">
              30 Day Return
            </h3>
            <p className="text-center mt-5 text-[1.6rem]">
              30 day money guarantee
            </p>
          </div>
          <div className="w-1/4 rounded-[10px] bg-[#f4f6f8] p-[24px]">
            <div
              className={`mx-auto relative w-[120px] h-[120px] rounded-[50%] bg-secondaryColor after:w-[35px] after:h-[35px] after:absolute after:-bottom-[10px] after:-left-[0] after:right-[0] after:transform after:rotate-45 after:bg-secondaryColor after:mx-auto`}
            >
              <Phone
                size={60}
                className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <h3 className="text-center mt-10 text-[2rem] font-[600]">
              24/7 Support
            </h3>
            <p className="text-center mt-5 text-[1.6rem]">
              Support every time fast
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
