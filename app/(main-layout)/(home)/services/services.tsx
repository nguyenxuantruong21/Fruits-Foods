import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import servie01 from "./images/featur-1.jpg";
import servie02 from "./images/featur-3.jpg";
import servie03 from "./images/featur-2.jpg";
import { cn } from "@/lib/utils";

const Services = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div
          className={cn(
            "sm:grid-cols-2 lg:grid-cols-3 grid gap-10",
            "grid-cols-1"
          )}
        >
          <Card className="rounded-2xl border-[1px] border-secondaryColor">
            <CardContent>
              <Link href={"#"}>
                <Image src={servie01} alt="Service 1" />
              </Link>
            </CardContent>
            <CardFooter
              className={cn("bg-secondaryColor py-20 relative rounded-b-2xl")}
            >
              <div
                className={cn(
                  "bg-primaryColor w-[60%] mx-auto rounded-[10px] absolute top-0 left-0 right-0 transform -translate-y-1/2 text-center",
                  "flex flex-col gap-8",
                  "px-4 py-2 xl:px-20 xl:py-14"
                )}
              >
                <h2 className="text-[2rem] font-[600] text-white">
                  Fresh Apples
                </h2>
                <span className="text-[2.8rem] font-[600] text-[rgb(69,89,91)]">
                  20% OFF
                </span>
              </div>
            </CardFooter>
          </Card>
          <Card className="rounded-2xl border-[1px] border-slate-700">
            <CardContent>
              <Link href={"#"}>
                <Image src={servie02} alt="Service 2" />
              </Link>
            </CardContent>
            <CardFooter className="bg-slate-700 py-20 relative rounded-b-2xl">
              <div
                className={cn(
                  "bg-white w-[60%] mx-auto rounded-[10px] absolute top-0 left-0 right-0 transform -translate-y-1/2 text-center",
                  "flex flex-col gap-8",
                  "px-4 py-2 xl:px-20 xl:py-14"
                )}
              >
                <h2 className="text-[2rem] font-[600] text-primaryColor">
                  Fresh Apples
                </h2>
                <span className="text-[2.8rem] font-[600] text-[rgb(69,89,91)]">
                  20% OFF
                </span>
              </div>
            </CardFooter>
          </Card>
          <Card className="rounded-2xl border-[1px] border-primaryColor">
            <CardContent>
              <Link href={"#"}>
                <Image src={servie03} alt="Service 3" />
              </Link>
            </CardContent>
            <CardFooter className="bg-primaryColor py-20 relative rounded-b-2xl">
              <div
                className={cn(
                  "bg-secondaryColor w-[60%] mx-auto rounded-[10px] absolute top-0 left-0 right-0 transform -translate-y-1/2 text-center",
                  "flex flex-col gap-8",
                  "px-4 py-2 xl:px-20 xl:py-14"
                )}
              >
                <h2 className="text-[2rem] font-[600] text-white">
                  Fresh Apples
                </h2>
                <span className="text-[2.8rem] font-[600] text-[rgb(69,89,91)]">
                  20% OFF
                </span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
