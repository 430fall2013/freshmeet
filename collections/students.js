Students = new Meteor.Collection('students');

Meteor.methods({
	newStudent: function(user) {
		return Students.insert(user);
	},
	updateStudent: function(student, data) {
		return Students.upsert(student, {$set: {profile: data}});
	}
});