var wilson = require('wilson'),
    application = wilson.application,
    app = application.app,
    primary = application.primary;

exports.app = app({
    'provides':'blog',
    'models':require('./models'),
    'external_apps':{
        'auth':primary('auth')
    },
    'urls':require('./urls').patterns,
});
