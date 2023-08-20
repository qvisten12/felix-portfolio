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
    <header className="flex justify-between mx-auto max-w-screen-2xl lg:pt-20 pt-6 px-10">
      <h1 className="text-3xl">{changedPathName}</h1>
      <Link href="/" className="text-3xl">
        &#10005;
      </Link>
    </header>
  );
};

export default Header;
