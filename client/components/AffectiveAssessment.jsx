// components/AffectiveAssessment.js
import React from 'react';
import style from './styles/affectiveAssessment.module.css';

const AffectiveAssessment = ({ data }) => {
  return (
    <div className={style.container}>
      <table className={style.assessmentTable}>
        <thead>
          <tr>
            <th>Affective Assessment</th>
          </tr>
        </thead>
        <tbody>
          {data?.affectiveAssessment &&
            data?.affectiveAssessment.map((af, index) => (
              <tr key={index}>
                <td className={style.subColumn}>{af?.aCategory}</td>
                <td className={style.gradeColumn}>{af?.grade}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <table className={style.assessmentTable}>
        <thead>
          <tr>
            <th>Psychomotor</th>
          </tr>
        </thead>
        <tbody>
          {data?.psychomotor &&
            data?.psychomotor.map((psy, index) => (
              <tr key={index}>
                <td className={style.subColumn}>{psy.pCategory}</td>
                <td className={style.gradeColumn}>{psy.grade}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <table className={style.assessmentTable}>
        <thead>
          <tr>
            <th>Grading System</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>80 - 100</td>
            <td>A</td>
          </tr>

          <tr>
            <td>70 - 79</td>
            <td>B</td>
          </tr>
          <tr>
            <td>60 - 69</td>
            <td>C</td>
          </tr>
          <tr>
            <td>50 - 59</td>
            <td>D</td>
          </tr>
          <tr>
            <td>40 - 49</td>
            <td>E</td>
          </tr>
          <tr>
            <td>0 - 39</td>
            <td>F</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AffectiveAssessment;
