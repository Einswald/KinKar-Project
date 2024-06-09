import React from 'react'

const ModalRecap = () => {
    return (
        <div>
            <CreateRecapModal />
            <UpdateRecapModal />
            <DeleteRecapModal />
        </div>
    )
}

export default ModalRecap

const ModalTemplate = ({ visible, onClose, title, children, onSubmit, submitLabel }) => {
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
                <h1 className='text-[28px] leading-[34px] font-bold cursor-pointer mb-5 items-center text-gray-700'>
                    {title}
                </h1>
                <form className='w-full max-w-sm' onSubmit={onSubmit}>
                    {children}
                    <div className='md:flex md:items-center'>
                        <div className='md:w-1/3'></div>
                        <div className='md:w-2/3'>
                            <button
                                type="submit"
                                className='bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded'
                            >
                                {submitLabel}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export const CreateRecapModal = ({ visible, onClose }) => (
    <ModalTemplate
        visible={visible}
        onClose={onClose}
        title="Create Data"
        onSubmit={(e) => { e.preventDefault(); onClose(); }}
        submitLabel="Save"
    >
        <FormFields />
    </ModalTemplate>
)

export const UpdateRecapModal = ({ visible, onClose }) => (
    <ModalTemplate
        visible={visible}
        onClose={onClose}
        title="Update Data"
        onSubmit={(e) => { e.preventDefault(); onClose(); }}
        submitLabel="Update"
    >
        <FormFields />
    </ModalTemplate>
)

const FormField = ({ label, placeholder }) => (
    <div className='md:flex md:items-center mb-6'>
        <div className='md:w-1/3'>
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 mr-3'>
                {label}
            </label>
        </div>
        <div className='md:w-2/3'>
            <input
                className='bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                type='text'
                placeholder={placeholder}
            />
        </div>
    </div>
)

const FormFields = () => (
    <>
        <FormField label="ID" placeholder="Input ID" />
        <FormField label="Full Name" placeholder="Input full name" />
        <FormField label="Department" placeholder="Input department" />
        <FormField label="Survey Result" placeholder="Input survey result" />
        <FormField label="Goals Result" placeholder="Input goals result" />
        <FormField label="Total" placeholder="Input total" />
        <FormField label="Status" placeholder="Input status" />
    </>
)


export const DeleteRecapModal = ({ visible, onClose }) => {
    if (!visible) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div className='flex flex-col bg-[#F0F3FF] bg-clip-border rounded-md w-1/4 p-3 items-center'>
                <h2 className='text-xl font-bold mb-4'>Confirm Deletion</h2>
                <p className='mb-6 items-center font-semibold'>Are you sure you want to delete this item?</p>
                <div className='flex justify-end space-x-4'>
                    <button
                        className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
                        onClick={() => { onClose(); }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
