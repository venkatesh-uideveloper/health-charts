angular.module('dashboardApp')
    .controller("itronAriController", ["$scope", "ariData", function($scope, ariData) {

        $scope.data = ariData.data;
        $scope.$parent.data = ariData.data;

        $scope.data = ariData.data;
        if ($scope.data.length > 0) {

            var firstKey = Object.keys($scope.data[0])[0];

            angular.forEach($scope.data[0][firstKey].InternalChartData, function(obj, key) {
                obj.pointBackgroundColor = [{ "fill": false, "pointBackgroundColor": obj.pointBackgroundColor[0], "borderColor": "#666666", "pointRadius": "6.9" }]
            });

            $scope.selectedChartData = $scope.data[0][firstKey];
            $scope.selectedChartData.selected = true;
        }
    }]);
