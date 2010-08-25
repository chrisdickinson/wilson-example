var wilson = require('wilson'),
    conf = wilson.conf,
    settings = conf.settings,
    primary = conf.primary,
    app = conf.app,
    path = require('path');

settings.extend({
    'jsdtl':{
        'addons':{
            'loaders':'jsdtl.loaders:filesystemLoader',
            'urls':'wilson.urls:UrlResolver'
        },
        'values':{
            'TEMPLATE_DIRS':[
                path.join(process.cwd(), 'templates')
            ],
        },
    },
    'pieshop':{
        'values':{
            'DB_HOST':'localhost',
            'DB_NAME':'wilson'
        },
        'addons':{
            'backend':'postpie.backends:PostgresBackend',
            'transport':'postpie.transports:PostgresTransport',
        },
    },
    'wilson':{
        'values':{
            'apps':{
                'core':primary('wilson.core'),
                'sessions':primary('wilson.contrib.sessions'),
                'auth':primary('wilson.contrib.auth'),
                'myblog':app('./blog'),
                'yrblog':app('./blog'),
            },
            'root_urlconf':'urls.patterns',
            'use_app_template_directories':true,
            'middleware':[
                'core:BaseMiddleware'
            ,   'core:DebugMiddleware'
            ,   'core:ProcessUrlEncodedMiddleware'
            ,   'sessions:SessionMiddleware'
            ,   'auth:AuthenticationMiddleware'
            ],
        }
    },
}, {
    'auth':{
        'settings':{
            'backends':[wilson.contrib.auth.backends.model.AuthModelBackend]
        }
    },
    'core':{
        'settings':{
            'debug':true,
        }
    },
});
