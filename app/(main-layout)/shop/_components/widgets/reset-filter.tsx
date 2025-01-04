import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const ResetFilter = () => {
  const pathname = usePathname();
  const handleReset = () => {
    window.location.href = pathname;
  };
  return (
    <Button
      variant="destructive"
      className="lg:text-[1.6rem] rounded-full"
      onClick={handleReset}
    >
      Xóa bộ lọc
    </Button>
  );
};

export default ResetFilter;
