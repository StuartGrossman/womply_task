var myApp = angular.module('app', []);

//allows for inital html presets to persist

myApp.directive('ngInitial', function () {
return {
    restrict: 'A',
    controller: ['$scope', '$element', '$attrs', '$parse', function ($scope, $element, $attrs, $parse) {
        val = $attrs.sbInitial || $attrs.value || $element.val() || $element.text()
        getter = $parse($attrs.ngModel)
        setter = getter.assign
        setter($scope, val)
    }]
}});
