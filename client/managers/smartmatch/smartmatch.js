Template.smartmatch.helpers({
rankedStudents: function() {
var students = Students.find().fetch();
//var jobs = Jobs.find().fetch();
var ranked = [];

// example static job info
var jobPostings = [
job1 = {
  desiredWeights: {
    classLevelWeight: 0.2,
    gpaWeight: 0.2,
    exProjWeight: 0.2,
    workExWeight: 0.2,
    skillsWeight: 0.2
  },
  skills: "java"
},
job1 = {
  desiredWeights: {
    classLevelWeight: 0.05,
    gpaWeight: 0.05,
    exProjWeight: 0.2,
    workExWeight: 0.3,
    skillsWeight: 0.4
  },
  skills: "java"
},
job3 = {
  desiredWeights: {
    classLevelWeight: 0.1,
    gpaWeight: 0.3,
    exProjWeight: 0.4,
    workExWeight: 0.1,
    skillsWeight: 0.1
  },
  skills: "java"
}
];

console.log(jobPostings);

for(var i=0; i < students.length; i++) {
console.log(students[i]);
//console.log(jobs[i]);
//ranked.push(students[i]);
} 

var skillsPer = function(student, job) {
  var matchCount = 0;
  if (student.profile.skills == job.skills) {
    matchCount = 1;
  }
  return matchCount;
};

/*
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
*/ 

var gpaPer = function(student) {
  return (student.profile.gpa * 0.5 - 1);
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

var workExPer = function(student) {
  return (student.profile.workExperience / 40);
}

/*
var workExPer = function(workExSchool, workExBreaks) {
  return ((34*(workExSchool/40) + 18*(workExBreaks/80)) / 52);
};
*/

var exProjPer = function(student) {
  if ((student.profile.externalExperience/40) >= 1)
    return 1;
  else
    return (student.profile.externalExperience / 40);
};

var calcPercent = function(student, job) {
  return ((job.desiredWeights.gpaWeight * gpaPer(student))
  + (job.desiredWeights.classLevelWeight * classLevelPer(student.profile.gradYear)
  + (job.desiredWeights.exProjWeight * exProjPer(student))
  + (job.desiredWeights.workExWeight * workExPer(student)) 
  + (job.desiredWeights.skillsWeight * skillsPer(student, job))));
};


/*
var calcPercent = function(student, job) {
  return ((job.desiredWeights.gpaWeight * student.results.gpaRes)
  + (job.desiredWeights.classLevelWeight * student.results.classLevelRes)
  + (job.desiredWeights.exProjWeight * student.results.exProjRes)
  + (job.desiredWeights.workExWeight * student.results.workExRes)
  + (job.desiredWeights.skillsWeight * skillsPer(student, job)));
};
*/

for (var i = 0; i < students.length; i++) {
  for (var j = 0; j < jobPostings.length; j++) {
  ranked.push("||" + students[i].profile.fname + " -> job " + j  + ":");
  ranked.push(((calcPercent(students[i], jobPostings[j]))*100).toFixed(2));
  //console.log(calcPercent(students[i], jobPostings[j]));
  };
};
  

/*
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

*/

    //console.log(ranked);

// begin algorithm

	return ranked;
}	
});
