import React from 'react'

const ModalHistory = ({visible, onClose}) => {
    const handleOnClose = () => {
        onClose()
    };

    if (!visible) return null;

  return (

    <div
     onClick={handleOnClose}
     className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'
    >
        <div className='bg-white p-2 rounded w-3/4'>
            <div className='relative'>
                <button onClick={onClose} className='absolute -top-5 -right-5 w-12 h-12 bg-slate-500 rounded-full'>
                    <span className='text-2xl text-white'>X</span>
                </button>
            </div>

            {/* History Goals */}
            <h1 className='text-[28px] leading-[34px] font-bold cursor-pointer mb-3'>Your Goals</h1>

            <div className='flex flex-col bg-[#F0F3FF] bg-clip-border rounded-md w-full p-3 items-center'>

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
                        <td className='p-1 border-1 border-[#ffffff]'></td>
                        <td className='p-1 border-1 border-[#ffffff]'></td>
                        </tr>
                    </tbody>
                    </table>
            </div>
            {/* History survey */}
            <h1 className='text-[28px] leading-[34px] font-bold cursor-pointer my-3'>Your Surveys</h1>

            <div className='flex flex-col bg-[#F0F3FF] bg-clip-border rounded-md w-full p-3 items-center'>
                <table className='table-fixed border-collapse border-2 border-[#DDE6ED] w-6/12 '>
                    <thead>
                        <tr>
                        <th className='p-2 border-2 border-[#DDE6ED] w-5/12 text-left'>Keterangan</th>
                        <th className='p-2 border-2 border-[#DDE6ED] w-1/12 text-left'>Jawaban</th>
                        </tr>
                    </thead>
                    <tbody className='h-1/5'>
                        <tr>
                        <td className='p-2 border-2 border-[#DDE6ED]'>1</td>
                        <td className='p-2 border-2 border-[#DDE6ED]'>Indiana</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ModalHistory
