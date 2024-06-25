import React, { useRef, useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios-client';
import { Link } from 'react-router-dom';

const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };
    console.log(payload);
    axiosClient.post('/register', payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch(err => {
        console.log(err);
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <div>
      <form action="#" onSubmit={onSubmit} className="">
        <div className='bg-gray-300 min-h-screen flex items-center justify-center'>

          <div className='container mx-auto'>
            <div className="flex w-6/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
              <div className="w-1/2 flex items-center justify-center p-2">
                <img src="asset/Logoo.png" alt="Logo" className="w-1/2 h-auto" />
              </div>
              <div className="w-1/2 py-12 px-12">
                {errors && Object.keys(errors).length > 0 && (
                  <div className="bg-red-600 rounded-lg p-2">
                    {Object.keys(errors).map(key => (
                      <p key={key} className="text-white font-bold px-2 text-xs">{errors[key][0]}</p>
                    ))}
                  </div>
                )}
                <h1 className="text-2xl md:text-2xl font-bold cursor-pointer text-center mb-5">Register</h1>
                <div>
                  <div>
                    <label className="text-lg font-medium">Name</label>
                    <input
                      className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                      placeholder="Enter your Name"
                      type="text"
                      name="name"
                      ref={nameRef}
                    />
                  </div>
                  <div>
                    <label className="text-lg font-medium">Email</label>
                    <input
                      className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      ref={emailRef}
                    />
                  </div>
                  <div>
                    <label className="text-lg font-medium">Password</label>
                    <input
                      className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                      placeholder="Enter your password"
                      type="password"
                      name="password"
                      ref={passwordRef}
                    />
                  </div>
                  <div>
                    <label className="text-lg font-medium">Confirm Password</label>
                    <input
                      className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                      placeholder="Confirm your Password"
                      type="password"
                      name="password_confirmation"
                      ref={passwordConfirmationRef}
                    />
                  </div>
                  <div className="mt-8 flex flex-col gap-y-4">
                    <button className="active:scale-[.98] py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
                      Register
                    </button>
                    <div className='mt-1 flex justify-center items-center'>
                      <p className='font-medium text-sm'>Already have an account?</p>
                      <Link className='text-violet-500 text-base font-medium ml-2' to="/Login">Login</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
