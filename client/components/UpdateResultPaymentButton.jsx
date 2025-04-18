import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Spinner from '@/components/Spinner';
import {
  useGetResultQuery,
  useResultPaymentMutation,
} from '@/src/features/results/resultApiSlice';
import { toast } from 'react-toastify';

const UpdateResultPaymentButton = () => {
  const { id } = useParams();

  const [resultId, setResultId] = useState(null);
  const [resultFee, setResultFee] = useState({
    resultFee: '',
  });

  const { data, refetch } = useGetResultQuery(resultId);
  const [result, { isLoading, isError }] = useResultPaymentMutation();

  useEffect(() => {
    setResultId(id);
  }, [id]);

  const handlePaymentSettings = async () => {
    try {
      const res = await result({
        resultId,
        resultFee: data.isPaid ? 'notPaid' : 'paid',
      }).unwrap();
      if (res) {
        refetch();
        toast.success(res);
      }
    } catch (err) {
      console.log(err?.data?.message || err.error);
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      {data && (
        <div className='container mx-auto'>
          <button
            className={` ${
              data.isPaid ? 'bg-red-500' : 'bg-green-500'
            } text-white px-2 py-2 rounded mt-4 mx-2`}
            onClick={handlePaymentSettings}
          >
            {isLoading
              ? 'Processing...'
              : data.isPaid
              ? 'Lock Result'
              : 'Unlock Result'}
          </button>
        </div>
      )}
    </>
  );
};

export default UpdateResultPaymentButton;
