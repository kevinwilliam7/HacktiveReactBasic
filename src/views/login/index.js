import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginSlice } from './reducer';
import { Oval } from 'react-loader-spinner';

export default function Login() {
  const [email, isEmail] = useState('');
  const [emailError, isEmailError] = useState(null);
  const [password, isPassword] = useState('');
  const [passwordError, isPasswordError] = useState(null);
  const [loading, isLoading] = useState(false);
  const [errorMessage, isErrorMessage] = useState(null);

  const metadata = {
    "id": 1,
    "name": "Kevin William",
    "email": "kevinwilliam@untan.ac.id",
    "password": "123456",
    "token": "xnjkt238as",
  }

  const dispatch = useDispatch();
  const handleLogin = event => {
    event.preventDefault();
    isErrorMessage(null);
    isLoading(true);
    if(!email && !password) {
      isLoading(false);
      isEmailError('email required');
      isPasswordError('password required');
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      isLoading(false);
      isPassword(null);
      isEmailError('email invalid');
    } else if(!email) {
      isLoading(false);
      isPassword(null);
      isEmailError('email required');
    }  else if(!password) {
      isLoading(false);
      isPasswordError('password required');
    } else {
    setTimeout(()=>{
        if(email===metadata.email && password===metadata.password) {
          dispatch(loginSlice.actions.stateGetEmail(email));
          dispatch(loginSlice.actions.stateGetPassword(password));
          dispatch(loginSlice.actions.stateGetUser(metadata));
        } else {
          isLoading(false);
          isErrorMessage('Login gagal...');
        }
      }, 1000);
    }
  }

  const handleEmailChange = event => {
    isEmail(event.target.value);
  }

  const handlePasswordChange = event => {
    isPassword(event.target.value);
  }

  return (
    <div>
      <div className="grid justify-center h-screen content-center bg-blue-50">
          <div className="block w-80 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="px-4 py-4">
              <h1 className="text-2xl font-bold mb-10">Login</h1>
              <div className="mb-6">
                  <label htmlFor="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                  <input onChange={handleEmailChange} name='email' type='text' placeholder='Masukan Email' className={`${errorMessage !== null || emailError !==null ? " border-red-400 text-red-500 focus:ring-red-600" : " border-gray-300 focus:ring-blue-500"} mb-2 bg-gray-50 border text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 block w-full p-2.5`} required>
                  </input>
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input onChange={handlePasswordChange} name='password' type='password' placeholder='Masukan Password' className={`${errorMessage!==null || passwordError !==null ? " border-red-400 text-red-500 focus:ring-red-600" : " border-gray-300 focus:ring-blue-500"} mb-2 bg-gray-50 border text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 block w-full p-2.5`}required>
                </input>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center justify-between">
                <div className='overflow-ellipsis'>
                  {errorMessage ? <p className='text-xs font-normal text-red-500'>{errorMessage}</p> : null}
                  {emailError ? <p className='text-left text-normal text-xs text-red-500'>{emailError}</p> : null}
                  {passwordError ? <p className='text-left text-normal text-xs text-red-500'>{passwordError}</p> : null}
                </div>
                <div className='justify-end content-end'>
                  <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded' onClick={handleLogin}>{loading ? <Oval className="pl-2" height="25" width="25" strokeWidth={5} radius="5" color="white" ariaLabel = 'three-dots-loading' wrapperStyle wrapperClass/> : 'Submit'}</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
