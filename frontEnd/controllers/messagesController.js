(function() {
  "use strict";

  angular
      .module("awareApp")
      .controller("MessagesController", MessagesController);

  MessagesController.$inject = ["$state", "$http"];

  function MessagesController($state, $http) {
    var self = this;

  }

})();
