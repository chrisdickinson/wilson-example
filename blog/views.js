var wilson = require('wilson'),
    shortcuts = wilson.shortcuts,
    renderToResponse = shortcuts.renderToResponse,
    getObjectOr404 = shortcuts.getObjectOr404;

exports.author_list = function(request) {
    var Author = this.externals.auth.models.User;
    Author.objects.all(function(objects) {
        renderToResponse(request)('blog/author_list.html', {
            'author_list':objects
        });
    });
};

exports.author_entries = function(request, author_slug) {
    var Author = this.externals.auth.models.User;
    getObjectOr404(request)(Author, {'username':author_slug}, function(author) {
        renderToResponse(request)('blog/author_entries.html', {
            'author':author,
        });
    });
};

exports.detail_view = function(request, year, month, day, slug) {
    var Entry = this.models.Entry;
    getObjectOr404(request)(Entry, {'slug':slug}, function(entry) {
        renderToResponse(request)('blog/entry_detail.html', {'entry':entry});
    });
};

exports.list_view = function(request) {
    var Entry = this.models.Entry;
    Entry.objects.filter({}).limit(5).all(function(objects) {
        renderToResponse(request)('blog/entry_list.html', {'entry_list':objects});
    });    
};

