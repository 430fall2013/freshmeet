Jobs = new Meteor.Collection('jobs');

Meteor.methods({
	newJobPosting: function(job) {
		return Jobs.insert(job);
	}	
});