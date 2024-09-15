import { useRef } from 'react';
import Link from 'next/link';

import style from './styles/studentList.module.css';

import ReactToPrint from 'react-to-print';
import { FaPrint } from 'react-icons/fa';

const ResultList = ({ data }) => {
  const componentRef = useRef();

  
  return (
    <div className={style.overflowX}>
      <table className={style.table} ref={componentRef}>
        <thead>
          <tr>
            <th>S/N</th>
            <th className={style.smHide}>RESULT ID</th>
            <th>FULL NAME</th>

            <th className={style.smHide}>TERM</th>
            <th>CLASS</th>
            <th className={style.xsmHide}>SESSION</th>
          </tr>
        </thead>
        <tbody>
          {data?.result &&
            data?.result.map((rst, index) => (
              <tr key={index}>
                <td>
                  <Link
                    className={`${style.link}`}
                    href={`/results/${rst._id}`}
                  >
                    {index + 1}
                  </Link>
                </td>
                <td className={style.smHide}>
                  <Link
                    className={`${style.link}`}
                    href={`/results/${rst._id}`}
                  >
                    {rst.studentId}
                  </Link>
                </td>
                <td>
                  <Link
                    className={`${style.link}`}
                    href={`/results/${rst._id}`}
                  >
                    {rst.firstName} {rst.lastName} {rst.otherName}
                  </Link>
                </td>

                <td className={style.smHide}>
                  <Link
                    className={`${style.link}`}
                    href={`/results/${rst._id}`}
                  >
                    {`${rst.term} Term`}
                  </Link>
                </td>
                <td>
                  <Link
                    className={`${style.link}`}
                    href={`/results/${rst._id}`}
                  >
                    {rst.level}{rst.subLevel}
                  </Link>
                </td>

                <td>
                  <Link
                    className={`${style.link} ${style.xsmHide}`}
                    href={`/results/${rst._id}`}
                  >
                    {rst.session}
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ReactToPrint
        trigger={() => (
          <button className={style.btnPrint}>
            <FaPrint /> Print
          </button>
        )}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default ResultList;
