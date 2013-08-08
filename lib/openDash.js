var util = require('util'),
    exec = require('child_process').exec;

var openDash = function (searchWord, keyword) {
    if (!searchWord) {
        throw new Error('no search word.');
    }

    var line;

    if (keyword) {
        line = util.format('open dash://%s:%s', keyword, searchWord);
    } else {
        line = util.format('open dash://%s', searchWord);
    }

    exec(line);
};

module.exports = openDash;