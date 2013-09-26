# angular-onbeforeunload
Confirm dialog pop up if they try and (or accidently click away from) the page.
```javascript
angular.module('YOUR_APP', ['angular-onbeforeunload'])
  .controller('MainCtrl', function(onBeforeUnload) {
    // add a listener to the current scope
    var onbeforeunload = $scope.$on('$locationChangeStart', onBeforeUnload.init('TOP_MESSAGE', 'BOTTOM_MESSAGE'))
    
    $scope.submitPage = function() {
      // cancel the listener for onbeforeunload
      onbeforeunload();  
    };
    
  });
```
