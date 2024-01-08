import React from 'react'
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import Link from 'next/link';
import Head from 'next/head'

const LecturerLoginForm = () => {
  return (
    <div className='flex flex-col mx-auto w-[500px] space-y-4 justify-center items-center py-8'>
        <h3 className='font-bold text-2xl text-black'>Lecturer Sign in</h3>

        <div className='w-full flex flex-col gap-3'>
            <label className='text-[#656C7A]' htmlFor="">
                Email
            </label>
            <div className='flex relative border px-3 w-full py-3 rounded-md border-grey/200'>
                <input type="text" className='outline-none w-full focus-within:bg-inherit' placeholder='someone@gmail.com' />
                <HiOutlineEnvelope />

            </div>
        </div>

        <div className='w-full flex flex-col gap-3'>
            <label className='text-[#656C7A]' htmlFor="">
                Password
            </label>
            <div className='flex relative border px-3 w-full py-3 rounded-md border-grey/200'>
                <input type="password" className='outline-none w-full' placeholder='someone@gmail.com' />
                <FaEye />

            </div>
            <div className='flex gap-1'>
                <span>Not a lecturer?</span>
                <Link href={"/"}>
                <span className='text-blue-500 hover:underline active:underline'>Sign in as a Student</span></Link>
            </div>
        </div>

       

        <Link href="/home" className='w-full'>
        <button className='login-btn w-full text-white px-3 py-4 font-semibold'>
            Login
        </button>
        </Link>


    </div>
  )
}

export default LecturerLoginForm