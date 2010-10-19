var escaperoute = require('escaperoute'),
    urls = require('wilson/urls'),
    http = require('wilson/http'),
    app = urls.app,
    wrap = urls.wrap,
    routes = escaperoute.routes,
    url = escaperoute.url,
    surl = escaperoute.surl;

exports.patterns = routes('neversawus',
    app('^/myblog/', 'myblog'),
    app('^/yrblog/', 'yrblog'),
    app('^/auth/', 'auth'),
    url('^/$', wrap('blog/views.list_view', 'myblog'), 'homepage'),
    url('^/favicon.ico', function(request) {
        request.respond(new http.Http404("Could not find favicon.ico"));
    })
)

