import About from '@/components/About';
import Footer from '@/components/Footer';
import PhotoswipePage from '@/components/PhotoSwipe';
import VideoPlayer from '@/components/VideoPlayer';
import React from 'react';

export const metadata = {
  title: 'About Us - Beryl International School',
  description:
    'Learn more about Beryl International School, its mission, vision, values, and the excellent education provided to students in Calabar, Cross River State.',
  keywords:
    'About Beryl International School, Calabar school, school mission, school values, education in Calabar, Cross River State',
};

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='relative'>
        <img
          src='/images/class3.jpg'
          className='w-full h-80 object-cover'
          alt='About Beryl International School'
        />
        <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center'>
          <h1 className='text-white md:text-4xl p-2 font-bold'>
            About Beryl International School
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className='max-w-7xl mx-auto px-4 py-12 md:flex'>
        {/* Text Section */}
        <div className='md:w-1/2 px-6'>
          <h1 className='text-3xl font-semibold mb-6'>
            About Beryl International School
          </h1>
          <p className='text-lg mb-6'>
            Beryl International School is a premier educational institution
            located in Ikot Eneobong, Calabar, Cross River State, Nigeria.
            Offering a comprehensive curriculum from creche/nursery to secondary
            levels, Beryl is dedicated to providing students with an enriching
            and holistic educational experience. The school blends academic
            rigor with character development, ensuring that students are not
            only prepared for academic success but are also instilled with
            strong moral values and a sense of responsibility.
          </p>
          <p className='text-lg mb-6'>
            The school's vision is to inspire excellence, fostering an
            environment where students are encouraged to think critically,
            creatively, and globally. With a focus on innovation and
            inclusivity, Beryl International School aims to nurture future
            leaders who will make meaningful contributions to society.
          </p>
          <p className='text-lg mb-6'>
            Beryl International School’s core values—excellence, integrity,
            respect, and community—form the foundation of its educational
            philosophy. These values are evident in every aspect of the school,
            from its strong academic programs to its emphasis on character
            building and leadership.
          </p>
        </div>

        {/* Head of Administration Section */}
        <div className='md:w-1/2 px-6 mt-10 md:mt-0'>
          <div className='bg-white shadow-lg rounded-lg p-6'>
            <h2 className='text-2xl font-semibold text-center mb-6'>
              Head of Administration
            </h2>
            <img
              src='/images/proprietress.jpg'
              alt='Mrs. Edith Iwuji Nneka - Head of Administration'
              className='w-full h-64 object-cover rounded-lg mb-6'
            />
            <p className='text-lg mb-6'>
              Mrs. Edith Iwuji Nneka, the Head of Administration at Beryl
              International School, is a seasoned educational leader with a deep
              commitment to creating an environment where students thrive both
              academically and personally. With her extensive experience in
              academic and administrative roles, she ensures the smooth running
              of the school’s operations and promotes the school's core values
              of excellence, integrity, and respect.
            </p>
            <p className='text-lg mb-6'>
              Mrs. Nneka believes in fostering a nurturing environment where
              students can grow intellectually, emotionally, and socially. Her
              leadership and passion for education continue to drive the
              school's mission of inspiring future leaders.
            </p>
          </div>
        </div>
      </div>

      {/* Administrator Section */}
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-2xl font-semibold text-center mb-6'>
            Administrator
          </h2>
          <img
            src='/images/admin2.jpg'
            alt='Mr. Collins Ogoigbe - Administrator'
            className='w-full h-64 object-cover rounded-lg mb-6'
          />
          <p className='text-lg mb-6'>
            Mr. Collins Ogoigbe, the Administrator at Beryl International
            School, plays a pivotal role in ensuring the effective management of
            the school. With a focus on operational excellence and student
            welfare, he supports the administrative team in delivering a
            top-quality educational experience.
          </p>
          <p className='text-lg mb-6'>
            Mr. Ogoigbe's dedication to organizational leadership and innovation
            helps to create a positive, well-structured learning environment for
            all students and staff.
          </p>
        </div>
      </div>

      {/* <VideoPlayer videoId={'OFNbPAh3rk8'} /> */}

      {/* About and Footer Sections */}
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
