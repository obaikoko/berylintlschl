import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from '@/src/features/auth/usersApiSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './Spinner';
import ConfirmationModal from './ConfirmationModal';

const DeleteUserBtn = ({ userId, isAdmin }) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation(); // Handle delete mutation
  const { refetch } = useGetUsersQuery();

  // Handle delete user
  const handleDeleteUser = async (userId, isAdmin) => {
    if (isAdmin) {
      toast.error('Cannot delete an admin user!');
      return;
    }

    try {
      await deleteUser(userId).unwrap();
      toast.success('User deleted successfully!');
      refetch();
    } catch (err) {
      toast.error('Failed to delete user');
    }
  };

  const confirmDeleteUser = () => {
    setShowModal(true);
  };
  return (
    <div>
      <button
        className='bg-red-700 py-1 px-2 m-2 text-white rounded'
        onClick={confirmDeleteUser}
        disabled={isDeleting}
      >
        {isDeleting ? <Spinner clip={true} size={15} /> : 'Delete'}
      </button>
      <ConfirmationModal
        isOpen={showModal}
        message='Are you sure you want to remove this user? This action is irreversible'
        onConfirm={() => handleDeleteUser(userId, isAdmin)} // Confirm action
        onCancel={() => setShowModal(false)} // Cancel action
      />
    </div>
  );
};

export default DeleteUserBtn;
