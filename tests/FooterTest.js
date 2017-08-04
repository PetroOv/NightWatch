"use strict";
let assert = require('assert');
const addressMaster = "01.tripnet.release/";

module.exports = {
    '@disabled': true,
    "@tags": ['hotelPage', 'footer'],
    'Footer contacs redirect test': function (client) {
        client
            .init()
            .click(".m-t-10 a")
            .pause(1000);
        client.verify.urlContains('#contact',"Redirected to contact page").end();
    },
};