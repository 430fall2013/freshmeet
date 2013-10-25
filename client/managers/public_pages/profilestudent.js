Template.student.helpers({
    isShowcase: function() {
        return Session.get('isShowcase');
    },
    isWork: function() {
        return Session.get('isWork');
    },
    isSchool: function() {
        return Session.get('isSchool');
    },
    isSkills: function() {
        return Session.get('isSkills');
    },
    isExtra: function() {
        return Session.get('isExtra');
    },
    isContact: function() {
        return Session.get('isContact');
    }

});

Template.student.events({

    'click .showcase-button': function() {
        Session.set('isShowcase', true);
        Session.set('isWork', false);
        Session.set('isSchool', false);
        Session.set('isSkills', false);
        Session.set('isExtra', false);
        Session.set('isContact', false);
    },
    'click .work-button': function() {
        Session.set('isShowcase', false);
        Session.set('isWork', true);
        Session.set('isSchool', false);
        Session.set('isSkills', false);
        Session.set('isExtra', false);
        Session.set('isContact', false);
    },
    'click .school-button': function() {
        Session.set('isShowcase', false);
        Session.set('isWork', false);
        Session.set('isSchool', true);
        Session.set('isSkills', false);
        Session.set('isExtra', false);
        Session.set('isContact', false);
    },
    'click .skills-button': function() {
        Session.set('isShowcase', false);
        Session.set('isWork', false);
        Session.set('isSchool', false);
        Session.set('isSkills', true);
        Session.set('isExtra', false);
        Session.set('isContact', false);
    },
    'click .extra-button': function() {
        Session.set('isShowcase', false);
        Session.set('isWork', false);
        Session.set('isSchool', false);
        Session.set('isSkills', false);
        Session.set('isExtra', true);
        Session.set('isContact', false);
    },
    'click .contact-button': function() {
        Session.set('isShowcase', false);
        Session.set('isWork', false);
        Session.set('isSchool', false);
        Session.set('isSkills', false);
        Session.set('isExtra', false);
        Session.set('isContact', true);
    }

});
