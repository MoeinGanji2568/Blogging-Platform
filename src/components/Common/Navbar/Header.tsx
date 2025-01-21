import { useState } from "react";
import Drawer from "../../ui/Drawer";
import NavLinks from "./NavLinks";
import ButtonIcon from "../../ui/ButtonIcon";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";

const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  return (
    <div className="holder p-2 h-[50px] flex items-center justify-between">
      <span>logo</span>
      <NavLinks />
      <div>
        <ButtonIcon
          variant="outline"
          className="block md:hidden border-none"
          onClick={() => setIsOpenDrawer(!isOpenDrawer)}
        >
          {isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
        </ButtonIcon>
        <Link to={"/auth/sign-up"} className="hidden md:block">
          ثبت نام
        </Link>
      </div>
      <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
        <SidebarMenu />
      </Drawer>
    </div>
  );
};

export default Header;
