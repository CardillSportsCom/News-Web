(function(){
	var app = angular.module("cardillApp", ['ng-sortable', 'ui.router', 'ngMaterial']);

	app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

	  $stateProvider
	    .state('home', {
	        url: '/home',
	        templateUrl: '/pages/home/home.html',	
	        controller: 'HomeController'      
	    })
	    .state('draft-results', {
	        url: '/posts/draft-results',
	        templateUrl: '/pages/draft/draft-results/draft-results.html',
	        controller: 'DraftResultsController',
	        resolve: {
   				postPromise: ['rankings', function(rankings){
      				return rankings.getAll();
    			}]
    		}	       
	    })
	    .state('draft-retro', {
	        url: '/posts/draft-retro',
	        templateUrl: '/pages/draft/draft-retro/draft-retro.html',
	        controller: 'DraftRetroController'
	    })	   
	    .state('long-live-the-king', {
	        url: '/posts/long-live-the-king',
	        templateUrl: '/pages/long-live-the-king.html',
	        
	    })
	    .state('finals-preview', {
	        url: '/posts/finals-preview',
	        templateUrl: '/pages/finals-preview.html',
	        
	    })
	    .state('not-so-fast', {
	        url: '/posts/not-so-fast',
	        templateUrl: '/pages/not-so-fast.html',
	        
	    })
	    .state('tracks', {
	        url: '/tracks',
	        templateUrl: '/pages/tracks.html',
	        
	    })
	    .state('power-of-veto', {
	        url: '/posts/power-of-veto',
	        templateUrl: '/pages/power-of-veto.html',
	        controller: 'PostsCtrl'
	    })
	    .state('rd2-gm7', {
	        url: '/posts/rd2-gm7',
	        templateUrl: '/pages/rd2-gm7.html',
	        
	    })
	    .state('the-day-i-said-what-if', {
	        url: '/posts/the-day-i-said-what-if',
	        templateUrl: '/pages/the-day-i-said-what-if.html',
	        
	    })
	    .state('gallery', {
	        url: '/gallery',
	        templateUrl: '/pages/reddit/reddit.html',
	        controller: 'RedditController',
	        resolve: {
   				postPromise: ['reddit', function(posts){
      				return posts.getAll();
    			}]
    		}
	    });



	  $urlRouterProvider.otherwise('home');
	}]);

})();

