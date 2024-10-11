'use client';

import {
  useGetUsersQuery,
  useUpdateUserMutation,
  useDeleteUserMutation, // Import delete mutation
} from '@/src/features/auth/usersApiSlice';
import Spinner from '@/components/Spinner';
import { toast } from 'react-toastify';
import DeleteUserBtn from '@/components/DeleteUserBtn';
import UpdateUserBtn from '@/components/UpdateUserBtn';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const UserListPage = () => {
  const router = useRouter();
  const { data: users, isLoading, isError } = useGetUsersQuery();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user?.isAdmin) {
      router.push('/');
    }
  }, [user]);

  if (isLoading) {
    return <Spinner clip={true} size={150} />;
  }

  if (isError) {
    return <div className='text-center text-3xl'>Error loading users...</div>;
  }

  return (
    <>
      <div className='bg-blue-950 h-20'></div>
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-semibold mb-6 text-center'>User List</h1>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white shadow-md rounded-lg'>
            <thead>
              <tr>
                <th>S/N</th>

                <th className='py-3 px-4 text-left'>First Name</th>
                <th className='py-3 px-4 text-left'>Last Name</th>
                <th className='py-3 px-4 text-left'>Email</th>
                <th className='py-3 px-4 text-center'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, index) => (
                  <tr key={user._id} className='border-b border-gray-200'>
                    <td>{index + 1}</td>

                    <td className='py-3 px-4'>{user.firstName}</td>
                    <td className='py-3 px-4'>{user.lastName}</td>
                    <td className='py-3 px-4'>{user.email}</td>
                    <td className='py-3 px-4 text-center flex justify-center gap-2'>
                      <UpdateUserBtn userId={user._id} isAdmin={user.isAdmin} />
                      <DeleteUserBtn userId={user._id} isAdmin={user.isAdmin} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserListPage;
