(function() {
	'use strict';

	angular.module('flickrApp', ['ngMaterial'])
		.controller('ListController', ['$scope', '$http', function($scope, $http){

			$scope.results = [];

			$scope.search = function () {

				$http({
					method: 'GET',
					url: 'https://api.flickr.com/services/rest',
					params: {
						method: 'flickr.photos.search',
						api_key: '25cc9ceb913ef2856b29132fd94b617b',
						text: $scope.searchTerm,
						format: 'json',
						nojsoncallback: 1
					}
				}).success(function (data) {

					$scope.results = data;

				}).error(function (error) {
					console.error(error);
				});

			};

		}]);
})();