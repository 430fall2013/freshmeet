Template.register.rendered = function() {
	$('#radio').buttonset();
	var type = Session.get('registerType');
	if (type == 'Student') {
		$('#radio1').click();
	}
	else if (type == 'Employer') {
		$('#radio2').click();
	}
	else if (type == 'Faculty') {
		$('#radio3').click();
	}
	else {
		$('#radio1').click();
	}
}

Template.registerInfo.helpers({
	registerTitle: function() {
		return Session.get('registerType');
	},
	registerImage: function() {
		var type = Session.get('registerType');
		if (type == 'Student') {
			return '/images/student.jpg';
		}
		else if (type == 'Employer') {
			return '/images/company.jpg';
		}
		else if (type == 'Faculty') {
			return '/images/school.jpg';
		}
	}
});

Template.registerForm.events({
	'click #radio': function() {
		var type = $('#radio :radio:checked + label').text();
		Session.set('registerType', type);
	},
	'click .submit': function() {
		var fname = $('#fname').val();
		var lname = $('#lname').val();
		var email = $('#email').val();
		var password = $('#password').val();
		var confirm = $('#confirm').val();
		var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		var type = Session.get('registerType');

		if (!email.match(emailRegEx)) {
			//throwError('Email is invalid.');
		}
		else if (password != confirm) {
			//throwError('Passwords don't match.');
		}
		else {
			Accounts.createUser({
				email: email,
				password: password,
				profile: {
					fname: fname,
					lname: lname,
					type: type
				}
			}, function (error) {
				if (error) {
					//throwError('Error creating account.');
				}
				else {
					console.log('Success');
					Router.go('home');
				}
			});
		}
	}
});