Template.student.helpers({
	isEmployer: function() {
		var user = Meteor.user();
		if (user && user.profile.type == "Employer")
			return true;
		else 
			return false;
	}
});

Template.student.events({
	'click .give-business-card': function() {
		var employer = Meteor.user();
		var student = this;
		Meteor.call('giveBusinessCard', employer, student);
	}
});