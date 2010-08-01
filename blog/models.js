var models = require('pieshop').core,
    fields = require('pieshop').fields,
    reverse = require('wilson').urls.reverse,
    strftime = require('jsdtl').datetime.strftime;

exports.Entry = models.resource({
    'table':'entries',
    'title':new fields.CharField({'max_length':255}),
    'tease':new fields.CharField({'max_length':1000}),
    'slug':new fields.CharField({'max_length':50}),
    'body':new fields.TextField(),
    'created':new fields.DateTimeField({'auto_now_add':true}),

    'get_absolute_url':function() {
        return reverse('blog-detail-view', [
            this.created.getFullYear(),
            strftime(this.created, "b"),
            this.created.getDate(),
            this.slug
        ]); 
    },
});
