angular.module('dashboardApp')
    .directive('headerContent', [function() {

        return {
            restrict: 'E',
            templateUrl: 'views/headerView.html'
        };
    }]);
