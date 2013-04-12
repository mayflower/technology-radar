var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('technologies', server);
 
    db.open(function(err, db) {
        if(!err) {
            console.log("Connected to 'technologies' database");
        }
    });



exports.options = function(req, res) {
  console.log('Answer options request');

  var headers = {};
  // IE8 does not allow domains to be specified, just the *
  // headers["Access-Control-Allow-Origin"] = req.headers.origin;
  headers["Access-Control-Allow-Origin"] = "*";
  headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
  headers["Access-Control-Allow-Credentials"] = false;
  headers["Access-Control-Max-Age"] = '86400'; // 24 hours
  headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
  res.writeHead(200, headers);

  return(res.end());
}
 
exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving technologie: ' + id);
    db.collection('technologies', function(err, collection) {
        collection.findOne({'_id': BSON.ObjectID(id)}, function(err, item) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        res.send(item);
        });
    });
};
 
exports.findAll = function(req, res) {
    db.collection('technologies', function(err, collection) {
        console.log('Find all technologies');
        collection.find().toArray(function(err, items) {
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "*");
            res.send(items);
        });
    });
};
 
exports.add = function(req, res) {
    var technologie = req.body;
    console.log('Adding technologie: ' + JSON.stringify(technologie));
    db.collection('technologies', function(err, collection) {
        collection.insert(technologie, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
	        res.header("Access-Control-Allow-Origin", "*");
	        res.header("Access-Control-Allow-Headers", "*");
                res.send(result[0]);
            }
        });
    });
}
 
exports.update = function(req, res) {
    var id = req.params.id;
    var technologie = req.body;
    console.log('Updating technologie: ' + id);
    console.log(JSON.stringify(technologie));
    db.collection('technologies', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, technologie, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating technologie: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
	        res.header("Access-Control-Allow-Origin", "*");
	        res.header("Access-Control-Allow-Headers", "*");
                res.send(technologie);
            }
        });
    });
}
 
exports.deleteTechnologie = function(req, res) {
    var id = req.params.id;
    console.log('Deleting technologie: ' + id);
    db.collection('technologies', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });

};
