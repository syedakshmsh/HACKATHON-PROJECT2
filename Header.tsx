import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  return (
    <div>
      <div className="h-[100px] w-screen bg-white flex justify-center gap-72 pt-4">
        <div className="flex gap-2  pl-2">
          <Image
            src={"/Meubel House_Logos-05.png"}
            alt={"#"}
            width={50}
            height={32}
          ></Image>
          <h1 className="text-2xl pt-4">Furniro</h1>
        </div>
        <div>
          <ul className="flex gap-3 pt-4">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="shop"></Link>Shop
            </li>
            <li>
              <Link href="Blog">Blog</Link>
            </li>
            <li>
              <Link href="Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 pt-4">
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
