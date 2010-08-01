var escaperoute = require('escaperoute'),
    routes = escaperoute.routes,
    url = escaperoute.url,
    surl = escaperoute.surl;

exports.patterns = routes('',
    url('^/blog/', 'blog/urls.patterns'),
    url('^/$', 'blog/views.list_view', 'homepage')
)

