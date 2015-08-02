angular.module('starter.services', [])
.factory('PopUp',function ($ionicPopup,$timeout) {

  return{

    showPopUp: function (popUpContent,callback) {
    	/*
      popUpContent
        tilte:
        template:
        timeout: in millisecs
      */
      var alertPopUp = $ionicPopup.alert({
        title: popUpContent.title,
        template: popUpContent.template,
        okType: popUpContent.okType
      });
      alertPopUp.then(function (res) {
        if(callback){
          callback();
        }
      });
      if(popUpContent.timeout){
        $timeout(function () {
          alertPopUp.close();
        },popUpContent.timeout)
      }
    }
  }

})

