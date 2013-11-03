Jobs = new Meteor.Collection('jobs');

Meteor.methods({
	newJobPosting: function(job) {
		return Jobs.insert(job);
	},
	applyToJob: function(job, user) {
		return Jobs.upsert(job, {$addToSet: {applicants: user}});
	}	
});