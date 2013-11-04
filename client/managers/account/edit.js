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
	},
	user: function() {
		var id = Router._current.params._id;
		var user = Meteor.users.findOne(id);
		if (user.profile.type == ('Student')) {
			return Students.findOne(id);
		}
		else if (user.profile.type == 'Employer') {
			return Employers.findOne(id);
		}
		else if (user.profile.type == 'Faculty') {
			return Faculty.findOne(id);
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
	},
	'change #attachment': function(e) {
		console.log(e.files);
		image = e.files[0].url;
		console.log(image);
		Students.upsert(Meteor.user()._id, {$set: {profile: {
			avatar: image
		}}});
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

	filepicker.setKey("AV770eYXNT33KWqCkbV0Qz");
	filepicker.constructWidget(document.getElementById('attachment'));
}