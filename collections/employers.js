Employers = new Meteor.Collection('employers');

Meteor.methods({
	newEmployer: function(user) {
		return Employers.insert(user);
	},
	addJobToEmployer: function(job, employer) {
		return Employers.upsert(employer, {$addToSet: {jobsList: job}});
	}
});