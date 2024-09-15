import React from 'react'
import Link from 'next/link';

const About = () => {
  return (
    <section className='about'>
      <div className='about-header'>
        <h1 className='text-2xl'>School Life</h1>
        <p>A Rich and Dynamic School Experience</p>
      </div>
      <div>
        <div className='about-body'>
          <h1>
            Beryl International School helps every child reach their full
            potential
          </h1>
          <div>
            <p>
              At Beryl International School, learning goes beyond the classroom.
              We offer a vibrant school life filled with extracurricular
              activities such as sports, music, art, and leadership programs.
              Students are encouraged to explore their interests, develop new
              talents, and contribute to the school community through clubs and
              societies. Our holistic approach ensures that every child grows
              academically, socially, and emotionally.
            </p>
            <Link href='/admission' className='btn'>
              Join us 
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About