(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q', '$rootScope'];

	function HomeFactory($http, $q, $rootScope) {
		var o = {};


		o.CitySender = function(city){
			var q = $q.defer();
			$http.post('/city/', city).success(function(res){
				q.resolve(res);
			}).error(function(){
				return 'Error could not send city'
			})
			return q.promise;
		}

		o.addLocationWeather = function(locationData){
			var q = $q.defer();

			$http.post('/findCityInfo', locationData).success(function(res){
				q.resolve(res);
			}).error(function(){
				return 'Error could not send locationObj'
			})
			return q.promise;
		}
		return o;
	}

})();
