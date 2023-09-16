import React, { useState } from 'react'
import { Oval } from 'react-loader-spinner';

export default function Home(props) {
  const [loading, isLoading] = useState(false);
  const handleLogout = () => {
    setTimeout(()=>{
      isLoading(true);
      localStorage.removeItem('persist:login');
      window.location.reload();
    }, 1000);
  }
  return (
    <div>
      <div className="grid justify-center h-screen content-center bg-blue-50">
          <div className="block w-80 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="px-4 py-4">
              <h1 className="text-2xl font-bold mb-10">Dahsboard</h1>
              <div className="mb-6">
                  <label htmlFor="Nama" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Lengkap</label>
                  <input value={props.data.name} disabled type="name" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required>
                  </input>
              </div> 
              <div className="mb-6">
                  <label htmlFor="Email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input value={props.data.email} disabled type="email" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required>
                  </input>
              </div> 
              <div className="mb-6">
                  <label htmlFor="Token" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Token</label>
                  <input value={props.data.token} disabled type="email" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Token" required>
                  </input>
              </div> 
              <div className="grid grid-cols-2 gap-4 items-center justify-between">
                <div className='overflow-ellipsis'>
                </div>
                <div className='justify-end content-end'>
                  <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded' onClick={handleLogout}>{loading ? <Oval className="pl-2" height="25" width="25" strokeWidth={5} radius="5" color="white" ariaLabel = 'three-dots-loading' wrapperStyle wrapperClass/> : 'Logout'}</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
