Template.profile.helpers({
	studentName: function() {
		return Session.get('fname');
	},
	profileId: function() {
		return Meteor.user()._id;
	}
});
