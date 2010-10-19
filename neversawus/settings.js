var apps = require('wilson/application'),
    path = require('path'),
    pieshop = require('pieshop');

pieshop.settings.set_addon('backend', 'postpie.backends:PostgresBackend');
pieshop.settings.set_addon('transport', 'postpie.transports:PostgresTransport');

pieshop.settings.set_value('DB_HOST', 'localhost');
pieshop.settings.set_value('DB_NAME', 'wilson');

INSTALLED_APPS = {
    'core':apps.usePrimary('wilson/core'),
    'sessions':apps.usePrimary('wilson/contrib/sessions'),
    'auth':apps.usePrimary('wilson/contrib/auth'),
    'myblog':apps.usePrimary('blog'),
    'yrblog':apps.use('blog'),
};

SECRET_KEY = 'bacbd1bb448cbcde775bc4a3bff808b8';

ROOT_URLCONF = 'neversawus/urls.patterns';

TEMPLATE_LOADERS = [
    'wilson/template/loaders.application',
    'wilson/template/loaders.filesystem',
];

TEMPLATE_DIRS = [
    path.join(__dirname, 'templates')
];

MIDDLEWARE = [
    'core:BaseMiddleware',
    'core:DebugMiddleware',
    'core:ProcessUrlEncodedMiddleware',
    'sessions:SessionMiddleware',
    'auth:AuthenticationMiddleware',
];

APP_OVERRIDES = {
    core:{
        settings:{
            debug:true
        }
    },
    auth:{
        settings:{
            backends:['wilson/contrib/auth/backends/model.AuthModelBackend']
        }
    }
};
