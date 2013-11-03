Template.edit.helpers({
	resumeSection: function() {
		section = Session.get('currentResumeSection');
		switch (section) {
			case 'Showcase':
				return Template.editStudentShowcase();
			case 'Experience':
				return Template.editStudentExperience();
			case 'School':
				return Template.editStudentSchool();
			case 'Skills':
				return Template.editStudentSkills();
			case 'Extra':
				return Template.editStudentExtra();
			case 'Contact':
				return Template.editStudentContact();
			default:
				return Template.editStudentShowcase();
		}
	}
});


Template.edit.events({
	'click .detail-nav li a': function(e) {
		e.preventDefault();

		//sets value of current section to button text
		Session.set('currentResumeSection', $(e.target).text());
	},
	'click .save': function(e) {
		e.preventDefault();
		console.log('save clicked');
	}
});

Template.edit.rendered = function() {
	section = Session.get('currentResumeSection');
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
}