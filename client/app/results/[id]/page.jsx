'use client';
import ResultTable from '@/components/ResultTable';
import LetterHead from '@/components/LetterHead';
import Spinner from '@/components/Spinner';
import { useGetResultQuery } from '@/src/features/results/resultApiSlice';
import style from '@/components/styles/result.module.css';
import { useEffect, useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import { useParams } from 'next/navigation';
import UpdateResultScore from '@/components/UpdateResultScore';
import UpdateAffectiveAssement from '@/components/UpdateAffectiveAssement';
import UpdatePsychomotor from '@/components/UpdatePsychomotor';
import UpdateRemark from '@/components/UpdateRemark';
import { useSelector } from 'react-redux';
import { FaPrint } from 'react-icons/fa';
import DeleteResultBtn from '@/components/DeleteResultBtn';
const StudentResult = () => {
  const [resultId, setResultId] = useState(null);
  const { id } = useParams();
  const componentRef = useRef();
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading, isError } = useGetResultQuery(resultId);

  useEffect(() => {
    setResultId(id);
  }, [id]);

  if (isLoading) {
    return <Spinner clip={true} size={150} />;
  }
  if (
    data?.level === 'Creche' ||
    data?.level === 'Day Care' ||
    data?.level === 'Reception' ||
    data?.level === 'Pre School' ||
    data?.level === 'Pre KG' ||
    data?.level === 'KG'
  ) {
    return (
      <div>
        <div className='bg-blue-950 h-20'></div>
        <div className={style.container}>
          {isError && 'Unable to fetch...'}
          {data && (
            <>
              <div ref={componentRef} className={style.print}>
                <LetterHead />
                <div className={style.header}>
                  <div className={style.headerContent}>
                    <p className='text-sm'>
                      <strong>STUDENT NAME:</strong>
                      {data?.firstName} {data?.otherName} {data?.lastName}{' '}
                    </p>
                    <p className='text-sm'>
                      <strong>SESSION:</strong>
                      {data?.session} {data?.term} Term
                    </p>
                  </div>
                  <div className={style.headerContent}>
                    <p className='text-sm'>
                      <strong>CLASS:</strong>
                      {data?.level}
                      {data.subLevel}
                    </p>
                  </div>
                </div>
                <ResultTable data={data} />
                <p className='text-sm'>
                  {' '}
                  <strong> Teachers's Remark: </strong> {data?.teacherRemark}
                </p>
                <p className='text-sm'>
                  <strong> Headmistress Remark:</strong> {data?.principalRemark}
                </p>
                <p className='text-sm'>
                  {' '}
                  <strong> Account Details:</strong>
                </p>{' '}
                <small>
                  ACCOUNT NAME: BERYL INTERNATIONAL SCHOOLS <br /> ACCOUNT
                  NUMBER: xxxxxxxxx <br /> BANK NAME: BANK NAME
                </small>
              </div>
              <ReactToPrint
                trigger={() => (
                  <button className={style.btnPrint}>
                    <FaPrint /> Print
                  </button>
                )}
                content={() => componentRef.current}
              />
              {user && user.isStudent ? (
                <></>
              ) : (
                <>
                  <h2>Update Result</h2>
                  <UpdateResultScore level={data?.level} />
                  <UpdateAffectiveAssement />
                  <UpdatePsychomotor />
                  <UpdateRemark />
                  <DeleteResultBtn result={data._id} />
                </>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='bg-blue-950 h-20'></div>
      <div className={style.container}>
        {data && (
          <>
            <div ref={componentRef} className={style.print}>
              <LetterHead />
              <div className={style.header}>
                <div className={style.headerContent}>
                  <p className='text-sm'>
                    <strong>STUDENT NAME:</strong>
                    {data?.firstName} {data?.otherName} {data?.lastName}{' '}
                  </p>
                  <p className='text-sm'>
                    <strong>SESSION:</strong>
                    {data?.session} {data?.term} Term
                  </p>
                  <p className='text-sm'>
                    <strong>STUDENT'S TOTAL SCORE:</strong>
                    {data?.totalScore} out of {data?.subjectResults?.length * 100}
                  </p>
                </div>
                <div className={style.headerContent}>
                  <p className='text-sm'>
                    <strong>CLASS:</strong>
                    {data?.level}
                    {data.subLevel}
                  </p>
                  <p className='text-sm'>
                    <strong>POSITION IN CLASS:</strong>
                    {data?.position}
                  </p>
                  <p className='text-sm'>
                    <strong>STUDENT AVERAGE:</strong>
                    {data?.averageScore?.toFixed(2)}
                  </p>
                </div>
              </div>
              <ResultTable data={data} />
              <p className='text-sm'>
                {' '}
                <strong> Teachers's Remark: </strong> {data?.teacherRemark}
              </p>
              <p className='text-sm'>
                <strong> Principal's Remark:</strong> {data?.principalRemark}
              </p>
              <p className='text-sm'>
                {' '}
                <strong> Account Details:</strong>
              </p>{' '}
              <small>
                ACCOUNT NAME: BERYL INTERNATIONAL SCHOOLS <br /> ACCOUNT NUMBER:
                xxxxxxxxx <br /> BANK NAME: BANK NAME
              </small>
            </div>
            <ReactToPrint
              trigger={() => (
                <button className={style.btnPrint}>
                  <FaPrint /> Print
                </button>
              )}
              content={() => componentRef.current}
            />
            {user && user.isStudent ? (
              <></>
            ) : (
              <>
                <h2>Update Result</h2>
                <UpdateResultScore level={data?.level} />
                <UpdateAffectiveAssement />
                <UpdatePsychomotor />
                <UpdateRemark />
                <DeleteResultBtn result={data._id} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default StudentResult;
