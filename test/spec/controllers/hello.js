'use strict';

describe('Controller: HelloCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanTutorialApp'));

  var HelloCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HelloCtrl = $controller('HelloCtrl', {
      $scope: scope
    });
  }));

  it('should modify the name attr to world', function () {
    scope.name = 'world';
    expect(scope.name).toBe('world');
  });
});
