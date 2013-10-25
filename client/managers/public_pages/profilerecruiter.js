Template.recruiter.helpers({
    isRecruiterAbout: function() {
        return Session.get('isRecruiterAbout');
    },
    isRecruiterJob: function() {
        return Session.get('isRecruiterJob');
    },
    isRecruiterInternship: function() {
        return Session.get('isRecruiterInternship');
    },
    isRecruiterCalendar: function() {
        return Session.get('isRecruiterCalendar');
    },
    isRecruiterFAQ: function() {
        return Session.get('isRecruiterFAQ');
    }

});

Template.recruiter.events({

    'click .about-recruiter-button': function() {
        Session.set('isRecruiterAbout', true);
        Session.set('isRecruiterJob', false);
        Session.set('isRecruiterInternship', false);
        Session.set('isRecruiterCalendar', false);
        Session.set('isRecruiterFAQ', false);
    },
    'click .job-recruiter-button': function() {
        Session.set('isRecruiterAbout', false);
        Session.set('isRecruiterJob', true);
        Session.set('isRecruiterInternship', false);
        Session.set('isRecruiterCalendar', false);
        Session.set('isRecruiterFAQ', false);
    },
    'click .internship-recruiter-button': function() {
        Session.set('isRecruiterAbout', false);
        Session.set('isRecruiterJob', false);
        Session.set('isRecruiterInternship', true);
        Session.set('isRecruiterCalendar', false);
        Session.set('isRecruiterFAQ', false);
    },
    'click .calendar-recruiter-button': function() {
        Session.set('isRecruiterAbout', false);
        Session.set('isRecruiterJob', false);
        Session.set('isRecruiterInternship', false);
        Session.set('isRecruiterCalendar', true);
        Session.set('isRecruiterFAQ', false);
    },
    'click .faq-recruiter-button': function() {
        Session.set('isRecruiterAbout', false);
        Session.set('isRecruiterJob', false);
        Session.set('isRecruiterInternship', false);
        Session.set('isRecruiterCalendar', false);
        Session.set('isRecruiterFAQ', true);
    }

});
