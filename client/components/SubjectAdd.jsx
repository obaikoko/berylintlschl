import { useState } from 'react';
import { useAddSubjectMutation } from '@/src/features/results/resultApiSlice';
import { toast } from 'react-toastify';
import Spinner from '@/components/Spinner';

const AddSubject = () => {
  const [isResultForm, setIsResultForm] = useState(false);

  const [formData, setFormData] = useState({
    session: '',
    term: '',
    level: '',
    subjectName: '',
  });

  const { session, term, level, subjectName } = formData;
  const [addSubject, { isLoading }] = useAddSubjectMutation();

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addSubject({
        session,
        term,
        level,
        subjectName,
      }).unwrap();
      toast.success(res);
      setFormData({
        session: '',
        term: '',
        level: '',
        subjectName: '',
      });
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
    <>
      <div className='container mx-auto '>
        <button
          className={`${
            isResultForm ? 'hidden' : 'block'
          } bg-green-700 text-white px-2 py-2 rounded mt-4 lg:ml-2 w-full`}
          onClick={clickedUserForm}
        >
          Add SUBJECT TO RESULTS
        </button>
        <div
          className={`${
            isResultForm ? 'block' : 'hidden'
          } bg-gray-100 p-6 rounded shadow-lg`}
        >
          <form className='space-y-4 ' onSubmit={onSubmit}>
            <h2>Add subject to results</h2>
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
            <div className='flex flex-col '>
              <label htmlFor='level'>Class</label>
              <select
                className='bg-gray-300 rounded px-4 py-1 '
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
            <div className='flex flex-col '>
              <label htmlFor='rstSubjectName' className='form-label'>
                Subject
              </label>
              <select
                name='subjectName'
                id='rstSubjectName'
                className='bg-gray-300 rounded px-4 py-1 '
                onChange={onChange}
              >
                <option value=''>Select Subject</option>
                <option value='Mathematics'>Mathematics</option>
                <option value='English'>English</option>
                <option value='Agricultural Science'>
                  Agricultural Science
                </option>
                <option value='Biology'>Biology</option>
                <option value='Chemistry'>Chemistry</option>
                <option value='Physics'>Physics</option>
                <option value='Further Mathematics'>Further Mathematics</option>
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
                <option value='Literature-In-English'>
                  Literature-In-English
                </option>
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
                <option value='Handwritting'>Handwritting</option>
                <option value='Word Work'>Word Work</option>
                <option value='Phonics'>Phonics</option>
                <option value='Number Work'>Number Work</option>
                <option value='Social Habit'>Social Habit</option>
                <option value='Science Skill'>Science Skill</option>
                <option value='C.R.K'>C.R.K</option>
                <option value='Health Habit'>Health Habit</option>
                <option value='Quantitative'>Quantitative</option>
                <option value='Verbal'>Verbal</option>
                <option value='Rhyme'>Rhyme</option>
                <option value='Creative'>Creative</option>
                <option value='Handwritting'>Handwritting</option>
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
                  Add
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

export default AddSubject;
