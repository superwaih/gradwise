import React from 'react'
import Image from 'next/image'
import Logo from "../assets/icons/Logo.svg"
import Link from 'next/link'
import { IoIosSearch } from "react-icons/io";
import { HiOutlineEnvelope } from 'react-icons/hi2'
import LecturerIcon from '../assets/icons/LecturerIcon';
import GradewiseIcon from '../assets/icons/GradewiseIcon';
const DashboardHeading = () => {
  return (
    <div>
       <div className='flex px-8 max-w-[800px] py-5 gap-5 items-center'>
       <div className='flex gap-2 items-center'>
       <Image
            width={0}
            height={0}
            objectFit="cover"
            src={GIcon}
            alt=""
        />
        <GradewiseIcon />
        <LecturerIcon />
       </div>

      
        <div className='flex  ml-40 relative w-full border border-[#E2E2E3] px-3 gap-4  py-3 rounded-md bg-[#F8F9FB] items-center'>
        <IoIosSearch className='text-xl' />
                <input type="search" placeholder='Search for essay, students name, submission...' className='outline-none placeholder:text-[#A9ADB3] text-[#A9ADB3] bg-inherit w-full'  />

            </div>

        {/* <div className='font-semibold flex gap-3'>
            <p>Already have an account?</p>
            <Link href={"/login"}>
            <span className='text-primary/green'>login</span>

            </Link>
        </div> */}
       </div>

<hr />
    </div>
  )
}

export default DashboardHeading