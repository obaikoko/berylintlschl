'use client'
import { useRef } from 'react';
import Link from 'next/link';

import style from '../styles/studentList.module.css';

import ReactToPrint from 'react-to-print';
import { FaPrint } from 'react-icons/fa';

const StudentList = ({ data }) => {
  const componentRef = useRef();
  return (
    <div className={style.overflowX}>
      <table className={style.table} ref={componentRef}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>STUDENT ID</th>
            <th>FULL NAME</th>

            <th>DATE OF BIRTH</th>
            <th>CLASS</th>
            <th>GENDER</th>
            <th>FEES</th>
          </tr>
        </thead>
        <tbody>
          {data?.students &&
            data?.students.map((std, index) => (
              <tr key={index}>
                <td>
                  <Link
                    className={`${style.link}`}
                    href={`/students/${std._id}`}
                  >
                    {index + 1}
                  </Link>
                </td>
                <td>
                  <Link
                    className={`${style.link}`}
                    href={`/students/${std._id}`}
                  >
                    {std.studentId}
                  </Link>
                </td>
                <td>
                  <Link
                    className={`${style.link}`}
                    href={`/students/${std._id}`}
                  >
                    {std.firstName} {std.lastName} {std.otherName}
                  </Link>
                </td>

                <td>
                  <Link
                    className={`${style.link}`}
                    href={`/students/${std._id}`}
                  >
                    {std.dateOfBirth?.substring(0, 10)}
                  </Link>
                </td>
                <td>
                  <Link
                    className={`${style.link}`}
                    href={`/students/${std._id}`}
                  >
                    {std.level}
                    {std.subLevel}
                  </Link>
                </td>

                <td>
                  <Link
                    className={`${style.link} `}
                    href={`/students/${std._id}`}
                  >
                    {std.gender}
                  </Link>
                </td>
                <td>
                  <Link
                    className={`${style.link} `}
                    href={`/students/${std._id}`}
                  >
                    {std.isPaid ? 'Paid' : 'Not Paid'}
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ReactToPrint
        trigger={() => (
          <button className={style.btnPrint}>
            <FaPrint className='inline-block mb-1' /> Print
          </button>
        )}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default StudentList;
