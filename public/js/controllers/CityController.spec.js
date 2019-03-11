const angular = require('../../../bower_components/angular/angular.js')
var myApp = angular.module('app', []);
myApp.$inject = ['$window']

//allows for inital html presets to persist

myApp.directive('ngInitial', function () {
return {
    restrict: 'A',
    controller: ['$scope', '$element', '$attrs', '$parse', '$window', function ($scope, $element, $attrs, $parse) {
        val = $attrs.sbInitial || $attrs.value || $element.val() || $element.text()
        getter = $parse($attrs.ngModel)
        setter = getter.assign
        setter($scope, val)
    }]
}});
describe('myApp', function () {
    var scope,
    controller;
    beforeEach(function () {
        module('myApp');
    });

    describe('MyCtrl', function () {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('MyCtrl', {
                '$scope': scope
            });
        }));
        it('sets the name', function () {
            expect(scope.name).toBe('Superhero');
        });

        it('watches the name and updates the counter', function () {
            expect(scope.counter).toBe(0);
            scope.name = 'Batman';
            scope.$digest();
            expect(scope.counter).toBe(1);
        });
    });

    describe('CtrlHttp', function () {

        var $httpBackend,
            expectedUrl = '/someUrl?key1=value1',
            promise,
            successCallback,
            errorCallback,
            httpController;

        beforeEach(inject(function ($rootScope, $controller, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            scope = $rootScope.$new();
            successCallback = jasmine.createSpy();
            errorCallback = jasmine.createSpy();
            httpController = $controller('CtrlHttp', {
                '$scope': scope
            });
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('returns http requests successfully and resolves the promise', function () {
            var data = '{"translationKey":"translationValue"}';
            expect(httpController).toBeDefined();
            $httpBackend.expectGET(expectedUrl).respond(200, data);
            promise = scope.getHttp();
            promise.then(successCallback, errorCallback);

            $httpBackend.flush();

            expect(successCallback).toHaveBeenCalledWith(angular.fromJson(data));
            expect(errorCallback).not.toHaveBeenCalled();
        });

        it('returns http requests with an error and rejects the promise', function () {
            $httpBackend.expectGET(expectedUrl).respond(500, 'Oh no!!');
            promise = scope.getHttp();
            promise.then(successCallback, errorCallback);

            $httpBackend.flush();

            expect(successCallback).not.toHaveBeenCalled();
            expect(errorCallback).toHaveBeenCalled();
        });
    });

});

// --- Runner -------------------------
// (function () {
//     var jasmineEnv = jasmine.getEnv();
//     jasmineEnv.updateInterval = 1000;
//
//     var htmlReporter = new jasmine.HtmlReporter();
//
//     jasmineEnv.addReporter(htmlReporter);
//
//     jasmineEnv.specFilter = function (spec) {
//         return htmlReporter.specFilter(spec);
//     };
//
//     var currentWindowOnload = window.onload;
//
//     window.onload = function () {
//         if (currentWindowOnload) {
//             currentWindowOnload();
//         }
//         execJasmine();
//     };
//
//     function execJasmine() {
//         jasmineEnv.execute();
//     }
//
// })();
