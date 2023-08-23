"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PageTransition from "./PageTransition";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");

  function removeSlashesAndNumbers(inputString: string) {
    const changedString = inputString.replace(/[\/0-9]/g, "");

    return changedString.charAt(0).toUpperCase() + changedString.slice(1);
  }

  const changedPathName = removeSlashesAndNumbers(pathname);

  const toggleTheme = () => {
    var root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.className = "light";
      setTheme("light");
    } else {
      root.className = "dark";
      setTheme("dark");
    }
  };

  useEffect(() => {
    document.documentElement.classList.contains("dark")
      ? setTheme("dark")
      : setTheme("light");
  }, []);

  return pathname === "/" ? (
    <header className="mx-auto max-w-screen-2xl  w-full relative">
      <div className="absolute z-50 flex justify-between lg:pt-20 pt-6 px-10 w-full">
        <button
          className={`w-fit absolute right-5 lg:top-20 top-6 px-3 py-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 `}
          onClick={toggleTheme}
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </header>
  ) : (
    <header className="mx-auto max-w-screen-2xl  w-full relative">
      <div className="absolute z-50 flex justify-between lg:pt-20 pt-6 px-10 w-full dark:text-white">
        <h1 className="text-3xl">{changedPathName}</h1>
        <Link href="/" className="text-3xl">
          &#10005;
        </Link>
      </div>
    </header>
  );
};

export default Header;
