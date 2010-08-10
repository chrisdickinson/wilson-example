var wilson = require('wilson'),
    models = wilson.models,
    reverse = wilson.urls.reverse,
    strftime = require('jsdtl').datetime.strftime;

exports.Entry = models.model({
    'title':models.CharField({'max_length':255}),
    'tease':models.CharField({'max_length':1000}),
    'slug':models.CharField({'max_length':50}),
    'body':models.TextField(),
    'created':models.DateTimeField({'auto_now_add':true}),
    'author':models.ForeignKey(models.dep('auth', 'User'), {'related_name':'entry_set'}), 
    'get_absolute_url':function() {
        return reverse([this._meta.app_name, 'blog-detail-view'].join(':'), [
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
        'ordering':'-created',
    }
});

