import {
  useDeleteEventMutation,
  useGetEventsQuery,
} from '@/src/features/events/eventApiSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from './Spinner copy';

const EventCard = ({ event }) => {
  const { user } = useSelector((state) => state.auth);
  const [deleteEvent, { isLoading: loadingDelete, isError }] =
    useDeleteEventMutation();
  const { data, isLoading, refetch } = useGetEventsQuery();

  const handleDeleteEvent = async (id) => {
    if (window.confirm('Are you sure you want to remove event?')) {
      try {
        const res = await deleteEvent(id);
        if (res.error) {
          toast.info(res.error.data.message);
        } else {
          toast.success('Event deleted Succesfully');
        }

        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  if (isError) {
    <h1>Error Fetching Data...</h1>;
  }

  return (
    <div>
      <div className='bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden     mx-4 my-6'>
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
            onClick={() => handleDeleteEvent(event._id)}
          >
            {loadingDelete ? <Spinner clip={true} size={15} /> : 'Delete'}
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
