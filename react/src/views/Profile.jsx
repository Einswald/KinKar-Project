import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const FORM_FIELDS = [
        { label: 'Name', type: 'text' },
        { label: 'Date of Birth', type: 'date' },
        { label: 'Gender', type: 'select', options: ['Male', 'Female'] },
        { label: 'Address', type: 'text' },
        { label: 'Phone Number', type: 'text' },
        { label: 'Photo', type: 'file' },
      ];

      const handleImage = (event) => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
      };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-200'>
      <div className='container mx-auto'>
        <div className="flex w-6/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full py-12 px-12">
            <h1 className="text-2xl md:text-2xl font-bold text-center mb-5">Profile</h1>
            {FORM_FIELDS.map(({ label, type, options }, index) => (
              <div key={index} className="flex mb-4">
                <div className='w-1/2 pr-6'>
                    <label className="text-lg font-medium">{label}</label>
                </div>
                {type === 'select' ? (
                  <select className="w-full border-2 border-gray-300 rounded-lg p-3 mt-1 bg-transparent">
                    <option value="" disabled selected>Select Gender</option>
                    {options.map((option, idx) => (
                      <option key={idx} value={option}>{option}</option>
                    ))}
                  </select>
                ) : type === 'file' ? (
                    <input
                      type={type}
                      className="w-full border-2 border-gray-300 rounded-lg p-3 mt-1 bg-transparent"
                      onChange={handleImage}
                    />
                ) : (
                    <input
                      type={type}
                      className="w-full border-2 border-gray-300 rounded-lg p-3 mt-1 bg-transparent"
                    />
                )}
              </div>
            ))}
            {selectedImage && (
              <div className="flex justify-center mb-4">
                <img src={selectedImage} alt="Preview" className="w-32 h-32 object-cover rounded-full" />
              </div>
            )}
            <div className="mt-8 flex flex-col gap-y-4">
              <button onClick={() => navigate("/")}
                className="py-3 rounded-xl bg-violet-500 text-white text-lg font-bold active:scale-[.98]">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
