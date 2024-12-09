import React from "react";

function Footer() {
  return (
    <div className="h-[459px] w-screen pt-10">
      <div className="h-[419px] w-[1240.01px] flex">
        <div className="pl-20">
          <h1 className="font-bold text-2xl">Funiro.</h1>
          <p className="pt-8 text-gray-400  text-xs w-[285px] h-[75px]">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="w-[712px] h-[312] pl-20 flex gap-20">
          <div className="w-[68] flex-col gap-6 h-[312]">
            <p className="text-gray-400">Link</p>
            <p className="pt-4">home</p>
            <p className="pt-4">shop</p>
            <p className="pt-4">About</p>
            <p className="pt-4">Contact</p>
          </div>
          <div className="w-[140px] h-[242px] pl-10">
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
      <div className="p-4 pl-10 mb-28">
        <hr />
        <p className="pl-10">2023 furino. All rights reverved</p>
      </div>
    </div>
  );
}

export default Footer;
