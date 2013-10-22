Template.company.helpers({
    isAbout: function() {
        return Session.get('isAbout');
    },
    isJob: function() {
        return Session.get('isJob');
    },
    isInternship: function() {
        return Session.get('isInternship');
    },
    isRecruiter: function() {
        return Session.get('isRecruiter');
    }

});

Template.company.events({

    'click .about-button': function() {
        Session.set('isAbout', true);
        Session.set('isJob', false);
        Session.set('isInternship', false);
        Session.set('isRecruiter', false);
    },
    'click .job-button': function() {
        Session.set('isAbout', false);
        Session.set('isJob', true);
        Session.set('isInternship', false);
        Session.set('isRecruiter', false);
    },
    'click .internship-button': function() {
        Session.set('isAbout', false);
        Session.set('isJob', false);
        Session.set('isInternship', true);
        Session.set('isRecruiter', false);
    },
    'click .recruiter-button': function() {
        Session.set('isAbout', false);
        Session.set('isJob', false);
        Session.set('isInternship', false);
        Session.set('isRecruiter', true);
    }

});
