import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <div className="h-[812px] w-[1366px]">
      <Image src={"/copy1.png"} alt={"#"} width={1366} height={812}></Image></div>
      <div className="h-[485px] w-[1183px]">
        <h1 className="flex justify-center font-bold text-2xl">
          Browse The Range
        </h1>
        <p className="flex justify-center text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center gap-6 pl-20">
          <div>
            <Image
              src={"/Mask Group.png"}
              alt={"#"}
              width={381}
              height={480}
            ></Image>
            <p>Dinnig</p>
          </div>
          <div>
            <Image
              src={"/image 100.png"}
              alt={"#"}
              width={381}
              height={480}
            ></Image>
            <p>livind</p>
          </div>
          <div>
            <Image
              src={"/Mask Group (1).png"}
              alt={"#"}
              width={381}
              height={480}
            ></Image>
            <p>BedRoom</p>
          </div>
        </div>
      </div>
      <div className="pl-20 w-[1336px] pt-10">
        <h1 className="flex justify-center font-bold">our product</h1>
        <div className="flex gap-4">
          <div className="bg-[#F4F5F7]">
            <Image
              src={"/image 1 (1).png"}
              alt={"#"}
              width={285}
              height={301}
            ></Image>
            <h1 className="pt-2">Syltherine</h1>
            <p className="text-gray-400 pt-2">Stylish cafe chair</p>
            <p className="pt-2">Rp 2.500.000</p>
          </div>
          <div className="w-[285px] h-[440px] bg-[#F4F5F7]">
            <Image
              src={"/image 2.png"}
              alt={"#"}
              width={285}
              height={301}
            ></Image>
            <h1 className="pt-2">Leviosa</h1>
            <p className="text-gray-400">Stylish cafe chair</p>
            <p className="pt-2">Rp 3.500.000</p>
          </div>
          <div className="w-[285px] h-[440px] bg-[#F4F5F7]">
            <Image
              src={"/image 3.png"}
              alt={"#"}
              width={285}
              height={301}
            ></Image>
            <h1 className="pt-2">Lolito</h1>
            <p className="text-gray-400">Luxury big sofa</p>
            <p className="pt-2">Rp 7.000.000</p>
          </div>
          <div className="w-[285px] h-[440px] bg-[#F4F5F7]">
            <Image
              src={"/Images.png"}
              alt={"#"}
              width={285}
              height={301}
            ></Image>
            <h1 className="pt-2">Respira</h1>
            <p className="text-gray-400">Outdoor bar table and stool</p>
            <p className="pt-2">Rp 14.000.000</p>
          </div>
        </div>
        <div className="flex gap-4 pt-8">
          <div className="bg-[#F4F5F7]">
            <Image
              src={"/Images (6).png"}
              alt={"#"}
              width={285}
              height={301}
            ></Image>
            <h1 className="pt-2">Grifo</h1>
            <p className="text-gray-400 pt-2">Night Lamp</p>
            <p className="pt-2">Rp 1.500.000</p>
          </div>
          <div className="w-[285px] h-[440px] bg-[#F4F5F7]">
            <Image
              src={"/Images.png"}
              alt={"#"}
              width={285}
              height={301}
            ></Image>
            <h1 className="pt-2">Muggo</h1>
            <p className="text-gray-400">Small mug</p>
            <p className="pt-2">Rp 1.500.00</p>
          </div>
          <div className="w-[285px] h-[440px] bg-[#F4F5F7]">
            <Image
              src={"/Images (5).png"}
              alt={"#"}
              width={285}
              height={301}
            ></Image>
            <h1 className="pt-2">Pingky</h1>
            <p className="text-gray-400">Cute bed set</p>
            <p className="pt-2">Rp 7.000.000</p>
          </div>
          <div className="w-[285px h-[440px] bg-[#F4F5F7]">
            <Image
              src={"/image 8.png"}
              alt={"#"}
              width={285}
              height={301}
            ></Image>
            <h1 className="pt-2">Potty</h1>
            <p className="text-gray-400">flower</p>
            <p className="pt-2">Rp 15.000.000</p>
          </div>
        </div>
        <div className="flex justify-center pt-7">
          <button className=" h-[48px] w-[245px]  p-4 border-2 border-black text-[#B88E2F]">
            {" "}
            Shop More
          </button>
        </div>
        </div>
        <div className="h-[670px] w-[1336px]  pt-10 bg-[#F9F1E7] flex gap-6">
          <div className="w-[422px] h-[32px] pl-11  pt-44">
            <h1 className="text-2xl ">50+ Beautiful rooms inspiration</h1>
            <p>
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <button className="border-2 border-[#B88E2F] bg-[#B88E2F] text-white rounded-lg  h-[55px] w-[237px] p-3 ">
              Submmit{" "}
            </button>
          </div>
          <div className=" h-[582px]">
          <Image
              src={"/Products.png"}
              alt={"#"}
              width={999}
              height={472}
            ></Image>

          
        </div>
        
      </div>
      <div className="h-[780px] pt-6">
        <div className="h-[780px] w-[1366px]">
        <Image
              src={"/Share.png"}
              alt={"#"}
              width={1366}
              height={780}
            ></Image>
          
        </div>
      </div>

    </div>
  );
}

export default Hero;
