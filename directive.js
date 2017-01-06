angular.module('assessment')
    .directive('myProducts', () => {
        return {
            templateUrl: './views/product-tmpl.html',
            restrict: 'EA',
            scope: {
              title: '@'

            },
            link: function(scope, element, attributes) {
            
            }
        }
    })
