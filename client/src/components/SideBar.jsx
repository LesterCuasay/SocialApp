import React from "react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen }) => {
  return (
    <div
      className={`bg-gray-900 text-white w-full md:w-32 p-4 mt-16 shadow-md h-screen fixed left-0 transition-all ease-in-out duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
    >
      <ul>
        <li>
          <Link to="/feed" aria-label="Feed">
            <SideBarIcon icon={<FaHome size="28" />} text="Feed" />
          </Link>
        </li>
        <li>
          <Link to="/profile" aria-label="Profile">
            <SideBarIcon icon={<CgProfile size="28" />} text="Profile" />
          </Link>
        </li>
        <li>
          <Link to="/logout" aria-label="Logout">
            <SideBarIcon icon={<IoLogOutOutline size="28" />} text="Logout" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
