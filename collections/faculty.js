Faculty = new Meteor.Collection('faculty');

Meteor.methods({
	newFaculty: function(user) {
		return Faculty.insert(user);
	}
});