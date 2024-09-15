'use client';
import { useState, useEffect } from 'react';
import SearchBox from '@/components/SearchBox';
import StaffList from '@/components/staff/StaffList';
import { useGetAllStaffQuery } from '@/src/features/staff/staffApiSlice';
import Spinner from '@/components/Spinner';
import Pagination from '@/components/Pagination';
import { debounce } from 'lodash';

const staff = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { data, isLoading, isError } = useGetAllStaffQuery(page);
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
      <div className='bg-blue-950 h-20 border-t-white mt-0.5'>
        <h1 className=' text-center text-white text-3xl'>STAFF LIST</h1>
      </div>
      {/* <SearchBox /> */}

      {loading ? (
        <Spinner clip={true} size={150} />
      ) : (
        <>
          <StaffList data={data} />
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

export default staff;
