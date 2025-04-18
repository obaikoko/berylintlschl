import { useRef } from 'react';
import Link from 'next/link';

import style from '../components/styles/studentList.module.css';

import ReactToPrint from 'react-to-print';
import { FaArrowRight, FaPrint } from 'react-icons/fa';

const StudentResultList = ({ data }) => {
  const componentRef = useRef();

  return (
    <div className={style.overflowX}>
      <table className={style.table} ref={componentRef}>
        <thead>
          <tr>
            <th>S/N</th>
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
                    <td>{rst.level}</td>
                    <td>{`${rst.term} Term`}</td>

                    <td>
                      {1 === 1 ? (
                        <>
                          {rst.position ? (
                            <Link
                              className='text-black underline'
                              href={`/results/${rst._id}`}
                            >
                              <button className='bg-blue-950 text-white hover:bg-blue-800 px-3 rounded'>
                                <FaArrowRight className='inline mx-2 mb-1' />
                                View
                              </button>
                            </Link>
                          ) : (
                            'In Progress'
                          )}
                        </>
                      ) : (
                        'No Access'
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
