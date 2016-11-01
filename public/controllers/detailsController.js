angular.module('dashboardApp')
    .controller("detailsController", ["$scope",
        "appData",
        "$stateParams",
        "$state",
        function($scope, appData, $stateParams, $state) {

            $scope.appData = appData.data;
            $scope.mobileView;
            $scope.showDetails = function(index) {

                index = parseInt(index);
                $scope.selectedApp = appData.data[index];

                if (index === 0) {
                    $state.go("details.itron", {}, { reload: "details.itron", inherit: false });
                } else if (index === 1) {
                    $state.go("details.fmos", {}, { reload: "details.fmos", inherit: false });
                } else if (index === 2) {
                    $state.go("details.itron", {}, { reload: "details.itron", inherit: false });
                } else if (index === 3) {
                    $state.go("details.remedy", {}, { reload: "details.remedy", inherit: false });
                }
            };

            $scope.$on('mobileView', function(event, data) {
                $scope.mobileView = data;
            });

            $scope.showCategory = function() {

                if ($scope.mobileView) {
                    $scope.$broadcast('mobileViewBroad', $scope.mobileView);
                    $scope.mobileView = undefined;
                } else {
                    $state.go("landing");
                }
            }

            $scope.showDetails($stateParams.id);
        }
    ]);
