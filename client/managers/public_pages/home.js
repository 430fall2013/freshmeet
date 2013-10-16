Template.home.events({
	'click .student-signup': function() {
		// Session.set('isStudent', true);
		// Session.set('isSchool', false);
		// Session.set('isEmployer', false);
		// Session.set('isCompany', false);
		Session.set('registerType', 'Student');
	},
	'click .company-signup': function() {
		// Session.set('isStudent', false);
		// Session.set('isSchool', false);
		// Session.set('isEmployer', true);
		// Session.set('isCompany', false);
		Session.set('registerType', 'Employer');
	},
	'click .school-signup': function() {
		// Session.set('isStudent', false);
		// Session.set('isSchool', true);
		// Session.set('isEmployer', false);
		// Session.set('isCompany', false);
		Session.set('registerType', 'Faculty');
	},
});