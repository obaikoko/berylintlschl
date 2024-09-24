import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDeleteResultMutation } from '@/src/features/results/resultApiSlice';
import { toast } from 'react-toastify';
import Spinner from './Spinner';
import ConfirmationModal from './ConfirmationModal'; // Import the reusable modal

const DeleteResultBtn = ({ result }) => {
  const router = useRouter();
  const [deleteResult, { isLoading }] = useDeleteResultMutation();

  const [showModal, setShowModal] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);

  const handleDelete = async () => {
    try {
      await deleteResult(selectedResult).unwrap();
      toast.success('Record Deleted');
      router.push('/results');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
    setShowModal(false); // Close the modal after deletion
  };

  const confirmDelete = (resultId) => {
    setSelectedResult(resultId); 
    setShowModal(true); // Show the confirmation modal
  };

  return (
    <>
      <button
        type='button'
        className='bg-red-500 text-white px-4 py-2 rounded my-4 mx-2'
        onClick={() => confirmDelete(result)}
      >
        {isLoading ? <Spinner clip={true} size={35} /> : 'Delete'}
      </button>

      
      <ConfirmationModal
        isOpen={showModal}
        message='Are you sure you want to delete this record? This action is irreversible'
        onConfirm={handleDelete} // Confirm action
        onCancel={() => setShowModal(false)} // Cancel action
      />
    </>
  );
};

export default DeleteResultBtn;
