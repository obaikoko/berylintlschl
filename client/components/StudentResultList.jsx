import { useRef } from 'react';
import Link from 'next/link';

import style from '../components/styles/studentList.module.css';

import ReactToPrint from 'react-to-print';
import { FaPrint } from 'react-icons/fa';

const StudentResultList = ({ data }) => {
  const componentRef = useRef();

  return (
    <div className={style.overflowX}>
      <table className={style.table} ref={componentRef}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>SESSION</th>
            <th>CLASS</th>
            <th>TERM</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length === 0 ? (
            <h2>
              No result uploaded yet, check back later or contact the admin.
            </h2>
          ) : (
            <>
              {data &&
                data.map((rst, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>

                    <td>{rst.session}</td>
                    <td>{rst.level}</td>
                    <td>{`${rst.term} Term`}</td>

                    <td>
                      {rst.position ? (
                        <Link
                          className='text-black'
                          href={`/results/${rst._id}`}
                        >
                          {' '}
                          View
                        </Link>
                      ) : (
                        'Processing'
                      )}
                    </td>
                  </tr>
                ))}
            </>
          )}
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

export default StudentResultList;
