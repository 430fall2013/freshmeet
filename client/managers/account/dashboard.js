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
	},
	recievedMessages: function() {
		return Messages.find({recieverId: this._id});
	},
	sentMessages: function() {
		return Messages.find({senderId: this._id});
	}
});

Template.jobList.helpers({
	populateJobsList: function() {
		return Jobs.find({recruiterID: Meteor.user()._id});
	}
});