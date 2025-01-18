import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="holder p-2 h-[50px] flex items-center justify-between">
      <span>logo</span>
      <NavLinks />
      <div>
        <button>ثبت نام</button>
      </div>
    </div>
  );
};

export default Header;
