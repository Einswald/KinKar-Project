import React from 'react'

const ModalHistory = ({visible, onClose}) => {
    const handleOnClose = () => {
        onClose()
    };

    if (!visible) return null;

    const TABLE_Goals = ["No", "Kategori", "Keterangan", "Target", "Realisasi", "Bobot"];
    const TABLE_Survey = ["No", "Keterangan", "Jawaban"];

    const TABLE_ROWS_Goals = [
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

    const TABLE_ROWS_Surveys = [
        {
            no: "1",
            description: "lalala",
            answer: "sangat baik",
        }
    ];

    const tdTable_goals = 'p-1 border-1 border-[#ffffff] font-serif text-center';
    const tdTable_survey = 'p-1 border-2 border-[#DDE6ED] font-serif text-center';

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
                <table className='table-auto border-collapse border-2 border-[#DDE6ED] w-9/12 '>
                    <thead className='rounded-md'>
                        <tr>
                            {TABLE_Goals.map((header, index) => (
                                <th key={index} className='p-1 border-1 border-[#ffffff]'>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS_Goals.map((row, index) => (
                            <tr key={index}>
                                <td className={`${tdTable_goals} w-1/12`}>{row.no}</td>
                                <td className={`${tdTable_goals} w-2/12`}>{row.category}</td>
                                <td className={`${tdTable_goals} w-3/12`}>{row.description}</td>
                                <td className={`${tdTable_goals} w-2/12`}>{row.target}</td>
                                <td className={`${tdTable_goals} w-2/12`}>{row.realisasi}</td>
                                <td className={`${tdTable_goals} w-2/12`}>{row.bobot}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* History survey */}
            <h1 className='text-[28px] leading-[34px] font-bold cursor-pointer my-3'>Your Surveys</h1>
            <div className='flex flex-col bg-[#F0F3FF] bg-clip-border rounded-md w-full p-3 items-center'>
                <table className='table-auto border-collapse border-2 border-[#DDE6ED] w-6/12 '>
                    <thead className='rounded-md'>
                        <tr>
                            {TABLE_Survey.map((header, index) => (
                                <th key={index} className='p-1 border-2 border-[#DDE6ED]'>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS_Surveys.map((row, index) => (
                            <tr key={index}>
                                <td className={`${tdTable_survey} w-1/12`}>{row.no}</td>
                                <td className={`${tdTable_survey} w-6/12`}>{row.description}</td>
                                <td className={`${tdTable_survey} w-2/12`}>{row.answer}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ModalHistory
