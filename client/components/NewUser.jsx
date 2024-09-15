import React from 'react';
import Link from 'next/link';

const NewUsers = () => {
  return (
    <section className='section1 p-2'>
      <h2 className='lg:text-4xl mb-3'> Welcome to Beryl International School </h2>
      <p className='text-sm lg:mx-32'>
        <span className='text-slate-400 italic'>
          Shaping Future Leaders, Inspiring Excellence{' '}
        </span>{' '}
        <br />
        Beryl International School is dedicated to providing a world-class
        education in a nurturing and supportive environment. Our mission is to
        shape the leaders of tomorrow through a blend of academic excellence,
        personal development, and global awareness. With highly qualified
        teachers and state-of-the-art facilities, we ensure each child reaches
        their full potential.
      </p>
    </section>
  );
};

export default NewUsers;
