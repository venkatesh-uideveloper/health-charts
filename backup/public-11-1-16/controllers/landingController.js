angular.module('dashboardApp')
    .controller("landingController", ["$scope", "appData", function($scope, appData) {

        $scope.currentWeek = [];
        $scope.appData = appData.data;

        angular.forEach($scope.appData, function(aD) {
            aD.tickets = parseInt(aD.tickets) < 10 ? 0 + '' + aD.tickets : aD.tickets;
            aD.processes = parseInt(aD.processes) < 10 ? 0 + '' + aD.processes : aD.processes;
        });

        $scope.calendarMonthDate = new Date();
        var today = new Date();

        $scope.currentWeek[7] = new Date();

        for (i = 6; i >= 0; i--) {
            $scope.currentWeek[i] = today.setDate(today.getDate() - 1);
        }

        $scope.selectedDay = $scope.currentWeek[$scope.currentWeek.length - 1];

        $scope.selectDay = function(day) {
            // $scope.selectedDay = day;
            // if ($scope.landingPage) {
            //     $scope.setRecentTime();
            // } else {
            //     $scope.setDayTime()
            // }
        }

        $scope.setRecentTime = function() {
            $scope.currentTime = [];
            var now = new Date($scope.selectedDay);
            $scope.currentTime[7] = {};
            var colors = ["#da4d2f", "#b7c228", "#65cc20"];
            if (now.getDate() == new Date().getDate()) {
                $scope.currentTime[7].time = now.setMinutes(0);
            } else {
                $scope.currentTime[7].time = now.setHours(23);
                $scope.currentTime[7].time = now.setMinutes(0);
            }
            $scope.currentTime[7].color = colors[0];
            for (i = 6, j = 1; i >= 0; i--) {
                $scope.currentTime[i] = {};
                $scope.currentTime[i].time = now.setHours(now.getHours() - 1);
                $scope.currentTime[i].color = colors[j % 3];
                j++;
            }
        }

        $scope.setDayTime = function() {
            $scope.dayTime = [];
            var now = new Date($scope.selectedDay);
            var colors = ["#da4d2f", "#b7c228", "#65cc20"];
            $scope.dayTime[0] = {};
            $scope.dayTime[0].time = now.setHours(0, 0);
            $scope.dayTime[0].color = colors[0];
            for (i = 1; i < 24; i++) {
                if (now.setHours(now.getHours() + 1) > new Date().getTime()) {
                    break;
                } else {
                    $scope.dayTime[i] = {};
                    $scope.dayTime[i].time = now.setHours(now.getHours());
                    $scope.dayTime[i].color = colors[i % 3];
                }
            }
        }

        $scope.setRecentTime();
        $scope.setDayTime();

        $scope.changeMonth = function(type) {
            var monthDate = new Date($scope.selectedMonthDate);
            $scope.selectedMonthDate = type === 'increment' ? monthDate.setMonth(monthDate.getMonth() + 1) : monthDate.setMonth(monthDate.getMonth() - 1);
        }

        $scope.changeCalendar = function(type) {
            var calendarMonthDate = new Date($scope.calendarMonthDate);
            $scope.calendarMonthDate = type === 'increment' ? calendarMonthDate.setMonth(calendarMonthDate.getMonth() + 1) : calendarMonthDate.setMonth(calendarMonthDate.getMonth() - 1);
            $scope.getCalendarDays();
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
    }]);
