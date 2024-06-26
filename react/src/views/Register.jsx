import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const FORM_FIELDS = [
        { label: 'Name', type: 'text' },
        { label: 'Email', type: 'email' },
        { label: 'Password', type: 'password' },
        { label: 'Confirm Password', type: 'password' }
      ];

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='container mx-auto'>
        <div className="flex w-6/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-1/2 flex items-center justify-center p-2">
            <img src="asset/Logoo.png" alt="Logo" className="w-3/4 h-auto" />
          </div>
          <div className="w-1/2 py-12 px-12">
            <h1 className="text-2xl md:text-2xl font-bold text-center mb-5 underline decoration-sky-500 underline-offset-8 decoration-2">Register</h1>
            {FORM_FIELDS.map(({ label, type }, index) => (
              <div key={index} className="mb-4">
                <label className="text-lg font-medium">{label}</label>
                <input
                  type={type}
                  className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder={`Enter your ${label.toLowerCase()}`}
                />
              </div>
            ))}
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                onClick={() => navigate("login")}
                className="py-3 rounded-xl bg-violet-500 text-white text-lg font-bold active:scale-[.98]">
                Register
              </button>
              <div className='flex justify-center items-center'>
                <p className='font-medium text-sm'>Do you have an account?</p>
                <Link to="/login" className='text-violet-500 text-base font-medium ml-2'>
                    Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register
