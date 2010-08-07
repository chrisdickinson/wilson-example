var models = require('pieshop').core,
    fields = require('pieshop').fields,
    reverse = require('wilson').urls.reverse,
    strftime = require('jsdtl').datetime.strftime;

exports.Author = models.resource({
    'username':fields.CharField({'max_length':255}),
    'first_name':fields.CharField({'max_length':255}),
    'last_name':fields.CharField({'max_length':255}),
    'get_absolute_url':function() {
        return reverse('author-entries', [
            this.username
        ]);
    },
    'get_full_name':function() {
        return [this.first_name, this.last_name].join(' ');
    },
    'toString':function() {
        return '<Author: "'+this.username+'">';
    },
    Meta:{
        'table':'authors',
        'ordering':'username',
    }
});

exports.Entry = models.resource({
    'title':fields.CharField({'max_length':255}),
    'tease':fields.CharField({'max_length':1000}),
    'slug':fields.CharField({'max_length':50}),
    'body':fields.TextField(),
    'created':fields.DateTimeField({'auto_now_add':true}),
    'author':fields.ForeignKey(exports.Author, {'related_name':'entry_set'}), 
    'get_absolute_url':function() {
        return reverse('blog-detail-view', [
            this.created.getFullYear(),
            strftime(this.created, "b"),
            this.created.getDate(),
            this.slug
        ]); 
    },
    'toString':function() {
        return '<Entry: "'+this.title+'">';
    },
    Meta:{
        'table':'entries',
        'ordering':'-created',
    }
});

