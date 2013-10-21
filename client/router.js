Router.configure({layout: 'layout'});

Router.map(function() {
	this.route('home', {path: '/'});
	this.route('about');
	this.route('register');
	this.route('contact');
	this.route('profiletemp');
	this.route('profile', {
		path: '/profile/:_id',
		data: function() {return Meteor.users.findOne(this.params._id);},
		waitOn: function() {return usersHandle;}	
	});
});