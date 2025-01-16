import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center bg-secondary-50">
      <div className="p-2 w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
