"use strict";
let assert = require('assert');

module.exports = {
    // '@disabled': true,
    "@tags": ['writeReviewPage', 'review'],
    'Footer contacs redirect test': function (client) {
        client
            .init()
            .urlHash('#write-review')
            .pause(1000);
        client
            .click(".button.send-mail-btn")
            .pause(1000);
        client.expect.element('#f_name-error').to.be.present;
        client.expect.element('#f_email-error').to.be.present;
        client.expect.element('#f_year-error').to.be.present;
        client.expect.element('#f_month-error').to.be.present;
        client.expect.element('#f_rating-error').to.be.present;
        client.expect.element('#f_review-error').to.be.present;
        client.expect.element('#f_review_cons-error').to.be.present;
        client.end();
    },
};