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

Template.job.events({
	'click .apply': function(event) {
		event.preventDefault();
		Meteor.call('applyToJob', this, Meteor.user());	
	}
});

Template.job.helpers({
	isStudent: function() {
		if (Meteor.user().profile.type == 'Student') {
			return true;
		}
		else {
			return false;
		}
	}
});