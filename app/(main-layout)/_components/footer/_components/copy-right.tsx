import { Copyright as Copy } from "lucide-react";

export default function Copyright() {
  return (
    <div className="flex justify-between mt-20 text-white">
      <div className="flex items-center gap-3">
        <Copy />
        <span className="text-primaryColor">Your Site Name</span>, All right
        reserved.
      </div>
      <div>
        Designed By <span className="text-primaryColor">TruongDev</span>
      </div>
    </div>
  );
}
