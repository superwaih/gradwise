import React from 'react'
import HomeIcon from '../../assets/icons/HomeIcon'
import EssayIcon from '../../assets/icons/EssayIcon'

const Sidebar = () => {
  return (
    <div className='bg-[#F8F9FB] border border-[#E4E7EC] w-[350px]  px-2 py-8'>

        <div className='px-3 flex gap-3 items-center border-2 border-[#335744] text-white home-btn py-4'>
           <HomeIcon />
           <p> Home</p>
        </div>

        <div className='px-3 flex gap-3 items-center  text-black font-semibold py-4'>
           <EssayIcon />
           <p> All Essays</p>
        </div>
    </div>
  )
}

export default Sidebar