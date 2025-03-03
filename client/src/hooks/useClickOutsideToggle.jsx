import React, { useState, useEffect, useRef } from "react";

const useClickOutsideToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleItemClick = () => {
    setIsOpen(false);
  };

  const clickOutsideRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (clickOutsideRef.current && !clickOutsideRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickOutsideRef]);

  return { isOpen, setIsOpen, handleItemClick, clickOutsideRef };
};

export default useClickOutsideToggle;
