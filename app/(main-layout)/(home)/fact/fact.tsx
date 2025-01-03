import { Users } from "lucide-react";

const Fact = () => {
  return (
    <section className="py-28">
      <div className="container bg-[#f4f6f8] rounded-[10px] p-[30px] ">
        <div className="grid-cols-4 grid gap-10">
          <div className="bg-white p-[50px] rounded-[10px] flex flex-col items-center gap-4">
            <Users className="w-[50px] h-[50px] stroke-secondaryColor" />
            <span className="uppercase text-primaryColor font-[600] text-4xl py-5 text-center text-wrap">
              satisfied customers
            </span>
            <span className="text-[#45595b] font-[600] text-[4rem]">1963</span>
          </div>
          <div className="bg-white p-[50px] rounded-[10px] flex flex-col items-center gap-4">
            <Users className="w-[50px] h-[50px] stroke-secondaryColor" />
            <span className="uppercase text-primaryColor font-[600] text-4xl py-5 text-center">
              satisfied customers
            </span>
            <span className="text-[#45595b] font-[600] text-[4rem]">1963</span>
          </div>
          <div className="bg-white p-[50px] rounded-[10px] flex flex-col items-center gap-4">
            <Users className="w-[50px] h-[50px] stroke-secondaryColor" />
            <span className="uppercase text-primaryColor font-[600] text-4xl py-5 text-center">
              satisfied customers
            </span>
            <span className="text-[#45595b] font-[600] text-[4rem]">1963</span>
          </div>
          <div className="bg-white p-[50px] rounded-[10px] flex flex-col items-center gap-4">
            <Users className="w-[50px] h-[50px] stroke-secondaryColor" />
            <span className="uppercase text-primaryColor font-[600] text-4xl py-5 text-center">
              satisfied customers
            </span>
            <span className="text-[#45595b] font-[600] text-[4rem]">1963</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fact;
