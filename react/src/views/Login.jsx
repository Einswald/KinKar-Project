import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios-client';

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState(null);
  const { setUser, setToken } = useStateContext();

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      
    };

    setErrors(null);
    axiosClient.post('/login', payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem('USER_ROLES', data.roles);
        setUser(data.user, data.roles);
        setToken(data.token);

        if (data.roles === "admin") {
          navigate('/admin');
        } else if (data.roles === "users") {
          navigate('/');
        }
        console.log(data)
      })

      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          if (response.data.errors) {
            setErrors(response.data.errors);
          } else {
            setErrors({
              email: [response.data.message]
            });
          }
        }
      });

  };

  return (
    // {errors && <div className='bg-red-500 rounded-md p-2'>

    //   </div>

    // }
    <form action="#" onSubmit={onSubmit} method='POST' className="flex flex-col gap-4">
      <div className=' bg-gray-300  min-h-screen flex items-center justify-center'>
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
              <h1 className="text-2xl md:text-2xl font-bold cursor-pointer text-center mb-5">Login</h1>
              <div>
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
                <div className="mt-8 flex flex-col gap-y-4">
                  <button className="active:scale-[.98] py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
                    Login
                  </button>
                  <div className='mt-1 flex justify-center items-center'>
                    <p className='font-medium text-sm'>Don't have an account?</p>
                    <button onClick={handleClick} className='text-violet-500 text-base font-medium ml-2'>Register</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )

  function handleClick() {
    navigate("/register");
  }
}

export default Login