'use client';
import React, { useRef, useState, useEffect } from 'react';
import Spinner from '@/components/Spinner';
import {  useParams } from 'next/navigation';
import style from '@/components/styles/profile.module.css';
import ReactToPrint from 'react-to-print';
import { useGetStaffQuery } from '@/src/features/staff/staffApiSlice';
import LetterHead from '@/components/LetterHead';
import Profile from '@/components/StaffProfile';
import { FaArrowAltCircleLeft, FaArrowLeft } from 'react-icons/fa';
import UpdateStaffBtn from '@/components/staff/UpdateStaffBtn';
import DeleteStaffBtn from '@/components/staff/DeleteStaffBtn';
import Link from 'next/link';
const StaffProfile = React.forwardRef(() => {
  const { id } = useParams();
  const componentRef = useRef();

  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    if (id) {
      setStudentId(id);
    }
  }, [id]);

  const { data, isLoading, error } = useGetStaffQuery(studentId, {
    skip: !studentId,
  });

  if (!studentId) return <Spinner clip={true} size={150} />;
  if (isLoading) return <Spinner clip={true} size={150} />;
  if (error) return <div>Error: {error.message}</div>;



  return (
    <>
      <div className='bg-blue-950 h-20'></div>
      {data && (
        <div className={style.container}>
          <Link
            href='/staff'
            className=' ml-10 text-blue-950 hover:text-blue-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to staff list
          </Link>
          <div ref={componentRef}>
            <LetterHead image={data.image?.url} />
            <Profile staff={data} />
          </div>
          <div className={style.btnContainer}>
            <ReactToPrint
              trigger={() => <button className={style.btnPrint}>Print</button>}
              content={() => componentRef.current}
            />
            <UpdateStaffBtn staff={data} key={data.id} />
            <DeleteStaffBtn staff={data} />
          </div>
        </div>
      )}
    </>
  );
});

export default StaffProfile;
