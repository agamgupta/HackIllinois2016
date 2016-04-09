var express = require('express'),
	app = express(),
	Twitter = require('twitter-node-client').Twitter,
	tweets = {test: 'hi'};

//Callback functions
    var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
    };
    var success = function (data) {
        console.log('Data [%s]', data);
        tweets = data;
    };

    var Twitter = require('twitter-js-client').Twitter;

    //Get this data from your twitter apps dashboard
    var config = {
        "consumerKey": "GJpX8CFvUyNww23DTQLWqAVXJ",
        "consumerSecret": "wSpJHqKXc2xMF9dmN7Wm6ncKDAeuIFMgSG1oXBVu2AtRW37b9Z",
        "accessToken": "717405588926382080-BX0cWdn3jqmWtt8tAKtsVLmMHPFkJh2",
        "accessTokenSecret": "Cjmv9y3Jw36h7pOWCpR1H1YFEptPsflR88BWDkcoA7Mhl",
        "callBackUrl": "http://www.google.com"
    }

    var twitter = new Twitter(config);

    //Example calls

    // twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);

    // twitter.getMentionsTimeline({ count: '10'}, error, success);

    // twitter.getHomeTimeline({ count: '10'}, error, success);

    // twitter.getReTweetsOfMe({ count: '10'}, error, success);

    // twitter.getTweet({ id: '1111111111'}, error, success);

    twitter.getCustomApiCall('/statuses/filter.json',{ id: '412312323', latitude: '-123.044,36.846', longitude: '-121.591,38.352'}, error, success);

    app.get('/',function(req,res){
    	res.json(tweets);
    })

    //
    // Get 10 tweets containing the hashtag haiku
    //

    // twitter.getSearch({'q':'#haiku','count': 10}, error, success);

    //
    // Get 10 popular tweets with a positive attitude about a movie that is not scary 
    //

    // twitter.getSearch({'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}, error, success);
    var port = process.env.PORT || 8000;
    app.listen(port);
