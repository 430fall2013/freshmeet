Jobs = new Meteor.Collection('jobs');

Meteor.methods({
	// new: function(attributes) {
	// 	var user = Meteor.user();
	// 	if (!user || user.profile.type != 'Employer') {
	// 		throwError(401, "You're not an employer!");
	// 	}

	// 	var job = _.extend(_.pick(attributes, 'name', 'description', 'company'), {
	// 		submitted: new Date().getTime()
	// 	});
		
	// 	return Companies.insert(company);
	// },

	// delete: function(company) {
	// 	Companies.remove(company._id);
	// }
});