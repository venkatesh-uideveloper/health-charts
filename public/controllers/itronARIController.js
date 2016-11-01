angular.module('dashboardApp')
    .controller("itronAriController", ["$scope", "ariData", function($scope, ariData) {

        $scope.data = ariData.data;
        $scope.$parent.data = ariData.data;

        $scope.data = ariData.data;
        if ($scope.data.length > 0) {

            var firstKey = Object.keys($scope.data[0])[0];

            angular.forEach($scope.data[0][firstKey].InternalChartData, function(obj, key) {
                obj.pointBackgroundColor = [{ "fill": false, "pointBackgroundColor": obj.pointBackgroundColor[0], "borderColor": "#666666", "pointRadius": "6.9" }]
            });

            $scope.selectedChartData = $scope.data[0][firstKey];
            $scope.selectedChartData.selected = true;
        }

        $scope.$on('mobileViewBroad', function(event, data) {
            if (data.viewName === 'ari') {
                $scope.selectedChartData.selected = false;
            }
        });

        function getSlide(target, style) {
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
        addSlides($scope.slides, 'city', 2);
    }]);
