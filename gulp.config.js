module.exports = function() {
  var client = './src/client/';
  var clientApp = client + 'app/';
  var server = './src/server/';
  var temp = './.tmp/';

  var config = {
    /**
    * Files paths
    */
    alljs: [
    './src/**/*.js',
    './*.js'
    ],
    client: client,
    css: temp + 'styles.css',
    index: client + 'index.html',
    js: [
    clientApp + '**/*.module.js',
    clientApp + '**/*.js',
    '!' + clientApp + '**/*.spec.js'
    ],
    less: client + 'styles/styles.less',
    server: server,
    temp: temp,

    /**
    * Bower and NPM locations
    */
    bower: {
      json: require('./bower.json'),
      directory: './bower_components/',
      ignorePath: '../..'
    },

    /**
    * Node settings
    */
    defaultPort: 7203,
    nodeServer: './src/server/app.js'

  };

  config.getWiredepDefaultOptions = function() {
    var options = {
      bowerJson: config.bower.json,
      directory: config.bower.directory,
      ignorePath: config.bower.ignorePath
    };
    return options;
  };

  return config;
};
