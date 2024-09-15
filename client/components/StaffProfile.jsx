import style from './styles/profile.module.css';
import { FaUserAlt } from 'react-icons/fa';
const StaffProfile = ({ staff }) => {
  return (
    <div className={style.profile}>
      <p>
        <strong>First Name:</strong> {staff.firstName}
      </p>
      <p>
        <strong>last Name:</strong> {staff.lastName}
      </p>
      <p>
        <strong>Other Name:</strong> {staff.otherName}
      </p>
      <p>
        <strong>Gender:</strong> {staff.gender}
      </p>
      <p>
        <strong>Category:</strong> {staff.category}
      </p>
      <p>
        <strong>Subject/Role:</strong> {staff.role}
      </p>
      <p>
        <strong>Qualification:</strong> {staff.qualification}
      </p>
      <p>
        <strong>Date of birth:</strong> {staff.dateOfBirth?.substring(0, 10)}
      </p>
      <p>
        <strong>Year Admmitted:</strong>{' '}
        {staff.yearAdmitted?.substring(0, 10)}
      </p>
      <p>
        <strong>State of origin:</strong> {staff.stateOfOrigin}
      </p>
      <p>
        <strong>Local government:</strong> {staff.localGvt}
      </p>
      <p>
        <strong>Home town:</strong> {staff.homeTown}
      </p>
      <p>
        <strong>Residential Address:</strong> {staff.residence}
      </p>

      <p>
        <strong>Contact:</strong> {staff.phone}
      </p>
      <p>
        <strong>Email Address:</strong> {staff.email}
      </p>
    </div>
  );
};

export default StaffProfile;
