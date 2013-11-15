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
      desiredWeights: {
        gpaWeight: (Number($('#GPAweight').val()) * 0.1),
        classLevelWeight: (Number($('#classweight').val()) * 0.1),
        exProjWeight: (Number($('#exProjweight').val()) * 0.1),
        workExWeight: (Number($('#workExweight').val()) * 0.1),
        skillsWeight: (Number($('#skillsweight').val()) * 0.1)
      }, 
			recruiterID: Meteor.user()._id
		}

		Meteor.call('newJobPosting', job);
		Router.go('jobs');
	}	
});
