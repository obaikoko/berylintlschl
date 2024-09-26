'use client';
import { useRef } from 'react';
import Link from 'next/link';

import style from '../components/styles/studentList.module.css';

import ReactToPrint from 'react-to-print';
import { FaPrint } from 'react-icons/fa';

const AdmissionList = ({ data }) => {
  const componentRef = useRef();
  return (
    <div className={style.overflowX}>
      <table className={style.table} ref={componentRef}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>FULL NAME</th>
            <th>EMAIL ADRESS</th>
            <th>CLASS</th>
            <th>GENDER</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((std, index) => (
              <tr key={index}>
                <td>
                  <Link
                    className={`${style.link}`}
                    href={`/admission/request/${std._id}`}
                  >
                    {index + 1}
                  </Link>
                </td>

                <td>
                  <Link
                    className={`${style.link}`}
                    href={`/admission/request/${std._id}`}
                  >
                    {std.childName}
                  </Link>
                </td>

                <td>
                  <Link
                    className={`${style.link}`}
                    href={`/admission/request/${std._id}`}
                  >
                    {std.email}
                  </Link>
                </td>

                <td>
                  <Link
                    className={`${style.link}`}
                    href={`/admission/request/${std._id}`}
                  >
                    {std.level}
                    {std.subLevel}
                  </Link>
                </td>

                <td>
                  <Link
                    className={`${style.link} `}
                    href={`/admission/request/${std._id}`}
                  >
                    {std.gender}
                  </Link>
                </td>
                <td>
                  <Link
                    className={`${style.link}`}
                    href={`/admission/request/${std._id}`}
                  >
                    {std.dateOfBirth?.substring(0, 10)}
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

export default AdmissionList;
