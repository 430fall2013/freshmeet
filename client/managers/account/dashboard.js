Template.dashboard.helpers({
	accountTypeDashboard: function() {
		var type = Meteor.user().profile.type;
		if (type == 'Student') {
			return Template.studentDashboard();
		}
		else if (type == 'Employer') {
			return Template.recruiterDashboard();
		}
		else if (type == 'Faculty') {
			return Template.facultyDashboard();
		}
	}
});
Template.studentDashboard.helpers({
	recievedMessages: function() {
		var id = Router._current.params._id;
		return Messages.find({recieverId: id});
	},
	sentMessages: function() {
		var id = Router._current.params._id;
		return Messages.find({senderId: id});
	},
	sender: function() {
		console.log(this);
		var sender = Meteor.users.findOne(this.senderId);
		return sender.profile.fname + ' ' + sender.profile.lname;
	},
	topJobs: function() {
		return Jobs.find();
	},
	following: function() {
		return Meteor.user().following;
	}
});

Template.jobList.helpers({
	populateJobsList: function() {
		return Jobs.find({recruiterID: Meteor.user()._id});
	}
});