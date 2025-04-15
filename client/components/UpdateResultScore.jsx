'use client';
import { useEffect, useState } from 'react';
import { useUpdateResultMutation } from '@/src/features/results/resultApiSlice';
import { useGetResultQuery } from '@/src/features/results/resultApiSlice';
import { toast } from 'react-toastify';
import style from './styles/updateResult.module.css';
import { useParams } from 'next/navigation';
import Spinner from '@/components/Spinner';

const UpdateResultScore = ({ level }) => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [resultId, setResultId] = useState(null);
  const [formData, setFormData] = useState({
    test: '',
    exam: '',
    grade: '',
    subject: '',
  });

  const { test, exam, grade, subject } = formData;
  const { data, refetch } = useGetResultQuery(resultId);

  const [result, { isLoading }] = useUpdateResultMutation();

  useEffect(() => {
    setResultId(id);
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
        resultId,
        test,
        exam,
        subject,
        grade,
      }).unwrap();
      if (res) {
        refetch();
        toast.success(`${subject} uploaded successfully`);
      }
      setFormData({
        test: '',
        exam: '',
      });
    } catch (err) {
      console.log(err?.data?.message || err.error);
      toast.error(err?.data?.message || err.error);
    }
  };
  const clickedUserForm = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='container mx-auto'>
        <button
          className={`${
            isOpen ? 'hidden' : 'block'
          } bg-blue-950 text-white px-2 py-2 rounded mt-4 mx-2`}
          onClick={clickedUserForm}
        >
          UPDATE SCORES
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } bg-gray-100 p-6 rounded shadow-lg lg:w-1/2`}
        >
          <form onSubmit={onSubmit} className='space-y-4'>
            <h2 className='text-lg font-bold'>Update Scores</h2>
            <div className='flex flex-col '>
              <label htmlFor='subject'>Select Subject</label>

              <select
                className='bg-gray-300 rounded px-4 py-1'
                name='subject'
                id='subject'
                onChange={onChange}
              >
                <option value=''>Select Subject</option>
                {data?.subjectResults?.length > 0 ? (
                  data.subjectResults.map((result, index) => (
                    <option key={index} value={result.subject}>
                      {result.subject}
                    </option>
                  ))
                ) : (
                  <option disabled>No subjects available</option>
                )}
              </select>
            </div>
            {level === 'Creche' || level === 'Day Care' ? (
              <>
                <select
                  className='bg-gray-300 rounded px-4 py-1 '
                  name='grade'
                  id='grade'
                  onChange={onChange}
                >
                  <option value=''>Select Subject Grade</option>
                  <option value='A'>A</option>
                  <option value='B'>B</option>
                  <option value='C'>C</option>
                  <option value='D'>D</option>
                  <option value='E'>E</option>
                  <option value='F'>F</option>
                </select>
              </>
            ) : (
              <>
                <div className='flex flex-col '>
                  <label htmlFor='test'>Test Score</label>
                  <input
                    className='bg-gray-300 rounded px-4 py-1 '
                    type='number'
                    placeholder='Maximun 30'
                    name='test'
                    id='test'
                    value={test}
                    onChange={onChange}
                  />
                </div>
                <div className='flex flex-col '>
                  <label htmlFor='exam'>Exam Score</label>
                  <input
                    className='bg-gray-300 rounded px-4 py-1 '
                    type='number'
                    name='exam'
                    placeholder='Maximun 70'
                    id='exam'
                    value={exam}
                    onChange={onChange}
                  />
                </div>
              </>
            )}

            {isLoading ? (
              <Spinner clip={true} />
            ) : (
              <>
                <br />
                <button
                  className='bg-blue-950 text-white px-2 py-1 rounded'
                  type='submit'
                >
                  Upload
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

export default UpdateResultScore;
