import React from 'react'

const Modal = ({isOpen, onClose}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : 'hidden'}`}>
      <div className='bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
        <h2 className='text-xl font-semibold mb-4 mt-6 mb-5 uppercase'>Please Login Here !!</h2>
        <form className='px-4'>
          <div className='mb-5'>
            <input type='email' name='email' placeholder='example@gmail.com' className='w-full rounded-md border border-[#0e0e0e] bg-white py-3 px-6 text-base font-medium text-[#6b7280] outline-none focus:border-[#6a64f1]'/>
          </div>
          <div className='mb-5'>
            <input type='password' name='password' placeholder='Enter Your Password' className='w-full rounded-md border border-[#0e0e0e] bg-white py-3 px-6 text-base font-medium text-[#6b7280] outline-none focus:border-[#6a64f1]'/>
          </div>
          <div>
            <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none'>Login</button>
          </div>
        </form>
        <button onClick={onClose} className='bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-8 rounded inline-flex items-center mt-5'>Close</button>
      </div>

    </div>
  )
}

export default Modal