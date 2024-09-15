'use client';
import { useState, useEffect } from 'react';
import { useGetResultsQuery } from '@/src/features/results/resultApiSlice';
import Spinner from '@/components/Spinner';
import Pagination from '@/components/Pagination';
import { debounce } from 'lodash';
import SearchResults from '@/components/SearchResultsBox';
import ResultList from '@/components/ResultList';
const Results = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { data, isLoading, isError } = useGetResultsQuery();
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
