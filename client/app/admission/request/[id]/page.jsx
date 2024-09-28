'use client';
import { useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useGetSingleAdmissionQuery } from '@/src/features/admission/admissionApiSlice';
import { useSelector } from 'react-redux';
import Spinner from '@/components/Spinner';
import DeleteAdmissionBtn from '@/components/DeleteAdmissionBtn';
import AdmissionMail from '@/components/AdmissionMail';

const AdmissionPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const componentRef = useRef();
  const { user } = useSelector((state) => state.auth);
  const [admissionId, setAdmissionId] = useState('');
  const { data, isLoading, isError } = useGetSingleAdmissionQuery(admissionId);

  useEffect(() => {
    if (id) {
      setAdmissionId(id);
    }
    if (user && !user.isAdmin) {
      router.push('/');
    }
  }, [id, user]);
  return (
    <>
      <div className='bg-blue-950 h-20'></div>
      <div className='min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4'>
        <div className='bg-white shadow-md rounded-lg max-w-4xl w-full p-8'>
          <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>
            Admission Form Details
          </h1>
          {isError && <p>Unable to fetch data...</p>}
          {isLoading && <Spinner clip={true} size={100} />}
          {data && (
            <>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-gray-600 font-medium'>
                    First Name
                  </label>
                  <p className='text-lg font-semibold text-gray-800'>
                    {data.firstName}
                  </p>
                </div>

                <div>
                  <label className='block text-gray-600 font-medium'>
                    Last Name
                  </label>
                  <p className='text-lg font-semibold text-gray-800'>
                    {data.lastName}
                  </p>
                </div>

                <div>
                  <label className='block text-gray-600 font-medium'>
                    Email
                  </label>
                  <p className='text-lg font-semibold text-gray-800'>
                    {data.email}
                  </p>
                </div>

                <div>
                  <label className='block text-gray-600 font-medium'>
                    Phone Number
                  </label>
                  <p className='text-lg font-semibold text-gray-800'>
                    {data.phone}
                  </p>
                </div>

                <div>
                  <label className='block text-gray-600 font-medium'>
                    Child's Name
                  </label>
                  <p className='text-lg font-semibold text-gray-800'>
                    {data.childName}
                  </p>
                </div>
                <div>
                  <label className='block text-gray-600 font-medium'>
                    Gender
                  </label>
                  <p className='text-lg font-semibold text-gray-800'>
                    {data.gender}
                  </p>
                </div>

                <div>
                  <label className='block text-gray-600 font-medium'>
                    Class to be Registered
                  </label>
                  <p className='text-lg font-semibold text-gray-800'>
                    {data.level}
                  </p>
                </div>

                <div>
                  <label className='block text-gray-600 font-medium'>
                    Child's Age
                  </label>
                  <p className='text-lg font-semibold text-gray-800'>
                    {data.dateOfBirth.substring(0, 10)}
                  </p>
                </div>
                <div>
                  <label className='block text-gray-600 font-medium'>
                    Date Submitted
                  </label>
                  <p className='text-lg font-semibold text-gray-800'>
                    {data.createdAt.substring(0, 10)}
                  </p>
                </div>
              </div>
              <AdmissionMail admissionId={data._id} />
              <DeleteAdmissionBtn admission={data} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdmissionPage;
