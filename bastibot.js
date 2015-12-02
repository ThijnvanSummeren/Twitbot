//-----------------------//
//  Bastiaan Bot-BB 1.
//  www.thijn.ga
//  Thijn van Summeren
//-----------------------//
var Twit = require('twit')
var T = new Twit({
    consumer_key:         '...'
  , consumer_secret:      '...'
  , access_token:         '...'
  , access_token_secret:  '...'
})
var stream = T.stream('statuses/filter', { track: ['sinaasappels', 'sinaasappel'] })

// T.post('statuses/update', { status: 'BastiaanBOT: Started.' }, function(err, data, response) {
//   console.log(data)
//   })
function ditkankerscriptwerknietmeer() {
    T.stream('statuses/filter', { track: 'sinaasappel' }, function(stream) {
        console.log('[BASTIBOT] Tweets worden gezocht');
        T.stream.on('data', function(tweet) {
            if (tweet.text.match('sinaasappel')) {
			    console.log('[BASTIBOT] tweet gestuurd');
                T.updateStatus('@' + tweet.user.screen_name + ' Ik houd meer van grapefruits' ,
                    {in_reply_to_status_id: tweet.id_str}, callback);
            }
        });
    });
}
//function startBastibot() {
//	stream.on('tweet', function (tweet) {
//		console.log(data);
		//T.post('@' + tweet.user + ' Ik houd meer van grapefruits' ,
       //     {in_reply_to_status_id: tweet.id_str}, callback);
           
//	})
//}
function startBastibot2() {
	T.get('search/tweets', {q: "sinaasappel OR sinasappel", result_type: "recent"}, function (err, data,response) {
		if (!err) {
		//Maak een duplicate patch faggot.
			var tweet = data.statuses[0];
			var stuurditfaggot = '@' + tweet.user.screen_name + ' Ik houd meer van grapefruits!';
			T.post('statuses/update',{status:stuurditfaggot}, function (err,response) {
				if (response) {
					console.log('[BASTIBOT] Tweet ID: ' + tweet.id_str);
				}
				if (err) {
					console.log('[BASTIBOT] Pls help qoute: ', err);
				}
			});
		
		} else {
			console.log('pls help error: ', err);
		}
	});
}
startBastibot2();
setInterval(startBastibot2, 60000);
