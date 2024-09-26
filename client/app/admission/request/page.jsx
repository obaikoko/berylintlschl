'use client';
import AdmissionList from '@/components/AdmissionList';
import React from 'react';
import { useGetAllAdmissionQuery } from '@/src/features/admission/admissionApiSlice';
import Spinner from '@/components/Spinner';

const AdmissionListPage = () => {
  const { data, isloading, isError } = useGetAllAdmissionQuery();
  

  if (isloading) {
    return <Spinner clip={true} size={150} />;
  }
  return (
    <div>
      <div className='bg-blue-950 h-20'></div>

      {data && <AdmissionList data={data} />}
    </div>
  );
};

export default AdmissionListPage;
