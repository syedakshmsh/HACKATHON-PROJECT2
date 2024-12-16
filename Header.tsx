'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {

  
  
  
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto w-auto h-auto bg-white flex  justify-center lg:gap-72 md:gap-72  sm:gap-72  gap-12 pt-4 items-center py-4">
        <div className="flex gap-2   pl-2 ">
          <Image
            src={"/Meubel House_Logos-05.png"}
            alt={"#"}
            width={50}
            height={32}
          ></Image>
          <h1 className="text-2xl pt-4">Furniro</h1>
        </div>
       
        <div className="flex">
          <ul className="sm:flex gap-3 pt-4 hidden">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="Shop">Shop</Link>
            </li>
            <li>
              <Link href="Blog">Blog</Link>
            </li>
            <li>
              <Link href="Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 pt-4 ">
          <i className="bi bi-person-lines-fill"></i>
          <i className="bi bi-search"></i>
          <i className="bi bi-heart"></i>
          <i className="bi bi-cart"></i>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Header;
// h-[] w-[]
