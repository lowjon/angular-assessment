angular.module('assessment')
  .controller('mainCtrl', function ($scope, $http, mainSvc) {



    mainSvc.getProducts().then( data => {
      console.log(data);
      $scope.products = data.data
    })
    // $http.get("http://practiceapi.devmounta.in/products")
    //   .success(function (data) {
    //     console.log(data);
    //     $scope.products = data
    //   })


    // $scope.products = mainSvc.getProducts
    $scope.test = mainSvc.furtherTest
})
