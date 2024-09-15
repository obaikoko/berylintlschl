const getGrade = (totalScore) => {
  if (totalScore >= 80) return 'A';
  if (totalScore >= 70) return 'B';
  if (totalScore >= 60) return 'C';
  if (totalScore >= 50) return 'D';
  if (totalScore >= 40) return 'E';
  return 'F9';
};

export default getGrade;
