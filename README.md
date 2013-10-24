
	-client                   #Code that will run on the client
		-css                  #CSS
		-managers             #javascript code that goes with the templates
		-views                #html templates
	-collections              #code related to our collections of models
	-lib                      #external libraries and universal things like permissions.
	-packages                 #meteorite packages
	-public                   #things like images and font files
	-server                   #Code that will run on the server

	Our models

	/*
		Now students and recruiters are technically "user" models.
		What sets them apart is accountType. Profiles vary based on this.
		Companies, Schools, and classes will be their own models.
		Also, filepicker is an external service that handles file uploads.
		Makes it super easy for users to upload their own pictures.
		We can also go the gravatar route which is nice.
	*/

	Student:
	{
		_id: 'ahjbHbhjabhBHJB',
		createdAt: 1379609425768,
		username: 'Testing',
		email: 'testing@mail.csuchico.edu',
		accountType: 'student', 
		profile: {
			avatar: 'http://filepicker.io/api/file/hsbjhfbjshbdfhjbasdc',
			shortDesc: "Hi, I'm a student looking for a job!",
			longDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, voluptas animi veritatis soluta fuga in vel accusantium cupiditate vero culpa est molestias beatae nihil nisi facere incidunt accusamus eligendi distinctio.",
			classes: ['jhbhjBhjbHJVjv', 'jhBHJBhjbiouOOJ'],
		}		
	}

	/* 
		We'll store class id's in the classes array.
	*/
	
	Recruiter: 
	{
		_id: 'KJHBjhkBhjvvgvjhV',
		createdAt: 178561576528763,
		username: 'SallyRecruiter',
		email: 'sally@googlejobs.com',
		accountType: 'recruiter',
		profile: {
			avatar: 'http://filepicker.io/api/file/hsbjhfbjshbdfhjbasdc',
			company: 'LBhjkBJHbjhgv', //id for Google's company model
			shortDesc: 'I love chico state students. Hit me up!',
			longDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, asperiores, tempore, eius perferendis quibusdam recusandae unde non quos voluptate necessitatibus facere nulla cumque. Nihil veniam dignissimos iure iusto architecto veritatis.",
			favoriteStudents: ['kjJNkjnbjkhkj', 'kJBkjbHVcfCFGc']
		}
	}

	/*
		Companies can be created by recruiters
	*/
	
	Company: 
	{
		_id: 'JKHBhjbHJbjhb',
		createdAt: 0987392688347,
		name: 'Google',
		description: 'Best Company ever!',
		image: 'http://filepicker.io/api/file/hsbjhfbjshbdfhjbasdc'
	}

	Class: 
	{
		_id: 'POJkjbjhkBhjbjh',
		createdAt: 91827863786587,
		className: 'Algorithms 1',
		classNumber: 'CSCI111',
		description: 'Fundamental programming course.'
	}

	/*
		I'm not too sure on how we'll model schools.
		Recruiters and students are similar enough. 
		Schools, I'm not too sure on what we're looking for.
		So I'll hold off until we can talk again.
		Schools could look like the company model.
		What will we call users who sign up to manage the schools?
	*/


