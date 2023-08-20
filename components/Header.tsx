"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return pathname === "/" ? null : (
    <header className="flex justify-between mx-auto max-w-screen-2xl py-5 px-5 flex">
      <h1 className="text-3xl">About</h1>
      <Link href="/">X</Link>
    </header>
  );
};

export default Header;
