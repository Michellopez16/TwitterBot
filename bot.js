console.log('-------------El robot esta iniciado-------------');


var Twit = require('twit');

var config = require('./config');

//console.log(config);

var T = new Twit(config);


// 
//  tweet 'hello world!' 
// 
// T.post('statuses/update', { status: 'Hola Mundo!' }, function(err, data, response) {
//   console.log(data)
// })

var tweet = { 
	status: '#MiPrimerBot tweet programado' 
};

T.post('statuses/update', tweet, tweeted);


function tweeted (err, data, response) {
  if (err){
  	console.log("Algo salio mal!!!");
  } else{
  console.log("Esto trabaja.")
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

