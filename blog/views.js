var Entry = require('./models').Entry,
    wilson = require('wilson'),
    shortcuts = wilson.shortcuts,
    renderToResponse = shortcuts.renderToResponse,
    getObjectOr404 = shortcuts.getObjectOr404;


exports.detail_view = function(request, response, year, month, day, slug) {
    getObjectOr404(response)(Entry, {'slug':slug}, function(entry) {
        renderToResponse(request, response)('blog/entry_detail.html', {'entry':entry});
    });
};

exports.list_view = function(request, response) {
    var sys = require('sys');
    Entry.objects.filter({}).limit(5).all(function(objects) {
        renderToResponse(request, response)('blog/entry_list.html', {'entry_list':objects});
    });    
};

