var ip = require('ip');
var http = require('http');
http.post = require('http-post');

var location = 'idUWS';
var port;
var name = 'black room';

function MasterUpdater() {

}

MasterUpdater.prototype.setLocation = function(_location) {
  location = _location;
}

MasterUpdater.prototype.setPort = function(_port) {
  port = _port;
}

MasterUpdater.prototype.setName = function(_name) {
  name = _name;
}

MasterUpdater.prototype.addServer = function() {
  http.post('http://funkyagar.me/changeserver.php', {ip: ip.address(), port: port, location: location,  name: name, adding: "add"});
}

MasterUpdater.prototype.removeServer = function() {
  http.post('http://funkyagar.me/changeserver.php', {ip: ip.address(), adding: "remove"});
}

module.exports = MasterUpdater;
