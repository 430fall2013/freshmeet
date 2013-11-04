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

Template.registerForm.helpers({
	currentRegForm: function() {
		var type = Session.get('registerType');
		if (type == 'Student') {
			return Template.studentRegister();
		}
		else if (type == 'Employer') {
			return Template.employerRegister();
		}
		else if (type == 'Faculty') {
			return Template.facultyRegister();
		}
	}
});

Template.registerForm.events({
	'click #radio': function() {
		var type = $('#radio :radio:checked + label').text();
		Session.set('registerType', type);
	},
	'click .submit': function() {
		var newProfile = {
			fname: $('#fname').val(),
			lname: $('#lname').val(),
			school: $('#school').val(),
			company: $('#company').val(),
			email: $('#email').val(),
			password: $('#password').val(),
			confirm: $('#confirm').val(),
			acctType: Session.get('registerType'),
			emailRegEx: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			
			}

		var errorFlag = false;
		
		if (!newProfile.fname) {
			throwError('No first name entered.');
			errorFlag = true;
		}
		if (!newProfile.lname) {
			throwError('No last name entered.');
			errorFlag = true;
		}
		if (!newProfile.email) {
			throwError('No email entered.');
			errorFlag = true;
		}
		if ((newProfile.acctType == "Student") || (newProfile.acctType == "Faculty")){
			if(!newProfile.school){
				throwError('No school name entered.');
				errorFlag = true;
			}
		}
		else if (newProfile.acctType == "Employer"){
			if(!newProfile.company){
				throwError('No company name entered.');
				errorFlag = true;
			}
		}
		if (!newProfile.password) {
			throwError('No password entered.');
			errorFlag = true;
		}
		if (!newProfile.confirm) {
			throwError('No confirmation entered.');
			errorFlag = true;
		}
		if (!newProfile.email.match(newProfile.emailRegEx)) {
			throwError('Email is invalid.');
			errorFlag = true;
		}
		if (newProfile.password != newProfile.confirm) {
			throwError('Passwords don\'t match.');
			errorFlag = true;
		}
		if (!errorFlag) {
			Accounts.createUser({
				email: newProfile.email,
				password: newProfile.password,
				profile: {
					fname: newProfile.fname,
					lname: newProfile.lname,
					type:  newProfile.acctType,
					school: newProfile.school,
					company: newProfile.company,
					major: 'Add your major!',
					avatar: '/images/placeholder.jpg',
					gradYear: 'Add your graduation year!',
					about: 'Add a description!',
					video: 'default',
					workExperience: 'Add some work experience!',
					externalExperience: 'Add some external project experience!',
					skills: 'Add some skills!',
					contactEmail: 'Add a contact email!',
					phone: 'Add a phone number!',
					address: 'Add an address!',
					website:'Add a website!'
				}
			}, function (error) {
				if (error) {
					throwError('Error creating account.');
					console.log(error);
				}
				else {
					console.log('Success');
					if (newProfile.acctType == 'Student') {	
						Meteor.call('newStudent', Meteor.user());
					}
					else if (newProfile.acctType == 'Employer') {
						Meteor.call('newEmployer', Meteor.user());
					}
					else if (newProfile.acctType == 'Faculty') {
						Meteor.call('newFaculty', Meteor.user());
					}
					Router.go('dashboard', {_id: Meteor.user()._id});
				}
			});
		}
	}
});