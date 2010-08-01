var escaperoute = require('escaperoute'),
    routes = escaperoute.routes,
    url = escaperoute.url,
    surl = escaperoute.surl;

exports.patterns = routes('blog/views',
    surl('(:d{4})/(:w{3})/(:d{1,2})/([:w:d\\-_]+)/$', 'detail_view', 'blog-detail-view'),
    url('list/$', 'list_view', 'blog-list-view')
);
