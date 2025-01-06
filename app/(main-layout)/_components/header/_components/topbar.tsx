import { cn } from "@/lib/utils";
import { Mail, MapPin } from "lucide-react";

const Topbar = () => {
  return (
    <div
      className={cn(
        "container flex justify-between bg-primaryColor p-[20px] text-white items-center",
        "rounded-tl-[230px] rounded-br-[230px] rounded-tr-[100px] rounded-bl-[100px]"
      )}
    >
      <ul className="flex gap-4 text-[1.5rem]">
        <li>
          <a href="#" className="text-white flex items-center">
            <MapPin size={17} className="text-secondaryColor" />
            123 Street, New York
          </a>
        </li>
        <li>
          <a href="#" className="text-white flex items-center">
            <Mail size={17} className="text-secondaryColor" />
            Email@Example.com
          </a>
        </li>
      </ul>
      <ul className="flex gap-3 text-[1.4rem]">
        <li>
          <a href="#" className="text-white hover:text-white">
            <span className="me-2 hover:text-secondaryColor">
              Privacy Policy
            </span>
            <span>/</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-white">
            <span className="me-2 hover:text-secondaryColor">Terms of Use</span>
            <span>/</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-white">
            <span className="hover:text-secondaryColor">Sales and Refunds</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
