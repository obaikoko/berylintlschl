import React from 'react'

const SecondaryData = ({data}) => {
  return (
    <div className='bg-white shadow rounded-lg p-6'>
      <h3 className='text-xl font-semibold mb-4'>Secondary Data</h3>
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
            <td className='p-3'>JSS 1</td>
            <td className='p-3'>{data.jss1Males}</td>
            <td className='p-3'>{data.jss1Females}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>JSS 2</td>
            <td className='p-3'>{data.jss2Males}</td>
            <td className='p-3'>{data.jss2Females}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>JSS 3</td>
            <td className='p-3'>{data.jss3Males}</td>
            <td className='p-3'>{data.jss3Females}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>SSS 1</td>
            <td className='p-3'>{data.sss1Males}</td>
            <td className='p-3'>{data.sss1Females}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>SSS 2</td>
            <td className='p-3'>{data.sss2Males}</td>
            <td className='p-3'>{data.sss2Females}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>SSS 3</td>
            <td className='p-3'>{data.sss3Males}</td>
            <td className='p-3'>{data.sss3Females}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SecondaryData