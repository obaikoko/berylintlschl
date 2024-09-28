import React from 'react';

const Services = () => {
  return (
    <>
      <section className='section2 '>
        <h1 className='text-2xl text-center my-4 '>
          Tailored Education for Every Stage of Growth
        </h1>
        <div className='section2-container'>
          <div className='card'>
            <h2 className='text-cyan-700'>
              Creche & Nursery <br /> Section
            </h2>
            <p className='text-sm'>
              Our Creche and Nursery provide a safe and stimulating environment
              for the youngest learners to explore, grow, and build the
              foundations of their educational journey.
            </p>
          </div>
          <div className='card'>
            <h2 className='text-cyan-700'>
              Primary School <br /> (Grades 1-5)
            </h2>
            <p className='text-sm'>
              In the primary school, we nurture curiosity and creativity. Our
              Grade 1-5 curriculum is designed to build strong academic skills
              in literacy, numeracy, science, and the arts.
            </p>
          </div>
          <div className='card'>
            <h2 className='text-cyan-700'>
              Secondary School <br /> (JSS 1 - SSS 3)
            </h2>
            <p className='text-sm'>
              Our secondary school equips students with the knowledge, skills,
              and confidence needed to excel in higher education and beyond.
            </p>
          </div>
        </div>
      </section>
      <section className='section3'>
        <h1 className='text-2xl'>Academic Excellence</h1>
        <h2 className='italic text-cyan-700'>
          Building a Strong Academic Foundation
        </h2>
        <p>
          Beryl International School’s curriculum is aligned with both national
          and international standards, ensuring that students receive a
          well-rounded education that prepares them for future success. Our
          dedicated teachers utilize modern teaching methods to engage students
          in Mathematics, English, Sciences, and the Humanities. With small
          class sizes, we offer personalized attention to every child, fostering
          academic excellence at every level.
        </p>
        <ul>
          <li>Creche/Nursery</li>
          <li>Primary (Grade 1-5)</li>
          <li>Secondary</li>
        </ul>
        <div className='card-container mx-auto'>
          <div className='mb-3'>
            <div className='card'>
              <h1>100+</h1>
              <p>Creche/Nursery</p>
            </div>
          </div>
          <div className='mb-3'>
            <div className='card'>
              <h1>200+</h1>
              <p>Grade Pupils</p>
            </div>
          </div>
          <div>
            <div className='card'>
              <h1>400+</h1>
              <p>Secondary Students</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
