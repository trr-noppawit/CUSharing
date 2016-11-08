'use strict';

angular.module('posts').controller('MeController',[
	'$scope',
	'Authentication',
	'$http',
	function($scope,Authentication,$http){
		$scope.profile={
			name : Authentication.user.displayName,
			screenName: Authentication.user.username,
			postCount : 0,
			favourite : 0
		};

		$http.get('/statuses/me_timeline')
		.success(function(response){
			$scope.posts = response;
		})
		.error(function(response){
			$scope.error = response.message;
		});
		
	}

	]);