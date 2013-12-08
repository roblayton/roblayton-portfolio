angular.module( 'adcade.ui.fileInput', [] )

.directive( 'fileInput', function($parse) {
  return {
    restrict: 'A',
    link: function( scope, elem, attrs ) {

        var modelGet = $parse(attrs.fileInput);
        var modelSet = modelGet.assign;
        var onUpdate = $parse(attrs.onUpdate);
        console.log(elem, 'ELEM');
        console.log(onUpdate, 'onUpdate');
        
        var updateModel = function() {
            scope.$apply(function() {
                modelSet(scope, {file: elem[0].files[0], field: elem[0]});
                if (onUpdate) {
                    onUpdate(scope);
                }
            });
        };

        $(elem).on('change', updateModel);
    }
  };
})

;

