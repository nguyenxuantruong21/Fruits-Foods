import { TriangleAlert } from "lucide-react";
import Footer from "./(main-layout)/_components/footer/footer";
import Header from "./(main-layout)/_components/header/header";
import { cn } from "@/lib/utils";
import PageTitle from "./(main-layout)/_components/page-title/page-title";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Header />
      <PageTitle pageName="404 Error" />
      <div className="flex flex-col gap-10 items-center justify-center py-32">
        <TriangleAlert size={60} className="text-secondaryColor" />
        <div className="flex flex-col gap-10 items-center justify-center">
          <span className="text-8xl font-bold">404</span>
          <span className="text-5xl font-bold">Page Not Found</span>
          <p className="text-3xl max-w-[600px] text-center">
            We’re sorry, the page you have looked for does not exist in our
            website! Maybe go to our home page or try to use a search?
          </p>
        </div>
        <Link
          href={"/"}
          className={cn(
            "w-fit px-8 py-4 border-[2px] border-secondaryColor rounded-full font-bold",
            "hover:bg-secondaryColor hover:text-white transition-all duration-200 ease-linear"
          )}
        >
          Go Back To Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
