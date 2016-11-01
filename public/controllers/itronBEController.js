angular.module('dashboardApp')
    .controller("itronBEController", ["$scope", "beData", function($scope, beData) {
        $scope.$parent.data = beData.data;
        $scope.data = beData.data;
        $scope.selectedChartData = $scope.data[0].BE;
        $scope.selectedChartData.selected = true;

        $scope.$on('mobileViewBroad', function(event, data) {
            if (data.viewName === 'be') {
                $scope.selectedChartData.selected = false;
            }
        });
    }]);
