import About from '@/components/About';
import Footer from '@/components/Footer';
import PhotoswipePage from '@/components/PhotoSwipe';
import VideoPlayer from '@/components/VideoPlayer';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <div>
        <img src='/images/slider/slide17.jpg' className='w-full ' alt='' />
        <div className='flex'>
          <div className='w-1/2 px-20 mt-10'>
            <h1 className='text-3xl'>About Beryl International School</h1>
            <p className='my-10'>
              Beryl International School is a premier educational institution
              located in Ikot Eneobong, Calabar, Cross River State, Nigeria.
              Offering a comprehensive curriculum from creche/nursery to
              secondary levels, Beryl is dedicated to providing students with an
              enriching and holistic educational experience. The school blends
              academic rigor with character development, ensuring that students
              are not only prepared for academic success but are also instilled
              with strong moral values and a sense of responsibility.
            </p>
            <p className='my-10'>
              The school's vision is to inspire excellence, fostering an
              environment where students are encouraged to think critically,
              creatively, and globally. With a focus on innovation and
              inclusivity, Beryl International School aims to nurture future
              leaders who will make meaningful contributions to society. The
              school emphasizes personalized learning, catering to each
              student's unique strengths and areas for growth, while maintaining
              a commitment to the highest educational standards.
            </p>
            <p className='my-10'>
              At Beryl International School, the mission goes beyond the
              classroom. The institution prioritizes the holistic development of
              every child, promoting personal, social, and intellectual growth.
              The dedicated team of educators at Beryl is passionate about
              guiding students to realize their full potential, preparing them
              not just for examinations but for life’s challenges. The school
              integrates modern teaching techniques with traditional values,
              creating a balanced and well-rounded learning environment.
            </p>
            <p className='mb-10'>
              Beryl International School’s core values—excellence, integrity,
              respect, and community—form the foundation of its educational
              philosophy. These values are evident in every aspect of the
              school, from its strong academic programs to its emphasis on
              character building and leadership. The school prides itself on
              creating a nurturing and supportive environment where every
              student feels valued and empowered to succeed.
            </p>
          </div>
          <div className='card w-1/2 mx-3 h-auto'>
            <h1 className='text-center text-2xl'>The Proprietress</h1>
            <img src='/images/slider/proprietress.jpg' alt='img' />
            <p className='my-10 card'>
              The Proprietress of Beryl International School is a visionary
              leader committed to shaping the future of education. With years of
              experience in both academic and administrative roles, she brings a
              deep passion for fostering excellence in learning. Under her
              leadership, the school has grown into a respected institution
              known for its high academic standards, innovative teaching
              methods, and emphasis on character development.
            </p>
            <p className='my-10 card'>
              Her approach to education is centered on nurturing the whole
              child, focusing not only on academic success but also on
              emotional, social, and moral growth. She is dedicated to creating
              a supportive and inclusive environment where every student can
              thrive. The Proprietress believes in empowering students to become
              confident, responsible, and well-rounded individuals, ready to
              contribute meaningfully to society.
            </p>
            <p className='my-10 card'>
              Driven by her commitment to lifelong learning, she continuously
              seeks ways to improve the educational experience at Beryl
              International School. She regularly engages with staff, students,
              and parents to ensure that the school maintains a culture of
              collaboration and excellence. Her leadership style is both
              compassionate and forward-thinking, ensuring that Beryl
              International School remains at the forefront of educational
              innovation.
            </p>
          </div>
        </div>
      </div>
      <VideoPlayer videoId={'OFNbPAh3rk8'} />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
