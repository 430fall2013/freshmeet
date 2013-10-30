Companies = new Meteor.Collection('companies');

Meteor.methods({
	new: function(attributes) {
		var user = Meteor.user();
		if (!user || user.profile.type != 'Employer') {
			throw new Meteor.error(401, "You're not an employer!");
		}

		var company = _.extend(_.pick(attributes, 'name', 'description'), {
			employees: [user._id],
			submitted: new Date().getTime()
		});

		return Companies.insert(company);
	}

	delete: function(company) {
		Companies.remove(company._id);
	}
});