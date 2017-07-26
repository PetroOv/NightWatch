let assert = require('assert');
const addressMaster = "01.tripnet.release/";

module.exports = {
    // "@disabled":true,
    "@tags": ['mainPage', 'redirect'],
    'Check main page redirect test': function (client) {
        var currentUrl = "";
        client
            .init()
            .pause(1000)
            .url(function (result) {
                currentUrl = result.value;
                var dotPos = currentUrl.indexOf(".");
                client
                    .useXpath()
                    .click(".//a[@class='header-logo__link content']")
                    .saveScreenshot('./reports/mainPage.png')
                    .verify.urlEquals('http://www.' + currentUrl.slice(dotPos + 1),"Redirected to main page")

        }).end();
    },
};