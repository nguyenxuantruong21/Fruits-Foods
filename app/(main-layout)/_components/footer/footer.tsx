import CopyRight from "./_components/copy-right";
import FooterInner from "./_components/footer-inner";
import FooterTop from "./_components/footer-top";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#45595b]">
      <div className="container">
        <FooterTop />
        <FooterInner />
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
