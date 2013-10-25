Template.login.events({
	'click .submit': function() {
		var email = $('#email').val();
		var password = $('#password').val();

		Meteor.loginWithPassword(email, password, function(error) {
			if (error) {
				throwError('Invalid email or password.');
			}
			else {
				Router.go('home');
			}
		});
	}
})