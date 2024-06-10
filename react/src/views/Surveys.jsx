import React, { useState } from 'react';
import ModalHistory from './modal/ModalHistory';

const Surveys = () => {

    const [ShowHistorySurveys, setShowHistorySurveys] = useState(false);

    const [selectedOption, setSelectedOption] = useState(null);

    const [selectedOptions, setSelectedOptions] = useState({
        '1': null,
    });

    const handleOptionChange = (e) => {
        const { name, value } = e.target;

        setSelectedOptions(prevOptions => ({
            ...prevOptions,
            [name]: value,
        }));
    };

    const options = [
        { id: 's', label: 'Sangat Baik' },
        { id: 'b', label: 'Baik' },
        { id: 'c', label: 'Cukup' },
        { id: 'k', label: 'Kurang' },
        { id: 'u', label: 'Kurang Sekali' },
    ];

    const TABLE_HEAD = ["No", "Kategori", "Keterangan", ...options.map(option => option.label)];

    const TABLE_ROWS = [
        {
            id: "1",
            no: "1",
            category: "as",
            description: "lalalala"
        }
    ];

    const tdTable = 'p-2 border-2 border-[#DDE6ED] font-serif';

    return (
      <div className='pt-6 px-6 md:pt-8 md:px-8'>
        <h1 className='text-2xl md:text-2xl font-bold cursor-pointer text-left'>Your Surveys</h1>

        <div className='flex flex-col items-center bg-clip-border rounded-md w-full p-3 bg-[#F0F3FF]'>
           <div className='w-8/12 overflow-x-auto'>
                <table className=' table-auto border-collapse border-2 border-[#DDE6ED] w-full'>
                    <thead className='bg-[#92C7CF] rounded-md'>
                        <tr>
                            {TABLE_HEAD.map((header, index) => (
                                <th key={index} className='p-1 border-1 border-[#DDE6ED] text-[#FFF7FC]'>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map((row) => (
                            <tr key={row.id}>
                                <td className={`${tdTable} w-1/12`}>{row.no}</td>
                                <td className={`${tdTable} w-2/12`}>{row.category}</td>
                                <td className={`${tdTable} w-4/12`}>{row.description}</td>
                                {options.map(option => (
                                <td key={option.id} className={`${tdTable} w-1/12`}>
                                    <RadioButton
                                        name={row.id}
                                        value={option.id.toUpperCase()}
                                        checked={selectedOptions[row.id] === option.id.toUpperCase()}
                                        onChange={handleOptionChange}
                                        className='form-radio text-blue-500 focus:ring-blue-500 h-4 w-4'
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
           </div>
            <div className='mt-4'>
                <button
                 onClick={() => setShowHistorySurveys(false)}
                 className='bg-[#365486] text-white font-bold py-2 px-4 rounded hover:bg-blue-400'>
                        Simpan
                </button>
            </div>
              <ModalHistory visible={ShowHistorySurveys} onClose={() => setShowHistorySurveys(false)}/>
        </div>
      </div>
    )
  }

  const RadioButton = ({ name, value, checked, onChange }) => {
    return (
      <div className='flex items-center space-x-2 justify-center'>
        <input
          type="radio"
          id={value}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className='text-blue-500 focus:ring-blue-500 h-4 w-4'
        />
      </div>
    );
  };

  export default Surveys;
