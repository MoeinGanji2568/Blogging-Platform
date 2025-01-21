import { NavLink } from "react-router-dom";
const LinksItem = [
  {
    id: 1,
    children: "خانه",
    path: "/",
  },
  {
    id: 2,
    children: "بلاگ ها",
    path: "/blogs",
  },
  {
    id: 3,
    children: " درباره ما",
    path: "/about",
  },
  {
    id: 4,
    children: " ثبت نام",
    path: "/auth/sign-up",
  },
];
const SidebarMenu = () => {
  return (
    <ul className="flex flex-col gap-4 h-screen">
      {LinksItem.map((link) => {
        return (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "bg-red-400 p-2 rounded-lg text-white" : "p-2"
              }
            >
              {link.children}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarMenu;
