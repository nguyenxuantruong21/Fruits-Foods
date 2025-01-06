import { Button } from "@/components/ui/button";
import Image from "next/image";
import image from "./images/baner-1.png";
import { cn } from "@/lib/utils";

const CallToAction = () => {
  return (
    <section className="bg-secondaryColor h-full lg:h-[500px] my-28">
      <div className="container h-full">
        <div
          className={cn(
            "lg:flex-row h-full py-6",
            "flex flex-col items-center justify-center gap-7"
          )}
        >
          <div className="h-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-white text-[3.5rem] lg:text-[6.4rem] font-[700] lg:leading-[7.7rem] text-center lg:text-left">
              Fresh Exotic Fruits
            </h2>
            <h2 className="text-[3.5rem] lg:text-[6.4rem] lg:leading-[7.7rem] text-center lg:text-left">
              in Our Store
            </h2>
            <p className="py-10 text-center lg:text-left">
              The generated Lorem Ipsum is therefore always free from repetition
              injected humour, or non-characteristic words etc.
            </p>
            <div className="mx-auto">
              <Button
                variant="outline"
                size={null}
                className={cn(
                  "text-[1.6rem] rounded-[999px] bg-transparent text-[rgb(69,89,91)] font-[600] border-[1.6px] hover:bg-primaryColor",
                  "lg:px-[48px] lg:py-[16px] px-20 py-2"
                )}
              >
                Buy
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 h-full flex items-center justify-center">
            <div className="relative h-[90%]">
              <div className="absolute top-0 left-0 bg-white rounded-[50%] w-[140px] h-[140px] flex justify-center items-center">
                <span className="text-[10rem] font-[600]">1</span>
                <span className="font-[600]">
                  <span className="text-[3.2rem]">50$</span>
                  <br />
                  <span className="text-[2.4rem]">kg</span>
                </span>
              </div>
              <Image
                src={image}
                alt="Banner"
                className="h-[80%] w-auto inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
