'use client';
import { useEffect, useState } from 'react';
import { useUpdateResultMutation } from '@/src/features/results/resultApiSlice';
import { useGetResultQuery } from '@/src/features/results/resultApiSlice';
import { toast } from 'react-toastify';
import style from './styles/updateResult.module.css';
import { useParams } from 'next/navigation';
import Spinner from '@/components/Spinner';

const UpdateRemark = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [resultId, setResultId] = useState(null);
  const [formData, setFormData] = useState({
    teacherRemark: '',
    principalRemark: '',
  });

  const { teacherRemark, principalRemark } = formData;
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
        teacherRemark,
        principalRemark,
      }).unwrap();
      if (res) {
        refetch();
        toast.success(`Remarks uploaded successfully`);
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
      <div className='container mx-auto '>
        <button
          className={`${
            isOpen ? 'hidden' : 'block'
          } bg-blue-950 text-white px-2 py-2 rounded mt-4 mx-2`}
          onClick={clickedUserForm}
        >
          UPDATE REMARK
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } bg-gray-100 p-6 rounded shadow-lg lg:w-1/3 `}
        >
          <form onSubmit={onSubmit} className='space-y-4'>
            <h2 className='text-lg font-bold'>Update Remark</h2>
            <div className='flex flex-col '>
              <label htmlFor='teacherRemark'>Teacher's Remark</label>
              <textarea
                className='bg-gray-300 rounded px-4 py-1'
                name='teacherRemark'
                id='teacherRemark'
                onChange={onChange}
                value={teacherRemark}
              ></textarea>
            </div>
            <div className={style.formGroup}>
              <label htmlFor='principalRemark'>Principal's Remark</label>
              <textarea
                className='bg-gray-300 rounded px-4 py-1'
                name='principalRemark'
                id='principalRemark'
                onChange={onChange}
                value={principalRemark}
              ></textarea>
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

export default UpdateRemark;
