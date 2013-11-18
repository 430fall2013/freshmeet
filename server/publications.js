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

Meteor.publish('schools', function(limit) {
	return Schools.find({}, {limit: limit});
});

Meteor.publish('messages', function() {
	return Messages.find();
});

Meteor.publish('recievedMessages', function(reciever) {
	return Messages.find({reciever: reciever});
});

Meteor.publish('sentMessages', function(sender) {
	return Messages.find({sender: sender});
});