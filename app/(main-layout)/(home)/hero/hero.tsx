import Image from "next/image";
import image from "./images/hero-img.jpg";
import hero1 from "./images/hero-img-1.png";
import hero2 from "./images/hero-img-2.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section
      className="h-[500px]"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container h-full">
        <div
          className={cn(
            "md:flex md:flex-row h-full",
            "flex flex-col gap-5 items-center justify-center"
          )}
        >
          <div
            className={cn(
              "w-full flex flex-col justify-center",
              "gap-4 md:gap-8 items-center md:items-start"
            )}
          >
            <span className="text-secondaryColor text-[2.4rem] font-[600]">
              100% Organic Foods
            </span>
            <span
              className={cn(
                "text-primaryColor font-[800]",
                "text-5xl md:text-8xl text-center"
              )}
            >
              Organic Veggies & Fruits Foods
            </span>
          </div>
          <div className="w-full flex aligns-center flex-col justify-center p-10">
            <Carousel className="rounded-[10px] bg-secondaryColor ">
              <CarouselContent>
                <CarouselItem className="relative">
                  <Image src={hero1} alt="Hero1" className="rounded-[10px]" />
                  <a
                    href="#"
                    className={`absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[2.4rem] bg-[linear-gradient(rgba(255,_181,_36,_0.7),_rgba(255,_181,_36,_0.7))] px-7 py-3 rounded-[10px] text-[#fff] hover:text-[#fff]`}
                  >
                    Fruites
                  </a>
                </CarouselItem>
                <CarouselItem className="relative">
                  <Image
                    src={hero2}
                    alt="Hero2"
                    style={{ width: "100%" }}
                    className="rounded-[10px]"
                  />
                  <a
                    href="#"
                    className={`absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[2.4rem] bg-[linear-gradient(rgba(255,_181,_36,_0.7),_rgba(255,_181,_36,_0.7))] px-7 py-3 rounded-[10px] text-[#fff] hover:text-[#fff]`}
                  >
                    Fruites
                  </a>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
