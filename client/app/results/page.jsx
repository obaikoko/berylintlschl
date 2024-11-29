'use client';
import { useState, useEffect } from 'react';
import { useGetResultsQuery } from '@/src/features/results/resultApiSlice';
import Spinner from '@/components/Spinner';
import Pagination from '@/components/Pagination';
import { debounce } from 'lodash';
import SearchResults from '@/components/SearchResultsBox';
import ResultList from '@/components/ResultList';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const Results = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { data, isLoading, isError } = useGetResultsQuery(page);
  const totalPages = data && data.totalPages;
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
    setLoading(isLoading);
    if (isError) {
      setLoading(false);
    }
  }, [data, isError, user]);

  const handlePageChange = debounce((newPage) => {
    if (newPage !== page) {
      setLoading(true);
      setPage(newPage);
    }
  }, 300);
  return (
    <div>
      <div className='bg-blue-950 h-20'></div>
      <SearchResults />

      {loading ? (
        <Spinner clip={true} size={150} />
      ) : (
        <>
          <ResultList data={data} />
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

export default Results;
