Template.messageForm.helpers({
	reciever: function() {
		var id = Router._current.params.reciever;
		var user = Meteor.users.findOne(id);
		return user.profile.fname + ' ' + user.profile.lname;
	}
});
Template.messageForm.events({
	'click .submit': function() {
		var id = Router._current.params.reciever;
		var user = Meteor.users.findOne(id);
		var title = $('.title').val();
		var message = $('.message').val();
		Meteor.call('sendMessage', Meteor.user(), user, title, message);
		Router.go('dashboard', {_id: Meteor.user()._id});
	}
});