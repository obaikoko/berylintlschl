import AdmissionForm from '@/components/AdmissionForm';
import Footer from '@/components/Footer';
import Onboarding from '@/components/Onboarding';
import React from 'react';

export const metadata = {
  title: 'Admission - Beryl International School',
  description:
    'Find out how to apply for admission to Beryl International School for nursery, primary, and secondary school in Calabar, Cross River State.',
  keywords:
    'Beryl International School admission, school enrollment, Calabar admissions, education in Cross River State, apply to Beryl International School',
};

const AdmissionPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='relative bg-gray-700 h-96 flex items-center justify-center'>
        {/* <img
          src='/images/slider/slide10.jpg' // Replace with actual hero image URL
          alt='Beryl International School'
          className='absolute inset-0 object-cover w-full h-full opacity-50'
        /> */}
        <div className='relative z-10 text-center'>
          <h1 className='text-4xl font-bold text-white'>Admissions</h1>
          <p className='text-lg text-white mt-4'>
            Join our community of excellence!
          </p>
        </div>
      </div>

      <div className='mx-auto '>
        <Onboarding />
        <AdmissionForm />
      </div>
      <Footer />
    </div>
  );
};

export default AdmissionPage;
