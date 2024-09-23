'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from '@/components/Spinner';
import { useForgetPasswordMutation } from '@/src/features/auth/usersApiSlice';

function forgetPassword() {
  const [formData, setFormData] = useState({
    email: '',
  });
  const { email } = formData;

  const [forgetPassword, { isLoading, isError }] = useForgetPasswordMutation();

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await forgetPassword({ email }).unwrap();
      toast.success(`${res}`);
    } catch (err) {
      console.log(err?.data?.message || err.error);
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div className='bg-blue-950 h-20'></div>
      <div className='min-h-screen flex flex-col justify-center bg-blue-100'>
        <div className='flex items-center justify-center'>
          <form
            className='bg-white p-10 rounded-lg shadow-lg max-w-md w-full'
            onSubmit={handleSubmit}
          >
            <div className='flex flex-col items-center mb-6'>
              <img src='/images/logo.png' alt='logo' className='w-20 h-20' />
              <h1 className='text-2xl my-3'>Forget Password</h1>
            </div>

            <div className='mb-4 w-full'>
              <label
                htmlFor='resetEmail'
                className='block text-blue-950 font-bold mb-2'
              >
                Enter Email Address
              </label>
              <input
                type='email'
                name='email'
                id='resetEmail'
                value={email}
                onChange={handleInputChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-950 text-white py-2 rounded-md hover:bg-blue-900 transition-colors'
            >
              {isLoading ? <Spinner clip={true} size={15} /> : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default forgetPassword;
