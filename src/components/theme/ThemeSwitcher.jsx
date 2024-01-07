"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunDim, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-1.5 rounded-md hover:dark:bg-zinc-800 hover:bg-gray-300 transition-all ease-out duration-100"
    >
      {theme === "dark" ? (
        <SunDim size={20} strokeWidth={2} />
      ) : (
        <Moon size={17} strokeWidth={2} />
      )}
    </div>
  );
};

export default ThemeSwitcher;
