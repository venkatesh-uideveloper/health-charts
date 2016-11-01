angular.module('dashboardApp')
    .controller("itronController", [
        "$scope",
        "doughnut",
        "remedyTickets",
        "remedyChart",
        "$state",
        "$window",
        "ariData",
        function($scope, doughnut, remedyTickets, remedyChart, $state, $window, ariData) {

            $scope.$parent.selectedApp = $scope.appData[0];
            $scope.barChart = remedyChart;
            var w = angular.element($window);
            $scope.data = ariData.data;
            $scope.tabView = true;
            $scope.contentView = true;
            $scope.currentView = false;

            var w = angular.element($window);

            if (w.width() < 769) {
                $scope.tabView = true;
                $scope.contentView = false;
                $scope.currentView = true;
            }

            $scope.$on('mobileViewBroad', function(event, data) {
                if (data.viewName === 'ari' ||
                    data.viewName === 'be' ||
                    data.viewName === 'bi') {

                    $scope.tabView = data.tabView;
                    $scope.contentView = data.contentView;
                }
            });

            $scope.options = {
                scales: {
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'percentage'
                        },
                        ticks: {
                            suggestedMin: 0,
                            stepSize: 20,
                            max: 100,
                            min: 0,
                            beginAtZero: true
                        }
                    }]
                }
            }

            angular.forEach(remedyTickets.data, function(d) {
                if (d.doughnut) {
                    $scope.doughnut = {};
                    angular.forEach(d.doughnut, function(obj) {
                        angular.forEach(obj, function(value, key) {
                            if (!$scope.doughnut[key]) {
                                $scope.doughnut[key] = [];
                                $scope.doughnut[key].push(value);
                            } else {
                                $scope.doughnut[key].push(value);
                            }
                        });
                    })
                }
            });

            $scope.showDetails = function(index) {

                index = parseInt(index);
                if (index === 0) {
                    $state.go("details.itron.ari", {}, {
                        reload: "details.itron.ari",
                        inherit: false
                    });

                    if ($scope.currentView) {
                        $scope.emitCurrentState('ari', true);
                    }
                } else if (index === 1) {
                    $state.go("details.itron.bi", {}, {
                        reload: "details.itron.bi",
                        inherit: false
                    });
                    if ($scope.currentView) {
                        $scope.emitCurrentState('bi', true);
                    }
                } else if (index === 2) {
                    $state.go("details.itron.be", {}, {
                        reload: "details.itron.be",
                        inherit: false
                    });
                    if ($scope.currentView) {
                        $scope.emitCurrentState('be', true);
                    }
                }
            }

            $scope.emitCurrentState = function(viewName, type) {

                if (type) {
                    $scope.tabView = !$scope.tabView;
                    $scope.contentView = !$scope.contentView;
                }

                var state = {};
                state.tabView = !$scope.tabView;
                state.contentView = !$scope.contentView;
                state.viewName = viewName;

                $scope.$emit('mobileView', state);
            }

            if (!$scope.currentView) {
                $scope.showDetails(0);
            }
        }
    ]);
