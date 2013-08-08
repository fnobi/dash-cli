(function () {
    var optimist = require('optimist'),
        _  = require('underscore'),
        openDash = require('./openDash');

    var argv = optimist
            .boolean('h')
            .alias('h', 'help')
            .default('h', false)
            .describe('h', 'show this help.')

            .argv;

    if (argv.h) {
        optimist.showHelp();
        return;
    }

    var opts = _.difference(_.keys(argv), ['_', '$0', 'h', 'help']),
        keyword = opts.shift(),
        searchWord = argv._.shift();

    openDash(searchWord, keyword);
})();