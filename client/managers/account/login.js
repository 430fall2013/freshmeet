Template.login.events({
	'click .submit': function() {
		var email = $('#email').val();
		var password = $('#password').val();

		Meteor.loginWithPassword(email, password, function(error) {
			if (error) {
				throwError('Invalid email or password.');
			}
			else {
				//this does not work, will not route to dashboard
				Router.go('dashboard');
			}
		});
	}
})