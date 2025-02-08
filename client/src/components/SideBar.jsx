import React from "react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, toggleSideBar }) => {
  return (
    <div
      className={`bg-gray-900 text-white w-full md:w-32 p-4 mt-16 shadow-md h-screen fixed left-0 transition-all ease-in-out duration-300
        ${isOpen ? "translate-x-0" : "max-md:-translate-x-full"}
        `}
    >
      <Link to="/feed" aria-label="Feed" onClick={toggleSideBar}>
        <SideBarIcon icon={<FaHome size="28" />} text="Feed" />
      </Link>

      <Link to="/profile" aria-label="Profile" onClick={toggleSideBar}>
        <SideBarIcon icon={<CgProfile size="28" />} text="Profile" />
      </Link>

      <Link to="/logout" aria-label="Logout" onClick={toggleSideBar}>
        <SideBarIcon icon={<IoLogOutOutline size="28" />} text="Logout" />
      </Link>
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
