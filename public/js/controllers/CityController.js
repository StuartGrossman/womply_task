(function(){
	'use strict'
	angular.module('app').controller('CityController', CityController);
	CityController.$inject = ['HomeFactory', '$window'];

	function CityController(HomeFactory){
		let vm = this; vm.city = {}; vm.locations = []; vm.imperial = true; vm.metric = true; vm.locationIcon = [];

		vm.sendCitySearch = function(){
			vm.nothingFound = false; vm.status = false; // variables to show html blocks

			HomeFactory.CitySender(vm.city).then(function(res){
				// returns KEY value for first returned city from API location lookup
				if(res.length > 0){ // checks to make sure obj is populated
					vm.status = true;
					let key = res[0].Key; let name = res[0].LocalizedName; let state = res[0].AdministrativeArea.ID;
					getLocationData(key, name, state); // function to call api for more data
					return true;
				}
				else{
					vm.nothingFound = true;
					return false;
				}
			})
		}

		function getLocationData(locationKey, locationName, locationState){
			const locationObj = {'locationKey': locationKey, 'locationName': locationName};
			HomeFactory.addLocationWeather(locationObj).then(function(res){
				if(res){

					//turn off selection block
					vm.status = false;
					// makes sure no duplicate locations can be added
					let isLocationNew = true;
					for(let k = 0; k < vm.locations.length; k++){
						if(vm.locations[k].locationName === res.locationName){
							isLocationNew = false;
						}
					}
					// if locationNew is true, add it to loaction array
					if(isLocationNew){
						vm.locations.push(res);
						// handles icons by adding 0 before numbers less than 10
						if(res.tempature[0].WeatherIcon < 10){
							let iconNum = "0" + res.tempature[0].WeatherIcon;
							vm.locationIcon.push(iconNum)
						}
						else{
							vm.locationIcon.push(res.tempature[0].WeatherIcon);
						}

						//sets Map location
						let lat = res.geoLocation.GeoPosition.Latitude; let lng = res.geoLocation.GeoPosition.Longitude;
						vm.initMap(lat, lng)
					}

				}else{
					//no data found:: error
					return false;
				}

			})
		}

		vm.removeItem = function(itemIndex){
			// removes items
			vm.locations.splice(itemIndex, 1);

		}

		vm.changeTemp = function(){
			// logic for displaying metric vs imperial
			if (vm.temp === '1') { vm.metric = false; vm.imperial = true; return true; }
			if (vm.temp === '2') { vm.metric = true; vm.imperial = false; return true; }
			if (vm.temp === '3') { vm.metric = true; vm.imperial = true; return true; }

		}


		//MAP FUNCTIONALITY ..
		let map;

		vm.initMap = function initMap(lat, lng) {
			 let map = new google.maps.Map(document.getElementById('map'), {
			    center: {lat: lat , lng: lng},
			    zoom: 5,
			    scrollwheel: false
			  });
			 let latlng = new google.maps.LatLng(lat, lng);
			 let marker = new google.maps.Marker({
					position : {lat: lat, lng: lng },
					map : map
				});
		}

		vm.initMap(38.834068, -104.818902);


	}


})();
