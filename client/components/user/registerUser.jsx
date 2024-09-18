import { useState } from 'react';
import { useRegisterMutation } from '@/src/features/auth/usersApiSlice';
import { toast } from 'react-toastify';
import style from '../../components/styles/register.module.css';
import { useRouter } from 'next/navigation';
import Spinner from '../Spinner';

function AddUser() {
  const router = useRouter();
  const [isUserForm, setIsUserForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { firstName, lastName, email, password } = formData;
  const [register, { isLoading }] = useRegisterMutation();

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register({
        firstName,
        lastName,
        email,
        password,
      }).unwrap();
      if (res) {
        toast.success(
          `${res.firstName} ${res.lastName} registered successfully`
        );
      }
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    } catch (err) {
      console.log(err?.data?.message || err.error);
      toast.error(err?.data?.message || err.error);
    }
  };
  const clickedUserForm = () => {
    setIsUserForm(!isUserForm);
  };
  return (
    <div className='container mx-auto'>
      <button
        className={`${
          isUserForm ? 'hidden' : 'block'
        } bg-blue-950 text-white px-4 py-2 rounded mt-4 mx-auto w-10/12`}
        onClick={clickedUserForm}
      >
        Register User
      </button>
      <div
        className={`${
          isUserForm ? 'block' : 'hidden'
        } bg-gray-100 p-6 rounded shadow-lg`}
      >
        <form className='space-y-4' onSubmit={onSubmit}>
          <h2>Register User</h2>
          <div className='flex flex-col '>
            <label htmlFor='userFirstName'>First Name</label>
            <input
              className='bg-gray-300 rounded px-4 py-1'
              type='text'
              name='firstName'
              id='userFirstName'
              value={firstName}
              onChange={onChange}
            />
          </div>
          <div className='flex flex-col '>
            <label htmlFor='userLastName'>Last Name</label>
            <input
              className='bg-gray-300 rounded px-4 py-1'
              type='text'
              name='lastName'
              id='userLastName'
              value={lastName}
              onChange={onChange}
            />
          </div>

          <div className='flex flex-col '>
            <label htmlFor='userEmail'>Email</label>
            <input
              className='bg-gray-300 rounded px-4 py-1'
              type='email'
              name='email'
              id='userEmail'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='flex flex-col '>
            <label htmlFor='userPassword'>Password</label>
            <input
              className='bg-gray-300 rounded px-4 py-1'
              type='password'
              name='password'
              id='userPassword'
              value={password}
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
                Register
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
  );
}

export default AddUser;
