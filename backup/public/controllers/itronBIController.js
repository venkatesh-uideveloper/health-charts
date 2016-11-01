angular.module('dashboardApp')
    .controller("itronBIController", ["$scope", "biData", function($scope, biData) {

        $scope.$parent.data = biData.data;

        $scope.data = biData.data;
        var firstKey;
        if ($scope.data.length > 0) {
            firstKey = Object.keys($scope.data[0])[1];
            angular.forEach($scope.data[0][firstKey].InternalChartData, function(obj, key) {
                obj.pointBackgroundColor = [{ "fill": false, "pointBackgroundColor": obj.pointBackgroundColor[0], "borderColor": "#666666", "pointRadius": "6.9" }]
            });
            $scope.selectedChartData = $scope.data[0][firstKey];
            $scope.selectedChartData.selected = true;
        }

    }]);
