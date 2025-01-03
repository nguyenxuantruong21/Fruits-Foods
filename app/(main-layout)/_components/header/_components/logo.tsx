import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <h1 className="text-primaryColor text-[4rem] font-bold">
        <Link href="/" className="hover:text-primaryColor">
          Fruitables
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
