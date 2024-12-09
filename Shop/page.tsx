import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "bootstrap-icons/font/bootstrap-icons.css";

function page() {
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
              <Link href="Home">Home</Link>
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
      <div>

      </div>
      <div>
        
      </div>
      <div className=" h-[316] w-[1366px]">
        <Image
          src={"/Group 78 (3).png"}
          alt={"#"}
          width={1366}
          height={316}
        ></Image>
      </div>
      <div className='h-[100px] w-[1366px] bg-[#F9F1E7] flex justify-between pt-6'>
        <div className='flex gap-7 pl-6 p-2'>
      <i className="bi bi-filter">filter</i>
      <i className="bi bi-ui-checks-grid"></i>
      <i className="bi bi-view-list"></i>

      <h1 className='h-[37] w-[237] flex'>|Showing 1–16 of 32 results</h1>
      </div>
      <div className='flex pr-5 gap-4 '>
      <p className='w-[54] h-[30] p-4 '>Show</p>
      <button className="border-2 h-[30px] w-[30px] border-white  bg-white rounded-lg">
                
                </button>
               < p className='w-[54] h-[30] p-4'>Short by</p>
      <button className="border-2 h-[55px] w-[188px] border-white p-2 bg-white rounded-lg">
        Default
                
                </button>
                </div>

      </div>


      <div className='h-[2051px] w-[1366px] pt-4'>
      <div className=" pl-20 flex gap-4 ">
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
        <div className="flex gap-4  pl-20 pt-4">
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
        <div className="flex  pl-20 gap-4 pt-4">
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
        <div className="flex gap-4 pt-4 pl-20">
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
        <div className="flex justify-center pt-6  pl-36 gap-8 w-[1366px]">
        <button className="border-2 h-[50px] w-[50px] bg-[#B88E2F]  rounded-lg">
              1
            </button>
            <button className="border-2 h-[50px] w-[50px] border-[#F9F1E7]  bg-[#F9F1E7] rounded-lg">
            2
            </button>
            <button className="border-2 h-[50px]  border-[#F9F1E7]  bg-[#F9F1E7] w-[50px] rounded-lg">
              3{" "}
            </button>
            <button className="border-2 h-[60px]  border-[#F9F1E7]  bg-[#F9F1E7] w-[90px] rounded-lg">
              next{" "}
            </button>

        </div>
        <div className="h-[275px] bg-[#F9F1E7] w-[1366px] pt-4">
          <div className="h-[70px] w-[1234px] flex  justify-center gap-12">
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
              <div className="w-[68px] flex-col gap-6 h-[212px]">
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
  )
}

export default page