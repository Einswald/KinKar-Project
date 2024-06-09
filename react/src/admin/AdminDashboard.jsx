import React from 'react'

const AdminDashboard = () => {
  return (
    <div className='pt-[25px] px-[25px]'>
        <div className='flex flex-col'>
            <h2 className='text-[28px] leading-[34px] font-bold cursor-pointer'>Selamat Datang</h2>
            <h1 className='font-bold text-[15px]'>Admin</h1>
        </div>

        {/* Time */}
        <div className='flex mt-6 text-gray-700 bg-[#F0F3FF] bg-clip-border rounded-xl w-1/2 ml-6'>
            <div className='bg-neutral rounded-md max-w-md p-6'>
                <h2 className='text-2xl font-semibold mb-4'>Time</h2>
            </div>
        </div>

    </div>
  )
}

export default AdminDashboard
