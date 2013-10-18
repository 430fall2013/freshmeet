Template.studentName.helpers({
	studentName: function() {
		return Session.get('fname');
	}
});
