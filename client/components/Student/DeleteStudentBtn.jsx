'use client';

import { useRouter } from 'next/navigation';
import { useDeleteStudentMutation } from '@/src/features/students/studentApiSlice';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Spinner from '../Spinner';
import ConfirmationModal from '../ConfirmationModal'; // Import the reusable modal

const DeleteStudentBtn = ({ student }) => {
  const router = useRouter();

  const [deleteStudent, { isLoading, isError }] = useDeleteStudentMutation();
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [selectedStudentId, setSelectedStudentId] = useState(null); // State to store the student ID

  // Function to handle deletion inside the modal
  const handleDelete = async () => {
    try {
      await deleteStudent(selectedStudentId).unwrap();
      toast.success('Student Removed');
      router.push('/students');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
    setShowModal(false); // Close the modal after deletion
  };

  // Function to trigger the modal and set the student ID
  const confirmDelete = (studentId) => {
    setSelectedStudentId(studentId); // Store the student ID to be deleted
    setShowModal(true); // Show the confirmation modal
  };

  return (
    <>
      <button
        type='button'
        className='bg-red-500 text-white px-4 py-2 rounded mt-4 mx-2'
        onClick={() => confirmDelete(student._id)} // Trigger the modal on click
      >
        {isLoading ? <Spinner clip={true} size={35} /> : 'Delete'}
      </button>

      {/* Confirmation modal */}
      <ConfirmationModal
        isOpen={showModal} // Control modal visibility
        message='Are you sure you want to delete this student record? This action is irreversible.'
        onConfirm={handleDelete} // Handle delete on confirmation
        onCancel={() => setShowModal(false)} // Close modal without deletion
      />
    </>
  );
};

export default DeleteStudentBtn;
