import { useRouter } from 'next/navigation';
import { useDeleteResultMutation } from '@/src/features/results/resultApiSlice';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const DeleteResultBtn = ({ result }) => {
  const router = useRouter();

  const [deleteResult, { isLoading, isError }] = useDeleteResultMutation();

  const confirmDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      try {
        await deleteResult(id).unwrap();
        toast.success('Record Deleted ');
        router.push('/results');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <button
      type='button'
      className='bg-red-500 text-white px-4 py-2 rounded my-4 mx-2'
      onClick={() => confirmDelete(result)}
    >
      {isLoading ? <Spinner clip={true} size={35} /> : 'Delete'}
    </button>
  );
};

export default DeleteResultBtn;
