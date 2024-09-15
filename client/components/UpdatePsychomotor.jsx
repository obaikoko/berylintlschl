'use client';
import { useEffect, useState } from 'react';
import { useUpdateResultMutation } from '@/src/features/results/resultApiSlice';
import { useGetResultQuery } from '@/src/features/results/resultApiSlice';
import { toast } from 'react-toastify';
import { useRouter, useParams } from 'next/navigation';
import Spinner from '@/components/Spinner';

const UpdatePsychomotor = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [resultId, setResultId] = useState(null);
  const [formData, setFormData] = useState({
    Sport: '',
    Drawing: '',
    Handwriting: '',
    Speaking: '',
    Craft: '',
    Music: '',
    ComputerPractice: '',
    WorkshopPractice: '',
    LabPractice: '',
  });

  const {
    Sport,
    Drawing,
    Handwriting,
    Speaking,
    Craft,
    Music,
    ComputerPractice,
    WorkshopPractice,
    LabPractice,
  } = formData;
  const { data, refetch } = useGetResultQuery(resultId);
  const [result, { isLoading }] = useUpdateResultMutation();

  useEffect(() => {
    setResultId(id);
  }, [id]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked ? e.target.value : '',
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Create an array of affective assessments from formData
    const psychomotorAssessments = [
      { pCategory: 'Sport', grade: formData.Sport },
      { pCategory: 'Drawing', grade: formData.Drawing },
      { pCategory: 'Music', grade: formData.Music },
      { pCategory: 'Handwriting', grade: formData.Handwriting },
      { pCategory: 'Speaking', grade: formData.Speaking },
      { pCategory: 'Craft', grade: formData.Craft },
      { pCategory: 'ComputerPractice', grade: formData.ComputerPractice },
      { pCategory: 'WorkshopPractice', grade: formData.WorkshopPractice },
      { pCategory: 'LabPractice', grade: formData.LabPractice },
    ].filter((assessment) => assessment.grade); // Filter out any empty values

    try {
      const res = await result({
        resultId,
        psychomotorAssessments, // Send as an array
        // Add any other data if required like subject, test, etc.
      }).unwrap();

      if (res) {
        refetch();
        toast.success('Affective assessment updated successfully');
      }
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
          } bg-blue-950 text-white px-4 py-2 rounded mt-4 mx-2`}
          onClick={clickedUserForm}
        >
          PSYCHOMOTOR ASSESSMENT
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } bg-gray-100 p-6 rounded shadow-lg`}
        >
          <form onSubmit={onSubmit} className='space-y-4'>
            <h2 className='text-lg font-bold'>Psychomotor Assessment</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {[
                'Sport',
                'Drawing',
                'Handwriting',
                'Speaking',
                'Craft',
                'Music',
                'ComputerPractice',
                'WorkshopPractice',
                'LabPractice',
              ].map((category) => (
                <div key={category}>
                  <h3 className='font-medium'>{category}</h3>
                  <div className='flex space-x-4'>
                    {['A', 'B', 'C', 'D', 'F'].map((grade) => (
                      <label key={grade} className='flex items-center'>
                        <input
                          type='checkbox'
                          name={category}
                          value={grade}
                          checked={formData[category] === grade}
                          onChange={onChange}
                          className='mr-2'
                        />
                        {grade}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
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

export default UpdatePsychomotor;
