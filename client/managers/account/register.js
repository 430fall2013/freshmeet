Template.register.helpers({
	isStudent: function() {
		return Session.get('isStudent');
	},
	isSchool: function() {
		return Session.get('isSchool');
	},
	isEmployer: function() {
		return Session.get('isEmployer');
	},
	isCompany: function() {
		return Session.get('isCompany');
	},
});

Template.register.events({
	//question for tim...
	//on signup click employ, nav away, signup student. Result: navs to employ
	//click student signup needs to nav to correct page

	'click .student-button': function() {
		Session.set('isStudent', true);
		Session.set('isSchool', false);
		Session.set('isEmployer', false);
		Session.set('isCompany', false);
	},
	'click .employer-button': function() {
		Session.set('isEmployer', true);
		Session.set('isStudent', false);
		Session.set('isSchool', false);
		Session.set('isCompany', false);
	},
	'click .school-button': function() {
		Session.set('isSchool', true);
		Session.set('isStudent', false);
		Session.set('isEmployer', false);
		Session.set('isCompany', false);
	},
	'click .company-button': function() {
		Session.set('isCompany', true);
		Session.set('isStudent', false);
		Session.set('isSchool', false);
		Session.set('isEmployer', false);
	},
	// 'click .submit': function(e) {
	// 	e.preventDefault();

	// 	var fname = $('#fname').val();
	// 	var lname = $('#lname').val();
	// 	var email = $('#email').val();
	// 	var password = $('#password').val();
	// 	var confirm = $('#confirm').val();

	// 	console.log(fname, lname, email, password, confirm);
	// 	if (password != confirm)
	// 	{
	// 		console.log('they dont match');
	// 	}
	// },
	'keypress #confirm': function(e) {
		// FIX THIS
		// 
		// ========
		// var password = $('#password').val();
		// if (e.target.value != password) {
		// 	console.log('no match');
		// }
		// console.log(password, e.target.value);
	}
});

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
		var errorFlag = false;

		if (!fname) {
			throwError('No first name entered.');
			errorFlag = true;
		}
		if (!lname) {
			throwError('No last name entered.');
			errorFlag = true;
		}
		if (!email) {
			throwError('No email entered.');
			errorFlag = true;
		}
		if (!password) {
			throwError('No password entered.');
			errorFlag = true;
		}
		if (!confirm) {
			throwError('No confirmation entered.');
			errorFlag = true;
		}
		if (!email.match(emailRegEx)) {
			throwError('Email is invalid.');
			errorFlag = true;
		}
		if (password != confirm) {
			throwError('Passwords don\'t match.');
			errorFlag = true;
		}
		if (!errorFlag) {
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
					throwError('Error creating account.');
				}
				else {
					console.log('Success');
					Router.go('home');
				}
			});
		}
	}
});