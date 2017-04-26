require('babel-register')({
  ignore: /(node_modules|dictionary\.js)/
});


var PythonShell = require('python-shell');

PythonShell.run('my_script.py', function (err,results) {
  if (err) throw err;
  console.log('results: %j', results);
});

require('./server.js');
