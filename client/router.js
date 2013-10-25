Router.configure({
	layout: 'layout',
	before: clearErrors
});

Router.map(function() {
	this.route('home', {path: '/'});
	this.route('about');
	this.route('register');
	this.route('login');
	this.route('contact');
	this.route('profile', {
		path: '/profile/:_id',
		data: function() {return Meteor.users.findOne(this.params._id);},
		waitOn: function() {return usersHandle;}	
	});
	this.route('edit', {
		path: '/profile/edit/:_id',
		data: function() {return Meteor.users.findOne(this.params._id);},
		waitOn: function() {return usersHandle;}
	});
});