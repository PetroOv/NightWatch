const lol = "ada";
module.exports = {
    '@disabled': true,
    '@tags': ['google', 'sanity'],
    lol: function (client) {
        console.log(client.globals.userNames);
        var google = client.page.booked();

        for (let i = 0; i < google.url.length; i++) {
            let googleUrl = google.url[i];
            client.url(googleUrl)
                .verify.urlContains(googleUrl,"tested url: "  +  googleUrl )
                .waitForElementVisible('body', 1000)

                .verify.title('Google')
                .verify.visible('input[type=text]')
                .setValue('input[type=text]', 'Hello World')
                .waitForElementVisible('button[name=btnG]', 1000, false)
                .click('button[name=btnG]')
                .pause(1000);
        }
        client.end();
    }
};

