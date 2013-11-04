Schools = new Meteor.Collection('schools');

Meteor.methods({
	newSchool: function(school) {
		return Schools.insert(school);
	},
	joinExistingSchool: function(school, user) {
		if(user.profile.type == "Student")
			return Schools.upsert(school, {$addToSet: {students: user}});
		if(user.profile.type == "Faculty")
			return Schools.upsert(school, {$addToSet: {faculty: user}});
	}
});