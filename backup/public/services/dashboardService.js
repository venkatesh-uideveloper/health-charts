angular.module('dashboardApp')
    .service("dashboardService", function($http) {
        this.getAppData = function() {

            return $http({ method: 'GET', url: '/data/AppData.json' })
                .then(function(data) {
                    return data;
                });

        }

        this.getSelectAppData = function(index) {

            index = parseInt(index);
            if (index === 0) {
                return $http({ method: 'GET', url: 'data/ARIData.json' })
                    .then(function(data) {
                        return data;
                    });
            } else if (index === 1) {
                return $http({ method: 'GET', url: 'data/ApplicationAlerts.json' })
                    .then(function(data) {
                        return data;
                    });
            } else if (index === 2) {
                return $http({ method: 'GET', url: 'data/ARIData.json' })
                    .then(function(data) {
                        return data;
                    });
            }
        }
    });
