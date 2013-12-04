# angular-beforeunload [![Build Status](https://travis-ci.org/gdi2290/angular-beforeunload.png?branch=master)](https://travis-ci.org/gdi2290/angular-beforeunload)
Confirm dialog pop up if they try and (or accidently click away from) the page.

You can download angular-beforeunload by:

* (prefered) Using bower and running `bower install angular-beforeunload --save`
* Using npm and running `npm install angular-beforeunload --save`
* Downloading it manually by clicking [here to download development unminified version](https://raw.github.com/gdi2290/angular-beforeunload/master/angular-beforeunload.js)


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
