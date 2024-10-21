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
  const { refetch } = useGetResultQuery(resultId);
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
              {level === 'Creche' ||
              level === 'Day Care' ||
              level === 'Reception' ||
              level === 'Pre School' ||
              level === 'Pre KG' ||
              level === 'KG' ? (
                <select
                  className='bg-gray-300 rounded px-4 py-1 '
                  name='subject'
                  id='subject'
                  onChange={onChange}
                >
                  <option value=''>Select Grade</option>

                  <option value='Language Practices'>Language Practices</option>
                  <option value='Independence'>Independence</option>
                  <option value='Control Of Movement'>
                    Control Of Movement
                  </option>
                  <option value='Object Identification'>
                    Object Identification
                  </option>
                  <option value='Oral Number Work'>Oral Number Work</option>
                  <option value='Scribbling'>Scribbling</option>
                  <option value='Sociability'>Sociability</option>
                  <option value='Responsibility'>Responsibility</option>

                  <option value='Nursery Rhymes/Poems'>
                    Nursery Rhymes/Poems
                  </option>
                  <option value='Drawing And Colouring'>
                    Drawing And Colouring
                  </option>
                  <option value='Singing'>Singing</option>
                  <option value='Games'>Games</option>
                </select>
              ) : level === 'Grade 1' ||
                level === 'Grade 2' ||
                level === 'Grade 3' ||
                level === 'Grade 4' ||
                level === 'Grade 5' ? (
                <select
                  className='bg-gray-300 rounded px-4 py-1 '
                  name='subject'
                  id='subject'
                  onChange={onChange}
                >
                  <option value=''>Enter Result Score</option>
                  <option value='English'>English</option>
                  <option value='Phonetics/Spelling'>Phonetics/Spelling</option>
                  <option value='Mathematics'>Mathematics</option>
                  <option value='Computer Science(ICT)'>
                    Computer Science(ICT)
                  </option>
                  <option value='Social Studies'>Social Studies</option>
                  <option value='Agricultural Science'>
                    Agricultural Science
                  </option>
                  <option value='Basic Science'>Basic Science</option>
                  <option value='Basic Technology'>Basic Technology</option>
                  <option value='Christian Religious Knowledge'>
                    Christian Religious Knowledge
                  </option>
                  <option value='Home Economics'>Home Economics</option>
                  <option value='Physical And Health Education'>
                    Physical And Health Education
                  </option>

                  <option value='Civic Education'>Civic Education</option>
                  <option value='Quantitative Reasoning'>
                    Quantitative Reasoning
                  </option>
                  <option value='Verbal Reasoning'>Verbal Reasoning</option>
                  <option value='Creative Composition'>
                    Creative Composition
                  </option>
                  <option value='Music'>Music</option>
                  <option value='Creative Art'>Creative Art</option>
                  <option value='French'>French</option>
                  <option value='Efik'>Efik</option>
                  <option value='History'>History</option>
                </select>
              ) : level === 'JSS 1' ||
                level === 'JSS 2' ||
                level === 'JSS 3' ? (
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
                  <option value='History'>History </option>
                  <option value='Literature-In-English'>
                    Literature-In-English
                  </option>
                  <option value='Nigeria Language'>Nigeria Language</option>
                  <option value='Social Studies'>Social Studies</option>
                  <option value='Physical And Health Education'>
                    Physical And Health Education
                  </option>
                </select>
              ) : (
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
                  <option value='Food And Nutrition'>Food And Nutrition</option>
                  <option value='Visual Art'>Visual Art</option>
                  <option value='Literature-In-English'>Literature-In-English</option>
                </select>
              )}
            </div>
            {level === 'Creche' ||
            level === 'Day Care' ||
            level === 'Reception' ||
            level === 'Pre School' ||
            level === 'Pre KG' ||
            level === 'KG' ? (
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
