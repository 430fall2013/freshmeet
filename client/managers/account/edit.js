Template.edit.helpers({
	resumeSection: function() {
		section = Session.get('currentResumeSection');
		switch (section) {
			case 'Showcase':
				return Template.editShowcase();
			case 'Experience':
				return Template.editExperience();
			case 'School':
				return Template.editSchool();
			case 'Skills':
				return Template.editSkills();
			case 'Extra':
				return Template.editExtra();
			case 'Contact':
				return Template.editContact();
			default:
				return Template.editShowcase();
		}
	}
});


Template.edit.events({
	'click .resume-nav li a': function(e) {
		e.preventDefault();

		//sets value of current section to button text
		Session.set('currentResumeSection', $(e.target).text());
	}
});

Template.edit.rendered = function() {
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