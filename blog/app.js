var wilson = require('wilson'),
    application = wilson.application,
    app = application.app,
    fs = require('fs'),
    path = require('path'),
    primary = application.primary;

exports.app = app({
    'provides':'blog',
    'models':require('./models'),
    'external_apps':{
        'auth':primary('auth')
    },
    'urls':require('./urls').patterns,
    'template_directories':[
        path.join(path.dirname(fs.realpathSync(__filename)), 'templates')
    ],
});
