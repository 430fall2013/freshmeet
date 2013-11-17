Messages = new Meteor.Collection('messages');
RecievedMessages = new Meteor.Collection('recievedMessages');
SentMessages = new Meteor.Collection('sentMessages');

Meteor.methods({
	sendMessage: function(sender, reciever, title, msg) {
		return Messages.insert({
			sender: sender, 
			reciever: reciever, 
			title: title, 
			message: msg
		});	
	}
});