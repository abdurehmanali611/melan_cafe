"use client";
import { NavbarContents } from "@/siteConstants";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <div className="flex justify-between items-center">
      <Link href="/" className="flex gap-2 items-center">
        <Image
          src="/vercel.svg"
          alt="vercel"
          width={50}
          height={50}
          loading="eager"
          className="rounded-full"
        />
        <span className="text-lg font-semibold font-serif">MELAN</span>
      </Link>
      {menuShow ? (
        <X
          className="w-10 h-10 bg-destructive/20 text-destructive rounded-xl p-2 block lg:hidden cursor-pointer"
          onClick={() => setMenuShow(!menuShow)}
        />
      ) : (
        <Menu
          className="w-10 h-10 bg-primary text-primary-foreground rounded-xl p-2 block lg:hidden cursor-pointer"
          onClick={() => setMenuShow(!menuShow)}
        />
      )}

      <ul
        className={`lg:flex lg:flex-row lg:items-center lg:gap-10 lg:static lg:bg-transparent lg:shadow-none lg:w-auto ${
          menuShow
            ? "flex flex-col gap-3 p-4 z-50 absolute top-[12%] bg-popover border border-border text-popover-foreground rounded-xl shadow-xl left-[50%] -translate-x-1/2 w-[90%] lg:left-auto lg:translate-x-0"
            : "hidden"
        }`}
      >
        {NavbarContents.map((item) => (
          <li key={item.id} className="w-full lg:w-auto">
            <Link
              href={item.link}
              onClick={() => setMenuShow(false)}
              className="block w-full p-3 lg:p-2 text-lg font-semibold font-serif transition-all duration-200
                         text-muted-foreground hover:text-primary hover:bg-accent lg:hover:bg-transparent
                         rounded-lg lg:text-foreground/80 hover:underline"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
