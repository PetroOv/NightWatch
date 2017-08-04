var SELENIUM_CONFIGURATION = {
    start_process: true,
    server_path: 'bin/selenium-server-standalone-3.4.0.jar',
    host: '127.0.0.1',
    port: 4444
};

var FIREFOX_CONFIGURATION = {
    browserName: 'firefox',
    javascriptEnabled: true,
    acceptSslCerts: true
};

var DEFAULT_CONFIGURATION = {
    launch_url: "http://four-seasons-george-v.parishotelsweb.com/en/",
    selenium_port: 4444,
    selenium_host: 'localhost',
    desiredCapabilities: FIREFOX_CONFIGURATION
};

var ENVIRONMENTS = {
    default: DEFAULT_CONFIGURATION
};

module.exports = {
    src_folders: ['tests'],
    page_objects_path: "page_objects",
    selenium: SELENIUM_CONFIGURATION,
    test_settings: ENVIRONMENTS,
    globals_path: "globals.js",
};

// module.exports = (function (settings) {
//     settings.test_workers = {"enabled": true, "workers": 2};
//     return settings;
// })(require('./nightwatch.json'));