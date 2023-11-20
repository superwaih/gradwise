import React from "react";
import { HiArrowDownLeft, HiArrowLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link"
const MainEssay = () => {
  const arr = [1,2,3,4,5,6,7, 8, 9,10]
  return (
    <div className="px-8 w-full flex-col flex space-y-5 py-8">
      <div className="flex justify-between w-full">
      <div className="">
      <h3 className="text-2xl  font-bold">All Essay</h3>
      <p className="text-[#7E8696]">View all your questions and add new question</p>
      </div>

      <div>
       <Link href={"/add"}>
       <button className="login-btn px-3 py-3 text-white">Add new Questions</button></Link>

      </div>
      </div>
      <div className='flex  relative w-full border border-[#E2E2E3] px-3 gap-4  py-3 rounded-md bg-[#F8F9FB] items-center'>
        <IoIosSearch className='text-xl' />
                <input type="search" placeholder='Search for questions...' className='outline-none placeholder:text-[#A9ADB3] text-[#A9ADB3] bg-inherit w-full'  />

            </div>
     <table className="border p-3">
    <tr className="bg-[#FAFBFB] shadow-md px-3 text-[#42526D]">
      <td className="py-3 px-2 max-w-lg ">Questions</td>
      <td className="py-3 px-2">Maximum score</td>
      <td className="py-3 px-2">No of Students</td>
      <td className="py-3 px-2">Grade type</td>
      <td className="py-3 px-2">Date Created</td>
      <td className="py-3 px-2">Action</td>
    </tr>
   

    {
      arr.map((ar) => (
        

        <tr key={ar} className="text-[#101828] border w-full">
       <Link key={ar} href={"/singleessay"}>

        <td className="px-2 py-3">What is the impact of climate change on biodiversity and propose measures to mitigate...</td>
       </Link>
        <td className="px-3">60</td>
        <td>2</td>
        <td>Long Essay</td>
        <td>
          24-07-2024
        </td>
        <td className="rotate-180 px-2">
        <Link key={ar} href={"/singleessay"}>

          <HiArrowLeft />
        </Link>
        </td>
      </tr>
       
      ))
    }

   


    

     </table>
    </div>
  );
};

export default MainEssay;
