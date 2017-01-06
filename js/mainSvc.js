angular.module('assessment')
  .service('mainSvc', function ($http) {

    this.getProducts = () => {

        return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/products'
      })
        .then((res) => {
          return res
        }, ((err) => {return err}))
    }


    this.furtherTest = 'furtherTesting'
  })
