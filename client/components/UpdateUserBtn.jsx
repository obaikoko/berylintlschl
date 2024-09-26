import { useUpdateUserMutation } from '@/src/features/auth/usersApiSlice';
import React from 'react';
import { toast } from 'react-toastify';
import Spinner from './Spinner';
import ConfirmationModal from './ConfirmationModal';

const UpdateUserBtn = ({ userId, isAdmin }) => {
  const [updateAdminStatus, { isLoading: isUpdating }] =
    useUpdateUserMutation();

  // Handle admin toggle
  const handleAdminToggle = async (userId, isAdmin) => {
    try {
      await updateAdminStatus({ userId, isAdmin: !isAdmin }).unwrap();
      toast.success('User admin status updated successfully!');
    } catch (err) {
      toast.error('Failed to update user admin status');
    }
  };
  return (
    <div>
      <button
        className={`rounded  ${isAdmin ? 'text-orange-400' : 'text-green-500'}`}
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
