import React from 'react';

const BroadsheetTable = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available</p>;

  const subjects =
    data[0]?.subjectResults.map((subject) => subject.subject) || [];

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full table-auto border-collapse border border-gray-300'>
        <thead>
          <tr>
            <th className='border border-gray-300 px-4 py-2'>Student Name</th>
            {subjects.map((subject) => (
              <th
                key={subject}
                colSpan={3}
                className='border border-gray-300 px-4 py-2'
              >
                {subject}
              </th>
            ))}
          </tr>
          <tr>
            <th className='border border-gray-300 px-4 py-2'></th>
            {subjects.map((subject) => (
              <React.Fragment key={subject}>
                <th
                  key={`${subject}-test`}
                  className='border border-gray-300 px-4 py-2'
                >
                  Test
                </th>
                <th
                  key={`${subject}-exam`}
                  className='border border-gray-300 px-4 py-2'
                >
                  Exam
                </th>
                <th
                  key={`${subject}-total`}
                  className='border border-gray-300 px-4 py-2'
                >
                  Total
                </th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((student, idx) => (
            <tr key={idx}>
              <td className='border border-gray-300 px-4 py-2'>{`${student.firstName} ${student.lastName}`}</td>
              {student.subjectResults.map((subject) => (
                <React.Fragment key={`${student.firstName}-${subject.subject}`}>
                  <td
                    key={`${student.firstName}-${subject.subject}-test`}
                    className='border border-gray-300 px-4 py-2'
                  >
                    {subject.testScore}
                  </td>
                  <td
                    key={`${student.firstName}-${subject.subject}-exam`}
                    className='border border-gray-300 px-4 py-2'
                  >
                    {subject.examScore}
                  </td>
                  <td
                    key={`${student.firstName}-${subject.subject}-total`}
                    className='border border-gray-300 px-4 py-2'
                  >
                    {subject.testScore + subject.examScore}
                  </td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BroadsheetTable;
