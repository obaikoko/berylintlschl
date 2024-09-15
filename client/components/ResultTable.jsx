import style from './styles/result.module.css';
import AffectiveAssessment from './AffectiveAssessment';
import { useGetNextTermInfoQuery } from '@/src/features/nextTerm/nextTermApiSlcie';

const ResultTable = ({ data }) => {
  const level = `?level=${data.level}`;
  const { data: nextTerm } = useGetNextTermInfoQuery(level);

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
