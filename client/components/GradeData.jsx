import React from 'react'

const GradeData = ({data}) => {
  return (
    <div className='bg-white shadow rounded-lg p-6'>
      <h3 className='text-xl font-semibold mb-4'>Grade Data</h3>
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
            <td className='p-3'>GRADE 1</td>
            <td className='p-3'>{data.grade1Males}</td>
            <td className='p-3'>{data.grade1Females}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>GRADE 2</td>
            <td className='p-3'>{data.grade2Males}</td>
            <td className='p-3'>{data.grade2Females}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>GRADE 3</td>
            <td className='p-3'>{data.grade3Males}</td>
            <td className='p-3'>{data.grade3Females}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>GRADE 4</td>
            <td className='p-3'>{data.grade4Males}</td>
            <td className='p-3'>{data.grade4Females}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>GRADE 5</td>
            <td className='p-3'>{data.grade5Males}</td>
            <td className='p-3'>{data.grade5Females}</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}

export default GradeData