angular.module('dashboardApp')
    .directive('remedyLineChart', ['$timeout', function($timeout) {

        return {
            restrict: 'E',
            templateUrl: 'views/lineChartView.html',
            scope: {
                lineData: '=',
                active: '='
            },
            replace: true,
            require: '^?slide',
            link: function(scope, element, attrs, carouselCtrl) {

                scope.id = new Date().getTime();
                scope.act = attrs.active;
                scope.$watch('active', function(newVal) {

                    scope.isActive = newVal;
                    if (newVal) {

                        $timeout(function() {
                            var rlineChart = element.find("canvas");
                            rlineChart[0].width = 300;
                            rlineChart[0].height = 90;
                            var lineChart = new Chart(rlineChart, {
                                type: 'line',
                                data: scope.lineData,
                                options: {
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                min: 0,
                                                max: 20,
                                                beginAtZero: false,
                                                stepSize: 4
                                            }
                                        }]
                                    }
                                }
                            });
                        });
                    }
                });

                $timeout(function() {

                    var rlineChart = element.find("canvas");
                    rlineChart[0].width = 300;
                    //rlineChart[0].height = 160; 
                    var lineChart = new Chart(rlineChart, {
                        type: 'line',
                        data: scope.lineData,
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        min: 0,
                                        max: 20,
                                        beginAtZero: false,
                                        stepSize: 4
                                    }
                                }]
                            }
                        }
                    });
                });
            }
        };
    }]);
