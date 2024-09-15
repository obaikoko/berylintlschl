import { useDeleteStaffMutation } from '@/src/features/staff/staffApiSlice';
import { toast } from 'react-toastify';
import Spinner from '../Spinner';
import style from '../styles/register.module.css';
import { useRouter } from 'next/navigation';

const DeleteStaffBtn = ({ staff }) => {
  const router = useRouter();
  const [deleteStaff, { isLoading, isError }] = useDeleteStaffMutation();

  const confirmDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete staff record?')) {
      try {
        const res = await deleteStaff(id);
        toast.info(`${res.data}`);
        router.push('/register');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <button
      type='button'
      className={`${style.btn} ${style.btnDelete} `}
      onClick={() => confirmDelete(staff._id)}
    >
      {isLoading ? <Spinner clip={true} size={35} /> : 'Delete'}
    </button>
  );
};

export default DeleteStaffBtn;
