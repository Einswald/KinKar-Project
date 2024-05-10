import React, { useState } from 'react';

const Surveys = () => {
    const [selectedOptions, setSelectedOptions] = useState({
      's': null,
      'b': null,
      'c': null,
      'k': null,
      'u': null,
    });

    const handleOptionChange = (e) => {
      const { name, value } = e.target;

      setSelectedOptions(prevOptions => ({
        ...prevOptions,
        [name]: value,
      }));
    };

    const options = [
      { id: 's', label: 'Sangat Baik'},
      { id: 'b', label: 'Baik' },
      { id: 'c', label: 'Cukup' },
      { id: 'k', label: 'Kurang' },
      { id: 'u', label: 'Kurang Sekali' },
    ];

    const keteranganData = [
      { id: 1, text: 'Keterangan 1' },
      { id: 2, text: 'Keterangan 2' },
    ];

    return (
      <div className='pt-[25px] px-[25px] '>
        <h1 className='text-[28px] leading-[34px] font-bold cursor-pointer'>Your Surveys</h1>

        <div className="flex flex-col bg-[#F0F3FF] bg-clip-border rounded-md w-full p-3 items-center">

          <table className='table-fixed border-collapse border-2 border-[#DDE6ED] w-8/12 '>
            <thead>
              <tr>
                <th className='p-2 border-2 border-[#DDE6ED] w-5/12'>Keterangan</th>
                {options.map(option => (
                  <th key={option.id} className='p-2 border-2 border-[#DDE6ED] w-1/12'>{option.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {keteranganData.map(keterangan => (
                <tr key={keterangan.id}>
                  <td className='p-2 border-2 border-[#DDE6ED]'>{keterangan.text}</td>
                  {options.map(option => (
                    <td key={option.id} className='p-2 border-2 border-[#DDE6ED]'>
                      <RadioButton
                        name={keterangan.id}  // untuk membuat keterangan
                        value={option.id.toUpperCase()}
                        checked={selectedOptions[keterangan.id] === option.id.toUpperCase()}
                        onChange={handleOptionChange}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

            <div className='mt-4'>
                <button
                 onClick={() => setShowHistoryGoals(true)}
                 className='bg-[#365486] text-white font-bold py-2 px-4 rounded'>
                        Simpan
                </button>
            </div>

        </div>
      </div>
    )
  }

  const RadioButton = ({ name, value, checked, onChange }) => {
    return (
      <div className="flex items-center space-x-2 justify-center">
        <input
          type="radio"
          id={value}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="text-blue-500 focus:ring-blue-500 h-4 w-4"
        />
      </div>
    );
  };

  export default Surveys;
