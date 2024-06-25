import React, { useState } from 'react'
import { RiEdit2Fill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import { CreateKpisSurveyModal, UpdateKpisSurveyModal, DeleteKpisSurveyModal } from './modal_admin/ModalSurveyKpis';

const AdminSurveys = () => {
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

    const TABLE_HEAD = ["No", "Kategory", "Keterangan", ...options.map(option => option.label), "Action"];

    const [showModalSurveyCreate, setShowModalSurveyCreate] = useState(false);
    const [showModalSurveyUpdate, setShowModalSurveyUpdate] = useState(false);
    const [showModalSurveyDelete, setShowModalSurveyDelete] = useState(false);

    const TABLE_ROWS = [
        {
            id: "1",
            no: "1",
            category: "as",
            description: "lalalala"
        }
    ];

    const tdTable = 'px-4 py-2 border-b border-[#DDE6ED]';

    return (
        <div className='pt-6 px-6 md:pt-8 md:px-8'>
            <h1 className='text-2xl md:text-2xl font-bold cursor-pointer text-left'>Surveys Data</h1>
            <div className='flex flex-col rounded-md bg-[#F0F3FF]'>
                <div className='flex items-center justify-center'>
                    <table className='mt-2 w-6/12 min-w-max table-auto text-left border-b border-[#DDE6ED]'>
                        <thead className='bg-[#9DB2BF] rounded-md'>
                            <tr>
                                {TABLE_HEAD.map((header, index) => (
                                    <th key={index} className='px-4 py-2 border-b border-[#DDE6ED] text-[#FFF7FC] '>{header}</th>
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
                                    <td className={tdTable}>
                                        <div className='inline-flex'>
                                            <button className='text-blue-500 py-1 mr-3' onClick={() => setShowModalSurveyUpdate(true)}>
                                                <RiEdit2Fill className='w-5 h-5' />
                                            </button>
                                            <button className='text-red-500 py-1' onClick={() => setShowModalSurveyDelete(true)}>
                                                <MdDelete className='w-5 h-5' />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='mt-4 flex items-center justify-center'>
                    <button
                        onClick={() => setShowModalSurveyCreate(true)}
                        className='bg-[#406882] text-white mb-2 rounded-md py-2 px-3 font-medium'
                    >Add New
                    </button>
                </div>
            </div>
            <CreateKpisSurveyModal visible={showModalSurveyCreate} onClose={() => setShowModalSurveyCreate(false)} />
            <UpdateKpisSurveyModal visible={showModalSurveyUpdate} onClose={() => setShowModalSurveyUpdate(false)} />
            <DeleteKpisSurveyModal visible={showModalSurveyDelete} onClose={() => setShowModalSurveyDelete(false)} />
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
        />
      </div>
    )
}

export default AdminSurveys
