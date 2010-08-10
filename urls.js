var escaperoute = require('escaperoute'),
    wilson = require('wilson'),
    app = wilson.urls.app,
    wrap = wilson.urls.wrap,
    routes = escaperoute.routes,
    url = escaperoute.url,
    surl = escaperoute.surl;

exports.patterns = routes('',
    app('^/myblog/', 'myblog'),
    app('^/yrblog/', 'yrblog'),
    url('^/$', wrap('myblog/views.list_view', 'myblog'), 'homepage'),
    url('^/favicon.ico', function(req, resp) {
        resp.writeHead(404, {'Content-Type':'text/html'});
        resp.write("Not found.");
        resp.end(); 
    })
)

