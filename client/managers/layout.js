Template.nav.rendered = function() {
	var path = Router._current.path;
	if (path == '/register') {
		$('.nav li a:contains("Register")').addClass('active');
	}
	else if (path == '/faculty') {
		$('.nav li a:contains("Faculty")').addClass('active');
	}
	else if (path == '/employers') {
		$('.nav li a:contains("Employers")').addClass('active');
	}
	else if (path == '/login') {
		$('.nav li a:contains("Login")').addClass('active');
	}
	else if (path == '/about') {
		$('.nav li a:contains("About")').addClass('active');
	}
	else if(path == '/jobDetails') {
		$('.nav li a:contains("jobDetails)').addClass('active');
	}
	else if (path.split('/')[1] == 'profile') {
		$('.nav li a:contains("Profile")').addClass('active');
	}
	else if (path.split('/')[1] == 'dashboard') {
		$('.nav li a:contains("Dashboard")').addClass('active');
	}
	else if (path == '/students') {
		$('.nav li a:contains("Students")').addClass('active');
	}
	else if (path == '/companies') {
		$('.nav li a:contains("Companies")').addClass('active');
	}
	else if (path == '/jobs') {
		$('.nav li a:contains("Jobs")').addClass('active');
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
