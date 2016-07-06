angular.module('cardillApp').controller('SampleController', [
    '$scope',
    'sample',
    function($scope, sample){    
        $scope.article = sample.article;
    }]
);