import { useRouter } from 'next/navigation';
import { useDeleteStudentMutation } from '@/src/features/students/studentApiSlice';
import { toast } from 'react-toastify';
import Spinner from '../Spinner';


const DeleteStudentBtn = ({ student }) => {
  const router = useRouter();

  const [deleteStudent, { isLoading, isError }] = useDeleteStudentMutation();

  const confirmDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete student record?')) {
      try {
        await deleteStudent(id).unwrap();
        toast.success('Student Removed ');
        router.push('/students');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <button
      type='button'
      className='bg-red-500 text-white px-4 py-2 rounded mt-4 mx-2'
      onClick={() => confirmDelete(student._id)}
    >
      {isLoading ? <Spinner clip={true} size={35} /> : 'Delete'}
    </button>
  );
};

export default DeleteStudentBtn;
