Employers = new Meteor.Collection('employers');

Meteor.methods({
	newEmployer: function(user) {
		return Employers.insert(user);
	},
	giveBusinessCard: function(employer, student) {
		var user = Meteor.users.findOne(student._id);
		return Meteor.users.upsert(user, {$addToSet: {cards: employer}});
	}
});