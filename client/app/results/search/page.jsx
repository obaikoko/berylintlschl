'use client';
import { Suspense } from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSearchResultsQuery } from '@/src/features/results/resultApiSlice';
import Spinner from '@/components/Spinner';
import Pagination from '@/components/Pagination';
import { debounce } from 'lodash';
import { useRouter, useSearchParams } from 'next/navigation';
import ReactToPrint from 'react-to-print';
import ResultList from '@/components/ResultList';
import SearchResultsBox from '@/components/SearchResultsBox';

const ResultSearchPage = () => {
  const componentRef = useRef();
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');
  const level = searchParams.get('level');
  const [name, setName] = useState(null);
  const [studentClass, setStudentClass] = useState('All');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { data, isLoading, isError } = useSearchResultsQuery({
    keyword: name,
    level: studentClass,
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
      <SearchResultsBox />
      <div>
        <h2>
          Search Results for {level} {keyword}
        </h2>
        {data?.students?.length === 0 && (
          <div>
            <h3>No result found!</h3>
          </div>
        )}
        {loading ? (
          <Spinner clip={true} size={150} />
        ) : (
          <ResultList data={data} />
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

const SearchContent = () => {
  return (
    <Suspense fallback={<Spinner clip={true} size={150} />}>
      <ResultSearchPage />
    </Suspense>
  );
};

export default SearchContent;
