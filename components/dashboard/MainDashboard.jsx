import React from "react";
import BigEssayIcon from "../../assets/icons/BigEssayIcon";
import { HiArrowDownLeft, HiArrowLeft } from "react-icons/hi2";
import WritingIcon from "../../assets/icons/WritingIcon";
import AdmissionIcon from "../../assets/icons/AdmissionIcon";
import { useRouter } from "next/router";

const MainDashboard = () => {
  const router = useRouter()
  return (
    <div className="px-8  flex-col w-full flex space-y-5 py-8">
      <h3 className="text-2xl font-bold">Welcome,</h3>
      <p className="text-[#7E8696]">What do you want to do today?</p>
      <section className="bg-[#F8F9FB] justify-between  flex gap-4 w-full rounded-md border-[#E4E7EC] border px-4 py-3 ">
        {/* <div className="  rounded-md bg-white p-3 flex flex-col space-y-4">
          <BigEssayIcon />
          <div>
            <h3 className="font-bold text-xl">Grade a new submission</h3>
            <p className="text-[#6B7B85]">
              Grade essay or long assignments for different courses.
            </p>
          </div>

          <a href="https://1a91-102-89-33-75.ngrok-free.app">
            <button className="text-primary/green flex items-center gap-3 font-bold ">
              <span>Start new grading</span>
              <HiArrowLeft className="rotate-180" />
            </button>
          </a>
        </div> */}

        <div className="w-1/2  rounded-md flex bg-white p-3  flex-col space-y-4">
          <WritingIcon />
          <div>
            <h3 className="font-bold text-xl">Add a new question</h3>
            <p className="text-[#6B7B85]">
              Grade essay or long assignments for different courses.
            </p>
          </div>
          
          <button 
          // onClick={() =>router.push("essay")} 
          
          className="text-primary/green flex items-center gap-3 font-bold ">
            <p>Go to essay</p>
            <HiArrowLeft className="rotate-180" />
          </button>
        </div>

        <div className=" w-1/2  rounded-md flex bg-white p-3 flex-col space-y-4">
          <AdmissionIcon />
          <div>
            <h3 className="font-bold text-xl">Grade Responses</h3>
            <p className="text-[#6B7B85]">
              Grade essay or long assignments for different courses.
            </p>
          </div>
          <a href="https://1a91-102-89-33-75.ngrok-free.app/responses">
            <button onClick={() =>router.push("essay")} className="text-primary/green flex items-center gap-3 font-bold ">
              <span>Go to submission</span>
              <HiArrowLeft className="rotate-180" />
            </button>
          </a>
        </div>
      </section>

      <section className="py-8 relative ">
        <h3 className="text-center font-bold text-xl">
          How Gradewise.ai works
        </h3>
        <div className="flex w-4/5 py-12  x bg-white justify-between mx-auto items-center">
          <div className="flex flex-col space-y-3 items-center justify-center text-center">
            <p className="rounded-[100%] z-50  w-fit bg-black px-8 py-7">
              <span className="text-white font-semibold">1</span>
            </p>
            <p className="font-semibold">Enter Essay information</p>
          </div>

          <div className="flex flex-col space-y-3 items-center justify-center text-center">
            <p className="rounded-[100%] z-50  w-fit bg-black px-8 py-7">
              <span className="text-white font-semibold">2</span>
            </p>
            <p className="font-semibold text-black">Select grading criteria</p>
          </div>

          <div className="flex flex-col space-y-3 items-center justify-center text-center">
            <p className="rounded-[100%] z-50  w-fit bg-black px-8 py-7">
              <span className="text-white font-semibold">3</span>
            </p>
            <p className="font-semibold text-black">Enter Submission details</p>
          </div>
        </div>

        <div className="border-b-[1px] w-[70%]  absolute top-[40%] left-[15%] right-[10%] border-[#E1E4E1"></div>
        {/* <div className="flex items-center justify-center">
          <button className="login-btn text-white px-5 py-3">
            Start New grading
          </button>
        </div> */}
      </section>
    </div>
  );
};

export default MainDashboard;
