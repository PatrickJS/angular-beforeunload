'use strict';

angular.module('angular-beforeunload', [])
  .factory('BeforeUnload', ['$window',
    function($window) {
      var leavingPageText = "You'll lose your changes if you leave";
      var leavingPageText2 = "Are you sure you want to leave this page?";
      
      function init(top, bottom) {
        leavingPageText = top || leavingPageText;
        leavingPageText2 = bottom || leavingPageText2;
        
        $window.onbeforeunload = function(e){
          return leavingPageText;
        }
        
        return function(event, next, current) {
          if (!confirm(leavingPageText + "\n\n"+leavingPageText2)) {
            event.preventDefault();
          } else {
            $window.onbeforeunload = null;
          } 
        };
      }
      
      return {
        init: init
      }

    }
  ]);
