'use client';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import AddStudent from '@/components/Student/AddStudent';
import AddStaff from '@/components/staff/AddStaff';
import AddUser from '@/components/user/registerUser';
// import style from '../../components/styles/register.module.css';
// import { useGetStudentsQuery } from '@/src/features/students/studentApiSlice';
import { useSelector } from 'react-redux';
// import { debounce } from 'lodash';
import SearchBox from '@/components/SearchBox';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/Spinner';

function register() {
  const [page, setPage] = useState(1);
  const { user } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    } else {
      setIsAdmin(user.isAdmin);
    }
  }, [user]);

  // const handlePageChange = debounce((newPage) => {
  //   if (newPage !== page) {
  //     setLoading(true);
  //     setPage(newPage);
  //   }
  // }, 300);

  return (
    <>
      <div className='bg-blue-950 h-20'></div>
      <Head>
        <title>Bendonalds</title>
      </Head>
      <SearchBox />
      <div className='w-auto'>
        <h1 className='text-4xl shadow-lg p-6 text-center '>
          Registration Page
        </h1>

        <div className=' mx-auto'>
          {isAdmin ? (
            <>
              <AddStudent />
              <AddUser />
              <AddStaff />
            </>
          ) : (
            <AddStudent />
          )}
        </div>
      </div>
    </>
  );
}

export default register;
