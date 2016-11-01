angular.module('dashboardApp')
    .controller("remedyController", [
        "$scope",
        "remedyYTDTickets",
        "$state",
        "remedyChart",
        "$window",
        function($scope, remedyYTDTickets, $state, remedyChart, $window) {
            $scope.barChart = remedyChart;
            $scope.YTDApps = [{
                heading: 'YTD APPLICATION DETAILS',
                year: '2016',
                id: 'app-details'
            }, {
                heading: 'YTD APPLICATION DETAILS',
                year: '2017',
                id: 'app-details2'
            }]

            $scope.activeProcess = {
                label: ""
            };
            var processes = remedyYTDTickets[0].YTDAPPDETAILS.InternalChartData;
            $scope.processes = processes.filter(function(process) {
                return process.processName;
            });
            $scope.$on('changeActiveProcess', function(event, data) {
                $scope.activeProcess = data;
                $scope.processes = processes.filter(function(process) {
                    if (process.processName == data.label) {
                        $scope.activeProcess.data = process;
                        return true;
                    }
                });
                $scope.$apply();
            });
            /* $scope.previousYtd = function() {
                 angular.element(document.querySelector('.YTDAppBarGraph')).css('left', '104%');

             }
             $scope.nextYtd = function() {
                 angular.element(document.querySelector('.YTDAppBarGraph')).css('right', '104%');
                
             }*/
        }
    ]);
