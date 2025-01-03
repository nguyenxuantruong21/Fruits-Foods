import Account from "./_components/account";
import Logo from "./_components/logo";
import Menu from "./_components/menu";
import Topbar from "./_components/topbar";

const Header = () => {
  return (
    <header className="container">
      <Topbar />
      <div className="flex justify-between items-center py-10">
        <Logo />
        <Menu />
        <Account />
      </div>
    </header>
  );
};

export default Header;
