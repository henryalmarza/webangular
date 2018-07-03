var miAplicacion = angular.module('miApp', []);

    miAplicacion.controller('miControlador', function($scope, $http) {
    	$http.get('http://localhost:8080/api/bancos').
    	then(function(response) {
    		$scope.bancos = response.data;
    	});
    });