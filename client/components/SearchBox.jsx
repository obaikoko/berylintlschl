import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBox = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [level, setLevel] = useState('All');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' && level === 'All') {
      router.push('/students');
    } else {
      const query = `?keyword=${name}&level=${level}`;
      router.push(`/students/search${query}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-blue-950 p-6 mt-0.5 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-white  mx-auto'
    >
      <div className='flex flex-col sm:flex-row items-center gap-4 w-full'>
        <input
          type='text'
          id='name'
          placeholder='Enter Name (First name, Last name, Other name)'
          className='p-3 rounded-lg w-full sm:w-auto flex-1 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          id='property-type'
          className='p-3 rounded-lg bg-white text-gray-900 w-full sm:w-auto flex-1 focus:outline-none focus:ring-2 focus:ring-blue-600'
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value='All'>All</option>
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

      <button
        type='submit'
        className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600'
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
