(function(){

   'use strict'
    angular.module('jsonajaxcall',[])

    //afactory to consume webservices and return data to controllers.
    .factory('ajaxcallservice',['$http',function($http){
        return {
            getWishes : function(JSONpath){
                return  $http.get(JSONpath).then(function(response){ //wrap it inside another promise using then
                            console.log(response.data);
                            return response.data.photos;  //only return employees
                        });
            }
        }
    }])
    //define controller and inject ajaxcall service as dependency.
    .controller('happyController',['ajaxcallservice','$scope',function(ajaxcallservice,$scope){
        ajaxcallservice.getWishes('JSON/happy.json').then(function(response){
            $scope.pics = response; //Assign data received to $scope.employees
        });
        // $scope.toggle=function(){
        //     var event = angular.element( document.querySelector('.flipper'));
        //     console.log(event);
        //     event.addClass('flipped');
        //   }
    }])
    .controller('birthdayController',['ajaxcallservice','$scope',function(ajaxcallservice,$scope){
        ajaxcallservice.getWishes('JSON/birthday.json').then(function(response){
            $scope.pics = response; //Assign data received to $scope.employees
        });
        // $scope.toggle=function(){
        //     var event = angular.element( document.querySelector('.flipper'));
        //     console.log(event);
        //     event.addClass('flipped');
        //   }
    }])
    .controller('toController',['ajaxcallservice','$scope',function(ajaxcallservice,$scope){
        ajaxcallservice.getWishes('JSON/to.json').then(function(response){
            $scope.pics = response; //Assign data received to $scope.employees
        });
        // $scope.toggle=function(){
        //     var event = angular.element( document.querySelector('.flipper'));
        //     console.log(event);
        //     event.addClass('flipped');
        //   }
    }])

    .directive('ajaxCallDirective',['$timeout',function($timeout){
        return{
            restrict: 'E',
            scope:{

              pic:'='
            },
            templateUrl:'Templates/flipCards.html',
            link:function($scope,ele,attr){
              ele.on("mouseover",function(){
                  var event = angular.element( document.querySelectorAll('.flipper'));
                  event.addClass('flipped');
                  var bodytag = angular.element( document.querySelector('.bodytag'));
                  bodytag.addClass('bodytagapplied');

                });
              ele.on("click",function(){
                var imagetag = angular.element( document.querySelector('.cont'));
                console.log(imagetag);
                imagetag.addClass('vedapicapplied');
              })
            }
        }
    }])

})();
