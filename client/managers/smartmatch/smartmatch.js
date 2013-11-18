/* smartMatch algorithm JavaScript */

Template.smartmatch.helpers({
rankedStudents: function() {
var students = Students.find().fetch();
var jobs = Jobs.find().fetch();
var ranked = [];

for(var i=0; i < jobs.length; i++) {
console.log(students[i]);
console.log(jobs[i]);
//ranked.push(students[i]);
} 

var skillsPer = function(student, job) {
  var matchCount = 0;
  if (student.profile.skills == job.skills) {
    matchCount = 1;
  }
  return matchCount;
};

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

var exProjPer = function(student) {
  if ((student.profile.externalExperience/40) >= 1)
    return 1;
  else
    return (student.profile.externalExperience / 40);
};

var calcPercent = function(student, job) {
  return ((job.desiredWeights.gpaWeight * gpaPer(student))
  + (job.desiredWeights.classLevelWeight * classLevelPer(student.profile.gradYear))
  + (job.desiredWeights.exProjWeight * exProjPer(student))
  + (job.desiredWeights.workExWeight * workExPer(student)) 
 /* + (job.desiredWeights.skillsWeight * skillsPer(student, job))*/);
};

for (var i = 0; i < students.length; i++) {
  for (var j = 0; j < jobs.length; j++) {
  ranked.push("||" + students[i].profile.fname + " -> job " + j  + ": " + ((calcPercent(students[i], jobs[j]))*100).toFixed(2) + "%");
  console.log(calcPercent(students[i], jobs[j]));
  };
};

	return ranked;
}	
});
