import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { RiUserAddLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

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
    <div
      className={`bg-gray-900 text-white w-full md:w-32 p-4 mt-16 shadow-md h-screen fixed left-0 transition-all ease-in-out duration-300
        ${isOpen ? "translate-x-0" : "max-md:-translate-x-full"}
        `}
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
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
