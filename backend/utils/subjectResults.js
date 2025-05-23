const subjectResults = ({ level }) => {
  let subjectResults;

  if (level === 'SSS 1' || level === 'SSS 2' || level === 'SSS 3') {
    return (subjectResults = [
      { subject: 'Mathematics' },
      { subject: 'English' },
      { subject: 'Agricultural Science' },
      { subject: 'Biology' },
      { subject: 'Chemistry' },
      { subject: 'Physics' },
      { subject: 'Further Mathematics' },
      { subject: 'Financial Accounting' },
      { subject: 'Christian Religious Knowledge' },
      { subject: 'Civic Education' },
      { subject: 'Computer Science(ICT)' },
      { subject: 'Geography' },
      { subject: 'Economics' },
      { subject: 'Government' },
      { subject: 'History' },
      { subject: 'Commerce' },
      { subject: 'French' },
      { subject: 'Tourism' },
      { subject: 'Technical Drawing' },
      { subject: 'Food And Nutrition' },
      { subject: 'Visual Art' },
      { subject: 'Literature-In-English' },
    ]);
  } else if (level === 'JSS 1' || level === 'JSS 2' || level === 'JSS 3') {
    return (subjectResults = [
      { subject: 'Mathematics' },
      { subject: 'English' },
      { subject: 'Agricultural Science' },
      { subject: 'Basic Science' },
      { subject: 'Basic Technology' },
      { subject: 'Business Studies' },
      { subject: 'Christian Religious Knowledge' },
      { subject: 'Civic Education' },
      { subject: 'Computer Science(ICT)' },
      { subject: 'Creative Art' },
      { subject: 'French' },
      { subject: 'Home Economics' },
      { subject: 'History' },
      { subject: 'Literature-In-English' },
      { subject: 'Nigeria Language' },
      { subject: 'Social Studies' },
      { subject: 'Physical And Health Education' },
    ]);
  } else if (
    level === 'Grade 1' ||
    level === 'Grade 2' ||
    level === 'Grade 3' ||
    level === 'Grade 4' ||
    level === 'Grade 5'
  ) {
    return (subjectResults = [
      { subject: 'English' },
      { subject: 'Phonetics/Spelling' },
      { subject: 'Mathematics' },
      { subject: 'Computer Science(ICT)' },
      { subject: 'Social Studies' },
      { subject: 'Agricultural Science' },
      { subject: 'Basic Science' },
      { subject: 'Basic Technology' },
      { subject: 'Christian Religious Knowledge' },
      { subject: 'Home Economics' },
      { subject: 'Physical And Health Education' },
      { subject: 'Civic Education' },
      { subject: 'Quantitative Reasoning' },
      { subject: 'Verbal Reasoning' },
      { subject: 'Creative Composition' },
      { subject: 'Music' },
      { subject: 'Creative Art' },
      { subject: 'French' },
      { subject: 'Efik' },
      { subject: 'History' },
    ]);
  } else if (level === 'KG') {
    return (subjectResults = [
      { subject: 'English' },
      { subject: 'Phonetics/Spelling' },
      { subject: 'Mathematics' },
      { subject: 'Computer Science(ICT)' },
      { subject: 'Social Studies' },
      { subject: 'Agricultural Science' },
      { subject: 'Basic Science' },
      { subject: 'Basic Technology' },
      { subject: 'Christian Religious Knowledge' },
      { subject: 'Home Economics' },
      { subject: 'Physical And Health Education' },
      { subject: 'Civic Education' },
      { subject: 'Quantitative Reasoning' },
      { subject: 'Verbal Reasoning' },
      { subject: 'Creative Composition' },
      { subject: 'Creative Art' },
      { subject: 'French' },
      { subject: 'Handwritting' },
    ]);
  } else if (level === 'Reception') {
    return (subjectResults = [
      { subject: 'Phonics' },
      { subject: 'Moral Instructions' },
      { subject: 'Health Habit' },
      { subject: 'Rhyme' },
      { subject: 'Creative Art' },
      { subject: 'Science Skills' },
      { subject: 'Social Norms' },
      { subject: 'Numeracy' },
      { subject: 'Literacy' },
      { subject: 'Handwritting' },
    ]);
  } else if (level === 'Pre School' || level === 'Pre KG') {
    return (subjectResults = [
      { subject: 'Word Work' },
      { subject: 'Phonics' },
      { subject: 'Number Work' },
      { subject: 'Social Habit' },
      { subject: 'Science Skill' },
      { subject: 'C.R.K' },
      { subject: 'Health Habit' },
      { subject: 'Quantitative' },
      { subject: 'Verbal' },
      { subject: 'Rhyme' },
      { subject: 'Creative' },
      { subject: 'Handwritting' },
    ]);
  } else {
    return (subjectResults = [
      { subject: 'Language Practices' },
      { subject: 'Independence' },
      { subject: 'Control Of Movement' },
      { subject: 'Object Identification' },
      { subject: 'Oral Number Work' },
      { subject: 'Scribbling' },
      { subject: 'Responsibility' },
      { subject: 'Sociability' },
      { subject: 'Nursery Rhymes/Poems' },
      { subject: 'Drawing And Colouring' },
      { subject: 'Singing' },
      { subject: 'Games' },
    ]);
  }
};
export default subjectResults;
