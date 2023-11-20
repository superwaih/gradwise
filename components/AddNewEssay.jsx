import React from 'react'
import Link from "next/link"
const AddNewEssay = () => {

  return (
    <div className="px-8 w-full flex-col flex space-y-5 py-8">
    <div className="flex flex-col items-center justify-center">
    <h3 className="text-2xl  font-bold">All Essay</h3>
    <p className="text-[#7E8696]">View all your questions and add new question</p>
    </div>


    <div className='flex flex-col space-y-4 border p-3 rounded-md'>
        <div className='flex flex-col space-y-3 '>
            <div className='flex font-bold w-full justify-between'>
                <h3>Enter essay Question</h3>
                <p>0/500</p>
            </div>

            <textarea rows={2} className='border w-full p-3' placeholder='enter a essay' />
        </div>

        <div className='flex flex-col space-y-3 '>
            <div className='flex font-bold w-full justify-between'>
                <h3>Enter essay Question</h3>
                
            </div>
           <select className='bg-white border p-3 ' name="" id="">
            <option value=""></option>

           </select>
        </div>

        <div className='flex flex-col space-y-3 '>
            <div className='flex font-bold w-full justify-between'>
                <h3>Grade</h3>
                
            </div>
           <input type="number" className='border w-full p-3' placeholder='0' />
        </div>


    <div className='flex justify-end w-full'>
     <Link href={"/add"}>
     <button className="login-btn px-3 py-3 text-white">Add new Questions</button></Link>

    </div>
    </div>
   
 
  
  </div>
  )
}

export default AddNewEssay