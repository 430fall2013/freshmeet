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
		var jname = $('#jname').val();
		var title = $('#title').val();
		var description = $('#description').val();
		var expdate = $('#expdate').val();
		var major = $('#major').val();
		var skill1 = $('#skill1').val();
		var skill2 = $('#skill2').val();
		var skill3 = $('#skill3').val();
		var errorFlag = false;
		var errorCounter = 0;

		if (!jname) {
			throwError('No job name entered.');
			errorFlag = true;
			errorCounter++;
		}
		if (!title) {
			throwError('No job title entered.');
			errorFlag = true;
			errorCounter++;
		}
		if (!description) {
			throwError('No description entered.');
			errorFlag = true;
			errorCounter++;
		}
		if (!expdate) {
			throwError('No expiration date entered.');
			errorFlag = true;
			errorCounter++;
		}
		if (!major) {
			throwError('No major entered.');
			errorFlag = true;
			errorCounter++;
		}
		if (!skill1) {
			throwError('No skill 1 entered.');
			errorFlag = true;
			errorCounter++;
		}
		if (!skill2) {
			throwError('No skill 2 entered.');
			errorFlag = true;
			errorCounter++;
		}
		if (!skill3) {
			throwError('No skill 3 entered.');
			errorFlag = true;
			errorCounter++;
		}
		if (errorCounter > 7) {
			throwError('...you managed to miss everything')
		}

		if (!errorFlag) {
			jobs = new Meteor.Collection("jobs");
			jobs.insert({jname: jname, title: title, description: description, expdate: expdate})//work in progress....
			}, function (error) {
				if (error) {
					throwError('Error creating account.');
					console.log(error);
				}
				else {
					console.log('Success');
					Router.go('home');
				}
			});
		}
	}
});