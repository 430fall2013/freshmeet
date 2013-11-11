Template.register.rendered = function() {
    // $('#radio').buttonset();
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
					gpa: '0.0',
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
						//var schoolDocument = Schools.find({name: newProfile.school});
						if(Schools.find({name: newProfile.school}).fetch().length != 1){
							//is there a cleaner way to do this?
							var usersArray = new Array();
							var school = {
								name: newProfile.school,
								studentMembers: usersArray
							}
							school.studentMembers[0] = Meteor.user();
							Meteor.call('newSchool', school);
							
							//Schools.update({_id: school2._id}, {$set: {users: Meteor.user()}});
							
							//Meteor.call('joinExistingSchool', Schools.find({name: newProfile.school}), Meteor.user());
							//Schools.update({name: newProfile.school}, {$set: {users: Meteor.user()}});
							//Schools.update({_id: this._id}, {$set: {users: Meteor.user()}});
						}
						else {
							var schoolDocument = Schools.findOne({name: newProfile.school});
							//push can only be used to add to an already existed array
							//if no array exists, one will be created (a new array should never be created here)
							Schools.update({_id: schoolDocument._id}, {$push: {studentMembers: Meteor.user()}});
						}
					}
					else if (newProfile.acctType == 'Employer') {
						Meteor.call('newEmployer', Meteor.user());
						if(Companies.find({name: newProfile.company}).fetch().length != 1){
							var usersArray = new Array();
							var company = {
								name: newProfile.company,
								employerMembers: usersArray
							}
							company.employerMembers[0] = Meteor.user();
							Meteor.call('newCompany', company);
						}
						else {
							var companyDocument = Companies.findOne({name: newProfile.company});
							Companies.update({_id: companyDocument._id}, {$push: {employerMembers: Meteor.user()}});
						}
					}
					else if (newProfile.acctType == 'Faculty') {
						Meteor.call('newFaculty', Meteor.user());
						if(Schools.find({name: newProfile.school}).fetch().length != 1){
							var usersArray = new Array();
							var school = {
								name: newProfile.school,
								facultyMembers: usersArray
							}
							school.facultyMembers[0] = Meteor.user();
							Meteor.call('newSchool', school);
						}
						else {
							var schoolDocument = Schools.findOne({name: newProfile.school});
							Schools.update({_id: schoolDocument._id}, {$push: {facultyMembers: Meteor.user()}});
						}


					}
					Router.go('dashboard', {_id: Meteor.user()._id});
				}
			});
		}
	}
});