Students = new Meteor.Collection('students');

Meteor.methods({
	newStudent: function(user) {
		return Students.insert(user);
	}
});