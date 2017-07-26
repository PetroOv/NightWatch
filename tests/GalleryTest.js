"use strict";
var assert = require('assert');
var addressMaster = "01.tripnet.release/";
var addressTest = "01.tripnet.release/";
var addressHotel = "";
var languages;
let hotel;
module.exports = {
    // '@disabled': true,
    "@tags": ['hotelPage', 'gallery'],
    'Gallery modal open test': function (client) {

        client
            .init()
            .pause(1000)
            .click('.photo-hover')
            .waitForElementVisible('#lightbox', 7000, "Gallery is loaded after clicking on show all photos");
            // .verify.visible('#lightbox');
        client.expect.element('#lightbox').to.have.css('display').which.equals('block');
        client.pause(1000)
            .saveScreenshot('./reports/openGalleryModal.png');


    },
    tags: ['hotelPage', 'gallery'],
    'Gallery modal close test': function (client) {
        client
            .click('.lb-close')
            .pause(1000)
            .verify.hidden('#lightbox', "Gallery closed after clicking exit button")
            .saveScreenshot('./reports/closeGalleryModal.png')
        // .end();
    },
    'All photos button test': function (client) {
        client
            .click('.hotel-availability__view-all-photo')
            .pause(1000)
            .verify.urlContains('#photo')
            .saveScreenshot('./reports/allPhotoButton.png')
            .end();
    },
    // 'Gallery photos in row test': function (client) {
    //     client
    //         .url("http://four-seasons-george-v.parishotelsweb.com/#photo")
    //         .useXpath()
    //         .elements("xpath", ".//p[@class='photos-item photo-hover']", function (photos) {
    //             // this.client.getElementSize(Object.keys(photos));
    //             console.log(((photos)))
    //             // this.assert.ok(Object.keys(keys)(1), "KeyFeatures count <= 9.");
    //         })
    //         // .pause(1000)
    //         // .verify.visible('#lightbox')
    //         // .expect.element('#lightbox').to.have.css('display').which.equals('block')
    //         .pause(1000)
    //         .saveScreenshot('./reports/openGalleryModal.png')
    //         .end();
    // },
};