var wilson = require('wilson'),
    application = wilson.application,
    app = application.app;

exports.app = app({
    'provides':'auth',
    'models':require('./models'),
    'external_apps':{},
});
