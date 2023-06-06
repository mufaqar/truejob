import { useTheme } from "next-themes";
import React from "react";
import { ImSun } from "react-icons/im";
import { MdDarkMode } from "react-icons/md";

const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="dark:bg-light-gray text-pure bg-yellow p-1 rounded-md dark:text-yellow"
    >
      {theme == "dark" ? <ImSun size={24} /> : <MdDarkMode size={24} />}
    </button>
  );
};

export default ThemeSwitch;
