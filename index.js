var watch = require('node-watch');
var fs = require('fs');
//var args = require('optimist').argv;
var exec = require('child_process').exec;
var base = 'c:\\checkouts\\formspring\\app\\css';

console.log('folder exists?', fs.existsSync (base));
watch(base+'\\less\\', function(filename){
	console.log(filename+ ' changed.' + new Date().toLocaleString() );
	exec('lessc ' + ['less\\main.less', 'main.css', '--source-map'].join(' '), {cwd: base}, function(e,so,se){
		if (so) console.log( so);
		if (se) console.log('ERROR: ' +se);
	});

});
