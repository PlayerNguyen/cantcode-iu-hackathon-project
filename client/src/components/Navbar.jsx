import React, { useState } from "react";
import { FiHome, FiUser } from "react-icons/fi";
import { useLocation, Link } from "react-router-dom";
export default Navbar = React.memo(() => {
  const [list] = useState([
    {
      name: "Home",
      link: "/",
      icon: <FiHome />,
    },
    {
      name: "User",
      link: "/user",
      icon: <FiUser />,
    },
  ]);

  const location = useLocation();
  const isActive = (item) => location.pathname === item.link;

  return (
    <div
      className={`navbar-content flex flex-row items-center justify-center gap-4 md:flex-col md:items-start md:mt-32 md:px-6 md:py-0`}
    >
      {list.map((item, index) => {
        return (
          <Link
            key={index}
            className={`flex flex-col items-center justify-center text-2xl p-3 ${
              isActive(item) ? "text-black" : "text-gray-500"
            } md:flex-row md:gap-4 md:text-lg`}
            to={item.link}
          >
            <span className="">{item.icon}</span>
            <span className="hidden md:block">{item.name}</span>

            {isActive(item) ? (
              <span className="absolute w-1 h-1 bg-red bg-black rounded-full translate-y-[16px] md:translate-y-0 md:-translate-x-14"></span>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
});
