import React from 'react'

const Kpis = () => {

    const TABLE_HEAD = ["Keterangan", "Status Goals", "Status Surveys"];

    const TABLE_ROWS = [
        {
            id: "2233",
            description: "Triwulan 2",
            status_goals: "",
            status_survey: "",
       }
    ];

    const tdTable = 'p-2 border-2 border-[#DDE6ED] font-serif' ;
  return (
    <div className='pt-6 px-6 md:pt-8 md:px-8'>
        <h1 className='text-2xl md:text-2xl font-bold cursor-pointer text-left'>Your KPI Status</h1>
        <div className='flex flex-col items-center bg-clip-border rounded-md w-full p-3 bg-[#F0F3FF]'>
            <div className='overflow-x-auto w-7/12'>
                <table className='table-fixed border-collapse border-2 border-[#DDE6ED] w-full'>
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
                                <td className={tdTable}>{row.description}</td>
                                <td className={tdTable}>{row.status_goals}</td>
                                <td className={tdTable}>{row.status_survey}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Kpis
