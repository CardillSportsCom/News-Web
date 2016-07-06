angular.module('cardillApp').factory('sample', ['$http', function($http){
    var o = {
        article: {}
    };

    o.getArticle = function() {
        return $http.get('/api/article').success(function(data){
            o.article = data.articleData;                      
        });
    };

    return o;
}]);
