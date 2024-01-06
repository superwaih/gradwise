import React from 'react'
import Image from 'next/image'
import GIcon from "../assets/icons/GIcon.svg"
import Link from 'next/link'
import GradewiseIcon from '../assets/icons/GradewiseIcon'
import StudentIcon from '../assets/icons/StudentIcon'
import LecturerIcon from '../assets/icons/LecturerIcon'
const LecturerHeading = () => {
  return (
    <div>
       <div className='flex justify-between px-8 py-5 items-center'>
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

        <div className='font-semibold flex gap-3'>
            <p>Don&apos;t have an account?</p>
            {/* <Link href={"/login"}> */}
            <span className='text-primary/green'>signup</span>

            {/* </Link> */}
        </div>
       </div>

<hr />
    </div>
  )
}

export default LecturerHeading