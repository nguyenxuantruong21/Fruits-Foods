import { Users } from "lucide-react";

const Fact = () => {
  return (
    <section className="py-28">
      <div className="container bg-[#f4f6f8] rounded-[10px] p-[30px] ">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
              quality of service
            </span>
            <span className="text-[#45595b] font-[600] text-[4rem]">99%</span>
          </div>
          <div className="bg-white p-[50px] rounded-[10px] flex flex-col items-center gap-4">
            <Users className="w-[50px] h-[50px] stroke-secondaryColor" />
            <span className="uppercase text-primaryColor font-[600] text-4xl py-5 text-center">
              quality certificates
            </span>
            <span className="text-[#45595b] font-[600] text-[4rem]">33</span>
          </div>
          <div className="bg-white p-[50px] rounded-[10px] flex flex-col items-center gap-4">
            <Users className="w-[50px] h-[50px] stroke-secondaryColor" />
            <span className="uppercase text-primaryColor font-[600] text-4xl py-5 text-center">
              Available Products
            </span>
            <span className="text-[#45595b] font-[600] text-[4rem]">1963</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fact;
