var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    ID: Number,
    Name: String,
    ImamgeLink: String,
    DateCreated: Date
});

var ArticleModel = mongoose.model('Article', ArticleSchema);

router.get('/articles', function(req, res, next) {
    ArticleModel.find({}).sort({DateCreated: 'descending'}).exec(
        function(err, articles){
            if(err){ return next(err); }
            res.json(articles);
    });
});

router.get('/articles/:limit', function(req, res, next) {
    var limit = req.params.limit;
    ArticleModel.find({}).sort({DateCreated: 'descending'}).limit(limit).exec(
        function(err, articles){
            if(err){ return next(err); }
            res.json(articles);
    });
});

router.get('/article/:id', function(req, res, next) {
    var id = req.params.id;
    ArticleModel.findOne({ID: id}, function(err, article){
        if(err){ return next(err); }
        console.log(article.DateCreated);
        res.json(article);
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

   /* requestController.getJSON(options, function(statusCode, result) {    
        res.statusCode = statusCode;
        res.json(result);
    });*/
};

router.get('/reddit/:after', getRedditPosts);
router.get('/reddit', getRedditPosts);

module.exports = router;