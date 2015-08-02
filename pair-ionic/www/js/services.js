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

.factory('User',function (FIREBASE_URL,$firebase,$firebaseAuth) {
	var refAuth = new Firebase(FIREBASE_URL);
	return {
		firebaseAuth: function () {
			return $firebaseAuth(refAuth);
		}
	}
})

.factory('Yo',function (YO_API_TOKEN,$http) {

return {

	username_exists: function (username,callback) {
		$http(
		{
			url: 'https://api.justyo.co/check_username/',
			method:"GET",
			params:
			{
				api_token:YO_API_TOKEN,
				username: username
			}
		}
	).
	  success(function(data, status, headers, config) {
	  	callback(data.exists);
	  })
	},

	register: function (username,callback) {
		$http(
		{
			url:'https://api.justyo.co/accounts/',
			method:'POST',
			params:{
				api_token: YO_API_TOKEN,
				username: angular.uppercase(username)
				//TODO: callback URL
			}
		})
		.success(function (data,status,headers,config) {
			/* success data returned format
			api_token: "62f8d41f-3792-425f-8f24-bfb0c1c573b7"
			display_name: "HAPPYETHANYO"
			email: ""
			is_api_user: true
			is_subscribable: false
			is_verified: false
			tok: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IkhBUFBZRVRIQU5ZTyIsInVzZXJJRCI6bnVsbCwiaWQiOiI1NWJlM2NmZWZjYTYwYjAwMjdkZWQ4MzkiLCJjcmVhdGVkIjoxNDM4NTMwODE0ODQ5MTIxfQ.yRIAvJxjewXPz5aVuYZ_bDNZC3aNzY3o9PJ7hvP0o9g"
			type: "user"
			user_id: "55be3cfefca60b0027ded839"
			username: "HAPPYETHANYO"
			yo_count: 0
			*/

		})
		.error(function (data,status,headers,config) {
			console.log(data);
			console.log(status);
			console.log(headers);
			console.log(config);
		})

	}

}//end return


}) //end yo factory