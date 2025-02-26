import React, { useState } from "react";
import SideBar from "./SideBar";

const Layout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  
  return (
    <div>
      <SideBar toggleSideBar={() => setIsSideBarOpen(!isSideBarOpen)} isOpen={isSideBarOpen} />
    </div>
  );
};

export default Layout;
