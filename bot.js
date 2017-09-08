console.log('-------------El robot esta iniciado-------------');


var Twit = require('twit');

var config = require('./config');

//console.log(config);

var T = new Twit(config);


// Setting up a user stream
var stream = T.stream('user');

// Anytime someone follows me
stream.on('follow',followed);

function followed(event){
	//console.log(event);
	console.log("Eventos de follow!!!");
	var name = event.source.name;
	var screenName = event.source.screen_name;
	tweetIt('@' + screenName + ' te gusta programar?');  
}


//setInterval(tweetIt,1000*20); // 1000 = one second 



function tweetIt(txt){ 

	var tweet = { 
		status: txt 
	};

	T.post('statuses/update', tweet, tweeted);


	function tweeted (err, data, response) {
	  if (err){
	  	console.log("Algo salio mal!!!");
	  } else{
	  console.log("Esto trabaja.")
	}
	}
}

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

