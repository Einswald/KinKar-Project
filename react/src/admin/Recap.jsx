import React, {useState} from 'react'
import { RiEdit2Fill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { CreateRecapModal, UpdateRecapModal, DeleteRecapModal } from './modal_admin/ModalRecap';

const Recap = () => {

    const TABLE_HEAD = ["No", "Id", "Name", "Department", "SurveyResult","GoalsResult","Status", "Action"];

    const TABLE_ROWS = [
        {
            no: "1",
            id: "2233",
            name: "Jungkook jungkook",
            department: "manajemen",
            survey_result: "90",
            goals_result: "90",
            status: "",
       }
    ];

    const tdTable ='px-4 py-2 border-b border-[#DDE6ED]';

    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    return (
        <div className='pt-6 px-6 md:pt-8 md:px-8'>
            <h1 className='text-2xl md:text-2xl font-bold cursor-pointer text-left'>Schedule</h1>
            <div className='flex flex-col rounded-md bg-[#F0F3FF]'>
                <div className='flex items-start p-5'>
                    <input type="text"
                        className='bg-white h-[40px] outlined-sm pl-[13px] w-[300px] rounded-xl placeholder:text-[14px] leading-[20px] font-normal'
                        placeholder='search for..'
                    />
                    <FaSearch className='-ml-6 my-3 w-3 h-4 text-gray-400'/>
                </div>
                <div className='flex items-center justify-center px-5'>
                    <table className='mt-2 w-full min-w-max table-auto text-left border-b border-[#DDE6ED]'>
                        <thead className='bg-[#9DB2BF] rounded-md'>
                            <tr>
                                {TABLE_HEAD.map((header, index) => (
                                    <th key={index} className='px-4 py-2 border-b border-[#DDE6ED] text-[#FFF7FC]'>{header}</th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {TABLE_ROWS.map((row, index) => (
                                <tr key={index} >
                                    <td className={tdTable}>{row.no}</td>
                                    <td className={tdTable}>{row.id}</td>
                                    <td className={tdTable}>{row.name}</td>
                                    <td className={tdTable}>{row.department}</td>
                                    <td className={tdTable}>{row.survey_result}</td>
                                    <td className={tdTable}>{row.goals_result}</td>
                                    <td className={tdTable}>{row.status}</td>
                                    <td className={tdTable}>
                                        <button className='text-blue-500 py-1 mr-3' onClick={() => setShowModalUpdate(true)}>
                                            <RiEdit2Fill className='w-5 h-5' />
                                        </button>
                                        <button className='text-red-500 py-1'onClick={() => setShowModalDelete(true)}>
                                            <MdDelete className='w-5 h-5' />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                    <div className='mt-4 flex items-center justify-center'>
                        <button
                            onClick={() => setShowModalCreate(true)}
                            className=' bg-[#406882] text-white mb-2 rounded-md py-2 px-3 font-medium'
                            >Add New
                        </button>
                    </div>
            </div>
            <CreateRecapModal visible={showModalCreate} onClose={() => setShowModalCreate(false)} />
            <UpdateRecapModal visible={showModalUpdate} onClose={() => setShowModalUpdate(false)} />
            <DeleteRecapModal visible={showModalDelete} onClose={() => setShowModalDelete(false)} />
        </div>

  )
}

export default Recap
