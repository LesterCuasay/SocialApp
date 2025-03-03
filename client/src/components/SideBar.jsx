import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiUserAddLine } from "react-icons/ri";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { IoIosMenu, IoIosClose, IoIosAddCircle } from "react-icons/io";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const SideBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const isLoggedin = user !== null;

  const { isOpen, setIsOpen, handleItemClick, clickOutsideRef } = useClickOutsideToggle();
  console.log('clickOutsideRef', clickOutsideRef)
  const handleLogout = () => {
    logout();
    setTimeout(() => {
      navigate("/feed");
    }, 100);
  };

  const handleLogoutWithToggle = () => {
    toggleSideBar();
    handleLogout();
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden top-4 left-4 bg-gray-800 text-white p-2 rounded-4xl focus:outline-none absolute z-20 cursor-pointer
        transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      >
        {isOpen ? <IoIosClose size={32} /> : <IoIosMenu size={32} />}
      </button>
      <div
        className={`bg-gray-900 w-full h-full flex justify-center items-center md:w-32 fixed top-0 left-0 transition-all ease-in-out duration-300 z-10
        ${
          isOpen
            ? "translate-x-0 opacity-90 visible"
            : "-translate-x-full opacity-0 invisible"
        }`}
      >
        <div
          ref={clickOutsideRef}
          className="flex flex-col space-y-6"
        >
          {isLoggedin ? (
            <>
              <Link to="/feed" aria-label="Feed" onClick={handleItemClick}>
                <SideBarIcon icon={<FaHome size="28" />} text="Feed" />
              </Link>
              <Link
                to="/create"
                aria-label="Create a Post!"
                onClick={handleItemClick}
              >
                <SideBarIcon icon={<IoIosAddCircle size="28" />} text="Create" />
              </Link>
              <Link to="/profile" aria-label="Profile" onClick={handleItemClick}>
                <SideBarIcon icon={<CgProfile size="28" />} text="Profile" />
              </Link>
              <Link aria-label="Logout" onClick={handleLogoutWithToggle}>
                <SideBarIcon icon={<FaSignOutAlt size="28" />} text="Logout" />
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup" aria-label="Sign up" onClick={handleItemClick}>
                <SideBarIcon
                  icon={<RiUserAddLine size="28" />}
                  text="Sign Up"
                />
              </Link>
              <Link to="/login" aria-label="Login" onClick={handleItemClick}>
                <SideBarIcon icon={<FaSignInAlt size="28" />} text="Login" />
              </Link>
            </>
          )}
        </div>
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
