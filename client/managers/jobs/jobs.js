Template.jobs.helpers({
	isEmployer: function() {
		if (Meteor.user() && Meteor.user().profile.type == 'Employer') {
			return true;
		}
		else {
			return false;
		}
	}
});

Template.job.events({
	'click .apply': function(event) {
		event.preventDefault();
		Meteor.call('applyToJob', this, Meteor.user());	
	}
});

Template.job.helpers({
	isStudent: function() {
		if (Meteor.user() && Meteor.user().profile.type == 'Student') {
			return true;
		}
		else {
			return false;
		}
	}
});

Template.extraJobsList.helpers ({
	moreJobs: function() {
		var jobID = Router._current.params._id;
		console.log("JOB ID: " + jobID);

		//error here 
		var job = Jobs.findOne(jobID);
		console.log("JOB: " + job);
		
		var recruiterID = job.recruiterID;
		var recruiter = Employers.findOne(recruiterID);
		console.log(recruiterID);
		return recruiter.jobsList;
		//return 1;
	}
});
/*
Template.schoolStudents.helpers ({
	studentMembers: function() {
		var id = Router._current.params._id;
		var school = Schools.findOne(id);
		return school.studentMembers;
	}
});*/
