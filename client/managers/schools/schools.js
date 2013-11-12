Template.schoolDetails.helpers({
	detailSection: function(school) {
		section = Session.get('currentDetailSection');
		switch (section) {
			case 'About':
				return Template.schoolAbout(school);
			case 'Colleges':
				return Template.schoolColleges(school);
			case 'Students':
				return Template.schoolStudents(school);
			case 'Faculty':
				return Template.schoolFaculty(school);
			case 'Calendar':
				return Template.schoolCalendar(school);
			case 'Contact':
				return Template.schoolContact(school);
			default:
				return Template.schoolAbout(school);
		}
	}
});


Template.schoolDetails.rendered = function() {
	section = Session.get('currentDetailSection');
	switch (section) {
		case 'About':
			$('.detail-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Colleges':
			$('.detail-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Students':
			$('.detail-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Faculty':
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

Template.schoolDetails.events({
	'click .detail-nav li a': function(e) {
		e.preventDefault();

		//sets value of current section to button text
		Session.set('currentDetailSection', $(e.target).text());
	}
});