Wilson Example
==============================

This is a simple example of a project set up to use wilson.
To make this work,

    git clone http://github.com/chrisdickson/escaperoute.git && cd wilson && npm install . && cd -
    git clone http://github.com/chrisdickson/pieshop.git && cd wilson && npm install . && cd -
    git clone http://github.com/chrisdickson/postpie.git && cd wilson && npm install . && cd -
    git clone http://github.com/chrisdickson/wilson.git && cd wilson && npm install . && cd -
    # and obtain a copy of jsdtl.

    createdb wilson
    psql wilson
    #enter the following 
    BEGIN;
    CREATE TABLE entries (
        id SERIAL,
        slug VARCHAR(50),
        title VARCHAR(255),
        tease VARCHAR(1000),
        body TEXT,
        created TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
    COMMIT; 
    insert into entries (slug, title, tease, body) values ('hey-guys', 'hey guys', 'woooooo', 'it seems okay, at the least');
    insert into entries (slug, title, tease, body) values ('oh-wow', 'lookit that', 'things are great', 'it seems okay, at the least');
    # and hit enter.
        
    git clone git@github.com:chrisdickinson/wilson-example.git && cd wilson-example && wilson-runserver settings 8080

Now open up the browser and look at the site!


