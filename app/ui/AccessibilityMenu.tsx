import { useState, useEffect } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoAccessibility } from "react-icons/io5";
import { RiFontFamily } from "react-icons/ri";
import { PiTextAaBold } from "react-icons/pi";

export default function AccessibilityMenu() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSizeMode, setFontSizeMode] = useState("normal");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  const toggleDarkMode = (mode: string) => {
    setIsDarkMode(mode === 'dark');
  };

  useEffect(() => {
    const fontSize = fontSizeMode === "normal" ? "100%" : "120%";
    document.documentElement.style.fontSize = fontSize;
  }, [fontSizeMode]);
  const setNormalFontSize = () => setFontSizeMode("normal");
  const setLargeFontSize = () => setFontSizeMode("large");

  return (
    <div className="fixed bottom-4 right-4 text-right z-50">
      <Menu>
        <MenuButton className="inline-flex items-center rounded-full bg-linkBlueDark dark:bg-linkBlue p-2 text-textPar dark:text-textParDark shadow-md focus:outline-none">
          <IoAccessibility className="w-8 h-8" />
        </MenuButton>
        <MenuItems
          anchor="top"
          transition
          className="bg-background dark:bg-backgroundDark origin-top transition duration-200 ease-in data-[closed]:scale-95 data-[closed]:opacity-0 [--anchor-gap:8px] rounded-lg border border-linkBlue dark:border-linkBlueDark shadow-lg focus:outline-none"
        >
          <MenuItem>
            <button
              onClick={setLargeFontSize}
              className={`flex w-full items-center justify-center p-2 dark:text-white 
                  ${fontSizeMode === "large"?'bg-linkBlueDark dark:bg-linkBlue ':'hover:bg-linkBlueDark dark:hover:bg-linkBlue'}`}
                    >
              <RiFontFamily className="w-10 h-10" />
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={setNormalFontSize}
              className={`flex w-full items-center justify-center p-2 dark:text-white
                  ${fontSizeMode === "normal"?'bg-linkBlueDark dark:bg-linkBlue':'hover:bg-linkBlueDark dark:hover:bg-linkBlue'}`}
                  >
              <RiFontFamily className="w-5 h-5" />
            </button>
          </MenuItem>
          <div className=" h-px bg-linkBlue dark:bg-linkBlueDark" />
          <MenuItem>
            <button
              onClick={() => toggleDarkMode('light')}
              className={`flex w-full items-center justify-center p-2 ${!isDarkMode ? 'bg-linkBlueDark text-white' : 'hover:bg-linkBlue'}`}>
              <PiTextAaBold className="w-8 h-8 rounded-full p-1 bg-white text-black border" />
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => toggleDarkMode('dark')}
              className={`flex w-full items-center justify-center p-2 ${isDarkMode ? 'bg-linkBlue text-white' : 'hover:bg-linkBlueDark'}`}>
              <PiTextAaBold className="w-8 h-8 rounded-full p-1 bg-black text-white" />
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
