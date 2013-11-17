Companies = new Meteor.Collection('companies');

Meteor.methods({
	newCompany: function(company) {
		return Companies.insert(company);
	},
	//this does not work... :(
	joinExistingCompany: function(company, user) {
		if(user.profile.type == "Employer")
			return Schools.upsert(school, {$addToSet: {recruiter: user}});
	},
	addFollower: function(follower) {
		var user = Meteor.user();
		return Meteor.users.upsert(user, {$addToSet: {following: follower}});
	}
});