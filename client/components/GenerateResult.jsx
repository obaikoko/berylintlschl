'use client';
import { useEffect, useState } from 'react';
import { useGenerateResultMutation } from '@/src/features/results/resultApiSlice';
import { toast } from 'react-toastify';
import style from './styles/updateResult.module.css';
import { useRouter, useParams } from 'next/navigation';

import Spinner from '@/components/Spinner';

const GenerateResult = () => {
  const router = useRouter();

  const { id } = useParams();
  const [isResultForm, setIsResultForm] = useState(false);
  const [studentId, setStudentId] = useState(null);
  const [formData, setFormData] = useState({
    session: '',
    term: '',
    level: '',
  });

  const { session, term, level } = formData;
  const [result, { isLoading }] = useGenerateResultMutation();

  useEffect(() => {
    setStudentId(id);
  }, [id]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await result({
        studentId,
        session,
        term,
        level,
      }).unwrap();

      router.push('/results');
      refetch();
      toast.success(` Result Generated Successfully`);
      setFormData({
        session: '',
        term: '',
        level: '',
      });
    } catch (err) {
      console.log(err?.data?.message || err.error);
      toast.error(err?.data?.message || err.error);
    }
  };
  const clickedUserForm = () => {
    setIsResultForm(!isResultForm);
  };
  return (
    <>
      <div className='container mx-auto '>
        <button
          className={`${
            isResultForm ? 'hidden' : 'block'
          } bg-blue-950 text-white px-2 py-2 rounded mt-4 mx-2`}
          onClick={clickedUserForm}
        >
          GENERATE RESULT
        </button>
        <div
          className={`${
            isResultForm ? 'block' : 'hidden'
          } bg-gray-100 p-6 rounded shadow-lg lg:w-1/3`}
        >
          <form className='space-y-4 ' onSubmit={onSubmit}>
            <h2>Generate Result</h2>
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
                className='bg-gray-300 rounded px-4 py-1'
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
            <div className='flex flex-col '>
              <label htmlFor='level'>Class</label>
              <select
                className='bg-gray-300 rounded px-4 py-1'
                name='level'
                id='level'
                onChange={onChange}
              >
                <option value=''>Select Class</option>
                <option value='Creche'>Creche</option>
                <option value='Day Care'>Day Care</option>
                <option value='Reception'>Reception</option>
                <option value='Pre School'>Pre School</option>
                <option value='Pre KG'>Pre KG</option>
                <option value='KG'>KG</option>
                <option value='Grade 1'>Grade 1</option>
                <option value='Grade 2'>Grade 2</option>
                <option value='Grade 3'>Grade 3</option>
                <option value='Grade 4'>Grade 4</option>
                <option value='Grade 5'>Grade 5</option>
                <option value='JSS 1'>JSS 1</option>
                <option value='JSS 2'>JSS 2</option>
                <option value='JSS 3'>JSS 3</option>
                <option value='SSS 1'>SSS 1</option>
                <option value='SSS 2'>SSS 2</option>
                <option value='SSS 3'>SSS 3</option>
              </select>
            </div>

            {isLoading ? (
              <Spinner clip={true} />
            ) : (
              <>
                <button
                  className='bg-blue-950 text-white px-2 py-1 rounded'
                  type='submit'
                >
                  Generate
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
  );
};

export default GenerateResult;
