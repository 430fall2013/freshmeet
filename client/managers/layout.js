Template.nav.rendered = function() {
	var path = Router._current.path;
	if (path == '/register') {
		$('.nav li a:contains("Register")').addClass('active');
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
	else {
		$('.nav li a:contains("Home")').addClass('active');
	}
}