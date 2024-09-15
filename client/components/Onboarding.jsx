import React from 'react';

const Onboarding = () => {
  return (
    <section className='section8'>
      <div className='section8-header'>
        <p>Onboarding Steps</p>
        <h1>Follow these three simple steps to join us!</h1>
      </div>
      <div className='section8-body'>
        <ul>
          <li className='card'>
            <h3 className='font-bold'>Fill Out the Application Form</h3>
            <p>
              Start by completing our online application form or visiting our
              school to pick up a physical copy. Provide all the necessary
              information about your child and family.
            </p>
          </li>
          <li className='card'>
            <h3 className='font-bold'>
              Schedule an Assessment and Campus Tour
            </h3>
            <p>
              Once your application is received, we’ll invite your child for an
              age-appropriate assessment. You’ll also get a chance to tour our
              facilities and meet our dedicated staff.
            </p>
          </li>
          <li className='card'>
            <h3 className='font-bold'>Complete the Enrollment Process</h3>
            <p>
              After a successful assessment, finalize the enrollment by
              submitting the required documents and fees. Welcome to the Beryl
              International School family!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Onboarding;
