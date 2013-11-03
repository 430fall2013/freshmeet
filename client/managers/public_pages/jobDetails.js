Template.jobDetails.helpers({
	isStudent: function() {
		if (Meteor.user().profile.type == "Student")
			return true;
	},	
	isRecruiter: function() {
		if (Meteor.user().profile.type == "Employer")
			return true;
	}
});