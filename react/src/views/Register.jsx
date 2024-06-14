import React from 'react'

const Register = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='container mx-auto'>
        <div className="flex w-6/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-1/2 flex items-center justify-center p-2">
            <img src="asset/Logoo.png" alt="Logo" className="w-1/2 h-auto" />
          </div>
          <div className="w-1/2 py-12 px-12">
            <h1 className="text-2xl md:text-2xl font-bold cursor-pointer text-center mb-5">Register</h1>
            <div>
              <div>
                <label className="text-lg font-medium">Name</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="text-lg font-medium">Email</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="text-lg font-medium">Password</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <label className="text-lg font-medium">Confirm Password</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter your password"
                />
              </div>    
              <div className="mt-8 flex flex-col gap-y-4">
                <button className="active:scale-[.98] py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
                  Login
                </button>
                <div className='mt-1 flex justify-center items-center'>
                  <p className='font-medium text-sm'>Do have an account?</p>
                  <button className='text-violet-500 text-base font-medium ml-2'>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register