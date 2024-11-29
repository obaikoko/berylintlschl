'use client'
import { Suspense } from 'react';
import { useState, useEffect, useRef } from 'react';
import StudentList from '@/components/Student/StudentList';
import { useSearchStudentsQuery } from '@/src/features/students/studentApiSlice';
import Spinner from '@/components/Spinner';
import Pagination from '@/components/Pagination';
import { debounce } from 'lodash';
import SearchBox from '@/components/SearchBox';

import { useSearchParams } from 'next/navigation';

const SearchContent = () => {
  const componentRef = useRef();
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');
  const level = searchParams.get('level');
  const [name, setName] = useState(null);
  const [studentClass, setStudentClass] = useState('All');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { data, isLoading, isError } = useSearchStudentsQuery({
    keyword: name,
    level: studentClass,
    page,
  });

  const totalPages = data && data.totalPages;

  useEffect(() => {
    setName(keyword);
    setStudentClass(level);
    setLoading(isLoading);
    if (isError) {
      setLoading(false);
    }
  }, [data, isError, keyword, level]);

  const handlePageChange = debounce((newPage) => {
    if (newPage !== page) {
      setLoading(true);
      setPage(newPage);
    }
  }, 300);

  return (
    <div>
      <div className='bg-blue-950 h-20'></div>
      <SearchBox />
      <div>
        <h2>
          Search Results for {keyword} {level}
        </h2>
        {data?.students?.length === 0 && (
          <div>
            <h3>No result found!</h3>
          </div>
        )}
        {loading ? (
          <Spinner clip={true} size={150} />
        ) : (
          <StudentList data={data} />
        )}
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const Search = () => {
  return (
    <Suspense fallback={<Spinner clip={true} size={150} />}>
      <SearchContent />
    </Suspense>
  );
};

export default Search;
