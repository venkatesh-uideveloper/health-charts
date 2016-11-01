angular.module('dashboardApp')
    .directive('remedyAppBarChart', [function() {

        return {
            restrict: 'E',
            templateUrl: 'views/remedyAppBarView.html',
            transclude: true,
            link: function(scope, element, attrs) {
                scope.app;
                var remedyChart = element.find("canvas");
                console.log(remedyChart);
                remedyChart[0].width = 550;
                remedyChart[0].height = 250;

                var remedyChart = new Chart(remedyChart, {
                    type: 'bar',
                    data: scope.barChart,
                    options: {
                        onClick: function(evt) {
                            var activeElement = remedyChart.getElementAtEvent(evt);
                            //activeElement[0]._model.backgroundColor = 'rgb(220,20,60)';
                            scope.activeProcess = activeElement[0]._model;
                            scope.$emit('changeActiveProcess', scope.activeProcess);
                        },
                        title: {
                            display: true,
                            text: 'Tickets',
                            position: 'left',
                            fontSize: 12,
                            fontStyle: 'normal',
                            fontColor: '#ccc',
                            padding: -5
                        },
                        scales: {
                            xAxes: [{
                                stacked: true,
                                gridLines: {
                                    color: '#fff',
                                    offsetGridLines: true
                                },
                                ticks: {
                                    //beginAtZero: true,
                                    maxRotation: 0.1 // angle in degrees
                                }
                            }],
                            yAxes: [{
                                stacked: true,
                                gridLines: {
                                    borderDash: [5, 5],
                                    zeroLineColor: '#000',
                                    zeroLineWidth: 2,
                                    drawBorder: true
                                },
                                ticks: {
                                    min: 0,
                                    max: 1200,
                                    fixedStepSize: 200
                                }
                            }]
                        }
                    }
                });
            }
        };
    }]);
