'use client';
import { useGetStudentResultsQuery } from '@/src/features/students/studentApiSlice';
import Spinner from '@/components/Spinner';
import StudentResultList from '@/components/StudentResultList';

const ResultPage = () => {
  const { data, isLoading, isError } = useGetStudentResultsQuery();

  return (
    <>
      <div className='bg-blue-950 h-20'></div>
      <div>
        {isLoading && <Spinner clip={true} size={150} />}
        {isError && <p>Unable to fetch results</p>}
        {data && <StudentResultList data={data} />}
      </div>
    </>
  );
};

export default ResultPage;
