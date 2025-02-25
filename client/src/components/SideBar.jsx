import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiUserAddLine } from "react-icons/ri";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { IoIosMenu, IoIosClose } from "react-icons/io";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const SideBar = ({ isOpen, toggleSideBar }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const isLoggedin = user !== null;

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      navigate("/login");
    }, 100);
  };

  const handleLogoutWithToggle = () => {
    toggleSideBar();
    handleLogout();
  };

  return (
    <>
      <button
        onClick={toggleSideBar}
        className={`md:hidden top-4 left-4 bg-gray-800 text-white p-2 rounded-4xl focus:outline-none absolute z-20 cursor-pointer
        transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      >
        {isOpen ? <IoIosClose size={32} /> : <IoIosMenu size={32} />}
      </button>
      <div
        className={`bg-gray-900 text-white w-full md:w-32 p-4 shadow-md h-screen fixed left-0 transition-all ease-in-out duration-300 z-10
        ${isOpen ? "translate-x-0" : "max-md:-translate-x-full"}`}
      >
        {isLoggedin ? (
          <>
            <Link to="/feed" aria-label="Feed" onClick={toggleSideBar}>
              <SideBarIcon icon={<FaHome size="28" />} text="Feed" />
            </Link>
            <Link to="/profile" aria-label="Profile" onClick={toggleSideBar}>
              <SideBarIcon icon={<CgProfile size="28" />} text="Profile" />
            </Link>
            <Link aria-label="Logout" onClick={handleLogoutWithToggle}>
              <SideBarIcon icon={<FaSignOutAlt size="28" />} text="Logout" />
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup" aria-label="Sign up" onClick={toggleSideBar}>
              <SideBarIcon icon={<RiUserAddLine size="28" />} text="Sign Up" />
            </Link>
            <Link to="/login" aria-label="Login" onClick={toggleSideBar}>
              <SideBarIcon icon={<FaSignInAlt size="28" />} text="Login" />
            </Link>
          </>
        )}
      </div>
    </>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
