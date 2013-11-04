Template.jobForm.helpers({

});

Template.jobForm.events({
	'click .submit': function() {
		var user = Meteor.user();
		var title = $('#title').val();
		var description = $('#description').val();

		var job = {
			employer: user.profile.fname + user.profile.lname,
			title: title,
			description: description,
			recruiterID: Meteor.user()._id
		}

		Meteor.call('newJobPosting', job);
		Router.go('jobs');
	}	
});