import {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} from '@/src/features/auth/usersApiSlice';
import React from 'react';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const UpdateUserBtn = ({ userId, isAdmin }) => {
  const [updateAdminStatus, { isLoading: isUpdating }] =
    useUpdateUserMutation();
  const { refetch } = useGetUserDetailsQuery(userId);

  // Handle admin toggle
  const handleAdminToggle = async (userId, isAdmin) => {
    try {
      await updateAdminStatus({ userId, isAdmin: !isAdmin }).unwrap();
      refetch();
      toast.success('User admin status updated successfully!');
    } catch (err) {
      toast.error('Failed to update user admin status');
    }
  };
  return (
    <div>
      <button
        className={`rounded py-1 px-2 m-2 text-white  ${isAdmin ? 'bg-orange-400' : 'bg-green-500'}`}
        onClick={() => handleAdminToggle(userId, isAdmin)}
        disabled={isUpdating}
      >
        {isUpdating ? (
          <Spinner clip={true} size={15} />
        ) : isAdmin ? (
          'Revoke Admin'
        ) : (
          'Make Admin'
        )}
      </button>
    </div>
  );
};

export default UpdateUserBtn;
