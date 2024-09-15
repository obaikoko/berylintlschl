import { useRef } from 'react';
import Link from 'next/link';
import style from '../styles/studentList.module.css';
import ReactToPrint from 'react-to-print';
import { FaPrint } from 'react-icons/fa';

const StaffList = ({ data }) => {
  const componentRef = useRef();
  return (
    <div className={style.overflowX}>
      <table className={style.table} ref={componentRef}>
        <thead>
          <tr>
            <th>S/N</th>

            <th>FULL NAME</th>

            <th>DATE OF BIRTH</th>
            <th>QUALIFICATION</th>
            <th>ROLE</th>
            <th>RESIDENTIAL ADDRESS</th>
          </tr>
        </thead>
        <tbody>
          {data?.staff &&
            data?.staff.map((st, index) => (
              <tr key={index}>
                <td>
                  <Link className={`${style.link}`} href={`/staff/${st._id}`}>
                    {index + 1}
                  </Link>
                </td>

                <td>
                  <Link className={`${style.link}`} href={`/staff/${st._id}`}>
                    {st.firstName} {st.lastName} {st.otherName}
                  </Link>
                </td>

                <td>
                  <Link className={`${style.link}`} href={`/staff/${st._id}`}>
                    {st.dateOfBirth?.substring(0, 10)}
                  </Link>
                </td>
                <td>
                  <Link className={`${style.link}`} href={`/staff/${st._id}`}>
                    {st.qualification}
                  </Link>
                </td>
                <td>
                  <Link className={`${style.link}`} href={`/staff/${st._id}`}>
                    {st.role}
                  </Link>
                </td>

                <td>
                  <Link
                    className={`${style.link} `}
                    href={`/staff/${st._id}`}
                  >
                    {st.residence}
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

export default StaffList;
