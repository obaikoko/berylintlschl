'use client';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import AddStudent from '@/components/Student/AddStudent';
import AddStaff from '@/components/staff/AddStaff';
import AddUser from '@/components/user/registerUser';
import style from '../../components/styles/register.module.css';
import { useGetStudentsQuery } from '@/src/features/students/studentApiSlice';
import { useSelector } from 'react-redux';
import { debounce } from 'lodash';
import SearchBox from '@/components/SearchBox';

function register() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { data, isLoading, isError } = useGetStudentsQuery(page);
  const totalPages = data && data.totalPages;
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setLoading(isLoading);
    if (isError) {
      setLoading(false);
    }
  }, [data, isError]);

  const handlePageChange = debounce((newPage) => {
    if (newPage !== page) {
      setLoading(true);
      setPage(newPage);
    }
  }, 300);

  return (
    <>
    <div className='bg-blue-950 h-20'></div>
      <Head>
        <title>Bendonalds</title>
      </Head>
      <div className={style.registersContainer}>
        <h1>Registration Page</h1>

        <div className={style.registers}>
          <AddStudent />
          <AddUser />
          <AddStaff />
        </div>
      </div>
    </>
  );
}

export default register;
