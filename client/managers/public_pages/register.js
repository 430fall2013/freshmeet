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
	}

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
	'click #register': function(e) {
		e.preventDefault();

		var fname = $('#fname').val();
		var lname = $('#lname').val();
		var email = $('#email').val();
		var password = $('#password').val();
		var confirm = $('#confirm').val();

		console.log(fname, lname, email, password, confirm);
		if (password != confirm)
		{
			console.log('they dont match');
		}
	},
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