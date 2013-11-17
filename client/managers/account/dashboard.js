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
		var user = Meteor.users.findOne(id);
		return Messages.find({reciever: user});
	},
	sentMessages: function() {
		var id = Router._current.params._id;
		var user = Meteor.users.findOne(id);
		return Messages.find({sender: user});
	},
	sender: function() {
		console.log(this);
		var sender = Meteor.users.findOne(this.sender);
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