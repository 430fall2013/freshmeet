Template.jobs.helpers({
	isEmployer: function() {
		if (Meteor.user().profile.type == 'Employer') {
			return true;
		}
		else {
			return false;
		}
	}
});