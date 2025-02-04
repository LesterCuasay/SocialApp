import React from 'react'
import { IoIosMenu } from "react-icons/io";

const NavBar = ({toggleSideBar}) => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed top-0 left-0 w-full shadow-lg z-10">
        <div className='container mx-auto flex justify-between items-center'>
            <button onClick={toggleSideBar} className='md:hidden focus:outline-none cursor-pointer'>
                <IoIosMenu size={28} />
            </button>
            <h1 className='text-2xl font-bold'>Hello</h1>
            <ul className='hidden md:flex space-x-6'>
                <NavItem text="Home"/>
                <NavItem text="Home"/>
                <NavItem text="Home"/>
                <NavItem text="Home"/>
            </ul>
        </div>
    </nav>
  )
}

const NavItem = ({ text }) => (
    <li className="cursor-pointer hover:text-gray-400">{text}</li>
  );

export default NavBar