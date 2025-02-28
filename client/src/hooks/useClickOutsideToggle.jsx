import React, { useState, useEffect, useRef } from "react";

const useClickOutsideToggle = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleItemClick = () => {
    setIsDropdownOpen(false);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return { isDropdownOpen, setIsDropdownOpen, handleItemClick, dropdownRef };
};

export default useClickOutsideToggle;
