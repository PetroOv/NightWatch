var HtmlReporter = require('nightwatch-html-reporter');
/* Same options as when using the built in nightwatch reporter option */
var reporter = new HtmlReporter({
    openBrowser: false,
    reportsDirectory: '/reports/',
    reportFilename: 'report' + '_' + process.env.__NIGHTWATCH_ENV + '.html',
    themeName: 'outlook'
});

module.exports = {
    write : function(results, options, done) {
        reporter.fn(results, done);
    }
};
var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');

module.exports = {
    write: function (results, options, done) {

        var reportFilename = (new Date().getDate()).toString() + '.' + (new Date().getMonth()).toString() + '.' + (new Date().getFullYear()).toString() + "2" + '.html';

        var reportFilePath = path.join(__dirname, '/reports/', reportFilename);
        console.log(reportFilePath);
        var resultsBlock;

        // read the html template

        fs.readFile('html-report.hbs', function (err, data) {
            if (err) throw err;

            var template = data.toString();

            // merge the template with the test results data
             html = handlebars.compile(template)({
                results: results,
                options: options,
                timestamp: new Date().toString(),
                browser: options.filename_prefix.split('_').join(' ')
            });

            // if (fs.exists(reportFilePath)) {
            //     fs.appendFile(reportFilePath, html, function (err) {
            //         if (err) throw err;
            //         console.log('Report generated: ' + reportFilePath);
            //         done();
            //     });
            // } else {
            fs.stat(reportFilePath, function(err, stat) {
                if(err == null) {
                    fs.writeFile(reportFilePath, html, function (err) {
                        if (err) throw err;
                        console.log('Report generated: ' + reportFilePath);
                        done();
                    });
                } else if(err.code == 'ENOENT') {
                    fs.writeFile(reportFilePath, html, function (err) {
                        if (err) throw err;
                        console.log('Report generated: ' + reportFilePath);
                        done();
                    });
                } else {
                    console.log('Some other error: ', err.code);
                }
            });

            // }
            // write the html to a file
            // fs.writeFile(reportFilePath, html, function(err) {
            //     if (err) throw err;
            //     console.log('Report generated: ' +  reportFilePath);
            //     done();
            // });
        });
    }
};