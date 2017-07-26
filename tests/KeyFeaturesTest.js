"use strict";
let assert = require('assert');
const addressMaster = "01.tripnet.release/";

module.exports = {
    // '@disabled': true,
    "@tags": ['hotelPage', 'keyFeatures'],
    'KeyFeatures count test': function (client) {
        client
            .init()
            .elements("css selector", ".key-features-items", function (keys) {
                this.verify.ok((keys.value.length) < 10, "KeyFeatures count <= 9.");
            })
        .end();
    },

};