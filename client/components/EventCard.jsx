'use client';

import {
  useDeleteEventMutation,
  useGetEventsQuery,
} from '@/src/features/events/eventApiSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from './Spinner copy';
import ConfirmationModal from './ConfirmationModal';

const EventCard = ({ event }) => {
  const { user } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false); // Manage modal visibility
  const [selectedEventId, setSelectedEventId] = useState(null); // Store the event to be deleted
  const [deleteEvent, { isLoading: loadingDelete, isError }] =
    useDeleteEventMutation();
  const { data, isLoading, refetch } = useGetEventsQuery();

  // Function to handle delete action inside modal
  const handleDelete = async () => {
    try {
      const res = await deleteEvent(selectedEventId); // Use the stored event ID
      if (res.error) {
        toast.info(res.error.data.message);
      } else {
        toast.success('Event deleted successfully');
      }

      refetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
    setShowModal(false); // Close the modal after deletion
  };

  // Open the modal and store the event ID to be deleted
  const confirmDelete = (eventId) => {
    setSelectedEventId(eventId); // Store the event ID
    setShowModal(true); // Show the confirmation modal
  };

  if (isError) {
    return <h1>Error Fetching Data...</h1>;
  }

  return (
    <div>
      <div className='bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden mx-4 my-6'>
        <img
          src={event.image?.url}
          alt={event.title}
          className='w-full h-56 object-cover'
        />
        <div className='p-6'>
          <h3 className='text-2xl font-semibold text-blue-950 mb-3 line-clamp-1'>
            {event.title}
          </h3>
          <p className='text-gray-700 mb-4 line-clamp-2'>{event.description}</p>
          <span className='block text-sm text-gray-500 italic'>
            {event.date.substring(0, 10)}
          </span>
        </div>
        {user?.isAdmin && (
          <button
            className='bg-red-500 text-white px-1 rounded m-2'
            onClick={() => confirmDelete(event._id)} // Trigger the modal on click
          >
            {loadingDelete ? <Spinner clip={true} size={15} /> : 'Delete'}
          </button>
        )}
        <ConfirmationModal
          isOpen={showModal}
          message='Are you sure you want to delete this event? This action is irreversible.'
          onConfirm={handleDelete} // Trigger the delete action on confirmation
          onCancel={() => setShowModal(false)} // Close modal without action
        />
      </div>
    </div>
  );
};

export default EventCard;
