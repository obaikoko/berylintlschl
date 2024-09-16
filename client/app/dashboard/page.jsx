'use client';
import Head from 'next/head';
import style from '../../components/styles/dashboard.module.css';
import SearchBox from '@/components/SearchBox';
import { useStudentDataQuery } from '@/src/features/students/studentApiSlice';
import Spinner from '@/components/Spinner';
import UpdateEvent from '@/components/UpdateEvent';
import GeneratePositions from '@/components/GeneratePositions';
import UpdateNextTerm from '@/components/NextTerm';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import SecondaryData from '@/components/SecondaryData';
import GradeData from '@/components/GradeData';
import MailSender from '@/components/MailSender';
import { useEffect, useState } from 'react';

function dashboard() {
  const { data, isLoading, isError } = useStudentDataQuery();
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (user && user.isAdmin) {
      setIsAdmin(true);
    }
    if (!isAdmin) {
      router.push('/');
    }
  }, [user]);

  return (
    <div className={style.container}>
      <Head>
        <title>Beryl</title>
      </Head>
      <div className='bg-blue-950 h-20'></div>
      <SearchBox />

      {isLoading && <Spinner clip={true} size={150} />}
      {isError && <h1>Unable to fetch data</h1>}
      {!isLoading && !isError && data && (
        <>
          <div className='p-6 space-y-6 '>
            {/* Overview Cards */}
            <div className='grid md:grid-cols-4 gap-6'>
              <div className='bg-blue-500 text-white p-4 rounded-lg shadow'>
                <h3 className='text-lg font-semibold'>Total Students</h3>
                <p className='text-2xl'>{data.totalStudents}</p>
              </div>
              <div className='bg-green-500 text-white p-4 rounded-lg shadow'>
                <h3 className='text-lg font-semibold'>Male Students</h3>
                <p className='text-2xl'>{data.males}</p>
              </div>
              <div className='bg-yellow-500 text-white p-4 rounded-lg shadow'>
                <h3 className='text-lg font-semibold'>Female Students</h3>
                <p className='text-2xl'>{data.females}</p>
              </div>
            </div>

            <GradeData data={data} />
            <SecondaryData data={data} />
            <div className='mb-3 grid lg:grid-cols-2'>
              <MailSender />
              <GeneratePositions />
              <UpdateNextTerm />
              <UpdateEvent />
            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default dashboard;
