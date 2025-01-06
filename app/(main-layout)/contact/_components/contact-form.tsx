import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Mail, MapPinIcon, Phone } from "lucide-react";

const ContactForm = () => {
  return (
    <div
      className={cn(
        "sm:flex-row items-start justify-center w-full gap-10",
        "flex flex-col"
      )}
    >
      <div className="w-full sm:w-[60%] flex flex-col gap-8">
        <Input
          placeholder="Your email"
          className="border-0 bg-white py-10 px-8 lg:text-[1.6rem]  rounded-xl"
        />
        <Input
          placeholder="Your name"
          className="border-0 bg-white py-10 px-8 lg:text-[1.6rem] rounded-xl"
        />
        <Textarea
          placeholder="Your message"
          className="border-0 bg-white py-10 px-8 lg:text-[1.6rem] rounded-xl h-60"
        />
        <Button
          className={cn(
            "text-primaryColor py-10 px-8 text-[1.6rem] bg-white border-[1px] rounded-xl border-secondaryColor",
            "hover:bg-secondaryColor hover:text-white transition-all duration-150"
          )}
        >
          Submit
        </Button>
      </div>
      <div className="w-full sm:w-[40%] flex flex-col gap-5">
        <div className="flex gap-5 p-5 rounded-xl bg-white">
          <MapPinIcon size={40} className="text-primaryColor" />
          <div className="flex flex-col gap-3">
            <span className="text-4xl font-bold">Address</span>
            <span className="italic">123 Street New York.USA</span>
          </div>
        </div>
        <div className="flex gap-5 p-5 rounded-xl bg-white">
          <Mail size={40} className="text-primaryColor" />
          <div className="flex flex-col gap-3">
            <span className="text-4xl font-bold">Mail Us</span>
            <span className="italic">info@example.com</span>
          </div>
        </div>
        <div className="flex gap-5 p-5 rounded-xl bg-white">
          <Phone size={40} className="text-primaryColor" />
          <div className="flex flex-col gap-3">
            <span className="text-4xl font-bold">Telephone</span>
            <span className="italic">(+012) 3456 7890</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
