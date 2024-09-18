import EventImages from '@/components/EventsImages';
import React from 'react';

export const metadata = {
  title: 'Events - Beryl International School',
  description:
    'Stay updated with the latest events, activities, and programs happening at Beryl International School in Calabar, Cross River State.',
  keywords:
    'Beryl International School events, school activities, Calabar school events, Cross River State education events',
};

const EventPage = () => {
  return (
    <div>
      <EventImages />
    </div>
  );
};

export default EventPage;
