import React from 'react'

const Kpis = () => {
  return (
    <div className='pt-[25px] px-[25px] '>
        <h1 className='text-[28px] leading-[34px] font-bold cursor-pointer'>Your Goals</h1>

        <div className='overflow-x-auto'>
        <div className='min-w-auto max-w-full bg-[#F0F3FF] bg-clip-border rounded-md w-full p-3 flex justify-center'>

            <table className='w-full sm:w-7/12 '>
            <thead>
                <tr>
                <th className='p-1 border-2 border-[#DDE6ED] w-4/12'>Deskripsi</th>

                <th className='p-1 border-2 border-[#DDE6ED] w-2/12'>Goals</th>
                <th className='p-1 border-2 border-[#DDE6ED] w-2/12'>Survey</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                <td className='p-2 border-2 border-[#DDE6ED]'>Indiana</td>
                <td className='p-2 border-2 border-[#DDE6ED]'>Indianapolis</td>
                <td className='p-2 border-2 border-[#DDE6ED]'>Indiana</td>

                </tr>
            </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}

export default Kpis
