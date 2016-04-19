var config = require('./config'),
    rp = require('request-promise'),
    fs = require('fs');

function load(file, contentType) {
  console.log(file);
  var content = fs.readFileSync('data/' + file);
  var options = {
    method: 'POST',
    uri: 'http://' + config.host + ':' + config.database.port + '/v1/graphs',
    body: content,
    headers: {
      'Content-Type': contentType
    },
    auth: config.auth
  };
  rp(options)
    .then(function (response) {
      console.log('File loaded: ');
      console.dir(response);
    })
    .catch(function (err) {
      console.log(err, null, 2);
    });
}

var args = process.argv;
var file = args[2];
var ext = file.substring(file.lastIndexOf(".")+1);
var contentTypes = {
  rdf: 'application/rdf+xml',
  ttl: 'text/turtle',
  json: 'application/rdf+json',
  n3: 'text/n3',
  nt: 'application/n-triples',
  nq: 'application/n-quads',
  trig: 'application/trig'
};
var contentType = contentTypes[ext];

load(file, contentType);
