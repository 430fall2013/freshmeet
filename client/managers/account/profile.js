Template.profile.helpers({
	resumeSection: function() {
		section = Session.get('currentResumeSection');
		switch (section) {
			case 'Showcase':
				return Template.resumeShowcase();
			case 'Experience':
				return Template.resumeExperience();
			case 'School':
				return Template.resumeSchool();
			case 'Skills':
				return Template.resumeSkills();
			case 'Extra':
				return Template.resumeExtra();
			case 'Contact':
				return Template.resumeContact();
			default:
				return Template.resumeShowcase();
		}
	}
});

Template.profile.events({
	'click .resume-nav li a': function(e) {
		e.preventDefault();

		//sets value of current section to button text
		Session.set('currentResumeSection', $(e.target).text());
	},
	'click .edit-profile': function() {
		
	}
});

Template.profile.rendered = function() {
	section = Session.get('currentResumeSection');
	switch (section) {
		case 'Showcase':
			$('.resume-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Experience':
			$('.resume-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'School':
			$('.resume-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Skills':
			$('.resume-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Extra':
			$('.resume-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Contact':
			$('.resume-nav li a:contains("'+section+'")').addClass('active');
			break;
		default:
			$('.resume-nav li a:contains("Showcase")').addClass('active');
			break;
	}
}