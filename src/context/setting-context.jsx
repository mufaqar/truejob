"use client"

import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [windowSize, setWindowSize] = useState([]);
  const [openSide, setOpenSide] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    if (typeof window !== 'undefined') {
      // Access the window object only if it exists
      setWindowSize([window.innerWidth, window.innerHeight]);
      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }
  }, []);




  return (
    <SettingsContext.Provider
      value={{
        isMobile,
        setIsMobile,
        searchOpen,
        setSearchOpen,
        setSearchValue,
        searchValue,
        windowSize,
        setWindowSize,
        setOpenSide,
        openSide,
        modalIsOpen,
        setIsOpen
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

