import React from "react";
import Link from "next/link";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
function page() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto w-auto h-auto bg-white flex  justify-center lg:gap-72 md:gap-72  sm:gap-72  gap-12 pt-4 items-center py-4 ">
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
          <ul className="sm:flex hidden gap-3 pt-4">
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
      <div className=" lg:h-[316px] Lg:w-[1440px] ">
        <Image
          src={"/Group 78 (4).png"}
          alt={"#"}
          width={1440}
          height={316}
        ></Image>
      </div>
      <div className="lg:w-[1440px] lg:h-[1441px] md:w-[1440px] md:h-[1441px] 
      sm:w-[1440px] sm:h-[1441px] h-auto w-auto pl-28 pt-10 sm:flex lg:flex md:flex  justify-between gap-28">
        <div>
          <h1 className="text-2xl font-bold">Billing details</h1>
          <div className="flex  gap-36">
            <p>First name</p>
            <p>Last name</p>
          </div>
          <div className="flex gap-2">
            <button className="w-[100px h-[65px] border-2 border-gray- ">
              <input />
            </button>
            <button className="w-[100px h-[65px] border-2 border-gray ">
              <input />
            </button>
          </div>

          <h1 className="pt-10">Country / Region</h1>
          <button className="border-2 border-gray- rounded-lg pt-10 h-[75px] w-[413px] p-3 ">
            {" "}
          </button>
          <h1 className="pt-10">Company Name (Optional)</h1>
          <button className="border-2 border-gray- rounded-lg pt-10 h-[75px] w-[413px] p-3 ">
            <input type="text" placeholder="srilanka" />{" "}
          </button>
          <h1 className="pt-10">Street address</h1>
          <button className="border-2 border-gray- rounded-lg pt-10 h-[75px] w-[413px] p-3 ">
            {" "}
          </button>
          <h1 className="pt-10">Town / City</h1>
          <button className="border-2 border-gray- rounded-lg pt-10 h-[75px] w-[413px] p-3 ">
            {" "}
          </button>
          <h1 className="pt-10">Province</h1>
          <button className="border-2 border-gray- rounded-lg pt-10 h-[75px] w-[413px] p-3 ">
            <input type="text" placeholder="provence of weather" />{" "}
          </button>
          <h1 className="pt-10">ZIP code</h1>
          <button className="border-2 border-gray- rounded-lg pt-10 h-[75px] w-[413px] p-3 ">
            {" "}
          </button>
          <h1 className="pt-10">Phone</h1>
          <button className="border-2 border-gray- rounded-lg pt-10 h-[75px] w-[413px] p-3 ">
            {" "}
          </button>
          <h1 className="pt-10">Email address</h1>
          <button className="border-2 border-gray- rounded-lg pt-10 h-[75px] w-[413px] p-3 ">
            {" "}
          </button>
          <h1 className="pt-10"></h1>
          <button className="border-2 border-gray- rounded-lg pt-10 h-[75px] w-[413px] p-3 ">
            <input type="text" placeholder="provide to information" />{" "}
          </button>
        </div>
        <div className="w-[608px] h-[789px] pr-28 lg:pl-32 md:pl-32 sm:pl-32 pl-2">
          <div className="flex justify-between">
            <h1>Product</h1>
            <h1>Subtotal</h1>
          </div>
          <div className="flex justify-between text-gray-400 pt-6">
            <p>Asgaard sofa</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between text-gray-400 pt-6">
            <p>Subtotal</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between text-gray-400 pt-6">
            <p>Total</p>
            <p className="text-[#B88E2F]">Rs. 250,000.00</p>
          </div>
          <hr />
          <div className="flex gap-3 text-gray-400 pt-6">
            <button className="border-1 h-[14px] w-[14px] bg-black rounded-full">
              {" "}
            </button>

            <p>Direct Bank Transfer</p>
          </div>
          <p className="flex justify-between text-gray-400">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <div className="flex gap-3 text-gray-400 pt-6">
            <button className="border-2 h-[14px] w-[14px] border-gray-400 rounded-full">
              {" "}
            </button>

            <p>Direct Direct Bank Transfer</p>
          </div>
          <div className="flex gap-3 text-gray-400 pt-6">
            <button className="border-2 h-[14px] w-[14px] border-gray-400 rounded-full">
              {" "}
            </button>

            <p>Cash On Delivery</p>
          </div>
          <p className="flex justify-center text-gray-400">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
          <div className="flex justify-center text-gray-400 pt-8">
            <button className="border-2 border-black rounded-lg  h-[64px] w-[215px] p-3 ">
              Place order
            </button>
          </div>
        </div>
      </div>
      <div className="h-[100px] bg-[#F9F1E7] lg:w-[1440px] md:w-[1440px] sm:w-[1440px] w-[480px]  pt-4">
          <div className="h-[70] w-[1234] sm:flex hidden  justify-center gap-12">
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
