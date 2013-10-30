Template.nav.rendered = function() {
	var path = Router._current.path;
	if (path == '/register') {
		$('.nav li a:contains("Register")').addClass('active');
	}
	else if (path == '/profile') {
		$('.nav li a:contains("Profile")').addClass('active');
	}
	else if (path == '/login') {
		$('.nav li a:contains("Login")').addClass('active');
	}
	else if (path == '/about') {
		$('.nav li a:contains("About")').addClass('active');
	}
	else if (path == '/contact') {
		$('.nav li a:contains("Contact")').addClass('active');
	}
	else if (path.split('/')[1] == 'profile') {
		$('.nav li a:contains("Profile")').addClass('active');
	}
	else if (path.split('/')[1] == 'dashboard') {
		$('.nav li a:contains("Dashboard")').addClass('active');
	}
	else if (path == '/profilestudent') {
		$('.nav li a:contains("Student")').addClass('active');
	}
	else if (path == '/profileschool') {
		$('.nav li a:contains("School")').addClass('active');
	}
	else if (path == '/profilerecruiter') {
		$('.nav li a:contains("Recruiter")').addClass('active');
	}
	else if (path == '/profilecompany') {
		$('.nav li a:contains("Company")').addClass('active');
	}
	else {
		$('.nav li a:contains("Home")').addClass('active');
	}
}
Template.nav.helpers({
	profileId: function() {
		if (Meteor.user()) {
			return Meteor.user()._id;
		}
	},	
	isLoggedIn: function() {
		if (Meteor.user()) return true;
		else return false;
	}
});

Template.nav.events({
	'click .logout-link': function(e) {
		e.preventDefault();
		Meteor.logout();
		Router.go('home');
	}
});
