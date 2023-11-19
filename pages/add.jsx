import React from 'react'
import DashboardHeading from '../components/DashboardHeading'
import ProfileHeading from '../components/ProfileHeading'
import MainEssay from '../components/dashboard/MainEssay'
import AddNewEssay from '../components/AddNewEssay'

const AddQuestionPage = () => {
  return (
    <div className='h-screen'>
       <ProfileHeading />
        <div className='flex w-4/6 mx-auto h-[90%]'>
           <AddNewEssay /> 
        </div>
    </div>
  )
}

export default AddQuestionPage