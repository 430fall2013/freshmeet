Template.edit.helpers({
	resumeSection: function(user) {
		section = Session.get('currentResumeSection');
		switch (section) {
			case 'Showcase':
				return Template.editStudentShowcase(user);
			case 'Experience':
				return Template.editStudentExperience(user);
			case 'School':
				return Template.editStudentSchool(user);
			case 'Skills':
				return Template.editStudentSkills(user);
			case 'Extra':
				return Template.editStudentExtra(user);
			case 'Contact':
				return Template.editStudentContact(user);
			default:
				return Template.editStudentShowcase(user);
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
		var student = Students.findOne(Meteor.user()._id);
		var data = {
			fname: $('#fname').val(),
			lname: $('#lname').val(),
			school: $('#school').val(),
			major: $('#major').val(),
			avatar: student.profile.avatar,
			gradYear: $('#grad-year').val(),
			about: 'about me!',
			video: globalUgliness.video,
			workExperience: globalUgliness.workExperience,
			externalExperience: globalUgliness.externalExperience,
			skills: globalUgliness.skills,
			extra: globalUgliness.extra,
			contactEmail: globalUgliness.contactEmail,
			phone: globalUgliness.phone,
			address: globalUgliness.address,
			website: globalUgliness.website
		};
		Meteor.call('updateStudent', student, data);
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
	//have to use global variab to get data from 'detail' sections
	globalUgliness = {};

	filepicker.setKey("AV770eYXNT33KWqCkbV0Qz");
	filepicker.constructWidget(document.getElementById('attachment'));
}