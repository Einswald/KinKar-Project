import React, { useState } from 'react';
import { IoEyeSharp } from 'react-icons/io5';
import ModalHistory from './modal/ModalHistory';

const Historys = () => {
  const [ShowModalHistory, setShowModalHistory] = useState(false);
  const handleOnClose = () => setShowModalHistory(false);

  const TABLE_HEAD = ["No", "Keterangan", "Nilai Goals","Status Goals", "Nilai Surveys","Status Surveys", "Action"];

  const TABLE_ROWS = [
    {
      id: "2233",
      no: "1",
      description: "Triwulan 2",
      nilai_goals: "",
      status_goals: "",
      nilai_survey: "",
      status_survey: "",
    }
  ];

  const tdTable = 'p-2 border-2 border-[#DDE6ED] font-serif';

  return (
    <div className='pt-6 px-4 md:pt-8 md:px-4'>
      <h1 className='text-2xl md:text-2xl font-bold cursor-pointer text-left'>Your Historys</h1>

      <div className='flex flex-col items-center bg-clip-border rounded-md p-5 bg-[#F0F3FF] shadow-xl '>
        <div className='w-full overflow-x-auto'>
          <table className='table-auto w-full text-center border-2 border-[#DDE6ED]'>
            <thead>
              <tr>
                {TABLE_HEAD.map((header, index) => (
                  <th key={index} className='p-1 border-2 border-[#DDE6ED]'>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row, index) => (
                <tr key={index}>
                  <td className={`${tdTable} w-[5%]`}>{row.no}</td>
                  <td className={`${tdTable} w-[30%]`}>{row.description}</td>
                  <td className={`${tdTable} w-[15%]`}>{row.nilai_goals}</td>
                  <td className={`${tdTable} w-[15%]`}>{row.status_goals}</td>
                  <td className={`${tdTable} w-[15%]`}>{row.nilai_survey}</td>
                  <td className={`${tdTable} w-[15%]`}>{row.status_survey}</td>
                  <td className={`${tdTable} w-[5%]`}>
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
  );
}

export default Historys;
