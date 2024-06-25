import React, { useState } from 'react'
import { RiEdit2Fill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import { CreateKpisGoalsModal, UpdateKpisGoalsModal, DeleteKpisGoalsModal } from './modal_admin/ModalGoalsKpis';

const AdminGoals = () => {
    const TABLE_HEAD = ["No", "Kategori", "Keterangan", "Target", "Realisasi", "Bobot", "Action"];

    const TABLE_ROWS = [
        {
            id: "1",
            no: "1",
            category: "as",
            description: "lalalala",
            target: "",
            realisasi: "",
            bobot: "",
        }
    ];

    const tdTable ='px-4 py-2 border-b border-[#DDE6ED]';

    const InputCell = () => (
        <input
            type='text'
            className='border-transparent p-1 rounded mb-1 w-full md:w-1/2 h-10'
        />
    );

    const [showModalGoalsCreate, setShowModalGoalsCreate] = useState(false);
    const [showModalGoalsUpdate, setShowModalGoalsUpdate] = useState(false);
    const [showModalGoalsDelete, setShowModalGoalsDelete] = useState(false);


    return (
        <div className='pt-6 px-6 md:pt-8 md:px-8'>
            <h1 className='text-2xl md:text-2xl font-bold cursor-pointer text-left'>Goals Data</h1>
                <div className='flex flex-col rounded-md bg-[#F0F3FF]'>
                    <div className='flex items-center justify-center'>
                        <table className='mt-2 w-9/12 min-w-max table-auto text-left border-b border-[#DDE6ED]' >
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
                                        <td className={`${tdTable} w-1/12`}>{row.no}</td>
                                        <td className={`${tdTable} w-2/12`}>{row.category}</td>
                                        <td className={`${tdTable} w-3/12`}>{row.description}</td>
                                        <td className={`${tdTable} w-2/12`}>{row.target} <InputCell /></td>
                                        <td className={`${tdTable} w-2/12`}>{row.realisasi} <InputCell /></td>
                                        <td className={`${tdTable} w-2/12`}>{row.bobot} <InputCell /></td>
                                        <td className={tdTable}>
                                            <div className='inline-flex'>
                                                <button className='text-blue-500 py-1 mr-3' onClick={() => setShowModalGoalsUpdate(true)}>
                                                    <RiEdit2Fill className='w-5 h-5' />
                                                </button>
                                                <button className='text-red-500 py-1' onClick={() => setShowModalGoalsDelete(true)}>
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
                                onClick={() => setShowModalGoalsCreate(true)}
                                className='bg-[#406882] text-white mb-2 rounded-md py-2 px-3 font-medium'
                            >Add New
                            </button>
                        </div>
                </div>
                <CreateKpisGoalsModal visible={showModalGoalsCreate} onClose={() => setShowModalGoalsCreate(false)} />
                <UpdateKpisGoalsModal visible={showModalGoalsUpdate} onClose={() => setShowModalGoalsUpdate(false)} />
                <DeleteKpisGoalsModal visible={showModalGoalsDelete} onClose={() => setShowModalGoalsDelete(false)} />
        </div>
    )
}

export default AdminGoals
