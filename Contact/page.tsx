import React from "react";
import Link from "next/link";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

function page() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto w-auto h-auto bg-white flex  justify-center lg:gap-72 md:gap-72  sm:gap-72  gap-12 pt-4 items-center py-4">
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
          <ul className="sm:flex  hidden gap-3 pt-4">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="">Shop</Link>
            </li>
            <li>
              <Link href="Blog">Blog</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
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
     
      <div className=" sm:h-[316px] sm:w-[1440px] h-auto w-auto">
        <Image
          src={"/Group 78.png"}
          alt={"#"}
          width={1440}
          height={316}
        ></Image>
      </div>
      <div className="lg:h-[1144px] lg:w-[1440px] ">
        <h1 className="font-bold pt-[11px] flex justify-center  sm:h-[316px] sm:w-[260px] sm:flex-row ">
          Get In Touch With Us
        </h1>
        <p className="flex justify-center text-gray-400">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff AlwaysBe There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className="sm:flex md:flex lg:flex justify-center  gap-32">
          <div className="pt-16 pl-20 w-[397px] h-[537px]">
            <h1 className="font-bold">Address</h1>
            <p className="text-gray-400 text-xs">
              236 5th SE Avenue,
              <br /> New York NY10000,
              <br /> United States
            </p>
            <div className="pt-10">
              <h1 className="font-bold">phone</h1>
              <p className="text-xs">Mobile: +(84) 546-6789</p>
              <p className="text-xs">Hotline: +(84) 456-6789</p>
            </div>
            <div className="pt-10">
              <h1 className="text-xs font-bold">Working Item</h1>
              <p className="text-xs">Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
          <div className="pt-10 ">
            <p>your name</p>
            <button className="border-2 border-[#B88E2F] rounded-lg  h-[75px] w-[528px] p-3 ">
              {" "}
            </button>
            <div className="pt-5">
              <p>email address</p>
              <button className="border-2 border-[#B88E2F] rounded-lg  h-[75px] w-[528px] p-3 ">
                {" "}
              </button>
            </div>

            <div className="pt-5">
              <p>Subject</p>
              <button className="border-2 border-[#B88E2F] rounded-lg  h-[75px] w-[528px] p-3 ">
                {" "}
              </button>
            </div>
            <div className="pt-5">
              <p>Message</p>
              <button className="border-2 border-[#B88E2F] rounded-lg  h-[75px] w-[528px] p-3 ">
                {" "}
              </button>
            </div>
            <div className="pt-5">
              <button className="border-2 border-[#B88E2F] bg-[#B88E2F] text-white rounded-lg  h-[55px] w-[237px] p-3 ">
                Submmit{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="h-[100px] bg-[#F9F1E7] lg:w-[1440px] md:w-[1440px] sm:w-[1440px] w-[480px]  pt-4">
          <div className="h-[70px] w-[1234px] sm:flex hidden justify-center gap-12">
            <div className="pt-4">
              <i className="bi bi-trophy p-6"></i>
              <h1 className="">High Quality </h1>
              <p className="text-gray-400 pb-6">crafted from top materials</p>
            </div>
            <div className="pl-4 pt-4">
              <i className="bi bi-patch-check p-6"></i>
              <h1 className="">warranty Protection </h1>
              <p className="text-gray-400 pb-6">Over 2 years</p>
            </div>
            <div className="pl-4 pt-4">
              <i className="bi bi-truck p-6"></i>
              <h1 className="">Free shipping </h1>
              <p className="text-gray-400 pb-6">Over 2 years</p>
            </div>
            <div className="pl-4 pt-4">
              <i className="<i bi bi-file-lock-fill p-6"></i>
              <h1 className="">24 / 7 Support </h1>
              <p className="text-gray-400 pb-6">Dedicated support</p>
            </div>
          </div>
        </div>
        <div className="lg:h-[505px] lg:w-[1440px] md:h-[505px] md:w-[1440px] sm:h-[505px] sm:w-[1440px] h-auto w-auto pt-10">
      <div className="h-[419px] w-[1240.01px] lg:flex-row md:flex-row sm:flex-row flex-col">
        <div className="lg:pl-20 md:pl-20 sm:pl-20 pl-4">
          <h1 className="font-bold text-2xl">Funiro.</h1>
          <p className="pt-8 text-gray-400  text-xs w-[285px] h-[75px]">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="w-[712px] h-[312] pl-2 lg:pl-20 md:pl-20 sm:pl-20 flex lg:gap-20 md:gap-20 sm:gap-20 gap-0 pt-10">
          <div className="w-[68]  gap-6 h-[312]">
            <p className="text-gray-400">Link</p>
            <p className="pt-4">home</p>
            <p className="pt-4">shop</p>
            <p className="pt-4">About</p>
            <p className="pt-4">Contact</p>
          </div>
          <div className="w-[140px] h-[242px] pl-2 lg:pl-10 md:pl-10 sm:pl-10">
            <p className="text-gray-400">help</p>
            <p className="pt-4">Payment Options</p>
            <p className="pt-4">Returns</p>
            <p className="pt-4">Privacy Policies</p>
          </div>
          <div className="w-[286px] h-[101px] pl-2 pl-auto lg:pl-10 md:pl-10 sm:pl-10">
            <p className="text-gray-400">Newsletter</p>
            <p className="text-gray-400 pt-9"> Email Address</p>
            <hr />
          </div>
          <div className="pt-16 ">
            <p>Subscribe</p>
            <hr />
          </div>
        </div>
        
      </div>
      <div className="p-4 pl-10">
        <hr />
        <p className="pl-10">2023 furino. All rights reverved</p>
      </div>
    </div>
      </div>
    </div>
  );
}

export default page;
