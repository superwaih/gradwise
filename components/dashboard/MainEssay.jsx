import React from "react";
import BigEssayIcon from "../../assets/icons/BigEssayIcon";
import { HiArrowDownLeft, HiArrowLeft } from "react-icons/hi2";
import WritingIcon from "../../assets/icons/WritingIcon";
import AdmissionIcon from "../../assets/icons/AdmissionIcon";

const MainEssay = () => {
  return (
    <div className="px-8  flex-col flex space-y-5 py-8">
      <div className="flex">
      <div className="">
      <h3 className="text-2xl  font-bold">All Essay</h3>
      <p className="text-[#7E8696]">View all your questions and add new question</p>
      </div>

      <div>
        <button className="login-btn px-4 py-5 text-white">Add new Questions</button>

      </div>
      </div>
     
    </div>
  );
};

export default MainEssay;
