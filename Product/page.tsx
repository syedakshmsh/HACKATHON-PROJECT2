import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
function page() {
  return (
    <div>
    <div>
      <div className="h-[100px] w-[1366px] bg-white flex justify-center gap-72 pt-4">
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
      <div className=" h-[316px] w-[1366px] ">
        <Image
          src={"/Group 78 (5).png"}
          alt={"#"}
          width={1366}
          height={316}
        ></Image>
      </div>
      <div className="w-[1232px] flex justify-center gap-6 pt-10 ">
        <div className="p-10 pl-10">
          <h1 className="h-[105] w-[223px] pt-12 font-extrabold">
            {" "}
            Go to Product page for more Products
          </h1>
          <p className="text-gray-400">View More</p>
        </div>
        <div>
          <Image
            src={"/Group 95.png"}
            alt={"#"}
            width={280}
            height={177}
          ></Image>
          <p>Asgaard Sofa</p>
          <p>
            Rs. 250,000.00 <br />
            4.7
          </p>
          <p>
            <Image
              src={"/Five star (1).png"}
              alt={"#"}
              width={100}
              height={20}
            ></Image>
          </p>
        </div>
        <div className="">
          <Image
            src={"/Group 94.png"}
            alt={"#"}
            width={280}
            height={177}
          ></Image>
          <p>Outdoor Sofa Set</p>
          <p>
            Rs. 2240,000.00 <br />
            4.7
          </p>
          <p>
            <Image
              src={"/Five star (1).png"}
              alt={"#"}
              width={100}
              height={20}
            ></Image>
          </p>
        </div>
        <div className="p-10">
          <h1 className="font-bold text-2xl">Add a Product</h1>
          <button className="border-2 border-[#B88E2F] bg-[#B88E2F] text-white rounded-lg  h-[55px] w-[237px] p-3 pt-6 ">
            Submmit{" "}
          </button>
        </div>
        <hr />
      </div>
      <div className=" w-[1366px] h-[1466px] flex gap-16 ">
        <hr />

        <div className="pt-10">
          <div className="w-[241px] h-[235px] pl-16">
            <h1 className="pt-2 2xl font-extrabold">General </h1>
            <p className="pt-2 ">Sales Package</p>
            <p className="pt-2 ">Model Number</p>
            <p className="pt-2 ">Secondary Material</p>
            <p className="pt-2 ">Configuration</p>
            <p className="pt-2 ">Upholstery Material</p>
            <p className="pt-2 ">Upholstery Color</p>
          </div>
          <div className="w-[241px] h-[235px] pl-20">
            <h1 className="pt-10 2xl font-extrabold">Product </h1>
            <p className="pt-2 ">Filling Material</p>
            <p className="pt-2 ">Finish Type</p>
            <p className="pt-2 ">Adjustable Headrest</p>
            <p className="pt-2 ">Maximum Load Capacity</p>
            <p className="pt-2 ">Origin of Manufacture</p>
          </div>
          <div className="w-[241px] h-[235px] pl-20">
            <h1 className="pt-10 2xl font-extrabold">Dimensions </h1>
            <p className="pt-2 ">Width</p>
            <p className="pt-2 ">Height</p>
            <p className="pt-2 ">Depth</p>
            <p className="pt-2 ">Weight</p>
            <p className="pt-2 ">Seat Height</p>
            <p className="pt-2 ">Leg Height</p>
          </div>
          <div className="w-[241px] h-[189px] pl-20">
            <h1 className="pt-10 2xl font-extrabold">Warranty</h1>
            <p className="pt-6 ">Warranty Service Type</p>
            <p className="pt-16 ">Covered in Warranty</p>
            <p className="pt-16 ">Not Covered in Warranty</p>
            <p className="pt-24 ">Domestic Warranty</p>
          </div>
        </div>

        <div className="pt-10">
          <div className="w-[241px] h-[235px] pt-8 pl-20">
            <p className="pt-2 ">1 sectional sofa</p>
            <p className="pt-2 ">TFCBLIGRBL6SRHS</p>
            <p className="pt-2 ">Solid Wood</p>
            <p className="pt-2 ">L-shaped</p>
            <p className="pt-2 ">Fabric + Cotton</p>
            <p className="pt-2 ">Bright Grey & Lion</p>
          </div>
          <div className="w-[241px] h-[235px] pl-20 pt-16">
            <h1 className="pt- 2xl font-extrabold"></h1>
            <p className="pt-2 ">Foam</p>
            <p className="pt-2 ">Bright Grey & Lion</p>
            <p className="pt-2 ">No</p>
            <p className="pt-2 ">280 KG</p>
            <p className="pt-2 ">India</p>
          </div>
          <div className="w-[241px] h-[235px] pl-20 pt-16">
            <p className="pt-2 ">265.32 cm</p>
            <p className="pt-2 ">76 cm</p>
            <p className="pt-2 ">167.76 cm</p>
            <p className="pt-2 ">45 KG</p>
            <p className="pt-2 ">41.52 cm</p>
            <p className="pt-2 ">5.46 cm</p>
          </div>
          <div className="w-[241px] h-[189px] pl-20 pt-16">
            <p className="pt-6 ">1 Year Manufacturing Warranty</p>
            <p className="pt-6 ">
              For Warranty Claims or Any Product Related Issues Please Email at
              operations@trevifurniture.com
            </p>
            <p className="pt-6 ">Warranty Against Manufacturing Defect</p>
            <p className="pt-16 ">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </p>
            <button className="border-2 border-[#B88E2F] bg-[#B88E2F] text-white rounded-lg  h-[54px] w-[217px] ">
              Add To Card{" "}
            </button>
          </div>
        </div>
        <div className="pt-10">
          <div className="w-[241px] h-[235px] pl-20 pt-10">
            <p className="pt-2 ">1 Three Seater, 2 Single Seater</p>
            <p className="pt-2 ">DTUBLIGRBL568</p>
            <p className="pt-2 ">Solid Wood</p>
            <p className="pt-2 ">L-shaped</p>
            <p className="pt-2 ">Fabric + Cotton</p>
            <p className="pt-2 ">Bright Grey & Lion</p>
          </div>
          <div className="w-[241px] h-[235px] pl-20 pt-16">
            <p className="pt-2 ">Matte</p>
            <p className="pt-2 ">Bright Grey & Lion</p>
            <p className="pt-2 ">yes</p>
            <p className="pt-2 ">300 KG</p>
            <p className="pt-2 ">India</p>
          </div>
          <div className="w-[241px] h-[235px] pl-20 pt-16">
            <p className="pt-2 ">265.32 cm</p>
            <p className="pt-2 ">76 cm</p>
            <p className="pt-2 ">167.76 cm</p>
            <p className="pt-2 ">45 KG</p>
            <p className="pt-2 ">41.52 cm</p>
            <p className="pt-2 ">5.46 cm</p>
          </div>
          <div className="w-[241px] h-[189px] pl-20 pt-16">
            <p className="pt-6 ">1.2 Year Manufacturing Warranty</p>
            <p className="pt-6 ">
              For Warranty Claims or Any Product Related Issues Please Email at
              operations@trevifurniture.com
            </p>
            <p className="pt-6 ">Warranty Against Manufacturing Defect</p>
            <p className="pt-16 ">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </p>
            <button className="border-2 border-[#B88E2F] bg-[#B88E2F] pt-3 text-white rounded-lg  h-[54px] w-[217px] ">
              Add To Card{" "}
            </button>
          </div>
        </div>
      </div>
    
    </div>
    <div className="h-270 bg-[#F9F1E7] w-[1366px] pt-4">
          <div className="h-[70] w-[1234] flex  justify-center gap-12">
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
        <div className="h-[359px] w-[1366px] pt-10">
          <div className="h-[319px] w-screen flex">
            <div className="pl-20">
              <h1 className="font-bold text-2xl">Funiro.</h1>
              <p className="pt-8 text-gray-400  text-xs w-[285px] h-[75px]">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>
            <div className="w-[712px] h-[312px] pl-20 flex gap-20 ">
              <div className="w-[68] flex-col gap-6 h-[212px]">
                <p className="text-gray-400">Link</p>
                <p className="pt-4">home</p>
                <p className="pt-4">shop</p>
                <p className="pt-4">About</p>
                <p className="pt-4">Contact</p>
              </div>
              <div className="w-[140px] h-[142px] pl-10">
                <p className="text-gray-400">help</p>
                <p className="pt-4">Payment Options</p>
                <p className="pt-4">Returns</p>
                <p className="pt-4">Privacy Policies</p>
              </div>
              <div className="w-[286px] h-[101px] pl-10">
                <p className="text-gray-400">Newsletter</p>
                <p className="text-gray-400 pt-9"> Email Address</p>
                <hr />
              </div>
              <div className="pt-16">
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
