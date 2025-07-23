// src/components/Sidebar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiHome, BiInfoCircle, BiMenuAltLeft } from "react-icons/bi";

const SidebarRoute = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const navItems = [
    { path: "/", name: "Home", icon: <BiHome className="w-5 h-5" /> },
    { path: "/about", name: "About", icon: <BiInfoCircle className="w-5 h-5" /> },
  ];

  return (
    <div
      className={`h-screen bg-[#CBD9E6] p-4 transition-all duration-300 ${
        isOpen ? "w-48" : "w-16"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 mb-6 focus:outline-none"
      >
        <BiMenuAltLeft className="w-6 h-6" />
      </button>

      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-2 p-2 rounded-xl ${
              location.pathname === item.path
                ? "bg-black text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {item.icon}
            {isOpen && <span className="text-sm font-medium">{item.name}</span>}
          </Link>
        ))}

        <div className="flex items-center justify-center p-2 bg-white rounded-xl">
          <p className="text-[10px] text-center leading-tight font-medium">
            Money <br /> Tracker
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidebarRoute;
