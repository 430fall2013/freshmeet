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
	this.route('jobDetails');
	this.route('students', {
		path: '/students',
		data: function() {return Students.find();},
		waitOn: function() {return studentsHandle;}
	});
	this.route('faculty', {
		path: '/faculty',
		data: function() {return Faculty.find();},
		waitOn: function() {return facultyHandle;}
	});
	this.route('employers', {
		path: '/employers',
		data: function() {return Employers.find();},
		waitOn: function() {return employersHandle;}
	});
	this.route('companies', {
		path: '/companies',
		data: function() {return Companies.find();},
		waitOn: function() {return companiesHandle;}
	});
	this.route('jobs', {
		path: '/jobs',
		data: function() {return Jobs.find();},
		waitOn: function() {return jobsHandle;}
	});
	this.route('job', {
		path: '/jobs/:_id',
		data: function() {return Jobs.findOne(this.params._id);},
		waitOn: function() {return jobsHandle;}
	});
	this.route('jobForm');
	this.route('dashboard', {
		path: '/dashboard/:_id',
		data: function() {return Meteor.users.findOne(this.params._id);},
		waitOn: function() {return usersHandle;}
	});
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