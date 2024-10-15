'use client';
import React, { useEffect, useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import { useForgetStudentPasswordMutation } from '@/src/features/students/studentApiSlice';
import Spinner from './Spinner';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const ChangePassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [studentId, setStudentId] = useState('');
  const { user } = useSelector((state) => state.auth);

  const [changePassword, { isLoading }] = useForgetStudentPasswordMutation();

  useEffect(() => {
    setStudentId(user.studentId);
  }, [user]);
  const handleChangePassword = async () => {
    try {
      const res = await changePassword({ studentId }).unwrap();
      toast.success(res);
      setShowModal(false); // Close the modal after deletion
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const confirmChangePassword = () => {
    setShowModal(true); // Show the confirmation modal
  };
  return (
    <div>
      <button
        className='bg-red-600 my-2 mt-2 ml-52 w-40 text-white p-3 rounded'
        onClick={confirmChangePassword}
      >
        {isLoading ? <Spinner clip={true} size={25} /> : 'Change Password'}
      </button>
      <ConfirmationModal
        isOpen={showModal}
        message='Are you sure you want to update your current password?'
        onConfirm={handleChangePassword} // Confirm action
        onCancel={() => setShowModal(false)} // Cancel action
      />
    </div>
  );
};

export default ChangePassword;
