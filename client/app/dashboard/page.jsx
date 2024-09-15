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

function dashboard() {
  const { data, isLoading, isError } = useStudentDataQuery();
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  if (user && !user.isAdmin) {
    router.push('/');
  }
  return (
    <div className={style.container}>
      <Head>
        <title>Beryl</title>
      </Head>
      <div className='bg-blue-950 h-20'></div>
      <SearchBox />

      {isLoading ? (
        <Spinner clip={true} size={150} />
      ) : isError ? (
        <h1>Unable to fetch data</h1>
      ) : (
        <>
          <div className='p-6 space-y-6'>
            {/* Overview Cards */}
            <div className='grid grid-cols-4 gap-6'>
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
            <MailSender />
          </div>
        </>
      )}

      <div className='mb-3 py-3 lg:w-1/2'>
        <GeneratePositions />
        <UpdateNextTerm />
        <UpdateEvent />
      </div>
    </div>
  );
}

export default dashboard;
