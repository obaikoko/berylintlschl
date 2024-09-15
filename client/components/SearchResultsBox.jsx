'use client'
import { useState } from 'react';
import './styles/globals.css';
import { useRouter } from 'next/navigation';
const SearchResultsBox = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [level, setLevel] = useState('All');
  const query = `?keyword=${name}&level=${level}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' && level === 'All') {
      router.push('/results');
    } else {
      const query = `?keyword=${name}&level=${level}`;
      router.push(`/results/search${query}`);
    }
  };

  return (
    <div className='searchForm'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='name'
          placeholder='Enter Name (First name, Last name, Other name)'
          className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-950'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          id='property-type'
          className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value='All'>All</option>
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
          <option value='Graduated'>Graduated</option>
        </select>

        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default SearchResultsBox;
