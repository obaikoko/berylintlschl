'use client';
import { useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useGetUserDetailsQuery } from '@/src/features/auth/usersApiSlice';
import { useSelector } from 'react-redux';
import Spinner from '@/components/Spinner';

import UpdateUser from '@/components/UpdateUser';
import UpdateUserBtn from '@/components/UpdateUserBtn';
import DeleteUserBtn from '@/components/DeleteUserBtn';

const page = () => {
  const { id } = useParams();
  const router = useRouter();

  const { user } = useSelector((state) => state.auth);
  const [userId, setUserId] = useState('');

  const { data, isLoading, isError } = useGetUserDetailsQuery(userId);

  useEffect(() => {
    if (id) {
      setUserId(id);
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
            {data?.firstName} {data?.lastName}
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
                    {data?.firstName}
                  </p>
                </div>

                <div>
                  <label className='block text-gray-600 font-medium'>
                    Last Name
                  </label>
                  <p className='text-lg font-semibold text-gray-800'>
                    {data?.lastName}
                  </p>
                </div>

                <div>
                  <label className='block text-gray-600 font-medium'>
                    Email
                  </label>
                  <p className='text-lg font-semibold text-gray-800'>
                    {data?.email}
                  </p>
                </div>

                <div>
                  <label className='block text-gray-600 font-medium'>
                    Class Teacher
                  </label>
                  <p className='text-lg font-semibold text-gray-800'>
                    {data?.level} {data.subLevel}
                  </p>
                </div>
              </div>

              <UpdateUser data={data} />
              <div className='flex'>
                <UpdateUserBtn userId={data._id} isAdmin={data.isAdmin} />
                <DeleteUserBtn userId={data._id} isAdmin={data.isAdmin} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
