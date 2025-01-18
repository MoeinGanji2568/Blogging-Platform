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
];
const NavLinks = () => {
  return (
    <ul className="flex gap-4">
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

export default NavLinks;
