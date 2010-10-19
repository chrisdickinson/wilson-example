var application = require('wilson/application'),
    app = application.app,
    primary = application.primary,
    any = application.any,
    specific = application.specific,
    path = require('path'),
    fs = require('fs');

exports.app = app({
    'provides':'blog',
    'models':require('blog/models'),
    'external_apps':{
        'auth':primary('auth')
    },
    'urls':require('blog/urls').patterns,
    'template_directories':[path.join(__dirname, 'templates')]
});
