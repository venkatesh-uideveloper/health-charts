angular.module('dashboardApp')
    .controller("fmosOAAController", [
        "$scope",
        "appAlertData",
        "lineChartData",
        function($scope, appAlertData, lineChartData) {
            $scope.data = appAlertData.data;
            $scope.$parent.dataFMOS = appAlertData.data;
            $scope.data = appAlertData.data;
            $scope.lineData = lineChartData;
            var graphData = [];
            $scope.serverColors = ["#fcab54", "#14b14b8", "#915eca", "#8c8867", "#4596e7"];

            if ($scope.data.length > 0) {
                var firstKey = Object.keys($scope.data[0])[2];
                $scope.selectedChartData = $scope.data[0][firstKey];
                $scope.$parent.dataFMOS[0][firstKey].selected = true;

                angular.forEach($scope.selectedChartData.InternalChartData, function(obj, key) {
                    obj.lineData = angular.copy(lineChartData);
                    obj.lineData.datasets = [];
                    var tempLineData = [];
                    var tempLineLabels = [];
                    angular.forEach(obj.hourlyGraph, function(valueHour, keyHour) {
                        var temp = {};
                        temp.lineName = keyHour;
                        temp.labels = [];
                        temp.data = [];
                        angular.forEach(valueHour, function(valueLabel, keyLabel) {
                            temp.labels.push(keyLabel);
                            temp.data.push(valueLabel);
                        });
                        tempLineLabels = temp.labels;
                        tempLineData.push(temp);
                    });

                    obj.lineData.labels = angular.copy(tempLineLabels);

                    for (var i in tempLineData) {
                        var tempIntData = angular.copy(lineChartData.datasets[0]);
                        tempIntData.data = angular.copy(tempLineData[i].data);
                        tempIntData.label = tempLineData[i].lineName;
                        tempIntData.borderColor = $scope.serverColors[i];
                        obj.lineData.datasets.push(tempIntData);
                    }

                });
            }
        }
    ]);
