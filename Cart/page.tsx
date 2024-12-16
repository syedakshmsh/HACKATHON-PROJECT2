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
          <ul className="hidden sm:flex gap-3 pt-4">
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
        <div className="flex gap-6 pt-4">
          <i className="bi bi-person-lines-fill"></i>
          <i className="bi bi-search"></i>
          <i className="bi bi-heart"></i>
          <i className="bi bi-cart"></i>
        </div>
      </div>
      <div></div>
      <div className="sm:h-[316px] sm:w-[1440px] h-auto w-auto  ">
        <Image
          src={"/Group 78 (1).png"}
          alt={"#"}
          width={1440}
          height={316}
        ></Image>
      </div>
      <div className="h-[521px] pt-7 ">
        <div className="sm:w-[1240] sm:h-[390] h-auto w-auto sm:flex lg:flex md:flex pl-2 ">
          <div className=" ml-6 h-[65px] w-[817px] p-3 bg-[#F9F1E7]  gap-4">
            <ul className="flex gap-32 pl-4 ">
              <li>Product</li>
              <li>Price</li>
              <li>quantity</li>
              <li>Subtotal</li>
            </ul>
            <div className="pt-12 pl-11 text-gray-400 flex gap-10">
              <Image
                src={"/Group 95.png"}
                alt={"#"}
                width={105}
                height={105}
              ></Image>
              <p className="pt-8 pl-5">Asgaard sofa</p>
              <p className="pt-8">Rs. 250,000.00</p>
              <div className="pt-8">
                <button className="border-2 h-[30px] w-[30px] border-[#F9F1E7]  bg-[#F9F1E7] rounded-lg">
                  XL
                </button>
              </div>
              <p className="pt-8 text-black">Rs. 250,000.00</p>
              <i className="bi bi-trash3-fill pt-8"></i>
            </div>
          </div>
          <div className="w-[393px] h-[390px] lg:mt-2 border-2 ml-4 bg-[#F9F1E7] sm:mt-2  md:mt-2 mt-32 rounded-lg">
            <h1 className="flex justify-center">card</h1>
            <div className="flex justify-center gap-2 pt-7 pl-7">
              <p>Subtotal</p>
              <p className="text-gray-400">Rs. 250,000.00</p>
            </div>
            <br />
            <div className=" flex justify-center gap-2 pt-7 pl-7 ">
              <p>total</p>
              <p className="text-[#B88E2F]">Rs. 250,000.00</p>
            </div>
            <div className=" flex justify-center gap-2 pt-10 pl-7 ">
              <button className="border-2 border-black rounded-lg  h-[64px] w-[215px] p-3 ">
                Add to Cart
              </button>
            </div>
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
  );
}

export default page;
