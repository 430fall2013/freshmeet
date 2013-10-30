Template.profile.helpers({
	profileType: function() {
		var id = Router._current.params._id;
		var user = Meteor.user(id);
		if (user.profile.type == 'Student') {
			return Template.studentProfile();
		}
		else if (user.profile.type == 'Employer') {
			return Template.employerProfile();
		}
		else if (user.profile.type == 'Faculty') {
			return Template.facultyProfile();
		}
	}
});

Template.studentProfile.helpers({
	detailSection: function() {
		section = Session.get('currentDetailSection');
		switch (section) {
			case 'Showcase':
				return Template.studentShowcase();
			case 'Experience':
				return Template.studentExperience();
			case 'School':
				return Template.studentSchool();
			case 'Skills':
				return Template.studentSkills();
			case 'Extra':
				return Template.studentExtra();
			case 'Contact':
				return Template.studentContact();
			default:
				return Template.studentShowcase();
		}
	},
	_id: function() {
		return Meteor.user()._id;
	},
	user: function() {
		var id = Router._current.params._id;
		return Meteor.user(id);
	}
});

Template.studentProfile.events({
	'click .detail-nav li a': function(e) {
		e.preventDefault();

		//sets value of current section to button text
		Session.set('currentDetailSection', $(e.target).text());
	},
	'click .edit-profile': function() {
		
	}
});

Template.studentProfile.rendered = function() {
	section = Session.get('currentDetailSection');
	switch (section) {
		case 'Showcase':
			$('.detail-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Experience':
			$('.detail-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'School':
			$('.detail-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Skills':
			$('.detail-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Extra':
			$('.detail-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Contact':
			$('.detail-nav li a:contains("'+section+'")').addClass('active');
			break;
		default:
			$('.detail-nav li a:contains("Showcase")').addClass('active');
			break;
	}
};

Template.employerProfile.helpers({
	detailSection: function() {
		section = Session.get('currentDetailSection');
		switch (section) {
			case 'About':
				return Template.employerAbout();
			case 'Jobs':
				return Template.employerJobs();
			case 'Internships':
				return Template.employerInternships();
			case 'Calendar':
				return Template.employerCalendar();
			case 'Contact':
				return Template.employerContact();
			default:
				return Template.employerAbout();
		}
	},
	user: function() {
		var id = Router._current.params._id;
		return Meteor.user(id);
	}
});
Template.employerProfile.events({
 	'click .detail-nav li a': function(e) {
		e.preventDefault();

		//sets value of current section to button text
		Session.set('currentDetailSection', $(e.target).text());
	},
});
Template.employerProfile.rendered = function() {
	section = Session.get('currentDetailSection');
	switch (section) {
		case 'About':
			$('.detail-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Jobs':
			$('.detail-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Internships':
			$('.detail-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Calendar':
			$('.detail-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Contact':
			$('.detail-nav li a:contains("'+section+'")').addClass('active');
			break;
		default:
			$('.detail-nav li a:contains("About")').addClass('active');
			break;
	}
};