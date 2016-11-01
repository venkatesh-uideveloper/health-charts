angular.module('dashboardApp')
    .config(["$stateProvider",
        "$urlRouterProvider",
        "ChartJsProvider",
        function($stateProvider, $urlRouterProvider, ChartJsProvider) {

            $urlRouterProvider.otherwise('/landingPage');
            Chart.defaults.global.elements.line.tension = 0;

            $stateProvider
                .state('landing', {
                    url: '/landingPage',
                    templateUrl: 'views/landingPageView.html',
                    controller: 'landingController',
                    resolve: {
                        appData: function(dashboardService) {
                            return dashboardService.getAppData();
                        }
                    }
                })
                .state('details', {
                    url: '/details/:id',
                    templateUrl: 'views/detailsView.html',
                    controller: 'detailsController',
                    resolve: {
                        appData: function(dashboardService) {
                            return dashboardService.getAppData();
                        }
                    }
                })
                .state('details.itron', {
                    templateUrl: 'views/itronTabView.html',
                    controller: 'itronController',
                    resolve: {
                        doughnut: function(chartDataService) {

                            return chartDataService.getDoughnutData();
                        },
                        remedyTickets: function(chartDataService) {

                            return chartDataService.getRemedyTickets();
                        },
                        remedyChart: function(chartDataService) {

                            return chartDataService.getRemedyChartData();
                        },
                        ariData: function(chartDataService) {

                            return chartDataService.getAriData();
                        }
                    }
                })
                .state('details.itron.ari', {
                    templateUrl: 'views/itronAriView.html',
                    controller: 'itronAriController',
                    resolve: {
                        ariData: function(chartDataService) {

                            return chartDataService.getAriData();
                        }

                    }

                })
                .state('details.itron.bi', {
                    templateUrl: 'views/itronAriView.html',
                    controller: 'itronBIController',
                    resolve: {
                        biData: function(chartDataService) {

                            return chartDataService.getBiData();
                        }

                    }

                })
                .state('details.itron.be', {
                    templateUrl: 'views/itronBeView.html',
                    controller: 'itronBEController',
                    resolve: {
                        beData: function(chartDataService) {

                            return chartDataService.getBeData();
                        }

                    }

                })
                .state('details.fmos', {
                    templateUrl: 'views/fmosTabView.html',
                    controller: 'fmosController',
                    resolve: {
                        selectedAppData: function(dashboardService, $stateParams) {
                            return dashboardService.getSelectAppData($stateParams.id);
                        },
                        doughnut: function(chartDataService) {

                            return chartDataService.getDoughnutData();
                        },
                        remedyTickets: function(chartDataService) {

                            return chartDataService.getRemedyTickets();
                        },
                        remedyChart: function(chartDataService) {

                            return chartDataService.getRemedyChartData();
                        },
                        remedyLineChart: function(chartDataService) {

                            return chartDataService.getRemedyLineChartData();
                        },
                        appAlertData: function(chartDataService) {

                            return chartDataService.getAppAlertData();
                        },

                    }
                })
                .state('details.fmos.alert', {
                    templateUrl: 'views/fmosAppAlertView.html',
                    controller: 'fmosAAController',
                    resolve: {
                        appAlertData: function(chartDataService) {

                            return chartDataService.getAppAlertData();
                        },
                        lineChartData: function(chartDataService) {

                            return chartDataService.getRemedyLineChartData();
                        }
                    }
                })
                .state('details.fmos.geograph', {
                    templateUrl: 'views/fmosGeoInfoView.html',
                    //templateUrl: 'views/fmosAppAlertView.html',
                    controller: 'fmosGIController',
                    resolve: {
                        appAlertData: function(chartDataService) {

                            return chartDataService.getAppAlertData();
                        },
                        lineChartData: function(chartDataService) {

                            return chartDataService.getRemedyLineChartData();
                        }
                    }
                })
                .state('details.fmos.other', {
                    //templateUrl: 'views/fmosOtherAppAlertView.html',
                    templateUrl: 'views/fmosAppAlertView.html',
                    controller: 'fmosOAAController',
                    resolve: {
                        appAlertData: function(chartDataService) {

                            return chartDataService.getAppAlertData();
                        },
                        lineChartData: function(chartDataService) {

                            return chartDataService.getRemedyLineChartData();
                        }
                    }
                })
                .state('details.remedy', {
                    templateUrl: 'views/remedyView.html',
                    controller: 'remedyController',
                    resolve: {
                        doughnut: function(chartDataService) {

                            return chartDataService.getDoughnutData();
                        },
                        remedyTickets: function(chartDataService) {

                            return chartDataService.getRemedyTickets();
                        },
                        remedyChart: function(chartDataService) {

                            return chartDataService.getRemedyChartData();
                        },
                    }
                });
        }
    ]);
