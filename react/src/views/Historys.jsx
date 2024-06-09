import React, {useState} from 'react'
import { IoEyeSharp } from 'react-icons/io5';
import ModalHistory from './modal/ModalHistory';

const Historys = () => {

    const [ShowModalHistory, setShowModalHistory] = useState(false);
    const handleOnClose = () => setShowModalHistory(false);

    const TABLE_HEAD = ["No","Keterangan", "Nilai Goals", "Nilai Surveys", "Total", "Action"];

    const TABLE_ROWS = [
        {
            id: "2233",
            no: "1",
            description: "Triwulan 2",
            nilai_goals: "",
            nilai_survey: "",
            total: "",
       }
    ];

    const tdTable = 'p-2 border-2 border-[#DDE6ED] font-serif' ;

  return (
    <div className='pt-6 px-6 md:pt-8 md:px-8'>
        <h1 className='text-2xl md:text-2xl font-bold cursor-pointer text-left'>Your Historys</h1>

        <div class='flex flex-col items-center bg-clip-border rounded-md w-full p-3 bg-[#F0F3FF]'>
            <div className='w-7/12 overflow-x-auto'>
                <table className='table-auto w-full border-collapse border-2 border-[#DDE6ED]'>
                    <thead className='bg-[#92C7CF] rounded-md'>
                        <tr>
                            {TABLE_HEAD.map((header, index) => (
                                <th key={index} className='p-1 border-1 border-[#DDE6ED] text-[#FFF7FC]'>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map((row, index) => (
                            <tr key={index}>
                                <td className={`${tdTable} w-1/12`}>{row.no}</td>
                                <td className={`${tdTable} w-3/12`}>{row.description}</td>
                                <td className={`${tdTable} w-2/12`}>{row.nilai_goals}</td>
                                <td className={`${tdTable} w-2/12`}>{row.nilai_survey}</td>
                                <td className={`${tdTable} w-2/12`}>{row.total}</td>
                                <td className={`${tdTable} w-1/12`}>
                                    <div className='flex justify-center items-center'>
                                        <button
                                            onClick={() => setShowModalHistory(true)}
                                            className='bg-[#FFAF45] rounded-md p-1 w-8 h-8 flex justify-center items-center text-white'
                                            >
                                            <IoEyeSharp />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
            <ModalHistory onClose={handleOnClose} visible={ShowModalHistory} />
    </div>
  )
}

export default Historys
