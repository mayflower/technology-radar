

    $ git submodule init
    $ git submodule update

    $ cp Personalization.dist Personalization
    $ vim Personalization

    $ vagrant up
    $ vagrant ssh

    $ cd /srv/www/technology-radar
    $ npm install

    $ cd radar-service
    $ npm install

    $ cd ..
    
    # fill sample data to mongo
    $ node radar-service/data/populateDb.js
    $ ^C

    # start angular frontend
    $ node technology-radar/scripts/web-server.js
    $ node radar-service/server.js

