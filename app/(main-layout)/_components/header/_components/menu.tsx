const Menu = () => {
  return (
    <ul className="flex gap-10 text-[1.6rem]">
      <li>
        <a href="#" className="text-primaryColor hover:text-primaryColor">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="text-baseColor hover:text-primaryColor">
          Shop
        </a>
      </li>
      <li>
        <a href="#" className="text-baseColor hover:text-primaryColor">
          Shop Detail
        </a>
      </li>
      <li>
        <a href="#" className="text-baseColor hover:text-primaryColor">
          Pages
        </a>
      </li>
      <li>
        <a href="#" className="text-baseColor">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Menu;
