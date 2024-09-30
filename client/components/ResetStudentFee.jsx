'use client';
import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import { useReserStudentsFeeMutation } from '@/src/features/students/studentApiSlice';
import Spinner from './Spinner';
import { toast } from 'react-toastify';

const ResetStudentFee = () => {
  const [showModal, setShowModal] = useState(false);
  const [resetFees, { isLoading }] = useReserStudentsFeeMutation();
  const handleGraduateStudents = async () => {
    try {
      const res = await resetFees().unwrap();
      toast.success(res);
      setShowModal(false); // Close the modal after deletion
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const confirmGraduateStudents = () => {
    setShowModal(true); // Show the confirmation modal
  };
  return (
    <div>
      <button
        className='bg-orange-400 my-2 w-40 text-white p-3 rounded'
        onClick={confirmGraduateStudents}
      >
        {isLoading ? <Spinner clip={true} size={25} /> : 'Reset Fee'}
      </button>
      <ConfirmationModal
        isOpen={showModal}
        message='Are you sure you want to reset all students payment status to not paid? This action is irreversible'
        onConfirm={handleGraduateStudents} // Confirm action
        onCancel={() => setShowModal(false)} // Cancel action
      />
    </div>
  );
};

export default ResetStudentFee;
