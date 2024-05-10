import React, { useState } from 'react'
// import { IoEyeSharp } from 'react-icons/io5';
//import ModalGoals from '../modal/ModalGoals';
// import { Link } from 'react-router-dom';

const Goals = () => {
    // const [ShowModalGoals, setShowModalGoals] = useState(false);

    // const handleOnClose = () => setShowModalGoals(false);


  return (
    <div className='pt-[25px] px-[25px] '>
        <h1 className='text-[28px] leading-[34px] font-bold cursor-pointer'>Your Goals</h1>

        <div className='flex flex-col bg-clip-border rounded-md w-full p-3 items-center bg-[#F0F3FF]'>

            <table className='table-fixed border-collapse border-2 border-[#DDE6ED] w-9/12 '>
            <thead>
                <tr>
                <th className='p-1 border-1 border-[#ffffff] w-1/12 text-left'>No</th>
                <th className='p-1 border-1 border-[#ffffff] w-3/12 text-left'>Deskripsi</th>
                <th className='p-1 border-1 border-[#ffffff] w-2/12 text-left'>Kategori</th>
                <th className='p-1 border-1 border-[#ffffff] w-2/12 text-left'>Bobot</th>
                <th className='p-1 border-1 border-[#ffffff] w-2/12 text-left'>Target</th>
                <th className='p-1 border-1 border-[#ffffff] w-2/12 text-left'>Realisasi</th>

                </tr>
            </thead>
            <tbody className='h-1/5'>
                <tr>
                <td className='p-1 border-1 border-[#ffffff]'>1</td>
                <td className='p-1 border-1 border-[#ffffff]'>Indiana</td>
                <td className='p-1 border-1 border-[#ffffff]'>Indianapolis</td>
                <td className='p-1 border-1 border-[#ffffff]'></td>
                <td className='p-1 border-1 border-[#ffffff]'>
                    <input
                        type='text'
                        className='border-transparant p-1 rounded mb-1 w-1/2 h-10'
                    />
                </td>
                <td className='p-1 border-1 border-[#ffffff]'>
                    <input
                        type='text'
                        className='border-transparant p-1 rounded mb-1 w-1/2 h-10'
                    />
                </td>
                </tr>
            </tbody>
            </table>

            <div className='mt-4'>
                <button className='bg-[#365486] text-white font-bold py-2 px-4 rounded'>
                        Simpan
                </button>
            </div>

        </div>
    </div>

  )
}

export default Goals
