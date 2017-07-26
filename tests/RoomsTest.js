
let assert = require('assert');
var promise = require('selenium-webdriver').promise;
const addressMaster = "01.tripnet.release/";

module.exports = {
    "@tags": ['hotelPage', 'rooms'],
    '@disabled': true,
    'Check availability test': function (client) {
        let roomName = [];
        client
            .init()
            .pause(1000)
            .click('.avail-form__submit')
            .waitForElementVisible('.results.js-rooms-cont', 7000);
        client.elements("css selector", ".show-more-rates.js-rates-show", function (spans) {
            let els = spans.value;
            els.forEach(function (name, k, namelz) {
                client.elementIdClick(name.ELEMENT);
            });
        });
        client.elements("css selector", ".js-room.room-info-mob", function (spans) {
            let els = spans.value;
            var i;
            var j = 0;
            for (i = (els.length / 2); i < els.length; i++) {
                client.elementIdElements(els[i].ELEMENT, "css selector", ".span-link.hotel-room-name", function (roomNameBlock) {
                    let nameBlocks = roomNameBlock.value;
                    nameBlocks.forEach(function (name, k, namelz) {
                        client.elementIdText(name.ELEMENT, function (roomNameN) {
                            roomName[j] = roomNameN.value;
                            j++;
                        });
                    })
                })

            }
        });

        client.elements("css selector", ".js-room.room-info-mob", function (spans) {
            let els = spans.value;
            var i;
            let jRoom = 0;
            for (i = (els.length / 2); i < els.length; i++) {
                this.elementIdElements(els[i].ELEMENT, "css selector", ".js-rate.clearfix.m-b-20.rate-date-container.mobile-rooms-container ", function (roomRates) {
                    let rates = roomRates.value;
                    let rI;
                    for (rI = 0; rI < rates.length; rI++) {
                        rates.forEach(function (rate, n, ratelz) {
                            if (!(rI === n)) {
                                client.elementIdText(rates[rI].ELEMENT, function (rateInfo) {
                                    client.elementIdText(rate.ELEMENT, function (anotherRateText) {
                                        if((rateInfo.value !== anotherRateText.value))
                                        {
                                            // this.verify.ok((rateInfo.value !== anotherRateText.value), "Rate"+ rI + "for room: " + roomName[jRoom - 1] + " are unique")
                                        }else{
                                            this.verify.fail("","fail","Rate "+ (n +1) + " for room: " + roomName[jRoom - 1] + " has duplicate");
                                        }

                                    })
                                })
                            }
                        })
                    }
                    jRoom++;
                });

            }
        });
        client.end();
    },
};