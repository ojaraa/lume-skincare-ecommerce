"use client";
import { navLinks } from "@/lib/data";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Navbar = () => {
  const currentPath = usePathname();
  return (
    <div className="flex items-center justify-between py-6  ">
        <Link href={"/"} className="flex items-center gap-x-2">
        <h1 className="text-xl font-bold">Lumé</h1>
        </Link>
      
      <div className="flex items-center gap-x-6 ml-auto ">
        {navLinks?.map((link) => (
          <Link
            key={link?.id}
            href={link?.href}
            className={`text-lg ${
              currentPath === link?.href ? "font-bold" : "text-black"
            }`}
          >
            {link?.label}
          </Link>
        ))}
        <Link href="/cart" className="text-lg ">
          <div className="flex items-center gap-x-1">
            <ShoppingCart />
            Cart
          </div>
        </Link>
      </div>
    </div>
  );
};
