import React from 'react';

const PrePrimaryData = ({ data }) => {
  return (
    <div className='bg-white shadow rounded-lg p-6'>
      <h3 className='text-xl font-semibold mb-4'>Pre Primary Data</h3>
      <table className='w-full table-auto'>
        <thead>
          <tr className='bg-gray-100 text-left'>
            <th className='p-3'>Class</th>
            <th className='p-3'>Male</th>
            <th className='p-3'>Female</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b'>
            <td className='p-3'>Creche</td>
            <td className='p-3'>{data.crecheMales}</td>
            <td className='p-3'>{data.crecheFemales}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>Day Care</td>
            <td className='p-3'>{data.dayCareMales}</td>
            <td className='p-3'>{data.dayCareFemale}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>Reception</td>
            <td className='p-3'>{data.receptionMales}</td>
            <td className='p-3'>{data.receptionFemale}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>Pre School</td>
            <td className='p-3'>{data.preSchoolMales}</td>
            <td className='p-3'>{data.preSchoolFemale}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>Pre kG</td>
            <td className='p-3'>{data.preKgMales}</td>
            <td className='p-3'>{data.preKgFemale}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>kG</td>
            <td className='p-3'>{data.KgMales}</td>
            <td className='p-3'>{data.KgFemale}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PrePrimaryData;
