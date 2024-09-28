import style from './styles/result.module.css';
import AffectiveAssessment from './AffectiveAssessment';
import { useGetNextTermInfoQuery } from '@/src/features/nextTerm/nextTermApiSlcie';

const ResultTable = ({ data }) => {
  const level = `?level=${data.level}`;
  const { data: nextTerm } = useGetNextTermInfoQuery(level);

  if (
    data.level === 'Creche' ||
    data.level === 'Day Care' ||
    data.level === 'Reception' ||
    data.level === 'Pre School' ||
    data.level === 'Pre KG' ||
    data.level === 'KG'
  ) {
    return (
      <div className='p-6  bg-white rounded-xl shadow-md space-y-4'>
        <p className='text-xl font-bold text-center'>
          TERMINAL REPORT FORM FOR PRE-PRIMARY
        </p>
        <div className='overflow-x-auto'>
          <table className='min-w-full table-auto'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='px-4 py-2 text-left text-gray-700 font-semibold'>
                  SUBJECT
                </th>
                <th className='px-4 py-2 text-left text-gray-700 font-semibold'>
                  GRADE
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.subjectResults &&
                data?.subjectResults.map((sr, index) => (
                  <tr key={index} className='border-t'>
                    <td className='px-4 py-2 w-3/4'>{sr.subject}</td>
                    <td className='px-4 py-2 w-1/4'>{sr.grade}</td>
                  </tr>
                ))}
              <tr>
                <td colSpan='2' className='h-4'></td>
              </tr>
              <tr>
                <td className='px-4 py-2 font-bold'>SIGNATURE: ________</td>
                <td className='px-4 py-2 font-bold'>
                  RE-OPENING DATE: {nextTerm?.reOpeningDate.substring(0, 10)}
                </td>
              </tr>
              <tr className='border-t'>
                <td className='px-4 py-2'>
                  NEXT TERM'S FEE: &#8358;{nextTerm?.nextTermFee}
                </td>
                <td className='px-4 py-2'>
                  BUS FARE (Optional): &#8358;{nextTerm?.busFee}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='mt-4'>
          <h3 className='text-lg font-bold'>Grading System</h3>
          <ul className='list-none space-y-1 text-sm'>
            <li>
              <span className='font-semibold'>A</span> - Excellent
              <span className='font-semibold ml-4'>B</span> - Good
            </li>

            <li>
              <span className='font-semibold'>C</span> - Average
              <span className='font-semibold ml-4'>D</span> - Pass
            </li>

            <li>
              <span className='font-semibold'>E</span> - Poor
              <span className='font-semibold  ml-4'>F</span> - Very Poor
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={style.main}>
      <p>ACADEMIC PERFORMANCE REPORT, SUMMARY AND TEST</p>
      <div className={style.result}>
        <table>
          <thead>
            <tr>
              <th>SUBJECT</th>
              <th>TEST(30%)</th>
              <th>EXAM(70%)</th>
              <th>TOTAL(100%)</th>
              <th>GRADE</th>
            </tr>
          </thead>
          <tbody>
            {data?.subjectResults &&
              data?.subjectResults.map((sr, index) => (
                <tr key={index}>
                  <td className={style.srColumn}>{sr.subject}</td>
                  <td>{sr.testScore}</td>
                  <td>{sr.examScore}</td>
                  <td>{sr.totalScore}</td>
                  <td>{sr.grade}</td>
                </tr>
              ))}
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>NUMBER OF PEOPLE IN CLASS: {data.numberInClass}</td>
              <td>PASS/FAIL:{data?.averageScore >= 40 ? 'PASS' : 'FAILED'}</td>
              <td>CONDUCT:________</td>
              <td>SIGNATURE:________</td>
            </tr>
            <tr>
              <td>
                RE-OPENING DATE: {nextTerm?.reOpeningDate.substring(0, 10)}
              </td>
              <td>NEXT TERM'S FEE: &#8358;{nextTerm?.nextTermFee}</td>
              <td>BUS FARE (Optional): &#8358;{nextTerm?.busFee}</td>
              <td>OTHER CHARGES: &#8358;{nextTerm?.otherCharges}</td>
            </tr>
          </tbody>
        </table>

        <AffectiveAssessment data={data} />
      </div>
    </div>
  );
};

export default ResultTable;
