import React from 'react'

const Goals = () => {
  return (
    <div className='pt-[25px] px-[25px]'>
        <h1 className='text-[28px] leading-[34px] font-bold cursor-pointer'>Your Goals</h1>

        <table className='w-full border-collapse border border-gray-400'>
        <thead>
            <tr>
            <th className='p-3 border border-gray-200'>State</th>
            <th className='p-3 border border-gray-200'>City</th>
	        <th className='p-3 border border-gray-200'>State</th>
            <th className='p-3 border border-gray-200'>City</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td className='p-3 border border-gray-300'>Indiana</td>
            <td className='p-3 border border-gray-300'>Indianapolis</td>
            <td className='p-3 border border-gray-300'>Indiana</td>
            <td className='p-3 border border-gray-300'>Indianapolis</td>
            </tr>
        </tbody>
        </table>

    </div>

  )
}

export default Goals
