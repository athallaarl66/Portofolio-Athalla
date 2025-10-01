import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Cek localStorage
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      if (storedTheme === "light") {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
      } else {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    } else {
      // Default ke dark mode saat pertama kali load
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // return (
  //   <button
  //     onClick={toggleTheme}
  //     aria-label="Toggle theme"
  //     className={cn(
  //       "fixed top-5 right-5 z-[9999]",
  //       "bg-white/80 dark:bg-black/50 backdrop-blur-md",
  //       "hover:bg-white dark:hover:bg-black",
  //       "p-3 rounded-full shadow-md transition-all duration-300",
  //       "focus:outline-none focus:ring-2 focus:ring-primary"
  //     )}
  //   >
  //     {isDarkMode ? (
  //       <Moon className="h-5 w-5 text-blue-400 transition-transform duration-300 hover:rotate-12" />
  //     ) : (
  //       <Sun className="h-5 w-5 text-yellow-400 transition-transform duration-300 hover:rotate-12" />
  //     )}
  //   </button>
  // );
};
