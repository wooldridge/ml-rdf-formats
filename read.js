var config = require('./config'),
    marklogic = require('marklogic'),
    fs = require('fs');

var db = marklogic.createDatabaseClient({
  host: config.host,
  port: config.database.port,
  user: config.auth.user,
  password: config.auth.pass,
  authType: 'digest'
});

function read(contentType) {
  var sparql = 'SELECT ?s ?p ?o ' +
               'WHERE { ' +
               '?s ?p ?o ; ' +
               '}';
  contentType = (contentType === undefined) ? 'application/rdf+json' : contentType;
  db.graphs.sparql(contentType, sparql)
  .result(
    function(response) {
      console.log(JSON.stringify(response.results.bindings, null, 2));
    },
    function(error) {
      console.log('Read failure: ');
      console.dir(error);
    }
  );
}

var args = process.argv;
var contentType = args[2];

read(contentType);
