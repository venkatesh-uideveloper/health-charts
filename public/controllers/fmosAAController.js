angular.module('dashboardApp')
    .controller("fmosAAController", [
        "$scope",
        "appAlertData",
        "lineChartData",
        "$state",
        "$window",
        function($scope, appAlertData, lineChartData, $state, $window) {
            $scope.$parent.dataFMOS = angular.copy(appAlertData.data);
            $scope.data = appAlertData.data;

            $scope.lineData = lineChartData;
            var graphData = [];
            var firstKey;
            console.log($scope.data);
            console.log($scope.$parent.data);
            $scope.serverColors = ["#fcab54", "#14b14b8", "#915eca", "#8c8867", "#4596e7"];

            if ($scope.data.length > 0) {
                firstKey = Object.keys($scope.data[0])[0];
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

            $scope.$on('mobileViewBroad', function(event, data) {
                if (data.viewName === 'alert') {
                    $scope.$parent.dataFMOS[0][firstKey].selected = false;
                }
            });

            /*function getSlide(target, style) {
                var i = target.length;
                return {
                    id: (i + 1),
                    label: 'slide #' + (i + 1),
                    odd: (i % 2 === 0)
                };
            }

            function addSlide(target, style) {
                target.push(getSlide(target, style));
            };

            $scope.carouselIndex = 0;
            $scope.carouselIndex1 = 0;
            $scope.carouselIndex2 = 0;

            function addSlides(target, style, qty) {
                for (var i=0; i < qty; i++) {
                    addSlide(target, style);
                }
            }

            $scope.slides = [];
            addSlides($scope.slides, 'city', 2);*/
             $scope.slides = [1,0];
        }
    ]);
