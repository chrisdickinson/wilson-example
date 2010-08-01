var settings = require('wilson').conf.settings,
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
            'apps':[
                'blog',
            ],
            'root_urlconf':'urls.patterns',
        }
    },
});


