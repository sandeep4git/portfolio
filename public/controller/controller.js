/**
 * Created by sandeeptc on 8/11/16.
 */


    var app=angular.module('photoApp',['ngRoute','ngMaterial','ngMessages','ngAnimate']);

            app.config(function($routeProvider){
                $routeProvider
                    .when("/home",{
                        templateUrl:"templates/home.html",
                        controller:"mainController",
                        caseInsensitiveMatch:true
                    })
                    .when("/me",{
                    templateUrl:"templates/me.html",
                    controller:"meController",
                    caseInsensitiveMatch:true
                    })

                    .when("/gallery",{
                        templateUrl:"templates/gallery.html",
                        controller:"mainController",
                        caseInsensitiveMatch:true
                    })

                    .when("/contact",{
                        templateUrl:"templates/contact.html",
                        controller:"contactController",
                        caseInsensitiveMatch:true
                    })
                    .when("/bookings",{
                        templateUrl:"templates/bookings.html",
                        controller:"mainController",
                        caseInsensitiveMatch:true
                    })
                    .when("/blog",{
                        templateUrl:"templates/blog.html",
                        controller:"mainController",
                        caseInsensitiveMatch:true
                    })
                    .when("/portfolio",{
                        templateUrl:"templates/portfolio.html",
                        controller:"portfolioController",
                        caseInsensitiveMatch:true
                    })
                    .when("/portraits",{
                        templateUrl:"templates/portraits.html",
                        controller:"galleryController",
                        caseInsensitiveMatch:true
                    })
                    .when("/sports",{
                        templateUrl:"templates/sports.html",
                        controller:"galleryController",
                        caseInsensitiveMatch:true
                    })
                    .when("/lifestyle",{
                        templateUrl:"templates/lifestyle.html",
                        controller:"galleryController",
                        caseInsensitiveMatch:true
                    })

                    .otherwise({
                        redirectTo:"/home"
                    });

            });


                app.controller('mainController',function($scope){

                });

                     app.controller('contactController', ['$scope','$http','$mdToast','$animate',
                        function($scope,$http,$mdToast,$animate){

                         $scope.myDate = new Date();

                         $scope.minDate = new Date(
                             $scope.myDate.getFullYear(),
                             $scope.myDate.getMonth(),
                             $scope.myDate.getDate());

                         $scope.maxDate = new Date(
                             $scope.myDate.getFullYear(),
                             $scope.myDate.getMonth() + 2,
                             $scope.myDate.getDate());


                         $scope.contact = {
                             name: 'Claire Luther',
                             email: '',
                             phone: '',
                             address: '',
                             myDate: '',
                             city:'St Louis',
                             state:'MO',
                             message: ''
                         };
                         $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
                         'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
                         'WY').split(' ').map(function(state) {
                             return {abbrev: state};
                         });

                            var last = {
                                bottom: false,
                                top: true,
                                left: false,
                                right: true
                            };
                            $scope.toastPosition = angular.extend({},last);

                            $scope.getToastPosition = function() {
                                return Object.keys($scope.toastPosition)
                                    .filter(function(pos) { return $scope.toastPosition[pos]; })
                                    .join(' ');
                            };

                            $scope.sendMail = function() {
                                console.log("Hello from the sendMail function");
                                console.log($scope.contact);

                                data=({
                                    contactName:$scope.contact.name,
                                    contactEmail:$scope.contact.email,
                                    contactPhone:$scope.contact.phone,
                                    contactMsg:$scope.contact.message

                                });

                                $http.post('/contact-form',data).
                                then(function(data,status) {

                                    $mdToast.show(
                                        $mdToast.simple()
                                            .textContent('Thanks! for your message')
                                            .position($scope.getToastPosition())
                                            .hideDelay(3000)
                                    );
                                })


                            };


                    }
                    ]);

                    app.controller('galleryController',function($scope){

                    });

                    app.controller('portfolioController',function($scope){

                    });
                    app.controller('meController',function($scope){

                    });





