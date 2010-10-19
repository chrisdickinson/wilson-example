Wilson Example
==============================

This is a simple example of a project set up to use wilson.
To make this work,

    npm install escaperoute
    npm install postgres
    npm install postpie
    npm install pieshop
    npm install plate
    npm install wilson

    createdb wilson
    neversawus/manage core:syncdb | psql wilson
    neversawus/manage core:runserver 8080
