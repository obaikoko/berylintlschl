'use client';

import React from 'react';
import {
  useGetUsersQuery,
  useUpdateUserMutation,
  useDeleteUserMutation, // Import delete mutation
} from '@/src/features/auth/usersApiSlice';
import Spinner from '@/components/Spinner';
import { toast } from 'react-toastify';

const UserListPage = () => {
  const { data: users, isLoading, isError, refetch } = useGetUsersQuery();
  const [updateAdminStatus, { isLoading: isUpdating }] =
    useUpdateUserMutation();
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation(); // Handle delete mutation

  // Handle admin toggle
  const handleAdminToggle = async (userId, isAdmin) => {
    try {
      await updateAdminStatus({ userId, isAdmin: !isAdmin }).unwrap();
      toast.success('User admin status updated successfully!');
    } catch (err) {
      toast.error('Failed to update user admin status');
    }
  };

  // Handle delete user
  const handleDeleteUser = async (userId, isAdmin) => {
    if (isAdmin) {
      toast.error('Cannot delete an admin user!');
      return;
    }
    if (confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId).unwrap();
        toast.success('User deleted successfully!');
        refetch();
      } catch (err) {
        toast.error('Failed to delete user');
      }
    }
  };

  if (isLoading) {
    return <Spinner clip={true} size={150} />;
  }

  if (isError) {
    return <div>Error loading users...</div>;
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
                  <tr key={user.id} className='border-b border-gray-200'>
                    <td>{index + 1}</td>

                    <td className='py-3 px-4'>{user.firstName}</td>
                    <td className='py-3 px-4'>{user.lastName}</td>
                    <td className='py-3 px-4'>{user.email}</td>
                    <td className='py-3 px-4 text-center flex justify-center gap-2'>
                      <button
                        className={`px-2 py-1 rounded text-white ${
                          user.isAdmin ? 'bg-orange-400' : 'bg-green-500'
                        }`}
                        onClick={() =>
                          handleAdminToggle(user._id, user.isAdmin)
                        }
                        disabled={isUpdating || isDeleting}
                      >
                        {user.isAdmin ? 'Revoke Admin' : 'Make Admin'}
                      </button>
                      <button
                        className='px-2 py-1 bg-red-700 text-white rounded'
                        onClick={() => handleDeleteUser(user._id, user.isAdmin)}
                        disabled={isDeleting}
                      >
                        {isDeleting ? 'Deleting...' : 'Delete'}
                      </button>
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
