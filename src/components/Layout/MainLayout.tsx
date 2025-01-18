import { Outlet } from "react-router-dom";
import Header from "../Common/Navbar/Header";

const MainLayout = () => {
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
