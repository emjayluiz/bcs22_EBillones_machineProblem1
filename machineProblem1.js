// ITCS227 Source Code Template for 2T AY 2022-2023
/*
  Program:  Computation of Grades using Function
  Programmer: Emjay Luiz O. Billones
  Section:  BCS22
  Start Date: April 17, 2023
  End Date:   April 24, 2023
*/

let studentData = [];
let studentGrades = [];

for (let i = 0; i < 5; i++) {
  let name = prompt(`Enter name of student ${i+1}: `);
  studentData.push(name);
  calculateGrade(name);
}

function getEnablingAssessment(name) {
  let classParticipation = 0;
  for (let j = 0; j < 5; j++) {
    let grade = parseInt(prompt(`Enter enabling assessment ${j+1}: `));
    if (!isNaN(grade) && grade >= 0 && grade <= 100) {
      classParticipation += grade;
    } else {
      alert("Grade must be a number between 0 and 100. Please try again.");
      j--;
    }
  }
  return classParticipation / 5;
}

function getSummativeAssessment(name) {
  let summativeAssessment = 0;
  for (let j = 0; j < 3; j++) {
    let grade = parseInt(prompt(`Enter summative assessment ${j+1}: `));
    if (!isNaN(grade) && grade >= 0 && grade <= 100) {
      summativeAssessment += grade;
    } else {
      alert("Grade must be a number between 0 and 100. Please try again.");
      j--;
    }
  }
  return summativeAssessment / 3;
}

function getFinalExamGrade(name) {
  let grade = parseInt(prompt(`Enter major exam grade: `));
  if (!isNaN(grade) && grade >= 0 && grade <= 100) {
    return grade;
  } else {
    alert("Invalid input. Grade must be a number between 0 and 100.");
    return getFinalExamGrade(name);
  }
}

function calculateLetterGrade(grade) {
  let letterGrades = ["A", "B", "C", "D", "F"];
  if (grade >= 90 && grade <= 100) {
    return letterGrades[0];
  } else if (grade >= 80 && grade < 90) {
    return letterGrades[1];
  } else if (grade >= 70 && grade < 80) {
    return letterGrades[2];
  } else if (grade >= 60 && grade < 70) {
    return letterGrades[3];
  } else {
    return letterGrades[4];
  }
}

function calculateGrade(name) {
  let classParticipationAvg = Math.round(getEnablingAssessment(name).toFixed(2));
  let summativeAssessmentAvg = Math.round(getSummativeAssessment(name).toFixed(2));
  let finalExamGrade = Math.round(getFinalExamGrade(name).toFixed(2));
  let grade = Math.round(classParticipationAvg * 0.3 + summativeAssessmentAvg * 0.3 + finalExamGrade * 0.4);
  let letterGrade = calculateLetterGrade(grade);

  studentGrades.push({
    'Name of Student': name,
    'Class Participation': classParticipationAvg,
    'Summative Assessment': summativeAssessmentAvg,
    'Exam Grade': finalExamGrade,
    'Grade Score': grade,
    'Letter Grade': letterGrade
  });
}

console.table(studentGrades);
