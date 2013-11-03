// matching algorithm

// this algorithim works as follows:
// calculates a student's GPA on a 0 - 100% scale
//   - 2.0 = 0%, 4.0 = 100%
// calculates a student's class level on a 0 to 100% scale 
//   - 20% freshman
//   - 35% sophmore
//   - 85% junior
//   - 100% senior/ super senior/ recent graduate
// calculates a score for hours put into external projects 0 - 100%
//   - 0% for 0 hours -> 100% for 40 hours (total time spent during college)
// calculates a score for work experience 0 - 100%
//   - 20 hours/week possible during school
//   - 40 hours/week possible during breaks (summer/winter)
//   - hours are doubled if the work pertains to student's degree
// calculates a score for student's skills vs a job's desired skills 0 - 100%
//   - if a student has 3 of 5 desired skills
//   - their score would be (3 / 5) or 60% 

// these 5 categories (GPA, class level, external projects, work ex, skill set)
//   - are given weights based on importance by each job posting
// each job posting also specifies desired skills

// the algorithm returns a percentage match from 0 - 100 % for each student to each job posting

// array of example job postings for testing purposes
var jobs = [
  job1 = {
    company: "HP",
    description: "developer",
    desiredWeights: {
      gpaWeight: 0.1,
      classLevelWeight: 0.25,
      workExWeight: 0.25,
      exProjWeight: 0.1,
      skillsWeight: 0.30
    },
    desiredSkills: ["html", "java", "javascript"]
  },
  job2 = {
    company: "Veeva",
    description: "developer",
    desiredWeights: {
      gpaWeight: 0.20,
      classLevelWeight: 0.25,
      workExWeight: 0.35,
      exProjWeight: 0.1,
      skillsWeight: 0.1
    },
    desiredSkills: ["c++", "java", "html", "javascript"]
  }
];

// array of example students for testing
var students = [
  student1 = {
    name: "chad",
    gpa: 4.0,
    classLevel: 4,
    workExSchool: 40,
    workExBreaks: 80,
    exProj: 40,
    skills: ["c++", "html", "java", "javascript"]
  },
  student2 = {
    name: "tim",
    gpa: 3.0,
    classLevel: 4,
    workExSchool: 10,
    workExBreaks: 40,
    exProj: 20,
    skills: ["c++", "html", "java", "javascript"]
    },
  student3 = {
    name: "taylor",
    gpa: 3.1,
    classLevel: 4,
    workExSchool: 15,
    workExBreaks: 30,
    exProj: 0,
    skills: ["html", "java"]
  }
];

var skillsPer = function(student, job) {
  var matchCount = 0;
  for (var i = 0; i < student.skills.length; i++) {
    for (var j = 0; j < job.desiredSkills.length; j++) {
      if (student.skills[i] === job.desiredSkills[j]) {
        matchCount++;
      }
    }
  }
  return (matchCount / job.desiredSkills.length);
};

var gpaPer = function(gpa) {
  return (gpa * 0.5 - 1);
};

var classLevelPer = function(classLevel) {
  if (classLevel === 1) {
    return 0.2;
  }
  else if (classLevel === 2) {
    return 0.35;
  }
  else if (classLevel === 3) {
    return 0.85;
  }
  else if (classLevel === 4) {
    return 1;
  }
};

var workExPer = function(workExSchool, workExBreaks) {
  return ((34*(workExSchool/40) + 18*(workExBreaks/80)) / 52);
};

var exProjPer = function(exProj) {
  if ((exProj/40) >= 1)
    return 1;
  else
    return (exProj/40);
};

var calcPercent = function(student, job) {
  return ((job.desiredWeights.gpaWeight * student.results.gpaRes)
  + (job.desiredWeights.classLevelWeight * student.results.classLevelRes)
  + (job.desiredWeights.exProjWeight * student.results.exProjRes)
  + (job.desiredWeights.workExWeight * student.results.workExRes)
  + (job.desiredWeights.skillsWeight * skillsPer(student, job)));
};

for (var i = 0; i < students.length; i++) {
  students[i].results = {
    gpaRes: gpaPer(students[i].gpa),
    classLevelRes: classLevelPer(students[i].classLevel),
    workExRes: workExPer(students[i].workExSchool, students[i].workExBreaks), 
    exProjRes: exProjPer(students[i].exProj),
  };
};

for (var i = 0; i < jobs.length; i++) {
  jobs[i].matchesNames = [];
  jobs[i].matchesPer = [];
  for (var j = 0; j < students.length; j++) {
    jobs[i].matchesNames.push(students[j].name);
    jobs[i].matchesPer.push(calcPercent(students[j], jobs[i]));
  };
};

var displayResults = function() {
  for (var i = 0; i < jobs.length; i++) {
    for (var j = 0; j < students.length; j++){
      console.log(jobs[i].matchesNames[j] + " " +
      (jobs[i].matchesPer[j]*100).toFixed(2) + " --> " +
      jobs[i].company + " " + jobs[i].description);
    };
  };
};

displayResults();
