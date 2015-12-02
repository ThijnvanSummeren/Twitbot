//-----------------------//
//  Bastiaan Bot-BB 1.
//  www.thijn.ga
//  Thijn van Summeren
//-----------------------//
var Twit = require('twit')
var T = new Twit({
    consumer_key:         ''
  , consumer_secret:      ''
  , access_token:         ''
  , access_token_secret:  ''
})
var stream = T.stream('statuses/filter', { track: ['sinaasappels', 'sinaasappel'] })

function getdata() {
	stream.on('tweet', function (data) {
		console.log(data);
    });
}
function startBastibot2() {
	T.get('search/tweets', {q: "sinaasappel OR sinasappel", result_type: "recent"}, function (err, data,response) {
		if (!err) {
			
		
			//Maak een duplicate patch faggot.
			
				var tweet = data.statuses[0];
				var stuurditfaggot = '@' + tweet.user.screen_name + ' Ik houd meer van grapefruits!';
				var stuurditnaardennis = '@' + tweet.user.screen_name + ' Ik hou meer van jou <3';
				var kutid = tweet.id_str;
				if (tweet.user.screen_name == 'Fappend'){
					T.post('statuses/update',{status:stuurditnaardennis, in_reply_to_status_id:kutid}, function (err,response) {
					if (response) {
					
							console.log('Dennis' + tweet.id_str);
						
						}
					});
				} else {
					T.post('statuses/update',{status:stuurditfaggot, in_reply_to_status_id:kutid}, function (err,response) {
						if (response) {
					
							console.log('[BASTIBOT] Tweet ID: ' + tweet.id_str);
						
						}
						if (err) {
							console.log('[BASTIBOT] Pls help qoute: ', err);
						}
					});
				}
		} else {
			console.log('pls help error: ', err);
		}
	});
}
console.log('Bastibot gestart.');
startBastibot2();
setInterval(startBastibot2, 30000);
