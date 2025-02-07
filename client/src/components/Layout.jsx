import React from "react";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSideBarOpen(true);
      } else {
        setIsSideBarOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <NavBar toggleSideBar={() => setIsSideBarOpen(!isSideBarOpen)} />
      <SideBar isOpen={isSideBarOpen} />
    </div>
  );
};

export default Layout;
