import React from 'react'
import Image from 'next/image'
import Logo from "../assets/icons/Logo.svg"
import Link from 'next/link'
const Heading = () => {
  return (
    <div>
       <div className='flex justify-between px-8 py-5 items-center'>
       <Image
            width={0}
            height={0}
            objectFit="cover"
            src={Logo}
            alt=""
        />

        <div className='font-semibold flex gap-3'>
            <p>Already have an account?</p>
            <Link href={"/login"}>
            <span className='text-primary/green'>login</span>

            </Link>
        </div>
       </div>

<hr />
    </div>
  )
}

export default Heading