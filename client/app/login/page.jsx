'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '@/src/features/auth/usersApiSlice';
import { setCredentials } from '@/src/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Spinner from '@/components/Spinner';
// import style from '../styles/login.module.css';
import { FaUserCircle } from 'react-icons/fa';

function loginPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const [login, { isLoading }] = useLoginMutation();

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
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success(`welcome ${res.firstName}`);
      router.push('/');
    } catch (err) {
      console.log(err?.data?.message || err.error);
      toast.error(err?.data?.message || err.error);
    }
  };

  if (isLoading) {
    return (
      <>
        <Spinner clip={true} size={150} />
      </>
    );
  }

  return (
    <div>
      <div className='bg-blue-500 h-20'></div>

      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <form
          className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col items-center mb-6'>
            <h1 className='text-2xl font-bold mb-2'>SIGN IN</h1>
            <FaUserCircle className='text-4xl text-gray-500' />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 font-bold mb-2'
            >
              Username
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={handleInputChange}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-gray-700 font-bold mb-2'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={handleInputChange}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors'
          >
            Login
          </button>

          <div className='mt-4 flex flex-col items-center'>
            <Link
              href='/students/login'
              className='text-blue-500 hover:underline'
            >
              Are you a student?
            </Link>
            <Link
              href='/resetPassword'
              className='text-blue-500 hover:underline mt-2'
            >
              Forgotten password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default loginPage;
