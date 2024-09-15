import React from 'react';

const WhyChooseUs = () => {
  return (
    <div>
      <section className='section4'>
        <div className='section4-body'>
          <div className='section4-img'>
            <img src='images/slider/students2.jpg' alt='image' />
          </div>
          <div className='text'>
            <h1>What Parents and Students Say About Us</h1>
            <p>
              <span className='italic text-cyan-800'>
                “Beryl International School has been an incredible choice for
                our children. The teachers are dedicated, and the environment is
                warm and supportive. We’ve seen remarkable progress in our kids,
                both academically and personally.”
              </span>
              – Ada O.
            </p>
          </div>
        </div>
      </section>
      <section className='section4'>
        <div className='section4-body'>
          <div className='text'>
            <h1>What Parents and Students Say About Us</h1>

            <p className='mx-2'>
              <span className='italic text-cyan-800'>
                “From the early years to secondary school, Beryl has nurtured
                our children’s love for learning. The community here feels like
                family.”
              </span>
              – Chinedu M.
            </p>
          </div>
          <div className='section4-img'>
            <img src='images/slider/students1.jpg' alt='image' />
          </div>
        </div>
        <div className='section4-header border-b-2'>
          <h1 className='text-2xl text-center'>Why Choose Us</h1>
          <p className='italic text-cyan-700'>
            Why Beryl International School is the Best Choice for Your Child
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
