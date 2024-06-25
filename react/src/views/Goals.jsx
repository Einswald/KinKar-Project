import React, { useState } from 'react'
import ModalHistory from './modal/ModalHistory';

const Goals = () => {

    const [ShowHistoryGoals, setShowHistoryGoals] = useState(false);

    const TABLE_HEAD = ["No", "Category", "Description", "Target", "Realisasi", "Bobot"];

    const TABLE_ROWS = [
        {
            id: "2233",
            no: "1",
            category: "Waktu",
            description: "Lalalla",
            target: "",
            realisasi: "",
            bobot: "",
       }
    ];

    const tdTable = 'p-1 border-1 border-[#ffffff] font-serif text-center';

    const InputCell = () => (
        <input
            type='text'
            className='border-transparent p-1 rounded mb-1 w-full md:w-1/2 h-10'
        />
    );

    return (
        <div className='pt-6 px-6 md:pt-8 md:px-4'>
            <h1 className='text-2xl md:text-2xl font-bold cursor-pointer text-left'>Your Goals</h1>

            <div className='flex flex-col items-center bg-clip-border rounded-md w-full p-5 bg-[#F0F3FF] shadow-xl'>
                <div className='w-full overflow-x-auto'>
                    <table className='table-auto text-center border-collapse border-2 border-[#DDE6ED] w-full'>
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((header, index) => (
                                    <th key={index} className='p-1 border-1 border-[#ffffff] '>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_ROWS.map((row, index) => (
                                <tr key={index}>
                                    <td className={`${tdTable} w-[5%]`}>{row.no}</td>
                                    <td className={`${tdTable} w-[20%]`}>{row.category}</td>
                                    <td className={`${tdTable} w-[20%]`}>{row.description}</td>
                                    <td className={`${tdTable} w-[15%]`}>{row.target}<InputCell /></td>
                                    <td className={`${tdTable} w-[15%]`}>{row.realisasi}<InputCell /></td>
                                    <td className={`${tdTable} w-[15%]`}>{row.bobot}<InputCell /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='mt-4'>
                    <button
                        onClick={() => setShowHistoryGoals(false)}
                        className='bg-[#365486] text-white font-bold py-2 px-4 rounded hover:bg-blue-400'>
                        Simpan
                    </button>
                </div>
                <ModalHistory visible={ShowHistoryGoals} onClose={() => setShowHistoryGoals(false)} />
            </div>
        </div>
    )
}

export default Goals
