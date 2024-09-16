'use client';
import { useState, useEffect } from 'react';
import { useGetStudentResultsQuery } from '@/src/features/students/studentApiSlice';
import Spinner from '@/components/Spinner';
import Pagination from '@/components/Pagination';
import { debounce } from 'lodash';
import style from '@/components/styles/result.module.css';

import StudentResultList from '@/components/StudentResultList';

const ResultPage = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { data, isLoading, isError } = useGetStudentResultsQuery();

  const totalPages = data && data.totalPages;

  useEffect(() => {
    setLoading(isLoading);
    if (isError) {
      setLoading(false);
    }
  }, [data, isError]);

  const handlePageChange = debounce((newPage) => {
    if (newPage !== page) {
      setLoading(true);
      setPage(newPage);
    }
  }, 300);

  return (
    <>
      <div className='bg-blue-950 h-20'></div>
      <div>
        {isLoading && <Spinner clip={true} size={150} />}
        {isError && (
          <p>
            Unable to fetch results this might be due to non payment of fees
          </p>
        )}
        {data && <StudentResultList data={data} />}
      </div>
    </>
  );
};

export default ResultPage;
