angular.module('dashboardApp')
    .directive('btnAutoCollapse', [function() {

        return {
            restrict: 'A',
            scope: {},
            link: link
        };

        function link(scope, element, attrs) {

            element.on('click', function(event) {

                $(".navbar-collapse.in").collapse('hide');
            });
        }
    }])
    .directive('setBgcolor', [function() {

        return {
            restrict: 'A',
            priority: 1,
            scope: {
                color: '=',
                max: '='
            },
            link: function(scope, element, attrs) {

                if (scope.max > 0) {
                    element.find('.progress-bar').css('background-color', scope.color);
                }
            }
        }
    }])
    .directive('fillStyle', [function() {
        return {
            restrict: 'A',
            priority: 1,
            scope: {
                color: '=',
                max: '='
            },
            link: function(scope, element, attrs) {

                if (scope.max > 0) {
                    element.find('.alerts-total').css('background-color', scope.color);
                }
            }
        }
    }])
    .directive('heightalignment', [function() {

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.css('height', $('.carousel-inner > .item').height());
            }
        }
    }]);
