angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

})

.controller('ChatsCtrl', function($scope) {

})

.controller('AccountCtrl', function($scope) {

})

.controller('LoginCtrl',function ($scope,PopUp,$state) {

  $scope.login = function (form,user) {

      if(!form.$valid){
        PopUp.showPopUp({
           title: 'Invalid Email/Password',
           template: 'Please check and try again',
           okType: 'button-large button-assertive'
        },null);
      }
      else
      {
        //form valid attemps login
        console.log(user);
        $state.go('tab.dash');
      }
  };


});
