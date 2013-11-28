# angular-beforeunload [![Build Status](https://travis-ci.org/gdi2290/angular-beforeunload.png?branch=master)](https://travis-ci.org/gdi2290/angular-beforeunload)
Confirm dialog pop up if they try and (or accidently click away from) the page.
```javascript
angular.module('YOUR_APP', [
  'angular-onbeforeunload'
])
  .controller('MainCtrl', function(onBeforeUnload) {
    // Bind a listener on your current $scope and save reference to it.
    var onbeforeunload = $scope.$on('$locationChangeStart', BeforeUnload.init('TOP_MESSAGE', 'BOTTOM_MESSAGE'))
    // In this controller the user will be prompted to
    // confirm their choice before they change their location.
    $scope.submitPage = function() {
      // If you invoking your reference then your listener becomes null.
      onbeforeunload();  
    };
    
  });
```
