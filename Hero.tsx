import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <div className="lg:h-[718.63px] lg:w-[1440px] max-w-screen sm:w-[640px] sm:h-[340px]  w-auto h-auto">
        <Image
          src={"/copy1.png"}
          alt={"#"}
          width={1440}
          height={718.63}
        ></Image>
        <div className=" absolute lg:w-[643px] lg:h-[443px]  md:w-[643px] md:h-[443px] sm:w-[343px] sm:h-[243px]  h-[240px] w-[400px] lg:top-[253px] md:top-[253px] sm:top-[253px] top-[103px] lg:ml-[739px] md:ml-[739px] sm:ml-[739px] ml-[79px] bg-[#FFF3E3] border-2 rounded-xl">
          <div className="lg:h-[344px] lg:w-[561px] md:h-[344px] md:w-[561px]  sm:h-[344px] sm:w-[561px] h-auto w-auto   pl-10 lg:pt-10   md:pt-10 sm:pt-10  pt-2">
            <p className="">New Arrival</p>
            <h1 className=" text-[#B88E2F] lg:text-7xl   md:text-7xl  sm:text-4xl  text-3xl pt-2 ">
              Discover Our New Collection
            </h1>
            <p className="lg:pt-4 md:pt-4 sm:pt-4 pt-2">
              {" "}
              Lipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="pt-5">
              <button className="border-2 border-[#B88E2F] bg-[#B88E2F] text-white rounded-lg  lg:h-[74px] lg:w-[222px]  md:h-[74px] md:w-[222px]  sm:h-[44px] sm:w-[122px]  h-auto w-auto p-3 ">
                Submmit{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[685px] w-[1183px] top-[839px] md:left-[131px]  lg:left-[131px] sm:left-[131px]  left-auto">
        <h1 className="lg:flex justify-center left-4   lg:left-0   md:left-0   sm:left-0 font-bold text-2xl">
          Browse The Range
        </h1>
        <p className="lg:flex justify-center text-gray-400  left-4   lg:left-0   md:left-0   sm:left-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center pt-6 gap-6 pl-20 lg:flex-row md:flex-row sm:flex-row flex-col h-auto">
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
      <div className="pl-28 w-[1236px] lg:h-[1084px]  md:h-[1084px] sm:h-[1084px] pt-[989px] lg:pt-[9px] md:pt-[9px] sm:pt-[9px] h-auto  ">
        <h1 className="lg:flex justify-center font-bold pt-10 pl-0 ">our product</h1>
        <div className="flex gap-4 lg:flex-row md:flex-row sm:flex-row flex-col">
          <div className="bg-[#F4F5F7] w-[285px] h-[440px]">
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
        <div className="flex gap-4 pt-8 lg:flex-row md:flex-row sm:flex-row flex-col">
          <div className="bg-[#F4F5F7] w-[285px] h-[440px]">
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
          <div className="w-[285px] h-[440px] bg-[#F4F5F7]">
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
        <div className="lg:flex justify-center pl-0  pt-7">
          <button className=" h-[48px] w-[245px]  p-4 border-2 border-black text-[#B88E2F]">
            {" "}
            Shop More
          </button>
        </div>
      </div>
      <div className="lg:h-[670px] lg:w-[1440px] md:h-[670px] md:w-[1440px] sm:h-[670px] sm:w-[1440px] h-auto w-auto  pt-9 bg-[#F9F1E7] flex gap-6">
        <div className="w-[422px] h-[32px] lg:pl-11  md:pl-11 sm:pl-7 pl-0 lg:pt-44 md:pt-44 sm:pt-44 pt-0">
          <h1 className="lg:text-2xl  md:text-2xl sm:text-2xl text-xl  ">50+ Beautiful rooms inspiration</h1>
          <p className="text-sm">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="border-2 border-[#B88E2F] bg-[#B88E2F] text-white rounded-lg  lg:h-[55px] lg:w-[237px] h-auto w-auto p-3 ">
            Submmit{" "}
          </button>
        </div>
        <div>
          <Image src={"/toq.png"} alt={"#"} width={404} height={582}></Image>
        </div>
        <div>
          <Image
            src={"/Rectangle 25.png"}
            alt={"#"}
            width={372}
            height={486}
          ></Image>
        </div>
      </div>
      <div className="lg:h-[880px] lg:w-[1440px]  md:h-[880px] md:w-[1440px] sm:h-[880px] sm:w-[1440px] h-auto w-auto pt-6">
        <div className="flex justify-center">
          <p className="pt-10 ">Share your setup with</p>
          <h1 className=" pt-3">#FuniroFurniture</h1>
        </div>

        <div className="flex">
          <div className=" h-[382px]">
            <Image
              src={"/Rectangle 36.png"}
              alt={"#"}
              width={100}
              height={382}
            ></Image>
          </div>
          <div className="pl-4 pt-44">
            <Image
              src={"/Rectangle 38 (1).png"}
              alt={"#"}
              width={451}
              height={312}
            ></Image>
          </div>

          <div className="pl-4 pt-28 mb-10">
            <Image
              src={"/Rectangle 40.png"}
              alt={"#"}
              width={295}
              height={392}
            ></Image>
          </div>
          <div className="pl-4 pt-16">
            <Image
              src={"/Rectangle 43.png"}
              alt={"#"}
              width={290}
              height={348}
            ></Image>
          </div>
          <div className="pt-6  pl-4 h-[433] ">
            <Image
              src={"/Rectangle 45.png"}
              alt={"#"}
              width={248}
              height={434}
            ></Image>
          </div>
        </div>
        <div className="lg:flex sm:flex md:flex hidden">
          <div>
            <Image
              src={"/Rectangle 37.png"}
              alt={"#"}
              width={148}
              height={323}
            ></Image>
          </div>
          <div className="pl-6 mb-36">
            <Image
              src={"/Rectangle 39.png"}
              alt={"#"}
              width={342}
              height={344}
            ></Image>
          </div>
          <div className="pl-96 mb-36">
            <Image
              src={"/Rectangle 41.png"}
              alt={"#"}
              width={178}
              height={242}
            ></Image>
          </div>
          <div className="pl-4 mb-36">
            <Image
              src={"/Rectangle 44.png"}
              alt={"#"}
              width={258}
              height={197}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
