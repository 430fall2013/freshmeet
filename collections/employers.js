Employers = new Meteor.Collection('employers');

Meteor.methods({
	newEmployer: function(user) {
		return Employers.insert(user);
	}
});