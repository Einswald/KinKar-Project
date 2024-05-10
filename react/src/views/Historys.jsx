import React, {useState} from 'react'
import { IoEyeSharp } from 'react-icons/io5';
import ModalHistory from './modal/ModalHistory';

const Historys = () => {

    const [ShowModalHistory, setShowModalHistory] = useState(false);

    const handleOnClose = () => setShowModalHistory(false);

  return (
    <div className='pt-[25px] px-[25px] '>
        <h1 className='text-[28px] leading-[34px] font-bold cursor-pointer'>Your Goals</h1>

        <div class="flex flex-col bg-[#F0F3FF] bg-clip-border rounded-md w-full p-3 items-center">

            <table className='table-fixed w-8/12 border-collapse border-2 border-[#DDE6ED]'>
            <thead>
                <tr>
                <th className='p-1 border-2 border-[#DDE6ED] w-4/12'>Deskripsi</th>

                <th className='p-1 border-2 border-[#DDE6ED] w-2/12'>Goals</th>
                <th className='p-1 border-2 border-[#DDE6ED] w-2/12'>Survey</th>
                <th className='p-1 border-2 border-[#DDE6ED] w-2/12'>Total</th>
                <th className='p-1 border-2 border-[#DDE6ED] w-1/12'>Opsi</th>
                </tr>
            </thead>
            <tbody className='h-1/5'>
                <tr>
                <td className='p-2 border-2 border-[#DDE6ED]'>Indiana</td>
                <td className='p-2 border-2 border-[#DDE6ED]'>Indianapolis</td>
                <td className='p-2 border-2 border-[#DDE6ED]'>Indiana</td>
                <td className='p-2 border-2 border-[#DDE6ED]'>Indianapolis</td>
                <td className='p-2 border-1 border-[#DDE6ED] flex justify-center items-center'>

                    <button
                     onClick={() => setShowModalHistory(true)}
                     className='bg-[#FFAF45] rounded-md p-2 w-8 h-8 flex items-center justify-center text-white'
                    >
                     <IoEyeSharp />
                    </button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
            <ModalHistory onClose={handleOnClose} visible={ShowModalHistory} />
    </div>
  )
}

export default Historys
