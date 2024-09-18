'use client';
import { useState, useEffect, Suspense } from 'react';
import SearchBox from '@/components/SearchBox';
import StudentList from '@/components/Student/StudentList';
import { useGetStudentsQuery } from '@/src/features/students/studentApiSlice';
import Spinner from '@/components/Spinner';
import Pagination from '@/components/Pagination';
import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const students = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { data, isLoading, isError } = useGetStudentsQuery(page);
  const { user } = useSelector((state) => state.auth);
  const totalPages = data && data.totalPages;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
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
    <div>
      <div className='bg-blue-950 h-20'></div>
      <Suspense>
        <SearchBox />
      </Suspense>
      {loading ? (
        <Spinner clip={true} size={150} />
      ) : (
        <>
          <StudentList data={data} />
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default students;
