import React from 'react'

const AdminHeader = () => {
  return (
    <div className='flex justify-between h-[70px] w-full shadow-lg px-[25px] items-center'>
        <div className='flex items-center ml-auto bg-[#365486] rounded-full'>
          <div className='px-5 py-4 font-bold  rounded-full '>
              <h1 className='text-white'>Hello, Admin</h1>
          </div>
          <div className='h-[50px] w-[50px] rounded-full bg-white ml-2 mr-1'>
            <img src='../asset/Cute.jpg' alt='Cutee' className='rounded-full'/>
          </div>
        </div>
    </div>
  )
}

export default AdminHeader
