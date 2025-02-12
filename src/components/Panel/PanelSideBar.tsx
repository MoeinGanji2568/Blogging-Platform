import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import PanelSideBarNavs from "./PanelSideBarNav";
import { useAuth } from "../../contexts/auth/auth.provider";

function PanelSideBar() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className="overflow-y-auto flex flex-col p-5 h-screen pt-10 lg:pt-8">
      {/* Drawer header */}
      <Link
        to="/"
        className="flex items-center gap-x-4 justify-center text-secondary-700 border-b  border-b-secondary-200 
        pb-2 mb-6"
      >
        <HomeIcon className="w-6 h-6" />
        <span> پلتفرم معین بلاگ</span>
      </Link>
      {/* Drawer content */}
      <div className="overflow-y-auto flex-auto">
        <PanelSideBarNavs />
        <div
          onClick={handleLogout}
          className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700 py-3 px-4 hover:text-red-400 cursor-pointer"
        >
          <ArrowLeftStartOnRectangleIcon className="ml-4 h-5 w-5" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
}
export default PanelSideBar;
