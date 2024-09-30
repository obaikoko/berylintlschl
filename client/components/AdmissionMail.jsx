import { useState } from 'react';

import { useSendAdmissionMailMutation } from '@/src/features/admission/admissionApiSlice';
import { toast } from 'react-toastify';

import { useRouter } from 'next/navigation';
import Spinner from '@/components/Spinner';
import { FaMailBulk } from 'react-icons/fa';

const AdmissionMail = ({ admissionId }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    subject: '',
    text: '',
  });

  const { subject, text } = formData;
  const [sendMail, { isLoading, isError }] = useSendAdmissionMailMutation();

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await sendMail({
        admissionId,
        subject,
        text,
      }).unwrap();
      toast.success(`Mail sent Successfully`);

      setFormData({
        subject: '',
        text: '',
      });
      refetch();
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
          } bg-blue-950 text-white px-2 py-2 rounded mt-4  w-full`}
          onClick={clickedUserForm}
        >
          SEND MAIL
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } bg-gray-100 p-6 rounded shadow-lg`}
        >
          <form className='space-y-4' onSubmit={onSubmit}>
            <h2>Send Mail</h2>
            <div className='flex flex-col '>
              <label htmlFor='subject'>Subject</label>
              <input
                className='bg-gray-300 rounded px-4 py-1'
                type='text'
                name='subject'
                id='subject'
                onChange={onChange}
                value={subject}
              ></input>
            </div>
            <div className='flex flex-col '>
              <label htmlFor='text'>Message</label>
              <textarea
                className='bg-gray-300 rounded px-4 py-1'
                type='text'
                name='text'
                id='text'
                onChange={onChange}
                value={text}
              ></textarea>
            </div>

            {isLoading ? (
              <Spinner clip={true} />
            ) : (
              <>
                <button
                  className='bg-blue-950 hover:bg-blue-600 text-white px-2 py-1 rounded'
                  type='submit'
                >
                  <FaMailBulk className='inline-block m-1' />
                  Send
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

export default AdmissionMail;
