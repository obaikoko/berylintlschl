'use client';

import { useRouter } from 'next/navigation';
import { useDeleteAdmissionMutation } from '@/src/features/admission/admissionApiSlice';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Spinner from './Spinner';
import ConfirmationModal from './ConfirmationModal'; // Import the reusable modal

const DeleteAdmissionBtn = ({ admission }) => {
  const router = useRouter();

  const [deleteAdmission, { isLoading, isError }] =
    useDeleteAdmissionMutation();
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [selectedStudentId, setSelectedStudentId] = useState(null); // State to store the admission ID
  console.log(selectedStudentId);

  // Function to handle deletion inside the modal
  const handleDelete = async () => {
    try {
      const res = await deleteAdmission(selectedStudentId).unwrap();
      toast.success(res);
      router.push('/admission/request');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
    setShowModal(false); // Close the modal after deletion
  };

  // Function to trigger the modal and set the admission ID
  const confirmDelete = (admissionId) => {
    setSelectedStudentId(admissionId); // Store the admission ID to be deleted
    setShowModal(true); // Show the confirmation modal
  };

  return (
    <>
      <button
        type='button'
        className='bg-red-500 text-white px-4 py-2 rounded mt-4 mx-2'
        onClick={() => confirmDelete(admission._id)} // Trigger the modal on click
      >
        {isLoading ? <Spinner clip={true} size={35} /> : 'Delete'}
      </button>

      {/* Confirmation modal */}
      <ConfirmationModal
        isOpen={showModal} // Control modal visibility
        message='Are you sure you want to delete this admission record? This action is irreversible.'
        onConfirm={handleDelete} // Handle delete on confirmation
        onCancel={() => setShowModal(false)} // Close modal without deletion
      />
    </>
  );
};

export default DeleteAdmissionBtn;
