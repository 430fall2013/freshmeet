Meteor.methods({
	addFollower: function(follower) {
		var user = Meteor.user();
		return Meteor.users.upsert(user, {$addToSet: {following: follower}});
	},
	removeFollower: function(follower) {
		var user = Meteor.user();
		return Meteor.users.update(user, {$pull: {following: follower}});
	}
});