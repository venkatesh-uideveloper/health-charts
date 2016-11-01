angular.module('dashboardApp')
    .directive('remedyBarChart', [function() {

        return {
            restrict: 'E',
            templateUrl: 'views/remedyTicketsView.html',
            link: function(scope, element, attrs) {

                var remedyChart = element.find("canvas");
                console.log(remedyChart);
                remedyChart[0].height = 90;

                var remedyChart = new Chart(remedyChart, {
                    type: 'bar',
                    data: scope.barChart,
                    options: {
                        scales: {
                            xAxes: [{
                                stacked: true,
                            }],
                            yAxes: [{
                                stacked: true
                            }]
                        }
                    }
                });
            }
        };
    }]);
