'use strict';

var configure = function(options, config, program) {
};

var configureAppServer = function(applicationServer, config, routes, done) {
  applicationServer.get('/test-url', function(req, res){
    res.send({ok:true});
  });
  done();
};

var onExit = function(options, config, done) {
  done();
};

module.exports.configure = configure;
module.exports.configureAppServer = configureAppServer;
module.exports.onExit = onExit;

if( !module.parent ){
}