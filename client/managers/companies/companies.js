Template.company.helpers({
	following: function() {
		var user = Meteor.user();

		if (user && _.where(user.following, {_id: this._id}).length > 0)
			return true;
		else
			return false;
	}
});
Template.company.events({
	'click .follow': function(e) {
		e.preventDefault();
		Meteor.call('addFollower', this);
		$(e.target).text('Unfollow');
	},
	'click .unfollow': function(e) {
		e.preventDefault();
		Meteor.call('removeFollower', this);
		$(e.target).text('Follow');
	}
});
Template.companyDetails.helpers({
	detailSection: function(company) {
		section = Session.get('currentDetailSection');
		switch (section) {
			case 'About':
				return Template.companyAbout(company);
			case 'Employers':
				return Template.companyEmployers(company);
			case 'Jobs':
				return Template.companyJobs(company);
			case 'Internships':
				return Template.companyInternships(company);
			case 'Calendar':
				return Template.companyCalendar(company);
			case 'Contact':
				return Template.companyContact(company);
			default:
				return Template.companyAbout(company);
		}
	}
});


Template.companyDetails.rendered = function() {
	section = Session.get('currentDetailSection');
	switch (section) {
		case 'About':
			$('.detail-nav li a:contains("'+section+'")').addClass('active');
			break;
		case 'Employers':
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

Template.companyDetails.events({
	'click .detail-nav li a': function(e) {
		e.preventDefault();

		//sets value of current section to button text
		Session.set('currentDetailSection', $(e.target).text());
	}
});