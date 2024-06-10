import React from 'react'

const ModalDetailDepartment = ({ visible, onClose}) => {

    const biodata = [
        { label: 'Nama', value: 'Jungkook' },
        { label: 'Tanggal Lahir', value: '09 September 1997' },
        { label: 'Alamat', value: 'Busan' }
    ];

    if (!visible) return null;

    const handleOnClose = (e) => {
        if (e.target === e.currentTarget) onClose();
    };
    return (
        <div
            onClick={handleOnClose}
            className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'
        >
            <div className='flex flex-col bg-[#F0F3FF] bg-clip-border rounded-md w-2/4 p-3 items-center'>
                <h1 className='text-[28px] leading-[34px] font-bold cursor-pointer mb-5 items-center text-gray-700'>Biodata Employee</h1>
                    <div className='flex flex-col mt-6 text-gray-700 bg-[#F0F3FF] rounded-xl w-1/2'>
                        <div className='bg-neutral rounded-md max-w-md p-6 overflow-x-auto'>
                            {biodata.map(({ label, value }) => (
                            <div key={label} className='mb-4 flex'>
                                <div className='w-1/3 pr-4'>
                                <label className='block text-sm font-medium text-gray-600'>{label}</label>
                                </div>
                                <div className='w-2/3'>
                                <p className='text-lg text-gray-800'>{value}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default ModalDetailDepartment
