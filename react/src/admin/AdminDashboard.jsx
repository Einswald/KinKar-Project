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
            <h3 className='text-xl font-semibold mb-3 text-black italic'>Penilaian Sedang Berlangsung.....</h3>
            <h2 className='text-lg text-black italic mb-2'>Periode Januari - Maret</h2>
            <p className='mb-3'>Tanggal Mulai : <span className='font-bold'>01 April 2025</span></p>
            <p>Tanggal Selesai : <span className='font-bold'>10 April 2025</span></p>
          </div>
        </div>

    </div>
  )
}

export default AdminDashboard
