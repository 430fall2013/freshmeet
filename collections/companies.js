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
});