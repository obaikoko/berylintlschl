'use client';
import React, { useState } from 'react';
import { useCreateAdmissionMutation } from '@/src/features/admission/admissionApiSlice';
import { toast } from 'react-toastify';
import Spinner from './Spinner copy';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    childName: '',
    dateOfBirth: '',
    gender: '',
    level: '',
  });
  const {
    firstName,
    lastName,
    email,
    phone,
    childName,
    gender,
    dateOfBirth,
    level,
  } = formData;

  const [createAdmission, { isLoading, isError }] =
    useCreateAdmissionMutation();
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createAdmission({
        firstName,
        lastName,
        email,
        phone,
        childName,
        gender,
        dateOfBirth,
        level,
      }).unwrap();
      if (res) {
        toast.success('Form submitted successfully');
      }
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <div className='mr-10 md:mt-40'>
      <h1 className='text-3xl font-bold text-center mb-8'>Admission Form</h1>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div>
              <label
                htmlFor='firstName'
                className='block text-blue-950 font-bold mb-2'
              >
                First Name
              </label>
              <input
                type='text'
                name='firstName'
                id='firstName'
                value={firstName}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950'
                required
              />
            </div>
            <div>
              <label
                htmlFor='lastName'
                className='block text-blue-950 font-bold mb-2'
              >
                Last Name
              </label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                value={lastName}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950'
                required
              />
            </div>
          </div>

          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block text-blue-950 font-bold mb-2'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950'
              required
            />
          </div>

          <div className='mb-6'>
            <label
              htmlFor='phone'
              className='block text-blue-950 font-bold mb-2'
            >
              Phone Number
            </label>
            <input
              type='tel'
              name='phone'
              id='phone'
              value={phone}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950'
              required
            />
          </div>

          <div className='mb-6'>
            <label
              htmlFor='childName'
              className='block text-blue-950 font-bold mb-2'
            >
              Child's Name
            </label>
            <input
              type='text'
              name='childName'
              id='childName'
              value={childName}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='childName'
              className='block text-blue-950 font-bold mb-2'
            >
              Child's Gender
            </label>
            <select
              name='gender'
              id='gender'
              value={gender}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950'
              required
            >
              <option value=''>Select gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div>
              <label
                htmlFor='dateOfBirth'
                className='block text-blue-950 font-bold mb-2'
              >
                Date Of Birth
              </label>
              <input
                type='date'
                name='dateOfBirth'
                id='dateOfBirth'
                value={dateOfBirth}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950'
                required
              />
            </div>
            <div>
              <label
                htmlFor='level'
                className='block text-blue-950 font-bold mb-2'
              >
                Class Applying For
              </label>
              <select
                name='level'
                id='level'
                value={level}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950'
                required
              >
                <option value=''>Select Class</option>
                <option value='creche'>Creche/Nursery</option>
                <option value='Grade 1'>Grade 1</option>
                <option value='Grade 2'>Grade 2</option>
                <option value='Grade 3'>Grade 3</option>
                <option value='Grade 4'>Grade 4</option>
                <option value='Grade 5'>Grade 5</option>
                <option value='JSS 1'>JSS 1</option>
                <option value='JSS 2'>JSS 2</option>
                <option value='SSS 1'>SSS 1</option>
              </select>
            </div>
          </div>

          <button
            type='submit'
            className='w-full bg-blue-950 text-white  py-3 rounded-md hover:bg-blue-800 transition-colors'
          >
            {isLoading ? 'Processing...' : 'Submit Form'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
