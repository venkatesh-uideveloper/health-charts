angular.module('dashboardApp')
    .controller("fmosController", [
        "$scope",
        "doughnut",
        "remedyTickets",
        "remedyLineChart",
        "$state",
        "remedyChart",
        "$window",
        "appAlertData",
        function($scope, doughnut, remedyTickets, remedyLineChart, $state, remedyChart, $window, appAlertData) {
            $scope.barChart = remedyChart;
            $scope.lineData = remedyLineChart;
            $scope.currentDate = date;
            $scope.calendarMonthDate = new Date();
            $scope.currentDate = new Date();
            $scope.dataFMOS = appAlertData.data;
            $scope.decrementArrow = true;
            $scope.incrementArrow = false;
            $scope.tabView = true;
            $scope.contentView = true;
            $scope.currentView = false;
            var count = 0;
            var date = new Date();
            var w = angular.element($window);

            if (w.width() < 769) {
                $scope.tabView = true;
                $scope.contentView = false;
                $scope.currentView = true;
            }

            $scope.$on('mobileViewBroad', function(event, data) {
                if (data.viewName === 'alert' ||
                    data.viewName === 'geograph' ||
                    data.viewName === 'other') {

                    $scope.tabView = data.tabView;
                    $scope.contentView = data.contentView;
                }
            });

            $scope.internalChartData = {
                "color": "rgb(94, 196, 26)",
                "total": "10",
                "processed": "100",
                "filesReceived": "Total Alerts"
            };

            $scope.changeCalendar = function(type) {
                var calendarMonthDate = new Date($scope.calendarMonthDate);
                if (type === 'increment' && count < 0) {
                    count++;
                    $scope.changeMonth(count, type, calendarMonthDate);
                    $scope.decrementArrow = true;
                } else if (type === 'decrement' && count > -3) {
                    count--;
                    $scope.changeMonth(count, type, calendarMonthDate);
                    $scope.incrementArrow = true;
                } else if (type === 'decrement') {
                    $scope.decrementArrow = false;
                } else if (type === 'increment') {
                    $scope.incrementArrow = false;
                }
            }

            $scope.changeMonth = function(count, type, calendarMonthDate) {
                if (count <= 1 && count >= -3) {
                    $scope.calendarMonthDate = type === 'increment' ? calendarMonthDate.setMonth(calendarMonthDate.getMonth() + 1) : calendarMonthDate.setMonth(calendarMonthDate.getMonth() - 1);
                    $scope.getCalendarDays();
                }
            }

            $scope.getCalendarDays = function() {
                $scope.calendarDates = [];
                var year = new Date($scope.calendarMonthDate).getFullYear();
                var month = Number(new Date($scope.calendarMonthDate).getMonth()) + 1;
                $scope.numberOfDays = new Date(year, month, 0).getDate();
                for (var i = 1; i <= $scope.numberOfDays; i++) {
                    $scope.calendarDates.push({ "date": i, "id": i });
                }
                for (var i = 1; i <= (32 - $scope.numberOfDays); i++) {
                    $scope.calendarDates.push({ "date": i, "id": i + $scope.numberOfDays });
                }
            }

            $scope.getCalendarDays();

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
                    $state.go("details.fmos.alert", {}, {
                        reload: "details.fmos.alert",
                        inherit: false
                    });
                    if ($scope.currentView) {
                        $scope.emitCurrentState('alert', true);
                    }
                } else if (index === 1) {
                    $state.go("details.fmos.geograph", {}, {
                        reload: "details.fmos.geograph",
                        inherit: false
                    });
                    if ($scope.currentView) {
                        $scope.emitCurrentState('geograph', true);
                    }
                } else if (index === 2) {
                    $state.go("details.fmos.other", {}, {
                        reload: "details.fmos.other",
                        inherit: false
                    });
                    if ($scope.currentView) {
                        $scope.emitCurrentState('other', true);
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
