'use client';
import React, { useState, useEffect } from 'react';

const images = [
  {
    url: '/images/building1.jpg',
    text1: 'Beryl we are the best',
    text2: 'We have proven track records',
  },
  {
    url: '/images/building2.jpg',
    text1: 'Invest in your child',
    text2: 'The best form of investment is human investment',
  },
  {
    url: '/images/bus3.jpg',
    text1: '2024 Graduads',
    text2: 'We Produce the best students',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Calculate the indices for the next and previous images
  const prevImageIndex =
    currentSlide === 0 ? images.length - 1 : currentSlide - 1;
  const nextImageIndex = (currentSlide + 1) % images.length;

  return (
    <div className='slider-container'>
      <div className='hero-overlay'></div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image.url})` }}
        >
          <div className='overlay'>
            <h1>{image.text1}</h1>
            <p>{image.text2}</p>
          </div>
        </div>
      ))}
      {/* Previous Slide Button */}
      <button className='prev' onClick={prevSlide}>
        <img
          style={{ width: '100%' }}
          src={images[prevImageIndex].url}
          alt='Previous Slide'
        />
      </button>
      {/* Next Slide Button */}
      <button className='next' onClick={nextSlide}>
        <img
          style={{ width: '100%' }}
          src={images[nextImageIndex].url}
          alt='Next Slide'
        />
      </button>
    </div>
  );
};

export default HeroSlider;
