import { useState } from 'react';
import { useAddNextTermInfoMutation } from '@/src/features/nextTerm/nextTermApiSlcie';

import { toast } from 'react-toastify';

import Spinner from '@/components/Spinner';

const UpdateNextTerm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    nextTermFee: '',
    level: '',
    reOpeningDate: '',
    busFee: '',
    otherCharges: '',
  });

  const { nextTermFee, level, reOpeningDate, busFee, otherCharges } = formData;
  const [addNextTermInfo, { isLoading, isError }] =
    useAddNextTermInfoMutation();

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addNextTermInfo({
        nextTermFee,
        level,
        reOpeningDate,
        busFee,
        otherCharges,
      }).unwrap();
      toast.success(res);

      setFormData({
        level: '',
        reOpeningDate: '',
        nextTermFee: '',
        busFee: '',
        otherCharges: '',
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
          } bg-blue-950 text-white px-2 py-2 rounded mt-4  w-full`}
          onClick={clickedUserForm}
        >
          UPLOAD NEXT TERM DETAILS
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } bg-gray-100 p-6 rounded shadow-lg`}
        >
          <form className='space-y-4' onSubmit={onSubmit}>
            <h2>Upload Details</h2>
            <div className='flex flex-col '>
              <label htmlFor='nextTermFee'>Next Term School Fee</label>
              <input
                className='bg-gray-300 rounded px-4 py-1'
                type='number'
                name='nextTermFee'
                id='nextTermFee'
                onChange={onChange}
                value={nextTermFee}
              ></input>
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
                <option value='Day care'>Day care</option>
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
              <label htmlFor='reOpeningDate'>Resumption Date</label>
              <input
                className='bg-gray-300 rounded px-4 py-1'
                type='date'
                name='reOpeningDate'
                id='reOpeningDate'
                onChange={onChange}
                value={reOpeningDate}
              ></input>
            </div>
            <div className='flex flex-col '>
              <label htmlFor='busFee'>Bus Fee</label>
              <input
                className='bg-gray-300 rounded px-4 py-1'
                type='number'
                name='busFee'
                id='busFee'
                onChange={onChange}
                value={busFee}
              ></input>
            </div>
            <div className='flex flex-col '>
              <label htmlFor='otherCharges'>Other Charges</label>
              <input
                className='bg-gray-300 rounded px-4 py-1'
                type='number'
                name='otherCharges'
                id='otherCharges'
                onChange={onChange}
                value={otherCharges}
              ></input>
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

export default UpdateNextTerm;
