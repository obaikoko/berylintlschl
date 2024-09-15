
import Link from 'next/link';

const StaffCard = ({ staff }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='card-title'>
            {staff.surname} {staff.firstName}
          </h5>
          <Link
            className='btn btn-sm btn-light'
            href={`/staff/${staff.id}`}
          >
            View
          </Link>
        </div>
        <p className='card-text'>Level: {staff.role}</p>
      </div>
    </div>
  );
};
export default StaffCard;
