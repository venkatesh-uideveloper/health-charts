angular.module('dashboardApp')
    .service("chartDataService", function($http) {
        this.getDoughnutData = function() {

            return $http({ method: 'GET', url: '/data/RemedyTickets.json' })
                .then(function(data) {
                    return data;
                });

        }
        this.getRemedyTickets = function() {

            return $http({ method: 'GET', url: '/data/RemedyTickets.json' })
                .then(function(data) {
                    return data;
                });

        }
        this.getAriData = function() {

            return $http({ method: 'GET', url: '/data/ARIData.json' })
                .then(function(data) {
                    return data;
                });

        }
        this.getBiData = function() {

            return $http({ method: 'GET', url: '/data/BIData.json' })
                .then(function(data) {
                    return data;
                });

        }
        this.getBeData = function() {

            return $http({ method: 'GET', url: '/data/BEData.json' })
                .then(function(data) {
                    return data;
                });

        }
        this.getAppAlertData = function() {

            return $http({ method: 'GET', url: '/data/ApplicationAlerts.json' })
                .then(function(data) {
                    return data;
                });

        }
        this.getRemedyChartData = function() {

            return $http({ method: 'GET', url: '/data/RemedyChart.json' })
                .then(function(data) {
                    return data.data;
                });

        }
        this.getRemedyLineChartData = function() {

            return $http({ method: 'GET', url: '/data/RemedyLineChart.json' })
                .then(function(data) {
                    return data.data;
                });
        }
        this.getRemedyAppDetails = function() {

            return $http({ method: 'GET', url: '/data/RemedyAppDetails.json' })
                .then(function(data) {
                    return data.data;
                });

        }
        this.getRemedyYTDTickets = function() {

            return $http({ method: 'GET', url: '/data/RemedyAppYTDTickets.json' })
                .then(function(data) {
                    return data.data;
                });

        }
    });
