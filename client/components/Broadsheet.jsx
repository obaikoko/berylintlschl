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
// import axios from 'axios';

const broadsheet = () => {
  const componentRef = useRef();
  const [generateBroadsheet, { isLoading, isError }] =
    useGenerateBroadsheetMutation();
  const [broadsheet, setBroadsheet] = useState([]);
  const [level, setLevel] = useState('');
  const [subLevel, setsubLevel] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await generateBroadsheet({
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
  if (isLoading) {
    return <Spinner clip={true} size={150} />;
  }
  return (
    <div className='container mx-auto p-4 '>
      <form onSubmit={onSubmit}>
        <input
          placeholder='Class'
          type='text'
          name='level'
          onChange={(e) => setLevel(e.target.value)}
          value={level}
          className=' p-1 rounded mx-3'
        />
        <input
          placeholder='sub Class'
          type='text'
          name='subLevel'
          onChange={(e) => setsubLevel(e.target.value)}
          value={subLevel}
          className=' p-1 rounded mx-3'
        />
        <button className='bg-blue-600 ml-2 rounded p-1 text-white'>
          submit
        </button>
      </form>
      <div ref={componentRef}>
        <h1 className='text-2xl font-bold text-center mb-4'>Broadsheet</h1>
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
