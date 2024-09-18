import React from 'react';
import Link from 'next/link';



const About = () => {
  return (
    <section className='bg-gray-100 py-12 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-800'>School Life</h1>
        <p className='text-gray-600 text-lg mt-2'>
          A Rich and Dynamic School Experience
        </p>
      </div>

      <div className='max-w-6xl mx-auto'>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h1 className='text-2xl font-semibold text-gray-800 mb-6'>
            Beryl International School helps every child reach their full
            potential
          </h1>
          <p className='text-gray-700 leading-relaxed mb-6'>
            At Beryl International School, learning goes beyond the classroom.
            We offer a vibrant school life filled with extracurricular
            activities such as sports, music, art, and leadership programs.
            Students are encouraged to explore their interests, develop new
            talents, and contribute to the school community through clubs and
            societies. Our holistic approach ensures that every child grows
            academically, socially, and emotionally.
          </p>
          <Link
            href='/admission'
            className='inline-block bg-blue-950 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300'
          >
            Join us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
