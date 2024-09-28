'use client';
import Head from 'next/head';
import style from '../../components/styles/dashboard.module.css';
import SearchBox from '@/components/SearchBox';
// import { useStudentDataQuery } from '@/src/features/students/studentApiSlice';
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
import ConfirmationModal from '@/components/ConfirmationModal';
// import GraduateStudent from '@/components/GraduateStudent';
import MailSender from '@/components/MailSender';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PrePrimaryData from '@/components/PrePrimaryData';

function dashboard() {
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading, isError } = useGetStudentsDataQuery();
  const [graduateStudent, { isLoading: loadingGraduateStudents }] =
    useGraduateStudentsMutation();
  const {
    data: staff,
    isLoading: loadingStaff,
    isError: staffError,
  } = useGetStaffDataQuery();
  const [isAdmin, setIsAdmin] = useState(true);
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user?.isAdmin) {
      router.push('/');
    }
  }, [user]);

  const handleGraduateStudents = async () => {
    try {
      const res = await graduateStudent().unwrap();
      toast.success(res);
      setShowModal(false); // Close the modal after deletion
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const confirmGraduateStudents = () => {
    setShowModal(true); // Show the confirmation modal
  };

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
                <h3 className='text-lg font-semibold'>
                  Total Students - {data.totalStudents} <br />
                  Paid School Fees - {data.paidFees}
                </h3>
                <p className='text-2xl'></p>
              </div>
              <div className='bg-green-500 text-white p-4 rounded-lg shadow'>
                <h3 className='text-lg font-semibold'>Male Students</h3>
                <p className='text-2xl'>{data.males}</p>
              </div>
              <div className='bg-yellow-500 text-white p-4 rounded-lg shadow'>
                <h3 className='text-lg font-semibold'>Female Students</h3>
                <p className='text-2xl'>{data.females}</p>
              </div>
              <div className='bg-purple-500 text-white p-4 rounded-lg shadow'>
                <h3 className='text-lg font-semibold'>Total Staff</h3>
                <p className='text-2xl'>{staff?.totalStaff}</p>
              </div>
              <div className='bg-cyan-500 text-white p-4 rounded-lg shadow'>
                <h3 className='text-lg font-semibold'>Tutorial Staff</h3>
                <p className='text-2xl'>{staff?.tutorialStaff}</p>
              </div>
              <div className='bg-amber-700 text-white p-4 rounded-lg shadow'>
                <h3 className='text-lg font-semibold'>Non Tutorial Staff</h3>
                <p className='text-2xl'>{staff?.nonTutorialStaff}</p>
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
              <button
                className='bg-red-600 my-2 w-40 text-white p-3 rounded'
                onClick={confirmGraduateStudents}
              >
                Graduate students
              </button>
              <ConfirmationModal
                isOpen={showModal}
                message='Are you sure you want to move all students to their next classes? This action is irreversible'
                onConfirm={handleGraduateStudents} // Confirm action
                onCancel={() => setShowModal(false)} // Cancel action
              />
              {/* <GraduateStudent /> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default dashboard;
