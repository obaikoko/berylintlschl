import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className='bg-gray-50 py-16'>
      {/* Section 1 */}
      <section className='section4 mb-16'>
        <div className='flex flex-col lg:flex-row items-center justify-between bg-white shadow-lg rounded-lg overflow-hidden'>
          {/* Image */}
          <div className='lg:w-1/2'>
            <img
              src='images/creche1.jpg'
              alt='Students at Beryl International School'
              className='w-full h-full object-cover rounded'
            />
          </div>
          {/* Text */}
          <div className='lg:w-1/2 p-8'>
            <h1 className='text-3xl font-semibold mb-4 text-blue-950'>
              What Parents and Students Say About Us
            </h1>
            <p className='text-lg text-gray-700 mb-2'>
              <span className='italic text-cyan-800'>
                “Beryl International School has been an incredible choice for
                our children. The teachers are dedicated, and the environment is
                warm and supportive. We’ve seen remarkable progress in our kids,
                both academically and personally.”
              </span>
              <br />– Ada O.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className='section4'>
        <div className='flex flex-col lg:flex-row-reverse items-center justify-between bg-white shadow-lg rounded-lg overflow-hidden mb-16'>
          {/* Image */}
          <div className='lg:w-1/2'>
            <img
              src='images/class2.jpg'
              alt='Students at Beryl International School'
              className='w-full h-full object-cover'
            />
          </div>
          {/* Text */}
          <div className='lg:w-1/2 p-8'>
            <h1 className='text-3xl font-semibold mb-4 text-blue-950'>
              What Parents and Students Say About Us
            </h1>
            <p className='text-lg text-gray-700 mb-2'>
              <span className='italic text-cyan-800'>
                “From the early years to secondary school, Beryl has nurtured
                our children’s love for learning. The community here feels like
                family.”
              </span>
              <br />– Chinedu M.
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div className='section4-header border-t-2 pt-8'>
          <h1 className='text-4xl font-bold text-center text-blue-950 mb-4'>
            Why Choose Us
          </h1>
          <p className='text-lg italic text-cyan-700 text-center max-w-3xl mx-auto'>
            Why Beryl International School is the Best Choice for Your Child
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
