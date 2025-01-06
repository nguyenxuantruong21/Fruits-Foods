import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Quote } from "lucide-react";

const TestimonialList = () => {
  return (
    <div className="py-10 lg:py-28 px-10">
      <div className="container flex flex-col gap-14">
        <div className="mb-10 flex flex-col gap-6 lg:gap-14">
          <h2 className="text-primaryColor text-[2rem] sm:text-[2.4rem] font-[600] text-center lg:text-left">
            Our Testimonial
          </h2>
          <h3 className="text-[rgb(69,89,91)] text-[2.8rem] sm:text-[4.8rem] font-[800] text-center lg:text-left">
            Our Client Saying!
          </h3>
        </div>
        <Carousel>
          <CarouselContent className="gap-5">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <CarouselItem
                  key={index}
                  className="bg-[#f4f6f8] p-6 sm:p-10 rounded-2xl flex flex-col gap-6 sm:gap-10"
                >
                  <p className="text-[1.6rem]">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry standard dummy text ever since the 1500s,
                  </p>
                  <Separator className="my-5" />
                  <div className="flex flex-wrap items-center gap-4 sm:gap-0 sm:-mx-5">
                    <div className="w-full sm:w-1/5 px-0 sm:px-5">
                      <Image
                        src={`/images/testimonial-1.jpg`}
                        alt={`Testimonial 0${index + 1}`}
                        width={500}
                        height={500}
                        style={{ maxWidth: "100%", height: "auto" }}
                        className="rounded-[10px]"
                      />
                    </div>
                    <div className="w-full sm:w-[70%] px-0 sm:px-5">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Blanditiis optio nesciunt, aliquam ab ad cum. Quo et,
                      ipsum beatae id magnam ducimus vitae iste pariatur soluta
                      enim! Aliquam, distinctio doloribus.
                    </div>
                    <div className="w-auto sm:w-[10%] px-0 sm:px-5">
                      <Quote
                        size={30}
                        className="stroke-secondaryColor mx-auto sm:mx-0"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialList;
