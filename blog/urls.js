var escaperoute = require('escaperoute'),
    routes = escaperoute.routes,
    url = escaperoute.url,
    surl = escaperoute.surl;

exports.patterns = routes('blog/views',
    url('authors/$', 'author_list', 'author-list'),
    surl('authors/([:d:w\\-_]+)/$', 'author_entries', 'author-entries'),
    surl('(:d{4})/(:w{3})/(:d{1,2})/([:w:d\\-_]+)/$', 'detail_view', 'blog-detail-view'),
    url('list/$', 'list_view', 'blog-list-view')
);
