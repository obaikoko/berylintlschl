import Footer from '@/components/Footer';
import React from 'react';

const GalleryPage = () => {
  const images = [
    { src: 'images/chemistry1.jpg', title: 'Chemistry Experiment' },
    { src: 'images/chemistry2.jpg', title: 'Chemistry Experiment' },
    { src: 'images/computer1.jpg', title: 'Computer Lab Session' },
    { src: 'images/lab7.jpg', title: 'Physics Lab ' },
    { src: 'images/lab1.jpg', title: 'Biology Lab ' },
    { src: 'images/lab2.jpg', title: 'Biology Lab ' },
    { src: 'images/lab3.jpg', title: 'Biology Lab ' },
    { src: 'images/bus2.jpg', title: 'School Bus ' },
    { src: 'images/class1.jpg', title: 'Classroom' },
    { src: 'images/class3.jpg', title: 'Classroom' },
    { src: 'images/creche1.jpg', title: 'Creche class' },
    { src: 'images/assemble1.jpg', title: 'Morning Assemble' },
    { src: 'images/assemble2.jpg', title: 'Morning Assemble' },
  ];

  return (
    <>
      <div className='bg-blue-950 h-20'></div>
      <div className='min-h-screen bg-gray-100 py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold text-gray-900 text-center mb-8'>
            Gallery
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {images.map((image, index) => (
              <div
                key={index}
                className='relative overflow-hidden rounded-lg shadow-lg group'
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'
                />
                <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center'>
                  <span className='text-white font-bold text-lg'>
                    {image.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default GalleryPage;
