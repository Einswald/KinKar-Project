import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { RiEdit2Fill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';

const AdminKpis = () => {

    const navigate = useNavigate();

    const TABLE_HEAD = ["Id user", "Keterangan", "Status Goals", "Status Surveys", "Action"];

    const tdTable = 'px-4 py-2 border-b border-[#DDE6ED]';

    const InputCell = ({ value }) => (
        <input
            type='text'
            value={value}
            className='border-transparent p-1 rounded mb-1 w-full md:w-1/2 h-10'
        />
    );

    const StatusCell = ({ initialStatus }) => {
        const [status, setStatus] = useState(initialStatus);

        const handleClick = () => {
            if (status === 'Belum dikerjakan') {
                setStatus('Sangat Baik');
            } else if (status === 'Sangat Baik') {
                setStatus('Baik');
            } else if (status === 'Baik') {
                setStatus('Cukup');
            } else if (status === 'Cukup') {
                setStatus('Kurang');
            } else {
                setStatus('Belum dikerjakan');
            }
        };

        const getColor = () => {
            if (status === 'Sangat Baik') {
                return 'bg-green-600';
            } else if (status === 'Baik') {
                return 'bg-blue-600';
            } else if (status === 'Cukup') {
                return 'bg-yellow-600';
            } else if (status === 'Kurang') {
                return 'bg-red-600';
            } else {
                return 'bg-gray-600';
            }
        };

        return (
            <div
                className={`w-max p-1 rounded-md text-sm font-semibold cursor-pointer ${getColor()}`}
                onClick={handleClick}
                style={{ color: 'white' }}
            >
                {status}
            </div>
        );
    };

    const [tableRows, setTableRows] = useState([
        {
            id_user: "",
            keterangan: "",
            status_goals: "Belum dikerjakan",
            status_survey: "Belum dikerjakan",
        },
    ]);

    const addNewRow = () => {
        const newRow = {
            id_user: "",
            keterangan: "",
            status_goals: "Belum dikerjakan",
            status_survey: "Belum dikerjakan",
        };
        setTableRows([...tableRows, newRow]);
    };

    return (
        <div className='pt-6 px-6 md:pt-8 md:px-8'>
            <h1 className='text-2xl md:text-2xl font-bold cursor-pointer text-left'>Admin Kpis</h1>
            <div className='flex flex-col rounded-md bg-[#F0F3FF]'>
                <div className='flex items-center justify-center p-5'>
                    <table className='mt-2 w-full min-w-max table-auto text-left border-b border-[#DDE6ED]' >
                        <thead className='bg-[#9DB2BF] rounded-md'>
                            <tr>
                                {TABLE_HEAD.map((header, index) => (
                                    <th key={index} className='px-4 py-2 border-b border-[#DDE6ED] text-[#FFF7FC]'>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows.map((row, index) => (
                                <tr key={index}>
                                    <td className={`${tdTable} w-2/12`}><InputCell value={row.id_user} /></td>
                                    <td className={`${tdTable} w-2/12`}><InputCell value={row.keterangan} /></td>
                                    <td className={`${tdTable} w-2/12`}><StatusCell initialStatus={row.status_goals} /></td>
                                    <td className={`${tdTable} w-2/12`}><StatusCell initialStatus={row.status_survey} /></td>
                                    <td className={`${tdTable} w-2/12`}>
                                        <div className='inline-flex'>
                                            <button className='text-blue-500 py-1 mr-3'>
                                                <RiEdit2Fill className='w-5 h-5' />
                                            </button>
                                            <button className='text-red-500 py-1 mr-10'>
                                                <MdDelete className='w-5 h-5' />
                                            </button>
                                            <button className='mr-10 text-cyan-700 font-semibold py-1 px-2 underline underline-offset-8' onClick={() => navigate('/admin/admingoals')}>
                                                Goals
                                            </button>
                                            <button className='text-cyan-700 font-semibold py-1 px-2 underline underline-offset-8' onClick={() => navigate('/admin/adminsurveys')}>
                                                Surveys
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
                        className='bg-[#406882] text-white mb-2 rounded-md py-2 px-3 font-medium'
                        onClick={addNewRow}
                    >
                        Add New
                    </button>
                </div>
            </div>
        </div>
    );
}


export default AdminKpis

