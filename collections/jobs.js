Jobs = new Meteor.Collection('jobs');

Meteor.methods({
	newJobPosting: function(job) {
		return Jobs.insert(job);
	},
	applyToJob: function(job, user) {
		if (_.where(job.applicants, {'_id': user._id})) {
			throwError('You\'ve already applied!');
		}
		else {
			return Jobs.upsert(job, {$addToSet: {applicants: user}});
		}
	}	
});