import React from 'react';

const Dashboard = () => {
  return (
    <div className='pt-[25px] px-[25px]'>
        <div className='flex flex-col'>
            <h2 className='text-[28px] leading-[34px] font-bold cursor-pointer'>Selamat Datang</h2>
        </div>

        <div className='flex mx-2 items-start'>

            {/* Informasi Pribadi */}
            <div class="flex flex-col mt-6 text-gray-700 bg-[#F0F3FF] bg-clip-border rounded-xl w-1/2">
                <div className="bg-neutral  rounded-md  max-w-md p-6 overflow-x-auto">
                    <h2 className="text-2xl font-semibold mb-4">Biodata</h2>
                    <div className="mb-4 flex">
                        <div className="w-1/3 pr-4">
                        <label className="block text-sm font-medium text-gray-600">Nama</label>
                        </div>
                        <div className="w-2/3">
                        <p className="text-lg text-gray-800">Jungkook</p>
                        </div>
                    </div>
                    <div className="mb-4 flex">
                        <div className="w-1/3 pr-4">
                        <label className="block text-sm font-medium text-gray-600">Tanggal Lahir</label>
                        </div>
                        <div className="w-2/3">
                        <p className="text-lg text-gray-800">09 September 1997</p>
                        </div>
                    </div>
                    <div className="mb-4 flex">
                        <div className="w-1/3 pr-4">
                        <label className="block text-sm font-medium text-gray-600">Alamat</label>
                        </div>
                        <div className="w-2/3">
                        <p className="text-lg text-gray-800">Busan</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Time */}
            <div className="flex mt-6 text-gray-700 bg-[#F0F3FF] bg-clip-border rounded-xl w-1/2 ml-6">
                <div className="bg-neutral rounded-md max-w-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Time</h2>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Dashboard;
