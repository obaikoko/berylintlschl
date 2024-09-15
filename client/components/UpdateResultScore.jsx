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
    subject: '',
  });

  const { test, exam, subject, password } = formData;
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
      }).unwrap();
      if (res) {
        refetch();
        toast.success(`${subject} uploaded successfully`);
      }
      setFormData({
        test: '',
        exam: '',
        // subject: '',
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
              {level === 'JSS 1' || level === 'JSS 2' || level === 'JSS3' ? (
                <select
                  className='bg-gray-300 rounded px-4 py-1 '
                  name='subject'
                  id='subject'
                  onChange={onChange}
                >
                  <option value=''>Enter Result Score</option>
                  <option value='Mathematics'>Mathematics</option>
                  <option value='English'>English</option>
                  <option value='Agricultural Science'>
                    Agricultural Science
                  </option>
                  <option value='Basic Science'>Basic Science</option>
                  <option value='Basic Technology'>Basic Technology</option>
                  <option value='Business Studies'>Business Studies</option>
                  <option value='Christian Religious Knowledge'>
                    Christian Religious Knowledge
                  </option>
                  <option value='Civic Education'>Civic Education</option>
                  <option value='Computer Science(ICT)'>
                    Computer Science(ICT)
                  </option>
                  <option value='Creative Art'>Creative Art</option>

                  <option value='French'>French</option>
                  <option value='Home Economics'>Home Economics</option>
                  <option value='Literature-In-English'>
                    Literature-In-English
                  </option>
                  <option value='Physical And Health Education'>
                    Physical And Health Education
                  </option>
                </select>
              ) : (
                <select name='subject' id='subject' onChange={onChange}>
                  <option value=''>Enter Result Score</option>
                  <option value='Mathematics'>Mathematics</option>
                  <option value='English'>English</option>
                  <option value='Agricultural Science'>
                    Agricultural Science
                  </option>
                  <option value='Biology'>Biology</option>
                  <option value='Chemistry'>Chemistry</option>
                  <option value='Physics'>Physics</option>
                  <option value='Further Mathematics'>
                    Further Mathematics
                  </option>
                  <option value='Financial Accounting'>
                    Financial Accounting
                  </option>
                  <option value='Christian Religious Knowledge'>
                    Christian Religious Knowledge
                  </option>
                  <option value='Civic Education'>Civic Education</option>
                  <option value='Computer Science(ICT)'>
                    Computer Science(ICT)
                  </option>
                  <option value='Geography'>Geography</option>

                  <option value='Economics'>Economics</option>
                  <option value='Government'>Government</option>
                  <option value='History'>History</option>
                  <option value='Commerce'>Commerce</option>
                  <option value='French'>French</option>
                  <option value='Tourism'>Tourism</option>
                  <option value='Food And Nutrition'>Food and Nutrition</option>
                  <option value='Visual Art'>Visual Art</option>
                  <option value='Literature-In-English'>
                    Literature-In-English
                  </option>
                </select>
              )}
            </div>
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

            {isLoading ? (
              <Spinner clip={true} />
            ) : (
              <>
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
