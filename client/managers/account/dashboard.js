Template.dashboard.helpers({
	accountTypeDashboard: function() {
		var type = Meteor.user().profile.type;
		if (type == 'Student') {
			return Template.studentDashboard();
		}
		else if (type == 'Employer') {
			return Template.recruiterDashboard();
		}
		else if (type == 'Faculty') {
			return Template.facultyDashboard();
		}
	}
});


Template.createJob.events({
	'click .submit': function() {
		var job = {
			jname: $('#jname').val(),
			title: $('#title').val(),
			description: $('#description').val(),
			expdate: $('#expdate').val(),
			major: $('#major').val(),
			skill1: $('#skill1').val(),
			skill2: $('#skill2').val(),
			skill3: $('#skill3').val(),
			recruiterID: Meteor.user()._id
		}

		var errorFlag = false;

		if (!job.jname) {
			throwError('No job name entered.');
			errorFlag = true;
		}
		if (!job.title) {
			throwError('No job title entered.');
			errorFlag = true;
		}
		if (!job.description) {
			throwError('No description entered.');
			errorFlag = true;
		}
		if (!job.expdate) {
			throwError('No expiration date entered.');
			errorFlag = true;
		}
		if (!job.major) {
			throwError('No major entered.');
			errorFlag = true;
		}
		if (!job.skill1) {
			throwError('No skill 1 entered.');
			errorFlag = true;
		}
		if (!job.skill2) {
			throwError('No skill 2 entered.');
			errorFlag = true;
		}
		if (!job.skill3) {
			throwError('No skill 3 entered.');
			errorFlag = true;
		}

		if (!errorFlag) {
			Meteor.call('newJobPosting', job);	
			//Router.go('jobs');
		}
	}
});

Template.jobList.helpers({
	populateJobsList: function() {
		console.log(Jobs.find());
		return Jobs.find();

	}
});