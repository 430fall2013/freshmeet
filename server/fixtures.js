Meteor.startup(function() {
	if (Students.find().count() == 0) {
		for (i=0; i<5; i++) {
			Students.insert({
				profile: {
					fname: 'student fname',
					lname: 'student lname' + i
				}
			});
		}
	}
	if (Faculty.find().count() == 0) {
		for (i=0; i<5; i++) {
			Faculty.insert({
				profile: {
					fname: 'faculty fname',
					lname: 'faculty lname' + i
				}
			});
		}
	}

	if (Employers.find().count() == 0) {
		for (i=0; i<5; i++) {
			Employers.insert({
				profile: {
					fname: 'employer fname',
					lname: 'employer lname' + i
				}
			});
		}
	}

	if (Companies.find().count() == 0) {
		for (i=0; i<5; i++) {
			Companies.insert({
				name: 'Company Name' + i,
				description: 'description'
			});
		}
	}

	if (Jobs.find().count() == 0) {
		for (i=0; i<5; i++) {
			Jobs.insert({
				title: 'Job Title' + i,
				description: 'description'
			});
		}
	}
});