import style from './styles/profile.module.css';
import { FaUserAlt } from 'react-icons/fa';
const StudentProfile = ({ student }) => {
  return (
    <div className='w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-6 md:mt-10'>
      <div className={style.profile}>
        <p>
          <strong>Registration Number:</strong> {student.studentId}
        </p>
        <p>
          <strong>First Name:</strong> {student.firstName}
        </p>
        <p>
          <strong>last Name:</strong> {student.lastName}
        </p>
        <p>
          <strong>Other Name:</strong> {student.otherName}
        </p>
        <p>
          <strong>Gender:</strong> {student.gender}
        </p>
        <p>
          <strong>Class:</strong> {student.level} {student.subLevel}
        </p>
        <p>
          <strong>Date of birth:</strong>{' '}
          {student.dateOfBirth?.substring(0, 10)}
        </p>
        <p>
          <strong>Year Admmitted:</strong>{' '}
          {student.yearAdmitted?.substring(0, 4)}
        </p>
        <p>
          <strong>State of origin:</strong> {student.stateOfOrigin}
        </p>
        <p>
          <strong>Local government:</strong> {student.localGvt}
        </p>
        <p>
          <strong>Home town:</strong> {student.homeTown}
        </p>
        <p>
          <strong>Sponsor name:</strong> {student.sponsorName}
        </p>
        <p>
          <strong>Relationship with sponsor:</strong>{' '}
          {student.sponsorRelationship}
        </p>
        <p>
          <strong>Sponsor contact:</strong> {student.sponsorPhoneNumber}
        </p>
        <p>
          <strong>Sponsor Email:</strong> {student.sponsorEmail}
        </p>
        <p>
          <strong>School Fees:</strong> {student.isPaid ? 'Paid' : 'Not Paid'}
        </p>
      </div>

      {student.isPaid ? (
        <div>
          {/* <h3>School Fee Account Details</h3>
          <p>
            <strong>Account Name:</strong> Beryl International Schools
          </p>
          <p>
            <strong>Bank Name:</strong> First Bank
          </p>
          <p>
            <strong>Account Number:</strong> 2035177616
          </p> */}
        </div>
      ) : (
        <div>
          <p className='text-rose-600'>
            <strong>NOTE:</strong> Students who are yet to pay their fees wont
            have access to their result.
          </p>
          {/* <div>
            <h3>School Fee Account Details</h3>
            <p>
              <strong>Account Name:</strong> Beryl International Schools
            </p>
            <p>
              <strong>Bank Name:</strong> First Bank
            </p>
            <p>
              <strong>Account Number:</strong> 2035177616
            </p>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default StudentProfile;
