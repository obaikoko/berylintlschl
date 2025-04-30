'use client';
import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import { useReserStudentsFeeMutation } from '@/src/features/students/studentApiSlice';
import Spinner from './Spinner';
import { toast } from 'react-toastify';

const ResetStudentFee = () => {
  const [showModal, setShowModal] = useState(false);
  const [resetFees, { isLoading }] = useReserStudentsFeeMutation();

  const [isResultForm, setIsResultForm] = useState(false);

  const [formData, setFormData] = useState({
    session: '',
    term: '',
  });

  const { session, term } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await resetFees({
        session,
        term,
      }).unwrap();
      toast.success(res);

      refetch();
    } catch (err) {
      console.log(err?.data?.message || err.error);
      toast.error(err?.data?.message || err.error);
    }
  };

  const clickedUserForm = () => {
    setIsResultForm(!isResultForm);
  };
  return (
    <div>
      <>
        <div className='container mx-auto '>
          <button
            className={`${
              isResultForm ? 'hidden' : 'block'
            } bg-orange-700 text-white px-2 py-2 rounded mt-4 lg:ml-2 w-full`}
            onClick={clickedUserForm}
          >
            Unlock Results
          </button>
          <div
            className={`${
              isResultForm ? 'block' : 'hidden'
            } bg-gray-100 p-6 rounded shadow-lg`}
          >
            <form className='space-y-4 ' onSubmit={onSubmit}>
              <h2>Unlock Results</h2>
              <div className='flex flex-col '>
                <label htmlFor='session'>Select session</label>
                <select
                  className='bg-gray-300 rounded px-4 py-1'
                  name='session'
                  id='session'
                  onChange={onChange}
                >
                  <option value=''>Select session</option>
                  <option value='2024/2025'>2024/2025</option>
                  <option value='2025/2026'>2025/2026</option>
                  <option value='2026/2027'>2026/2027</option>
                  <option value='2027/2028'>2027/2028</option>
                  <option value='2028/2029'>2028/2029</option>
                  <option value='2029/2030'>2029/2030</option>
                  <option value='2030/2031'>2030/2031</option>
                </select>
              </div>
              <div className='flex flex-col '>
                <label htmlFor='term'>Term</label>
                <select
                  className='bg-gray-300 rounded px-4 py-1 w-1/2'
                  name='term'
                  id='term'
                  onChange={onChange}
                >
                  <option value=''>Select Term</option>
                  <option value='First'>First</option>
                  <option value='Second'>Second</option>
                  <option value='Third'>Third</option>
                </select>
              </div>

              {isLoading ? (
                <Spinner clip={true} />
              ) : (
                <>
                  <button
                    className='bg-green-600 text-white px-2 py-1 rounded'
                    type='submit'
                  >
                    unlock
                  </button>
                  <button
                    onClick={clickedUserForm}
                    className='bg-orange-500 text-white px-2 py-1 rounded ml-4'
                    type='button'
                  >
                    Close
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default ResetStudentFee;
