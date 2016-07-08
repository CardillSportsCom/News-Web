var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var requestController = require('requestController');

var PlayerRankingSchema = new mongoose.Schema({
    1: Object,
    2: Object,
    3: Object,
    4: Object,
    5: Object,
    6: Object,
    7: Object,
    8: Object,
    9: Object,
    10: Object,
    11: Object,
    12: Object,
    submitter: String
});


var PlayerRanking = mongoose.model('PlayerRanking', PlayerRankingSchema);


router.get('/rankings', function(req, res, next) {
    PlayerRanking.find(function(err, playerRanking){
        if(err){ return next(err); }
        res.json(playerRanking);
    });
});

router.post('/ranking', function(req, res, next) {

    var playerRanking = new PlayerRanking(req.body);	
    
    playerRanking.save(function(err, playerRanking){
        if(err){ return next(err); 
    }
    
    res.json(playerRanking);
    });
});


router.get('/reddit2', function(req, res, next) {  
    requestController.getSampleData(function(result) {        
        res.json(result);
    });
});

var getRedditPosts = function(req, res, next) {  
    
    var pathString = "/r/nba/top.json?sort=top&t=month&limit=100";
    if (Object.keys(req.params).length !== 0) {
        pathString = pathString + "&after=" + req.params.after;
    }
    

    var options = {
        host: 'www.reddit.com',
        path: pathString,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    requestController.getJSON(options, function(statusCode, result) {    
        res.statusCode = statusCode;
        res.json(result);
    });
};

router.get('/reddit/:after', getRedditPosts);
router.get('/reddit', getRedditPosts);

module.exports = router;