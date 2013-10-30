Meteor.publish('users', function() {
	return Meteor.users.find();
});

Meteor.publish('students', function() {
	return Meteor.user.find();
});

Meteor.publish('companies', function() {
	return Companies.find();
});

Meteor.publish('jobs', function() {
	return Jobs.find();
});
