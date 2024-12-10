'use client';
import EventCard from '@/components/EventCard';
import Footer from '@/components/Footer';
import Spinner from '@/components/Spinner';

import { useGetEventsQuery } from '@/src/features/events/eventApiSlice';

const EventPage = () => {
  const { data, isLoading, isError } = useGetEventsQuery();

  return (
    <>
      <div className='relative h-80 bg-blue-950 flex items-center justify-center'>
        <img
          src='images/sport1.jpg'
          alt=''
          className='absolute inset-0 w-full h-full object-cover opacity-50'
        />
        <h1 className='relative text-4xl font-bold text-white'>
          Upcoming Events
        </h1>
      </div>
      <div className='min-h-screen bg-gray-100 py-12'>
        {isLoading && <Spinner clip={true} size={150} />}
        <div className='container mx-auto px-4 lg:px-8'>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
            {isError && (
              <h1 className='text-3xl text-center'>
           
                No Events Yet, Please Check Back Later.
              </h1>
            )}

            {data &&
              !isError &&
              data.map((event) => <EventCard key={event._id} event={event} />)}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EventPage;
