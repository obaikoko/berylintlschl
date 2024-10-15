'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useStudentLoginMutation } from '@/src/features/auth/studentsApiSlice';
import { setCredentials } from '@/src/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Spinner from '@/components/Spinner';
import { FaUserCircle } from 'react-icons/fa';

function loginPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    studentId: '',
    password: '',
  });
  const { studentId, password } = formData;
  const [login, { isLoading }] = useStudentLoginMutation();
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ studentId, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success(`Welcome Back ${res.firstName} ${res.lastName}`);
      router.push('/');
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
              <h1 className='text-3xl font-bold text-blue-950 mb-4'>SIGN IN</h1>
            </div>

            <div className='mb-4 w-full'>
              <label
                htmlFor='studentId'
                className='block text-blue-950 font-bold mb-2'
              >
                Student ID
              </label>
              <input
                type='text'
                name='studentId'
                id='studentId'
                value={studentId}
                onChange={handleInputChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950'
              />
            </div>

            <div className='mb-6 w-full'>
              <label
                htmlFor='password'
                className='block text-blue-950 font-bold mb-2'
              >
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                value={password}
                onChange={handleInputChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-950 text-white py-2 rounded-md hover:bg-blue-900 transition-colors'
            >
              {isLoading ? 'Authenticating...' : 'Login'}
            </button>

            <div className='mt-6 flex flex-col items-center'>
              <Link href='/login' className='text-blue-950 hover:underline'>
                Not a student?
              </Link>
              <Link
                href='/students/forget-password'
                className='text-blue-950 hover:underline'
              >
                Forget Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default loginPage;
