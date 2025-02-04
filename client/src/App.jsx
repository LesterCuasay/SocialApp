import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
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
    <>
      <div className="flex">
        <NavBar toggleSideBar={() => setIsSideBarOpen(!isSideBarOpen)}/>
        <SideBar isOpen={isSideBarOpen}/>
      </div>
    </>
  );
}

export default App;
