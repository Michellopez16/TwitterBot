console.log('-------------El robot esta iniciado-------------');


var Twit = require('twit');

var config = require('./config');

//console.log(config);

var T = new Twit(config);

var exec = require('child_process').exec;
var  fs = require('fs');




tweetIt();
//setInterval(tweetIt,1000*20); // 1000 = one second 



function tweetIt(){ 
	var cmd = 'processing-java --sketch=`pwd`/TwitterImg --run'
	exec(cmd,processing);

	function processing(){
		var filename = "TwitterImg/output.png";
		var params = {
			encoding: 'base64'
	    }

	var b64 = fs.readFileSync(filename,params);
		
	
	T.post('media/upload',{media_data: b64},uploaded);
	
	console.log('Post media Terminado!!!');

	function uploaded(err, data, response){
		// This is where I will tweet!
		console.log('data'+data);
		var id = data.media_id_string;
		console.log('ID'+id);
		var tweet = { 
		status: '#MiCodigo programando con node',
		media_ids: [id] 
		}
		T.post('statuses/update', tweet, tweeted);
	}

	

	function tweeted (err, data, response) {
	  if (err){
	  	console.log("Algo salio mal!!!");
	  } else{
	  console.log("Esto trabaja.")
	}
	}
}}


// var params = { 
// 	q: 'AntesNoEraBullying', 
// 	count: 2 
// };
// // 
// //  search twitter for all tweets containing the word 'banana' since July 11, 2011 
// // 
// T.get('search/tweets', params,gotData);

// function gotData (err, data, response) {
//  var tweets = data.statuses;
//  for (var i=0;i < tweets.length;i++){
//  console.log(tweets[i].text);
//  }
  
// }

