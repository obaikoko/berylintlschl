'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { useGenerateBroadsheetMutation } from '@/src/features/results/resultApiSlice';
import style from './styles/studentList.module.css';

import ReactToPrint from 'react-to-print';
import { FaPrint } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import BroadsheetTable from './BroadsheetTable';
import Spinner from './Spinner';
import { toast } from 'react-toastify';

const broadsheet = () => {
  const componentRef = useRef();
  const [generateBroadsheet, { isLoading, isError }] =
    useGenerateBroadsheetMutation();
  const [broadsheet, setBroadsheet] = useState([]);
  const [session, setSession] = useState('');
  const [term, setTerm] = useState('');
  const [level, setLevel] = useState('');
  const [subLevel, setsubLevel] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await generateBroadsheet({
        session,
        term,
        level,
        subLevel,
      }).unwrap();
      if (res) {
        setBroadsheet(res);
      }
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      console.log(err?.data?.message || err.error);
    }
  };

  return (
    <div className='p-4 '>
      <form onSubmit={onSubmit} className='space-y-4 flex flex-col w-80'>
        <div className='flex flex-col '>
          <select
            className='bg-gray-300 rounded px-4 py-1'
            name='session'
            id='session'
            onChange={(e) => setSession(e.target.value)}
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
          <select
            className='bg-gray-300 rounded px-4 py-1'
            name='term'
            id='term'
            onChange={(e) => setTerm(e.target.value)}
          >
            <option value=''>Select Term</option>
            <option value='First'>First</option>
            <option value='Second'>Second</option>
            <option value='Third'>Third</option>
          </select>
        </div>
        <select
          type='text'
          name='level'
          onChange={(e) => setLevel(e.target.value)}
          value={level}
          className='bg-gray-300 rounded px-4 py-1'
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
        <select
          type='text'
          name='subLevel'
          onChange={(e) => setsubLevel(e.target.value)}
          value={subLevel}
          className='bg-gray-300 rounded px-4 py-1'
        >
          <option value=''>Select sub class</option>
          <option value='A'>A</option>
          <option value='B'>B</option>
          <option value='C'>C</option>
          <option value='D'>D</option>
        </select>

        <button className='bg-blue-600 ml-2 rounded p-1 text-white w-1/3 mb-2'>
          Generate
        </button>
      </form>
      <div ref={componentRef}>
        <h1 className=' font-bold text-center mb-4 shadow-lg mt-5 text-4xl'>
          Broadsheet
        </h1>
        {isLoading && <Spinner clip={true} size={150} />}
        {isError ? (
          <h1>Unable to fetch</h1>
        ) : (
          <BroadsheetTable data={broadsheet} />
        )}
      </div>
      <ReactToPrint
        trigger={() => (
          <button className={style.btnPrint}>
            <FaPrint className='inline-block mb-1' /> Print
          </button>
        )}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default broadsheet;
