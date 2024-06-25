import React from 'react'

const Kpis = () => {

    const TABLE_GRADE_GOALS = [
        {grade: "Sangat Baik", score: ">=90"},
        {grade: "Baik", score: ">=75 - <90"},
        {grade: "Cukup", score: ">=60 - <75"},
        {grade: "Kurang", score: "<60"}
    ];

    const TABLE_GRADE_SURVEY = [
        {grade: "Sangat Baik", score: "=35"},
        {grade: "Baik", score: ">=28 - <35"},
        {grade: "Cukup", score: ">=14 - <28"},
        {grade: "Kurang", score: ">=7 - <14"}
    ];
  return (
    <div className='pt-6 px-6 md:pt-8 md:px-4'>
        <h1 className='text-2xl md:text-2xl font-bold cursor-pointer text-left'>Your Grade KPI</h1>
        <div className='flex flex-col items-center bg-clip-border rounded-md w-full p-5 bg-[#F0F3FF] shadow-xl'>
            <div className='flex w-full overflow-x-auto'>
                <div className='w-1/2 p-2'>
                <h2 className='mb-2 text-lg text-black font-semibold'>Grade KPI Survey</h2>
                    <table className='table-auto text-center border-collapse border-2 border-[#DDE6ED] w-full'>
                        <tbody>
                            {TABLE_GRADE_SURVEY.map((row, index) => (
                            <tr key={index}>
                                <td className='border border-[#DDE6ED] p-2'>{row.grade}</td>
                                <td className='border border-[#DDE6ED] p-2'>{row.score}</td>
                            </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
                <div className='w-1/2 p-2'>
                <h2 className='mb-2 text-lg text-black font-semibold'>Grade KPI Goals</h2>
                    <table className='table-auto text-center border-collapse border-2 border-[#DDE6ED] w-full'>
                        <tbody>
                            {TABLE_GRADE_GOALS.map((row, index) => (
                            <tr key={index}>
                                <td className='border border-[#DDE6ED] p-2'>{row.grade}</td>
                                <td className='border border-[#DDE6ED] p-2'>{row.score}</td>
                            </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kpis
