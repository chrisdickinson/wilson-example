var escaperoute = require('escaperoute'),
    wilson = require('wilson'),
    app = wilson.urls.app,
    wrap = wilson.urls.wrap,
    routes = escaperoute.routes,
    url = escaperoute.url,
    http = wilson.http,
    surl = escaperoute.surl;

exports.patterns = routes('',
    app('^/myblog/', 'myblog'),
    app('^/yrblog/', 'yrblog'),
    app('^/auth/', 'auth'),
    url('^/$', wrap('blog/views.list_view', 'myblog'), 'homepage'),
    url('^/favicon.ico', function(request) {
        request.respond(new http.Http404("Could not find favicon.ico"));
    })
)

