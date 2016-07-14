var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    ID: Number,
    Name: String,
    ImamgeLink: String,
    DateCreated: Date,
    Rating: Number,
    TotalRatings: Number,
    Comments: []
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

router.put('/article/:id/rating/:rating', function(req, res, next) {
    var id = req.params.id;
    var rating = req.params.rating;

    ArticleModel.findOne({ID: id}, function(err, article){
        if(err){ return next(err); }
        // Calculate new average
        article.Rating =    ((parseFloat(article.Rating) * parseFloat(article.TotalRatings)) + parseFloat(rating)) / 
                            (parseFloat(article.TotalRatings) + 1);
                
        // Increment 
        article.TotalRatings += 1;
        
        article.save(
                function(err) {
                    if (err) res.send(err);
                    res.json({ message: 'Article updated!' });
                });
    });
});

router.put('/article/:id/comment/:comment', function(req, res, next) {
    var id = req.params.id;
    var comment = req.params.comment;

    ArticleModel.findOne({ID: id}, function(err, article){
        if(err){ return next(err); }
        
        var commentObj = {"Name": "Anonymous",
                            "Text": comment,
                            "Date": new Date}

        article.Comments.push(commentObj);

        article.save(
                function(err) {
                    if (err) res.send(err);
                    res.json(commentObj);
                });
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