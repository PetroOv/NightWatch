"use strict";
let assert = require('assert');
const addressMaster = "01.tripnet.release/";
var funcName = [{index: "1", name: "lalka", test: ""}, {index: "2", name: "lalka2", test: ""}];
var funcName2 = [{index: "1", name: "lalka", test: ""}, {index: "2", name: "lalka2", test: ""}];

for (let i = 0; i < funcName.length; i++) {
    funcName[i].test = function (client) {
        client
            .init()
            .elements("css selector", ".key-features-items", function (keys) {
                this.verify.ok((keys.value.length) < 10, "KeyFeatures count <= 9.");
            })
        .end();
    }

}
console.log(funcName[0].toString());
// exports.lol = funcName;
module.exports.User = funcName[0].test as funcName[0].name
// module.exports = {
//     // '@disabled': true,
//     "@tags": ['hotelPage', 'keyFeatures'],
// funcName:function  (client) {
//         client
//             .init()
//             .elements("css selector", ".key-features-items", function (keys) {
//                 this.verify.ok((keys.value.length) < 10, "KeyFeatures count <= 9.");
//             })
//         .end();
//     }
//
// };