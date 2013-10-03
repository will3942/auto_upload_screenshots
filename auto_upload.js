/* auto_upload.js */
var fs = require('fs');
var exec = require('child_process').exec, child;

/* edit these variables~~~ */
var desktop_directory = ''; // /Users/will3942/Desktop/
var uploaded_directory = ''; // /Users/will3942/uploaded/
var ssh_command = ''; // e.g user@host
var remote_directory = '' // remote upload directory e.g /home/will/www/screenshots/
var web_location = '' // if screenshots are to be accessed online then this is the prefix e.g http://laze.definedcode.com/~will/screenshots/

/* end editable variables */

fs.watch(desktop_directory, function (event, filename) {
    if (event == 'rename') {
        if (filename.split('.').pop() == 'png') {
        	var original = fs.createReadStream(desktop_directory + filename);
        	var escaped = filename.replace(/\s/g, '-');
        	var mainstream = fs.createWriteStream(uploaded_directory + escaped);
        	original.pipe(mainstream);
        	original.on('end', function() {
        		/* fak ye */
        		child = exec('scp ' + uploaded_directory + escaped + " " + ssh_command + ':' + remote_directory + escaped, function (error, stdout, stderr) {
        			if (error == null) {
        				exec('echo ' + web_location + escaped + ' | pbcopy', function (error, stdout, stderr) {
        					if (error == null) {
        						/* fak ye done */
        					}
        					else {
        						console.log(error);
        					}
        				});
                    }
                    else {
                        console.log(error);
                    }
                });
            });
            original.on('error', function(err) {
                console.log(err);
            });
        }
    }
});
