var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');
const globals = require("./globals");
var data = fs.readFileSync('urls.json');
var words = JSON.parse(data);
module.exports = {
    write: function (results, options, done) {

        var reportFilename = options.filename_prefix + ((new Date().getHours()).toString() + '_' + (new Date().getMinutes()).toString()).toString() + '.html';
        var reportFilePath2 = path.join(__dirname, '/reports/' + (new Date().getDate()).toString() + '.' + (new Date().getMonth()).toString() + '.' + (new Date().getFullYear()).toString() + "/");
        if (!fs.existsSync(reportFilePath2)) {
            fs.mkdir(reportFilePath2);
        }
        var reportFilePath = path.join(reportFilePath2, reportFilename);

        // read the html template

        // options.launch_url = words[0].addr + " " + words[1].addr;
        options.launch_url = globals.urlList;
        fs.readFile('html-report.hbs', function (err, data) {
            if (err) throw err;

            var template = data.toString();

            // merge the template with the test results data
            var html = handlebars.compile(template)({
                results: results,
                options: options,
                timestamp: new Date().toString(),
                browser: options.filename_prefix.split('_').join(' ')
            });


            fs.writeFile(reportFilePath, html, function (err) {
                if (err) throw err;
                console.log('Report generated: ' + reportFilePath);
                done();
            });
            // fs.open(reportFilePath);
            //     } else {
            //         console.log('Some other error: ', err.code);
            //     }
            // });

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