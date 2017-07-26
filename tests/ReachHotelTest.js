"use strict";
let assert = require('assert');
const addressMaster = "01.tripnet.release/";

module.exports = {
    // '@disabled': true,
    "@tags": ['hotelPage', 'reach'],
    'Check address test': function (client) {
        client
            .init()
            .pause(1000);
        client.getText(".right-address", function (hotelAddress) {
            client.getText('.hotel-title p', function (reachAddress) {
                this.assert.ok(hotelAddress.value === reachAddress.value, "\"How to reach\" address equals to hotel address")
            })
        });
        client.useXpath()
                .click(".//a[@href='#map']");
        client.assert.urlContains("#map","Redirected to location page")
        // client.expect.element('.hotel-title p').text.to.equal(client.getText(".right-address",function (result) {
        //     return result;
        // }));
        .end();
    },
    // 'Get direction test': function (client) {
    //     client
    //         .url("http://four-seasons-george-v.parishotelsweb.com/")
    //         .pause(1000)
    //         .useXpath()
    //
    //         .click(".//a[@href='#map']");
    //         client.assert.urlContains("#map","Redirected to location page")
    //         // client.elementActive(function (elem) {
    //         //     console.log(elem)
    //         // });
    //         // .elements("css selector",".key-features-items",function (keys) {
    //         //     this.assert.ok(Object.keys(keys).length < 10, "KeyFeatures count <= 9.");
    //         // })
    //         .end();
    // },

};