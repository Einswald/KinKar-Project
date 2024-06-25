import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { RiEdit2Fill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import { FaSearch} from 'react-icons/fa';
import { CreateDepartmentModal, UpdateDepartmentModal, DeleteDepartmentModal } from './modal_admin/ModalDepartment';
import ModalDetailDepartment from './modal_admin/ModalDetailDepartment';

const Department = () => {

    const navigate = useNavigate();

    const TABLE_HEAD = ["No", "Id", "Name", "Department", "Action"];
    const TABLE_ROWS = [
        { no: "1", id: "2244", name: "Jungkook", department: "manajemen" }
    ];
    const tdTable = 'px-4 py-2 border-b border-[#DDE6ED]';

    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const [showDetailBiodata, setShowDetailBiodata] = useState(false);

    return (
        <div className='pt-6 px-6 md:pt-8 md:px-8'>
            <h1 className='text-2xl md:text-2xl font-bold cursor-pointer text-left'>Employee Department Data</h1>
            <div className='flex flex-col rounded-md bg-[#F0F3FF]'>
                <div className='flex items-center justify-between p-5'>
                    <div className='flex items-center'>
                        <input type="text"
                            className='bg-white h-[40px] outlined-sm pl-[13px] w-[300px] rounded-xl placeholder:text-[14px] leading-[20px] font-normal'
                            placeholder='search for..'
                        />
                        <FaSearch className='-ml-6 my-3 w-3 h-4 text-gray-400' />
                    </div>
                    <button
                        onClick={() => setShowModalCreate(true)}
                        className='bg-[#406882] text-white mb-2 rounded-md py-2 px-3 font-medium'
                    >Add New
                    </button>
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
                                    <td className={`${tdTable} w-1/12`}>{row.no}</td>
                                    <td className={`${tdTable} w-3/12`}>{row.id}</td>
                                    <td className={`${tdTable} w-4/12`}>{row.name}</td>
                                    <td className={`${tdTable} w-3/12`}>{row.department}</td>
                                    <td className={`${tdTable} w-2/12`}>
                                        <div className='inline-flex'>
                                            <button className='text-blue-500 py-1 mr-3' onClick={() => setShowModalUpdate(true)}>
                                                <RiEdit2Fill className='w-5 h-5' />
                                            </button>
                                            <button className='text-red-500 py-1 mr-10' onClick={() => setShowModalDelete(true)}>
                                                <MdDelete className='w-5 h-5' />
                                            </button>
                                            <button className='text-yellow-500 py-1 mr-10 ' onClick={() => setShowDetailBiodata(true)}>
                                                Detail
                                            </button>
                                            <button className='text-cyan-700 font-semibold py-1 px-2 underline underline-offset-8' onClick={() => navigate('/admin/adminkpis')}>
                                                KPI
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

            <CreateDepartmentModal visible={showModalCreate} onClose={() => setShowModalCreate(false)} />
            <UpdateDepartmentModal visible={showModalUpdate} onClose={() => setShowModalUpdate(false)} />
            <DeleteDepartmentModal visible={showModalDelete} onClose={() => setShowModalDelete(false)} />
            <ModalDetailDepartment visible={showDetailBiodata} onClose={() => setShowDetailBiodata(false)} />
        </div>
    )
}

export default Department;
