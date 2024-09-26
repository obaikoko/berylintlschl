import { useDeleteStaffMutation } from '@/src/features/staff/staffApiSlice';
import { toast } from 'react-toastify';
import Spinner from '../Spinner';
import style from '../styles/register.module.css';
import { useRouter } from 'next/navigation';
import ConfirmationModal from '../ConfirmationModal';
import { useState } from 'react';

const DeleteStaffBtn = ({ staff }) => {
  const router = useRouter();
  const [deleteStaff, { isLoading, isError }] = useDeleteStaffMutation();
  const [showModal, setShowModal] = useState(false);
  const [selectedStaffId, setSelectedStudentId] = useState(null);

  
  const handleDelete = async () => {
    try {
      await deleteStaff(selectedStaffId).unwrap();
      toast.success('Staff Removed');
      router.push('/staff');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
    setShowModal(false);
  };

  const confirmDelete = (staffId) => {
    setSelectedStudentId(staffId);
    setShowModal(true);
  };
  return (
    <>
      <button
        type='button'
        className='bg-red-500 text-white px-4 py-2 rounded mt-4 m-2'
        onClick={() => confirmDelete(staff._id)}
      >
        {isLoading ? <Spinner clip={true} size={35} /> : 'Delete'}
      </button>
      {/* Confirmation modal */}
      <ConfirmationModal
        isOpen={showModal} // Control modal visibility
        message='Are you sure you want to delete this staff record? This action is irreversible.'
        onConfirm={handleDelete} // Handle delete on confirmation
        onCancel={() => setShowModal(false)} // Close modal without deletion
      />
    </>
  );
};

export default DeleteStaffBtn;
