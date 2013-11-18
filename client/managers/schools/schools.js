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

Template.schoolStudents.helpers ({
	studentMembers: function() {
		var id = Router._current.params._id;
		var school = Schools.findOne(id);
		return school.studentMembers;
	}
});

Template.schoolFaculty.helpers ({
	facultyMembers: function() {
		var id = Router._current.params._id;
		var school = Schools.findOne(id);
		return school.facultyMembers;
	}
});

Template.schoolDetails.events({
	'click .detail-nav li a': function(e) {
		e.preventDefault();
		//sets value of current section to button text
		Session.set('currentDetailSection', $(e.target).text());
	}
});
Template.schools.helpers({
	schoolsLoading: function() {
		return !schoolsHandle.ready();
	}
});
window.onscroll = function(e) {
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		if (Schools.find().count() >= schoolsHandle.loaded()) {
			schoolsHandle.loadNextPage();
		}
	}
};
