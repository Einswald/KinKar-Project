import React from 'react';

const Dashboard = () => {
  const biodata = [
    { label: 'Nama', value: 'Jungkook' },
    { label: 'Tanggal Lahir', value: '09 September 1997' },
    { label: 'Alamat', value: 'Busan' }
  ];

  return (
    <div className='pt-6 px-6'>
      <div className='flex flex-col'>
        <h2 className='text-2xl font-bold cursor-pointer'>Welcome</h2>
      </div>

      <div className='flex mx-2 items-start'>
        {/* Informasi pribadi */}
        <div className='flex flex-col mt-6 text-gray-700 bg-[#F0F3FF] rounded-xl w-1/2'>
          <div className='bg-neutral rounded-md max-w-md p-6 overflow-x-auto'>
            <h2 className='text-2xl font-semibold mb-4'>Biodata</h2>
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

        {/* Time */}
        <div className='flex mt-6 text-gray-700 bg-[#F0F3FF] rounded-xl w-1/2 ml-6'>
          <div className='bg-neutral rounded-md max-w-md p-6'>
            <h2 className='text-2xl font-semibold mb-4'>Time</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
