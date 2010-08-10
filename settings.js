var conf = require('wilson').conf,
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
                path.join(process.cwd(), 'blog/templates'),
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
                'auth':primary('./auth'),
                'myblog':app('./blog'),
                'yrblog':app('./blog'),
            },
            'root_urlconf':'urls.patterns',
            'middleware':[],
        }
    },
});
