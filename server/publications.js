Meteor.publish('users', function() {
	return Meteor.users.find();
});

Meteor.publish('students', function() {
	return Students.find();
});

Meteor.publish('faculty', function() {
	return Faculty.find();
});

Meteor.publish('employers', function() {
	return Employers.find();
});

Meteor.publish('companies', function() {
	return Companies.find();
});

Meteor.publish('jobs', function() {
	return Jobs.find();
});
