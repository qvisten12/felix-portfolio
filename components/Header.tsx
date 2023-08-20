"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  function removeSlashesAndNumbers(inputString: string) {
    const changedString = inputString.replace(/[\/0-9]/g, "");

    return changedString.charAt(0).toUpperCase() + changedString.slice(1);
  }

  const changedPathName = removeSlashesAndNumbers(pathname);

  return pathname === "/" ? null : (
    <header className="flex justify-between mx-auto max-w-screen-2xl py-5 px-5">
      <h1 className="text-3xl">{changedPathName}</h1>
      <Link href="/">X</Link>
    </header>
  );
};

export default Header;
