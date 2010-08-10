var wilson = require('wilson'),
    models = wilson.models;

exports.User = models.model({
    'username':models.CharField({max_length:255}),
    'first_name':models.CharField({max_length:255}),
    'last_name':models.CharField({max_length:255}),
    'get_full_name':function() {
        return [this.first_name, this.last_name].join(' ');
    },
    'toString':function() {
        return '<User: "'+this.username+'">';
    },
    Meta:{
    }
});
