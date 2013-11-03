Template.smartmatch.helpers({
	rankedStudents: function() {
		var students = Students.find().fetch();
		var jobs = Jobs.find().fetch();
		var ranked = [];

		for(var i=0; i < students.length; i++) {
			console.log(students[i]);
			ranked.push(students[i]);
		}

		return ranked;
	}	
});