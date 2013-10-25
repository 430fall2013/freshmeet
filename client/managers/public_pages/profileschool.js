Template.school.helpers({
    isEcc: function() {
        return Session.get('isEcc');
    },
    isAgriculture: function() {
        return Session.get('isAgriculture');
    },
    isBusiness: function() {
        return Session.get('isBusiness');
    },
    isSciences: function() {
        return Session.get('isSciences');
    },
    isEducation: function() {
        return Session.get('isEducation');
    },
    isHumanities: function() {
        return Session.get('isHumanities');
    }

});

Template.school.events({

    'click .ecc-button': function() {
        Session.set('isEcc', true);
        Session.set('isAgriculture', false);
        Session.set('isBusiness', false);
        Session.set('isSciences', false);
        Session.set('isEducation', false);
        Session.set('isHumanities', false);
    },
    'click .agriculture-button': function() {
        Session.set('isEcc', true);
        Session.set('isAgriculture', false);
        Session.set('isBusiness', false);
        Session.set('isSciences', false);
        Session.set('isEducation', false);
        Session.set('isHumanities', false);
    },
    'click .business-button': function() {
        Session.set('isEcc', false);
        Session.set('isAgriculture', true);
        Session.set('isBusiness', false);
        Session.set('isSciences', false);
        Session.set('isEducation', false);
        Session.set('isHumanities', false);
    },
    'click .sciences-button': function() {
        Session.set('isEcc', false);
        Session.set('isAgriculture', false);
        Session.set('isBusiness', true);
        Session.set('isSciences', false);
        Session.set('isEducation', false);
        Session.set('isHumanities', false);
    },
    'click .education-button': function() {
        Session.set('isEcc', false);
        Session.set('isAgriculture', false);
        Session.set('isBusiness', false);
        Session.set('isSciences', false);
        Session.set('isEducation', true);
        Session.set('isHumanities', false);
    },
    'click .humanities-button': function() {
        Session.set('isEcc', false);
        Session.set('isAgriculture', false);
        Session.set('isBusiness', false);
        Session.set('isSciences', false);
        Session.set('isEducation', false);
        Session.set('isHumanities', true);
    }

});
