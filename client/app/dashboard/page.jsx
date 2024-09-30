'use client';
import Head from 'next/head';
import style from '../../components/styles/dashboard.module.css';
import SearchBox from '@/components/SearchBox';
import { useGetAllAdmissionQuery } from '@/src/features/admission/admissionApiSlice';
import {
  useGetStudentsDataQuery,
  useGetStaffDataQuery,
} from '@/src/features/data/dataApiSlice';
import { useGraduateStudentsMutation } from '@/src/features/students/studentApiSlice';
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

import PrePrimaryData from '@/components/PrePrimaryData';
import Link from 'next/link';
import { FaArrowAltCircleRight, FaFemale, FaMale } from 'react-icons/fa';
import GraduateStudents from '@/components/GraduateStudents';
import ResetStudentFee from '@/components/ResetStudentFee';

function dashboard() {
  const { data, isLoading, isError } = useGetStudentsDataQuery();

  const {
    data: staff,
    isLoading: loadingStaff,
    isError: staffError,
  } = useGetStaffDataQuery();
  const { data: admission } = useGetAllAdmissionQuery();

  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user?.isAdmin) {
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
            <div className='grid md:grid-cols-4 gap-6'>
              <div className='bg-blue-500 text-white p-4 rounded-lg shadow'>
                <h3 className='text-lg font-semibold'>
                  Total Students - {data.totalStudents} <br />
                  Paid School Fees - {data.paidFees}
                </h3>
                <p className='text-2xl'></p>
              </div>
              <div className='bg-green-500 text-white p-4 rounded-lg shadow'>
                <h3 className='text-lg font-semibold'>
                  {' '}
                  <FaMale className='inline text-2xl mb-2' /> Male Students -{' '}
                  {data.males}
                </h3>
                <h3 className='text-lg font-semibold'>
                  <FaFemale className='inline text-2xl mb-2' />
                  Female Students - {data.females}
                </h3>
              </div>

              <div className='bg-purple-500 text-white p-4 rounded-lg shadow'>
                <h3 className='text-lg font-semibold'>
                  Tutorial Staff - {staff?.tutorialStaff}
                </h3>
                <h3 className='text-lg font-semibold'>
                  Non Tutorial Staff - {staff?.nonTutorialStaff}{' '}
                </h3>
              </div>

              <div className='bg-amber-700 text-white p-4 rounded-lg shadow'>
                <h3 className='text-lg font-semibold'>
                  Admission Request - {admission?.length}
                </h3>

                <Link href='/admission/request' className='text-green-400'>
                  <FaArrowAltCircleRight className='inline mr-3' />
                  View
                </Link>
              </div>
            </div>
            <PrePrimaryData data={data} />
            <GradeData data={data} />
            <SecondaryData data={data} />
            <div className='mb-3 grid lg:grid-cols-2'>
              <MailSender />
              <GeneratePositions />
              <UpdateNextTerm />
              <UpdateEvent />
              <div>
                <GraduateStudents />
                <ResetStudentFee />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default dashboard;
