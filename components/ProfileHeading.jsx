import React from "react";
import Image from "next/image";
import Logo from "../assets/icons/Logo.svg";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { HiArrowDown, HiOutlineEnvelope } from "react-icons/hi2";
import { PiCaretDown } from "react-icons/pi";
const ProfileHeading = () => {
  return (
    <div>
      <div className="flex px-8 justify-between  py-5 gap-5 items-center">
        <Image width={0} height={0} objectFit="cover" src={Logo} alt="" />

      <div className="flex gap-4">
      <div className=" border-[#099620] pb-3 text-[#099620] border-b-2">
          <h2>Home</h2>
        </div>
        <div className="text-[#667085]">
          <h3>Essays</h3>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="p-4 bg-[#DCFFDB] rounded-full text-[#099620] font-semibold ">
            <h3>MA</h3>
        </div>
        <p className="font-bold flex items-center gap-2">
            
            <h3>adegbuyi@gmail.com </h3>
        <span>
            <PiCaretDown />
            </span>
            </p>

      </div>
      </div>

      <hr />
    </div>
  );
};

export default ProfileHeading;
