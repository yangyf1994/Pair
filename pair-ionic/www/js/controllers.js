angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

})

.controller('ChatsCtrl', function($scope) {

})

.controller('AccountCtrl', function($scope) {

})

.controller('LoginCtrl',function ($scope,PopUp,$state,$ionicModal,Yo) {

//Login Section
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
//Register Section
  $ionicModal.fromTemplateUrl('templates/register.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  $scope.createUser = function (user) {

     Yo.username_exists(user.yoName,function (exists) {
       if(exists){
          PopUp.showPopUp({
            title: 'Warning',
            template:'Yo username already taken. Please try again',
            okType:'button-large button-assertive'
          },function () {
            user.yoName ='';
          });
        }
      else
        {
          Yo.register(user.yoName,function () {

          })
        }
     });


  }

});
