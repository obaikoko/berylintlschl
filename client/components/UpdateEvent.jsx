'use client';
import { useEffect, useState } from 'react';
import { useAddEventMutation } from '@/src/features/events/eventApiSlice';
import Resizer from 'react-image-file-resizer';
import { toast } from 'react-toastify';

import Spinner from '@/components/Spinner';

const UpdateEvent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
  });

  const { title, description, date } = formData;
  const [addEvent, { isLoading, isError }] = useAddEventMutation();

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addEvent({
        title,
        description,
        date,
        image,
      }).unwrap();
      toast.success(`Event Added Successfully`);

      setFormData({
        title: '',
        description: '',
        date: '',
      });
    } catch (err) {
      console.log(err?.data?.message || err.error);
      toast.error(err?.data?.message || err.error);
    }
  };
  const clickedUserForm = () => {
    setIsOpen(!isOpen);
  };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        640,
        510,
        'JPEG',
        70,
        0,
        (uri) => {
          resolve(uri);
        },
        'base64'
      );
    });

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const resizedImage = await resizeFile(file);
        setImage(resizedImage);
      } catch (error) {
        toast.error('Error resizing image');
        console.error('Error resizing image:', error);
      }
    }
  };
  return (
    <>
      <div className='container mx-auto'>
        <button
          className={`${
            isOpen ? 'hidden' : 'block'
          } bg-blue-950 text-white px-2 py-2 rounded mt-4 lg:ml-2 w-full`}
          onClick={clickedUserForm}
        >
          UPLOAD EVENT
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } bg-gray-100 p-6 rounded shadow-lg`}
        >
          <form className='space-y-4' onSubmit={onSubmit}>
            <h2>Upload Event</h2>
            <div className='flex flex-col '>
              <label htmlFor='title'>Title</label>
              <input
                className='bg-gray-300 rounded px-4 py-1'
                type='text'
                name='title'
                id='title'
                onChange={onChange}
                value={title}
              ></input>
            </div>
            <div className='flex flex-col '>
              <label htmlFor='description'>Description</label>
              <input
                className='bg-gray-300 rounded px-4 py-1'
                type='text'
                name='description'
                id='description'
                onChange={onChange}
                value={description}
              ></input>
            </div>
            <div className='flex flex-col '>
              <label htmlFor='date'>Date</label>
              <input
                className='bg-gray-300 rounded px-4 py-1'
                type='date'
                name='date'
                id='date'
                onChange={onChange}
                value={date}
              ></input>
            </div>
            <div className='flex flex-col '>
              <label htmlFor='studentPassport' className='form-label'>
                Upload Student Passport
              </label>
              <input
                className='bg-gray-300 rounded px-4 py-1'
                type='file'
                accept='image/*'
                onChange={handleImageChange}
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

export default UpdateEvent;
