import About from '@/components/About';
import Footer from '@/components/Footer';
import PhotoswipePage from '@/components/PhotoSwipe';
import VideoPlayer from '@/components/VideoPlayer';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='relative'>
        <img
          src='/images/slider/slide17.jpg'
          className='w-full h-80 object-cover'
          alt='About Beryl International School'
        />
        <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center'>
          <h1 className='text-white text-4xl font-bold'>
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

        {/* Image and Proprietress Section */}
        <div className='md:w-1/2 px-6 mt-10 md:mt-0'>
          <div className='bg-white shadow-lg rounded-lg p-6'>
            <h2 className='text-2xl font-semibold text-center mb-6'>
              The Proprietress
            </h2>
            <img
              src='/images/slider/proprietress.jpg'
              alt='The Proprietress'
              className='w-full h-64 object-cover rounded-lg mb-6'
            />
            <p className='text-lg mb-6'>
              The Proprietress of Beryl International School is a visionary
              leader committed to shaping the future of education. With years of
              experience in both academic and administrative roles, she brings a
              deep passion for fostering excellence in learning.
            </p>
            <p className='text-lg mb-6'>
              Her approach to education is centered on nurturing the whole
              child, focusing not only on academic success but also on
              emotional, social, and moral growth. She is dedicated to creating
              a supportive and inclusive environment where every student can
              thrive.
            </p>
            <p className='text-lg'>
              Driven by her commitment to lifelong learning, she continuously
              seeks ways to improve the educational experience at Beryl
              International School. Her leadership style ensures that the school
              remains at the forefront of educational innovation.
            </p>
          </div>
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
