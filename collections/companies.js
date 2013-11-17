Companies = new Meteor.Collection('companies');

Meteor.methods({
	newCompany: function(company) {
		return Companies.insert(company);
	},
	//this does not work... :(
	joinExistingCompany: function(company, user) {
		if(user.profile.type == "Employer")
			return Company.upsert(company, {$addToSet: {recruiter: user}});
	},
	addJobToCompany: function(job, company) {
		return Companies.upsert(company, {$addToSet: {jobsList: job}});
	}

});