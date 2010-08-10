Wilson Example
==============================

This is a simple example of a project set up to use wilson.
To make this work,

    git clone http://github.com/chrisdickson/escaperoute.git && cd wilson && npm install . && cd -
    git clone http://github.com/chrisdickson/pieshop.git && cd wilson && npm install . && cd -
    git clone http://github.com/chrisdickson/postpie.git && cd wilson && npm install . && cd -
    git clone http://github.com/chrisdickson/wilson.git && cd wilson && npm install . && cd -
    # and obtain a copy of jsdtl.

    # in the wilson-example directory...
    createdb wilson
    wilson core:syncdb | psql wilson
    wilson core:runserver 8080 settings


