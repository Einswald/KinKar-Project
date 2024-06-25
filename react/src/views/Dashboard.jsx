import React from 'react';

const Dashboard = () => {
  const profile = [
    { label: 'Name', value: 'Jungkook' },
    { label: 'Date of Birth', value: '09 September 1997' },
    { label: 'Gender', value: 'Male' },
    { label: 'Address', value: 'Busan' },
    { label: 'Number Phone', value: '0857xxxxxxx' }
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
            <h2 className='text-2xl font-semibold mb-4'>Profile</h2>
            {profile.map(({ label, value }) => (
              <div key={label} className='mb-4 flex'>
                <div className='w-1/2 pr-6'>
                  <label className='block text-base font-medium text-gray-700'>{label}</label>
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
            <h3 className='text-xl font-semibold mb-3 text-black italic'>Penilaian Anda Sedang Berlangsung.....</h3>
            <h2 className='text-lg text-black italic mb-2'>Periode Januari - Maret</h2>
            <p className='mb-3'>Tanggal Mulai : <span className='font-bold'>01 April 2025</span></p>
            <p>Tanggal Selesai : <span className='font-bold'>10 April 2025</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
