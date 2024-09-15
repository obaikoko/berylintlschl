import React from 'react';
import Footer from './Footer';

const EventCard = ({ title, description, image, date }) => {
  return (
    <div className='bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden w-full   mx-4 my-6'>
      <img src={image} alt={title} className='w-full h-56 object-cover' />
      <div className='p-6'>
        <h3 className='text-2xl font-semibold text-blue-950 mb-3'>{title}</h3>
        <p className='text-gray-700 mb-4 line-clamp-3'>{description}</p>
        <span className='block text-sm text-gray-500 italic'>{date}</span>
      </div>
    </div>
  );
};

const EventsPage = () => {
  const events = [
    {
      title: 'Annual Sports Day',
      description:
        'Join us for a fun day of sports activities and competitions.',
      image: '/images/slider/sport1.jpg',
      date: 'March 25, 2024',
    },
    {
      title: 'Science Exhibition',
      description: 'Explore projects and innovations created by our students.',
      image: '/images/slider/sport2.jpg',
      date: 'April 12, 2024',
    },
    {
      title: 'Cultural Day Celebration',
      description: 'A celebration of the diverse cultures at our school.',
      image: '/images/slider/slide11.jpg',
      date: 'May 5, 2024',
    },
    {
      title: 'Art and Craft Fair',
      description: 'Showcasing the creativity of students in arts and crafts.',
      image: '/images/slider/slide12.jpg',
      date: 'June 20, 2024',
    },
  ];

  return (
    <>
      <div className='relative h-80 bg-blue-950 flex items-center justify-center'>
        <img
          src='images/slider/sport1.jpg'
          alt=''
          className='absolute inset-0 w-full h-full object-cover opacity-50'
        />
        <h1 className='relative text-4xl font-bold text-white'>
          Upcoming Events
        </h1>
      </div>
      <div className='min-h-screen bg-gray-100 py-12'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                description={event.description}
                image={event.image}
                date={event.date}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
