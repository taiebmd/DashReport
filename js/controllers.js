var obj;
var out;
var baseUrl = 'http://localhost/mByblos/ajaxCrosser.php?url=http://localhost:8088/byblos/';
/*var baseUrl = 'http://192.168.8.133:8088/byblos/';*/
angular.module('app.controllers', ['ionic','base64'])
/////////////////////////////////////////////////////////////
    ////////////**********************left***********************************

    .controller('MenuController', function ($scope,$base64,$cookies,$state, $location,essaiServ, MenuService) {
        $scope.list = MenuService.all();
        $scope.aller = function (page) {
            $location.url('/' + page);
        };
        $scope.essai=essaiServ.get();
        $scope.emptyCookie=function()
        {

            delete $cookies ['login'];
            delete $cookies ['password'];
            //$cookieStore.remove('password');
            $state.go('Outh');

        }
        $scope.goTo = function (page) {
            $scope.sideMenuController.toggleLeft();
            $location.url('/Main/' + page);
        };

    })

    .controller('MenuAdmController', function ($scope,$base64,$cookies,$state, $location, MenuAdmService) {
        $scope.list = MenuAdmService.all();
        $scope.aller = function (page) {
            $location.url('/' + page);
        };
        $scope.exit=function()
        {
            $state.go('Outh');
        }

        $scope.goTo = function (page) {
            $scope.sideMenuController.toggleLeft();
            $location.url('/MainAdm/' + page);
        };

    })

    .controller('ResourcesAdminCtrl', function ($scope, $location, homeAdminService) {
        $scope.navTitle = "mByblos Admin";
        //$scope.navTitle = "Qualifications";
        $scope.customers = homeAdminService.all();

        $scope.leftButtons = [
            {
                type: 'button-icon icon ion-navicon',
                tap: function (e) {
                    $scope.sideMenuController.toggleLeft();
                }
            }
        ];

        $scope.rightButtons = [];
    })
    .controller('testController', function ($scope, $location, homeAdminService) {
        $scope.navTitle = "Qualifications";
        $scope.customers= homeAdminService.all();
        $scope.aller = function (page) {
            $location.url('/MainAdm/' + page);
        };

        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/MainAdm/ResourcesAdmin');
                }
            }
        ];


    })
    .controller('SocieteController', function ($scope, $location, MenuAdmService) {
        $scope.navTitle = "Qualifications";
        $scope.customers= MenuAdmService.all();
        $scope.aller = function (page) {
            $location.url('/MainAdm/' + page);
        };

        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/MainAdm/ResourcesAdmin');
                }
            }
        ];


    })
    .controller('ResourcesController', function ($scope, $location, homeService) {
        $scope.navTitle = "Dash Report";
        //$scope.navTitle = "Qualifications";
        $scope.customers = homeService.all();
        $scope.leftButtons = [
            {
                type: 'button-icon icon ion-navicon',
                tap: function (e) {
                    $scope.sideMenuController.toggleLeft();
                }
            }
        ];

        $scope.rightButtons = [];
    })

    .controller('AutreCtrl', function ($scope) {
        $scope.navTitle = "Dash Report";

        $scope.leftButtons = [
            {
                type: 'button-icon icon ion-navicon',
                tap: function (e) {
                    $scope.sideMenuController.toggleLeft();
                }
            }
        ];

        $scope.rightButtons = [];
    })
    .controller('ProspectsController', function ($scope) {
        $scope.navTitle = "Dash Report";

        $scope.leftButtons = [
            {
                type: 'button-icon icon ion-navicon',
                tap: function (e) {
                    $scope.sideMenuController.toggleLeft();
                }
            }
        ];

        $scope.rightButtons = [];
    })
    .controller('MissionsController', function ($scope,$http) {
        $scope.navTitle = "Dash Report";
       /* for (var i=0; i<authorities.length; i++) {
            if (authorities[i] == 'ROLE_PLANNING_ACCESS') {

            }
        }*/
        $scope.allBu = [
            {

                id: 3,
                libelle: "Energie",
                abreviation: "NRJ",
                responsableId: 199,
                responsableLabel: "GIFFARD François",
                order: 0,
                label: "Energie"
            },
            {

                id: 2,
                libelle: "Finance",
                abreviation: "FIN",
                responsableId: 362,
                responsableLabel: "BIACHE Jean Luc",
                order: 1,
                label: "Finance"
            }];
        /*$http({
            url: baseUrl + 'graniteamf/chiffreAffaire/findAllBu',
            method: 'GET',
            headers: { 'login' :  localStorage.getItem('login'),
                'password':  localStorage.getItem('password')
            }
        }).success(function(data) {

                //              $scope.$apply();
            })
            .error(function() {
                alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

            });*/
        $scope.buChanged = function () {
            if ($scope.selectedBu.label == "Finance")
            {
                $scope.Clients = [

                        {firstAndLastName : "AKIK Yassine"},
                        {firstAndLastName : "BEAUDREY Clément"},
                    {firstAndLastName : "BEJANI Bertrand"} ,
                    { firstAndLastName : "BENSLIMANE Amira"},
                    {firstAndLastName : "BERNARD Marc-antoine"},
                    {firstAndLastName : "BROUTIN David"},
                    {firstAndLastName : "CASSIN Bertrand" },
                    { firstAndLastName : "CAULLET Jerome" },
                    { firstAndLastName : "COMMAULT Benjamin"},
                    {firstAndLastName : "DALLE Sandrine" },
                    {firstAndLastName : "DE JACQUELOT DU BOISROUVRAY Gaetan" },
                    {firstAndLastName : "DUMITRE SCU Eugene"},
                    {firstAndLastName : "DUNY Pierre" },
                    { firstAndLastName : "FERCHICHI Mokhtar"},
                    { firstAndLastName : "FRESLON Nicolas"},
                    {firstAndLastName : "GLENZA Skander"},
                    { firstAndLastName : "GRUNER Hans"},
                    {firstAndLastName : "GZARA Hamdi" },
                    {firstAndLastName : "IBN CHARAA llhame" } ,
                    {firstAndLastName : "ISAYCHIKOVA Marina"},
                    { firstAndLastName : "JEAN-FRANCOIS Fabrice" }  ,
                  /*  {firstAndLastName : "JULIEN DE POMMEROL Catherin"},*/
                    {firstAndLastName : "KIDAH Bouchra"},
                    {firstAndLastName : "MABROUK Marjane"},
                    {firstAndLastName : "MADUREIRA Antonio"},
                    {firstAndLastName : "MONNIER David"},
                    {firstAndLastName : "PETIT Samuel"},
                    {firstAndLastName : "POUPON Olivier"},
                    {firstAndLastName : "RAMDANE Smahane"},
                    {firstAndLastName : "RENAULT Anaïs"} ,
                    {firstAndLastName : "SELLAMI Mohamed nabil"},
                    {firstAndLastName : "SOHO Bienvenu"},
                    {firstAndLastName : "TRIGANO Fabien"},
                    {firstAndLastName : "TSAALBI Azedine"},
                    {firstAndLastName : "TSAFACK LEKEUNDJI Billy"},
                    {firstAndLastName : "ZRIBI Karim"}



                ]
            }

            else if ($scope.selectedBu.label == "Energie")
                {
                    $scope.Clients = [

                    {firstAndLastName : "ALJANE Nabil"},
                    {firstAndLastName : "BEN RABAH Walid"},
                    { firstAndLastName : "BERRADA Maha"},
                    {firstAndLastName : "CHARBONNEAU Guillaume"},
                    {firstAndLastName : "DOMINGE Antoine"},
                    {firstAndLastName : "DUCRAY Thibault" },
                    { firstAndLastName : "GENTIL Frédéric" },
                    { firstAndLastName : "GIFFARD François"},
                    {firstAndLastName : "LAFOSSE MARIN Benjamin" },
                    {firstAndLastName : "LE MENUET DE LA JUGANNIÈRE Jean luc" },
                    {firstAndLastName : "LECOQ-VALLON Benoît"},
                    {firstAndLastName : "LOISY Vincent" },
                    { firstAndLastName : "MERKLEN Carole"},
                    { firstAndLastName : "NIDAYE Djibril"},
                    {firstAndLastName : "NOWAK Pierre-Vincent"},
                    { firstAndLastName : "PIC André Dominique"},
                    {firstAndLastName : "SZWEDOWSKI Julien" },
                    {firstAndLastName : "TANEL Vincent" } ,
                    {firstAndLastName : "VERDIER-TOUREAU Pierre Sébastien"}
                ]
                }
            else if ($scope.selectedBu.label == "Secteur public")
            {
                $scope.Clients = [

                    {firstAndLastName : "GENTIL Frédéric"}
                ]
            }

            else if ($scope.selectedBu.label == "Services")
            {
                $scope.Clients = [

                    {firstAndLastName : "BENAMOU Eric"},
                    {firstAndLastName : "DALLE Sandrine"}
                ]
            }
            else if ($scope.selectedBu.label == "Télécom")
            {
                $scope.Clients = [

                    {firstAndLastName : "BARANGER Jacques"},
                    {firstAndLastName : "DELBECQUE Jérôme"},
                    {firstAndLastName : "LE CORVAISIER Erwan"}
                ]
            }

        }
        $scope.showConfirm = function () {
            if ($scope.selectedBu.label == "Energie")

            {  if ($scope.SelectedManag == undefined) {

                 $scope.tasks = {
                 data:[
                     {id:1, text:"GENET François", start_date:"15-01-2014", duration:12,
                     progress:0.13, open: false},
                     {id:6, text:"BOUSRIH Ali",    start_date:"01-01-2014", duration:12,
                         progress:0.5, open: false},
                     {id:2, text:"JOMAA Inès",    start_date:"01-01-2014", duration:12, order:10,
                         progress:0.08, open: false},
                     {id:5, text:"VERLUT Wandrille",    start_date:"01-01-2014", duration:12, order:20,
                         progress:0.25, open: false},
                     {id:6, text:"BEN BOUZID Med Amine",    start_date:"01-01-2014", duration:12,
                         progress:0.5, open: false},
                     {id:5, text:"LOISY Vincent",    start_date:"01-01-2014", duration:12, order:20,
                         progress:0.5, open: false},
                     {id:6, text:"Jean Baptiste",    start_date:"01-01-2014", duration:12,
                         progress:0.5, open: false},
                     {id:6, text:"GRAHAM FON SECA Kenny",    start_date:"01-01-2014", duration:12,
                         progress:0.18, open: false},
                     {id:6, text:"ZARRAD Aymen",    start_date:"01-01-2014", duration:12,
                         progress:0.25, open: false},
                     {id:6, text:"GANCI Salvatore",    start_date:"03-01-2014", duration:12,
                         progress:0.5, open: false},
                     {id:6, text:"FORTIN Mathias",    start_date:"01-01-2014", duration:12,
                         progress:0.25, open: false},
                     {id:6, text:"ZINE ELABIDINE Abir",    start_date:"01-01-2014", duration:12,
                         progress:0.5, open: false},
                     {id:7, text:"MAKHLOUF Hichem",    start_date:"01-01-2014", duration:1,
                         progress:1, open: true},
                     {id:8, text:"MAKHLOUF Hichem",    start_date:"04-02-2014", duration:12,
                         progress:0.15, parent:7},
                     {id:6, text:"COUTIER Sebastien",    start_date:"03-01-2014", duration:12,
                         progress:0.42, open: false},
                     {id:6, text:"ABDELHEDI Fahmi",    start_date:"01-01-2014", duration:12,
                         progress:0.18, open: false},
                     {id:6, text:"ACHOURI Mourad",    start_date:"01-01-2014", duration:12,
                         progress:0.18, open: false},

                     {id:6, text:"GALLERI Xavier",    start_date:"01-01-2014", duration:12,
                         progress:0.5, open: false},
                     {id:6, text:"LIESSE",    start_date:"01-01-2014", duration:12,
                         progress:0.03, open: false},
                     {id:6, text:"CHACHAY Goery",    start_date:"01-01-2014", duration:12,
                         progress:0.25, open: false},
                     {id:6, text:"QUARRE Frédéric",    start_date:"03-01-2014", duration:12,
                         progress:0.5, open: false},
                     {id:6, text:"SEURAT Nicolas",    start_date:"01-01-2014", duration:12,
                         progress:0.18, open: false},
                     {id:13, text:"FREDJ Salem",    start_date:"01-01-2014", duration:1,
                         progress:1, open: true},
                     {id:14, text:"FREDJ Salem",    start_date:"07-02-2014", duration:12,
                         progress:0.15, parent:13},
                     {id:6, text:"LECENE Benjamin",    start_date:"03-01-2014", duration:12,
                             progress:0.5, open: false},

                    {id:6, text:"GALON Boris",    start_date:"03-01-2014", duration:12,
                             progress:0.8, open: false},



                     {id:9, text:"Pierre Réni", start_date:"01-01-2014", duration:2,
                         progress:0.6, open: true},
                     {id:10, text:"Pierre Réni", start_date:"15-02-2014", duration:12,
                         progress:0.4, parent :9},


                     {id:6, text:"BECKER Jonathan",    start_date:"01-01-2014", duration:12,
                         progress:0.5, open: false},


                     {id:6, text:"RENARD Emmanuel",    start_date:"01-01-2014", duration:12,
                         progress:0.5, open: false},

                     {id:6, text:"LAIFIA Ghassen",    start_date:"07-01-2014", duration:12,
                         progress:0.58, open: false},
                     {id:6, text:"BOU SNINA Hichem",    start_date:"01-01-2014", duration:12,
                         progress:0.5, open: false},
                     {id:6, text:"AQUILAR Axel",    start_date:"03-01-2014", duration:12,
                         progress:0.22, open: false},
                     {id:11, text:"MARZIN Grégory",    start_date:"01-01-2014", duration:1,
                         progress:1, open: true},
                     {id:12, text:"MARZIN Grégory",    start_date:"03-02-2014", duration:12,
                         progress:0.33, parent:11},
                     {id:3, text:"LAHMOURI Hajar",    start_date:"01-01-2014", duration:1, order:20,
                         progress:1, open: true},
                     {id:4, text:"LAHMOURI Hajar",    start_date:"04-02-2014", duration:12, order:20,
                         progress:0.41, parent:3},
                 {id:5, text:"PHOU TIE Tsin Alandre",    start_date:"12-01-2014", duration:12, order:20,
                 progress:0.5, open: false},
                 {id:6, text:"THABET Malek",    start_date:"07-01-2014", duration:12,
                 progress:0.5, open: false},


                 {id:6, text:"CARDINAL Marie",    start_date:"07-01-2014", duration:12,
                 progress:0.4, open: false},


                 {id:6, text:"BOUHLILA Salma",    start_date:"01-01-2014", duration:12,
                 progress:0.5, open: false},
                 {id:6, text:"JERROUNDI Nora",    start_date:"01-01-2014", duration:12,
                 progress:0.5, open: false},

                 {id:6, text:"LAMMAR-PORROTTE Syndzly",    start_date:"01-01-2014", duration:12,
                 progress:0.5, open: false},
                 {id:6, text:"LECOQ-VALLON Benoit",    start_date:"07-01-2014", duration:12,
                 progress:0.4, open: false},
                 {id:6, text:"OUAZZANY Jade",    start_date:"01-01-2014", duration:12,
                 progress:0.5, open: false},



                 {id:6, text:"GNICHI Amina",    start_date:"01-01-2014", duration:12,
                 progress:0.42, open: false},

                 {id:6, text:"DELISLE Antoine",    start_date:"03-01-2014", duration:12,
                 progress:0.58, open: false},
                 {id:6, text:"AYRAULT DE SAINT-HENIS Pierre",    start_date:"03-01-2014", duration:12,
                 progress:0.58, open: false},


                 {id:6, text:"MANENT ST Emanuel",    start_date:"01-01-2014", duration:12,
                 progress:0.5, open: false},

                 {id:6, text:"VARDON Didier",    start_date:"01-01-2014", duration:12,
                 progress:0.18, open: false},
                 {id:6, text:"PIC André Dominique",    start_date:"01-01-2014", duration:12,
                 progress:0.5, open: false},
                 {id:6, text:"STEFANI Charles-Louis",    start_date:"01-01-2014", duration:12,
                 progress:0.25, open: false},

                 {id:6, text:"CABALLO Marion", start_date:"01-01-2014", duration:12,
                 progress:0.18, open: false},

                 {id:6, text:"ROUXEL Romain",    start_date:"01-01-2014", duration:12,
                 progress:0.18, open: false},

                 {id:15, text:"JEAN Luc",    start_date:"01-01-2014", duration:12,
                 progress:0.01, open: false},
                 {id:16, text:"JEAN Luc",    start_date:"11-01-2014", duration:12,
                 progress:0.5, parent:15},
                 {id:6, text:"AMMAR Rami",    start_date:"01-01-2014", duration:12,
                 progress:0.18, open: false},
                 {id:6, text:"BRIFFAUT Nicolas",    start_date:"01-01-2014", duration:12,
                 progress:0.25, open: false},
                 {id:6, text:"JEAN philippe",    start_date:"01-01-2014", duration:12,
                 progress:0.18, open: false},


                 {id:6, text:"ACOULON Aude",    start_date:"01-01-2014", duration:12,
                 progress:0.18, open: false},
                 {id:6, text:"KOUAWO Ayèlé",    start_date:"01-01-2014", duration:12,
                 progress:0.18, open: false},

                 {id:6, text:"BEN MANSOUR Amine",    start_date:"01-01-2014", duration:12,
                 progress:0.08, open: false},
                 {id:6, text:"OROL Marjolaine",    start_date:"01-01-2014", duration:12,
                 progress:0.25, open: false},


                 {id:6, text:"FEKIR Lahouari",    start_date:"01-01-2014", duration:12,
                 progress:0.25, open: false},

                 {id:6, text:"GETTI Didier",    start_date:"01-01-2014", duration:12,
                 progress:0.18, open: false},


                 {id:6, text:"MERZAQ Houssam",    start_date:"01-01-2014", duration:12,
                 progress:0.25, open: false},
                 {id:6, text:"ITE Emanuel",    start_date:"01-01-2014", duration:12,
                 progress:0.25, open: false},
                 {id:6, text:"KHALDI Mansour",    start_date:"01-01-2014", duration:12,
                 progress:0.08, open: false},
                 {id:6, text:"LUCCHINI Jason",    start_date:"01-01-2014", duration:12,
                 progress:0.5, open: false},
                 {id:6, text:"GASSOUMA Nizar",    start_date:"01-01-2014", duration:12,
                 progress:0.25, open: false},
                 {id:6, text:"DUFRENOY Hugo",    start_date:"01-01-2014", duration:12,
                 progress:0.5, open: false},
                 {id:6, text:"GUEMOUNI Fahd",    start_date:"01-01-2014", duration:12,
                 progress:0.25, open: false},
                 {id:6, text:"COUTURIER Julien",    start_date:"01-01-2014", duration:12,
                 progress:0.5, open: false},
                 {id:6, text:"BASTIEN Nicolas",    start_date:"12-01-2014", duration:12,
                 progress:0.25, open: false},
                 {id:17, text:"OLIVA Fabrice",    start_date:"01-01-2014", duration:12,
                 progress:0.08, open: true},
                 {id:18, text:"OLIVA Fabrice",    start_date:"04-02-2014", duration:12,
                 progress:0.13, parent: 17},
                 {id:6, text:"HAMIDOU Bochra",    start_date:"01-01-2014", duration:12,
                 progress:0.18, open: false}

                 ]
                 }
            }

                if ($scope.SelectedManag.firstAndLastName == "ALJANE Nabil")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"HMIDA Montassar", start_date:"01-01-2014", duration:12,
                                progress:0.17, open: false}
                             ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "BEN RABAH Walid")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"PASQUET Alexandre", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false}
                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "BERRADA Maha")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"GRAHAM FON SECA Kenny", start_date:"01-01-2014", duration:12,
                                progress:0.17, open: false},
                            {id:1, text:"ACOULON Aude", start_date:"03-01-2014", duration:12,
                                progress:0.16, open: false},
                            {id:1, text:"CALLEGARI Vincent", start_date:"07-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"THABET Malek", start_date:"07-01-2014", duration:12,
                                progress:0.5, open: false},

                            {id:1, text:"KHALDI Mansour", start_date:"0-01-2014", duration:12,
                                progress:0.1, open: false},

                            {id:1, text:"HMIDOU Bochra", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:1, text:"MAKSSOUD Abdel rahman", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false}

                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "CHARBONNEAU Guillaume")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"GOBIN Damien", start_date:"01-01-2014", duration:3,
                                progress:1, open: true},
                            {id:2, text:"GOBIN Damien", start_date:"18-04-2014", duration:9,
                                progress:0, parent: 1}
                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "DOMINGE Antoine")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"MAKHLOUF Hichem", start_date:"01-01-2014", duration:1,
                                progress:1, open: true},
                            {id:2, text:"MAKHLOUF Hichem", start_date:"03-02-2014", duration:11,
                                progress:0.179, parent: 1},
                            {id:2, text:"STEFANI Charles-louis", start_date:"01-01-2014", duration:12,
                                progress:0.259, open: false},
                            {id:2, text:"MERZAQ Houssam", start_date:"01-01-2014", duration:12,
                                progress:0.259, open: false},
                            {id:2, text:"GUENNOUNI Fahd", start_date:"01-01-2014", duration:12,
                                progress:0.259, open: false},
                            {id:2, text:"KARAMA Adama", start_date:"03-01-2014", duration:12,
                                progress:0.249, open: false}
                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "DUCRAY Thibault")
                {
                    $scope.tasks = {
                        data:[

                            {id:2, text:"BERRADA Maha", start_date:"01-01-2014", duration:1,
                                progress:0.97, open: true},
                            {id:2, text:"BERRADA Maha", start_date:"01-02-2014", duration:1,
                                progress:0.97, parent: 2},
                            {id:2, text:"BERRADA Maha", start_date:"01-03-2014", duration:1,
                                progress:0.97, parent: 2},
                            {id:2, text:"BERRADA Maha", start_date:"01-04-2014", duration:1,
                                progress:0.97, parent: 2},
                            {id:2, text:"BERRADA Maha", start_date:"01-05-2014", duration:1,
                                progress:0.97, parent: 2},
                            {id:2, text:"BERRADA Maha", start_date:"01-06-2014", duration:7,
                                progress:0.14, parent: 2},
                            {id:1, text:"Pasquet Alexandre", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"SERRUQUES Thomas", start_date:"01-01-2014", duration:12,
                                progress:0.42, open: false},
                            {id:2, text:"BEN HAMADI Iyadh", start_date:"01-01-2014", duration:12,
                                progress:0.42, open: false},
                            {id:2, text:"JOMAA Inès", start_date:"01-01-2014", duration:12,
                                progress:0.08, open: false},
                            {id:3, text:"FREDJ Salem", start_date:"01-01-2014", duration:1,
                                progress:1, open: true},
                            {id:4, text:"FREDJ Salem", start_date:"10-02-2014", duration:11,
                                progress:0.15, open: 3},
                            {id:5, text:"STEFANI Charles-louis", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:5, text:"DOMINGIE Antoine", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:5, text:"GRANADOS Frederic", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false}





                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "GENTIL Frédéric")
                {
                    $scope.tasks = {
                        data:[

                            {id:2, text:"SEURAT Nicolas", start_date:"01-01-2014", duration:12,
                                progress:0.17, open:false},
                            {id:1, text:"RENARD Emanuel", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"GALON Boris", start_date:"04-01-2014", duration:12,
                                progress:0.49, open: false},
                            {id:2, text:"RIGAL Olivier", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"GHAMGUI Bassem", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"TICHKIEWITCH Erwan", start_date:"01-01-2014", duration:0,
                                progress:0, open: false},
                            {id:2, text:"FERMANDEZ André", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"BOUADJADJA Abassi", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"QUARRE Fréderic", start_date:"04-01-2014", duration:12,
                                progress:0.49, open: false},
                            {id:2, text:"AZEGROUZ Asma", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"BCHIR Hosni", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"ROUXEL Romain", start_date:"01-01-2014", duration:12,
                                progress:0.17, open: false},
                            {id:2, text:"DE CASTRO BENTO Marina", start_date:"01-01-2014", duration:12,
                                progress:0.17, open: false},
                            {id:2, text:"JACQUES Amna", start_date:"04-01-2014", duration:12,
                                progress:0.49, open: false},
                            {id:2, text:"HMIDA Montassar", start_date:"01-01-2014", duration:12,
                                progress:0.17, open: false},
                            {id:2, text:"WARLIN Wilfrid", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"ADJADJ Amel", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"CHERKI Laetitia", start_date:"01-01-2014", duration:12,
                                progress:0.17, open: false}

                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "GIFFARD François")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"MAKHLOUF Hichem", start_date:"01-01-2014", duration:1,
                                progress:1, open: true},
                            {id:2, text:"MAKHLOUF Hichem", start_date:"04-02-2014", duration:11,
                                progress:0.17, parent:1},
                            {id:2, text:"DRIER DE LAPORTE Marie", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:3, text:"PIERRE Rémi", start_date:"01-01-2014", duration:2,
                                progress:0.7, open: true},
                            {id:4, text:"PIERRE Rémi", start_date:"17-02-2014", duration:12,
                                progress:0.5, parent: 3},
                            {id:2, text:"ABICHOU Nabil", start_date:"17-01-2014", duration:12,
                                progress:0.02, open: false},
                            {id:2, text:"WEISS Julien", start_date:"01-01-2014", duration:12,
                                progress:0.257, open: false},
                            {id:2, text:"NOWAK Pierre-vincent", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"ATTIGNON Yao Edem", start_date:"01-01-2014", duration:12,
                                progress:0.257, open: false},
                            {id:2, text:"PORTIN Mathias", start_date:"01-01-2014", duration:12,
                                progress:0.257, open: false},
                            {id:2, text:"LEROUX Benoit", start_date:"01-03-2014", duration:10,
                                progress:0, open: false},
                            {id:2, text:"Jean Marc", start_date:"01-01-2014", duration:12,
                                progress:0.65, open: false},
                            {id:2, text:"KARAMA  Adama", start_date:"07-01-2014", duration:12,
                                progress:0.24, open: false},
                            {id:2, text:"CARBONELLI Damien", start_date:"01-01-2014", duration:12,
                                progress:0.257, open: false},
                            {id:6, text:"MERKLEN Carole", start_date:"01-01-2014", duration:12,
                                progress:0.257, open: false},
                            {id:2, text:"ROUXEL Romain", start_date:"01-01-2014", duration:12,
                                progress:0.257, open: false},
                            {id:2, text:"DOMINGIE Anbine", start_date:"01-01-2014", duration:12,
                                progress:0.257, open: false},
                            {id:2, text:"SICART Elsa", start_date:"01-01-2014", duration:12,
                                progress:0.257, open: false}

                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "LAFOSSE MARIN Benjamin")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"VERLUT Wandrille", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:1, text:"BEN BOUZID MED Amine", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"ZINE ELABIDINE Abir", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"ABDELHEDI Fahmi", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:1, text:"LABORIER Guillaume", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"BOURSIER Romain", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"LUCCHINI Jason", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"BOU SNINA Hichem", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"AGUILAR Axel", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"MARZINI Grégory", start_date:"01-01-2014", duration:12,
                                progress:0.42, open: false},
                            {id:1, text:"SAINT-HENIS Pierre", start_date:"07-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"GNICHI Amina", start_date:"01-01-2014", duration:12,
                                progress:0.42, open: false},
                            {id:1, text:"PUJOL Benjamin", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"CAPO-CHICHI Cédric", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"AFRITE Hakim", start_date:"07-01-2014", duration:12,
                                progress:0.42, open: false},
                            {id:1, text:"POULAIN Clément", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"GANCI Salvatore", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"ZARRAD Aymen", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:1, text:"COUTURIER Julien", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"LECOQ-VALLON Benoit", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"Syndzyla ", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"PHOU Tie Tsin Alexandre", start_date:"15-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"BECKER Jonathan", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"LAIFIA Ghassen", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"MAKSSOUD Abdel rahmen", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:1, text:"TCHEUFFA Olga", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:5, text:"CHAMBELLAN Cyril", start_date:"07-01-2014", duration:1,
                                progress:0.99, open: true},
                            {id:6, text:"CHAMBELLAN Cyril", start_date:"03-02-2014", duration:11,
                                progress:0.5, parent:5},
                            {id:1, text:"CARBONELLI Damien", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},

                            {id:1, text:"KENJE Maya", start_date:"01-01-2014", duration:12,
                                progress:5, open: false}




                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "LE MENUET DE LA JUGANNIÈRE Jean luc")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"ACHOURI Mourad", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"DRIER DE LA PORTE Marie", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"OUAZZANY Jade", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"MANENT ST Emmanuel", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"GASSOUMA Nizar", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:2, text:"PIERRE Rémi", start_date:"01-01-2014", duration:2,
                                progress:0.7, open: true},
                            {id:3, text:"PIERRE Rémi", start_date:"15-02-2014", duration:12,
                                progress:0.3, parent: 2},
                            {id:1, text:"ITIE Emmanuel", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:1, text:"BOURREAU Mathieu", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"YAKHLEF Ahmed", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"GODEFROY Emilie", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},

                            {id:1, text:"AKOUZ Malek", start_date:"01-01-2014", duration:6,
                                progress:0.5, open: false},
                            {id:1, text:"PASQUET Alexandre", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"KHAROUB Najib", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},

                            {id:4, text:"FREDJ Salem", start_date:"01-01-2014", duration:1,
                                progress:1, open: true},
                            {id:5, text:"FREDJ Salem", start_date:"09-02-2014", duration:12,
                                progress:0.14, parent: 4},
                            {id:4, text:"COUTURIER Julien", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"THABET Malek", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},

                            {id:4, text:"DIOUF SIga", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:4, text:"KHAIRALLAH Mariem", start_date:"04-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:4, text:"DAURA Philippe", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:4, text:"KARRAY Amine", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},

                            {id:4, text:"GRANADOS Frederic", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:4, text:"HAINAULT Benjamin", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false}



                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "LECOQ-VALLON Benoît")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"PUJOL Benjamin", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"STEFANI Charles-Louis", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:1, text:"MERZAQ Houssam", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false}
                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "LOISY Vincent")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"BERNARD Jean-Baptiste", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"JERROUNDI Nora", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"AYRAULT DE SAINT-HENIS Pierre", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"BOU SRIH Ali", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"MESSAADI Farah", start_date:"01-01-2014", duration:1,
                                progress:1, open: true},
                            {id:3, text:"MESSAADI Farah", start_date:"06-02-2014", duration:3,
                                progress:0.95, parent: 2},
                            {id:4, text:"MESSAADI Farah", start_date:"15-05-2014", duration:8,
                                progress:0.068, parent: 2},


                            {id:1, text:"DUFRENOY Hugo", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"BOUHLILA Salma", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},

                            {id:6, text:"ILEANA Lidia", start_date:"01-01-2014", duration:2,
                                progress:1, open: true},
                            {id:7, text:"ILEANA Lidia", start_date:"26-06-2014", duration:10,
                                progress:0.01, parent: 6},
                            {id:4, text:"CHARTON Geoffrey", start_date:"04-01-2014", duration:12,
                                progress:0.5, open: false}

                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "MERKLEN Carole")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"OLIVA Fabrice", start_date:"01-01-2014", duration:1,
                                progress:1, open: true},
                            {id:2, text:"OLIVA Fabrice", start_date:"04-02-2014", duration:11,
                                progress:0.17, parent: 1},
                            {id:1, text:"NGUYEN Denis", start_date:"23-01-2014", duration:12,
                                progress:0.19, open: false},
                            {id:1, text:"MAFHOUM Karim", start_date:"01-01-2014", duration:12,
                                progress:0.08, open: false}
                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "NIDAYE Djibril")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"GRAHAM FON SECA Kenny", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:1, text:"VARDON Didier", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:1, text:"ACOULON Aude", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:2, text:"RENARD Emmanuel", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"CALLEGARI Vincent", start_date:"04-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:4, text:"BERRADA Maha", start_date:"01-01-2014", duration:1,
                                progress:0.96, open: true},
                            {id:3, text:"BERRADA Maha", start_date:"01-02-2014", duration:1,
                                progress:0.96, parent: 4},
                            {id:1, text:"BERRADA Maha", start_date:"01-03-2014", duration:1,
                                progress:0.96, parent: 4},
                            {id:1, text:"BERRADA Maha", start_date:"01-04-2014", duration:1,
                                progress:0.96, parent: 4},
                            {id:1, text:"BERRADA Maha", start_date:"01-05-2014", duration:1,
                                progress:0.96, parent: 4},
                            {id:1, text:"BERRADA Maha", start_date:"01-06-2014", duration:7,
                                progress:0.15, parent: 4},
                            {id:2, text:"FERMANDEZ André", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"QUARRE Frédéric", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"AZEGROUZ Asma", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"BCHIR Hosni", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"ROUXEL Romain", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:1, text:"KHALDI Mansour", start_date:"01-01-2014", duration:12,
                                progress:0.08, open: false},
                            {id:1, text:"HMIDOU Bouchra", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:1, text:"MAKSSOUD Abdel rahman", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:2, text:"DE CASTRO BENTO Marina", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:2, text:"JACQUES Anna", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"HMIDA Montassar", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:1, text:"VARLIN Wifrid", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"ADJADJ Amel", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false}



                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "NOWAK Pierre-Vincent")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"JEEOUNDI Nora", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: true},
                            {id:2, text:"SAKKA KOUIDI Walid", start_date:"01-02-2014", duration:12,
                                progress:0.5, parent: 1}
                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "PIC André Dominique")
                {
                    $scope.tasks = {
                        data:[
                            {id:7, text:"COUTIER Sébastien", start_date:"03-02-2014", duration:5,
                                progress:0.99, open: false},
                            {id:1, text:"BOURSIER Romain", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"BELMONTE Pierre", start_date:"01-01-2014", duration:5,
                                progress:1, open: false},
                            {id:1, text:"BAUDOIN Olivier", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"LAHMOURI Hajar", start_date:"01-01-2014", duration:1,
                                progress:1, open: true},
                            {id:2, text:"LAHMOURI Hajar", start_date:"03-02-2014", duration:11,
                                progress:0.45, parent: 1},
                            {id:6, text:"LECENE Benjamin", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:3, text:"MARZIN Grégory", start_date:"01-01-2014", duration:1,
                                progress:1, open: true},
                            {id:4, text:"MARZIN Grégory", start_date:"03-02-2014", duration:11,
                                progress:0.45, parent: 3},
                            {id:1, text:"GNICHI Amina", start_date:"01-01-2014", duration:5,
                                progress:1, open: false},
                            {id:1, text:"BERTIN Carine", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"QUENOY Laurent", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"LAMAR-POIRROITTE Syndzla", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"PHOU Tie Tsin Alexandre", start_date:"14-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"DELISLE Antoine", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"KENJE Brice", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"SICART Elsa", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},

                            {id:1, text:"AUROY Brice", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"CARBONELLI Damien", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false}
                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "TANEL Vincent")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"OUAZZANY Jade", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: true}
                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "SZWEDOWSKI Julien")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"Liesse", start_date:"01-01-2014", duration:12,
                                progress:0.03, open: false},
                            {id:1, text:"BRIFFAUT Nicolas", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:1, text:"Krystèle", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:1, text:"OUAZZANY Jade", start_date:"01-01-2014", duration:12,
                                progress:0.43, open: false},
                            {id:1, text:"BEN MANSOUR Amine", start_date:"01-01-2014", duration:12,
                                progress:0.08, open: false},
                            {id:1, text:"CARDINAL Marie", start_date:"03-01-2014", duration:12,
                                progress:0.42, open: false},
                            {id:1, text:"NGUYEN TRONG Luong", start_date:"01-01-2014", duration:12,
                                progress:0.35, open: false},
                            {id:1, text:"BERTIN Carine", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"BAKHTI MARRAKCHI Yassine", start_date:"01-01-2014", duration:12,
                                progress:0.3, open: false},
                            {id:1, text:"BEN ELKADI Zakariae", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"VALDOVINOS-VAQUETTE Beatriz", start_date:"01-01-2014", duration:12,
                                progress:0.43, open: false},
                            {id:1, text:"LE MERDY Jean philippe", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:1, text:"ORIOL Majolaine", start_date:"03-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:1, text:"RADUCANOU Philippe", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"HMIDA Montassar", start_date:"03-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:1, text:"GOBIN Damien", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:1, text:"LEROY Benjamin", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:1, text:"LOUBARIS Manal", start_date:"01-01-2014", duration:0,
                                progress:0, open: false}

















                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "VERDIER-TOUREAU Pierre Sébastien")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"VERLUT Wandrille", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:1, text:"DRIER DE LAFORTE Marie", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"QUENOY Laurent", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:1, text:"LECOQ-VALLON Benoit", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"CHAMBELLAN Cyril", start_date:"03-01-2014", duration:1,
                                progress:0.96, open: true},
                            {id:3, text:"CHAMBELLAN Cyril", start_date:"03-02-2014", duration:12,
                                progress:0.41, parent: 2}
                        ]
                    }
                }
            }

            else if ($scope.selectedBu.label == "Finance")
            {
                if ($scope.SelectedManag == undefined) {

                        $scope.tasks = {
                            data:[
                                {id:13, text:"TRIGANO Fabien",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:6, text:"CSORBA Ester",    start_date:"01-01-2014", duration:12,
                                    progress:1, open:false},
                                {id:14, text:"CHAKER Dorra",    start_date:"03-01-2014", duration:12,
                                    progress:0.99, open:false},
                                {id:6, text:"HADDAJI Haykel",    start_date:"01-01-2014", duration:12,
                                    progress:0.96, open: false},
                                {id:6, text:"BEN NASR Emna",    start_date:"01-01-2014", duration:12,
                                    progress:0.25, open: false},
                                {id:6, text:"LAUTIER Simon",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:6, text:"AMANI Leila",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:7, text:"POUPON Olivier",    start_date:"03-01-2014", duration:12,
                                    progress:0.99, open: false},
                                {id:6, text:"CHIKHI Mohamed Karim",    start_date:"03-01-2014", duration:8,
                                    progress:0.9, open: false},
                                {id:6, text:"EL BAKKOURI Imane",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:6, text:"HABASSI Seif eddine",    start_date:"01-01-2014", duration:7,
                                    progress:1, open: false},
                                {id:8, text:"JIANG Zhongchao",    start_date:"01-01-2014", duration:1,
                                    progress:0.4, open:false},
                                {id:6, text:"FADHLI Nabil",    start_date:"01-01-2014", duration:12,
                                    progress:0.8, open: false},
                                {id:6, text:"BELFDIL Radouane",    start_date:"01-01-2014", duration:12,
                                    progress:0.25, open: false},
                                {id:6, text:"BEN AHMED Ghazy",    start_date:"01-01-2014", duration:12,
                                    progress:0.03, open: false},
                                {id:6, text:"JLOULI Mohamed Salah ",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:6, text:"KIDAH Bouchra",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:11, text:"SELLAMI MOhamed nabil",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: true},
                                {id:6, text:"EL BAZ Adil",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:12, text:"CHIBO Meryem",    start_date:"03-01-2014", duration:12,
                                    progress:0.25, open:false},
                                {id:6, text:"KARADJA Zoubida",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:6, text:"TERKOUZI Ouafa",    start_date:"04-01-2014", duration:12,
                                    progress:0.99, open: false},
                                {id:6, text:"PATEL Salim",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:4, text:"RADI Imad",    start_date:"01-01-2014", duration:12, order:20,
                                    progress:1, open: false},
                                {id:3, text:"EIDELWEIN David",    start_date:"01-01-2014", duration:12, order:20,
                                    progress:1, open: true},
                                {id:9, text:"NGUYEN Luong viet",    start_date:"01-01-2014", duration:1, order:20,
                                    progress:1, open: true},
                                {id:10, text:"NGUYEN Luong viet",    start_date:"14-02-2014", duration:12,
                                    progress:0.62, parent: 9},
                                {id:6, text:"DALLE Sabrine",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:5, text:"ZHANG Jiaqi",    start_date:"01-01-2014", duration:12, order:20,
                                    progress:1, open: false},
                                {id:2, text:"DUNY Pierre",    start_date:"01-01-2014", duration:12, order:12,
                                    progress:1, open: false},
                                {id:1, text:"SENOUCI Hicham-amin", start_date:"01-01-2014", duration:12,
                                    progress:0.84, open: false},
                                {id:6, text:"ACHKAR Nayla",    start_date:"23-01-2014", duration:12,
                                    progress:0.4, open: false},
                                {id:6, text:"DISSEM Samy",    start_date:"01-01-2014", duration:12,
                                    progress:0.7, open: false},
                                {id:6, text:"FRESLON Nicolas",    start_date:"01-01-2014", duration:8,
                                    progress:1, open: false},
                                {id:12, text:"BEN ABDA Bochra",    start_date:"01-01-2014", duration:1,
                                    progress:1, open: true},
                                {id:13, text:"BEN ABDA Bochra",    start_date:"10-02-2014", duration:11,
                                    progress:1, parent: 12},
                                {id:6, text:"SHIMI Zakaria",    start_date:"01-01-2014", duration:12,
                                    progress:0.25, open: false},
                                {id:6, text:"BENOUFELLA Said",    start_date:"01-01-2014", duration:12,
                                    progress:0.67, open: false},
                                {id:6, text:"BOUSSEBAA Salma",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:6, text:"NJETEIN Mbaiornom",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:6, text:"RAYANE Chandar",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:6, text:"JAOUA Rym",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:10, text:"FARHAT Suzanne", start_date:"01-02-2014", duration:12,
                                    progress:0.08, open :false},
                                {id:6, text:"LELOUP Julien",    start_date:"01-01-2014", duration:12,
                                    progress:0.6, open: false},
                                {id:6, text:"FERCHICHI Mokhtar ",    start_date:"01-01-2014", duration:12,
                                    progress:0.6, open: false},
                                {id:6, text:"DONICA Ion",    start_date:"03-01-2014", duration:12,
                                    progress:0.6, open: false},
                                {id:6, text:"GOSSELIN Karelle",    start_date:"01-01-2014", duration:12,
                                    progress:0.5, open: false},
                                {id:6, text:"BOHI Nawal",    start_date:"01-01-2014", duration:7,
                                    progress:1, open: false},
                                {id:6, text:"TOUATI Yassine",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:6, text:"HANGUIR Lamiae",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:6, text:"NDONG Moustapha",    start_date:"01-01-2014", duration:12,
                                    progress:0.18, open: false},
                                {id:6, text:"DOMERGE Damien",    start_date:"01-01-2014", duration:12,
                                    progress:0.5, open: false},
                                {id:6, text:"BURG Philippe",    start_date:"01-01-2014", duration:12,
                                    progress:0.25, open: false},
                                {id:6, text:"CHEIKH MOUHAMEDOU Raghya",    start_date:"03-01-2014", duration:12,
                                    progress:0.99, open: false},
                                {id:16, text:"MOHAMED SALEH Cheikh-brahim",    start_date:"01-01-2014", duration:12,
                                    progress:0.5, open:false},
                                {id:6, text:"LIU Xuyao",    start_date:"01-01-2014", duration:9,
                                    progress:0.95, open: false},
                                {id:6, text:"EMIRI Albiona",    start_date:"03-01-2014", duration:12,
                                    progress:0.99, open: false},
                                {id:6, text:"BIDE Esther",    start_date:"03-01-2014", duration:12,
                                    progress:0.99, open: false},
                                {id:6, text:"MONNIER David",    start_date:"03-01-2014", duration:12,
                                    progress:0.4, open: false},
                                {id:6, text:"NASSIR Taha",    start_date:"01-01-2014", duration:12,
                                    progress:0.08, open: false},
                                {id:6, text:"AIT MOKHTAR Yasid", start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:6, text:"BENZENATI Safy",    start_date:"01-01-2014", duration:12,
                                    progress:0.18, open: false},
                                {id:6, text:"CAULLET Jerome",    start_date:"03-01-2014", duration:12,
                                    progress:0.018, open: false},
                                {id:6, text:"NGUYEN Tuan",    start_date:"01-01-2014", duration:12,
                                    progress:0.12, open: false},
                                {id:6, text:"INTWALI Victor",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:6, text:"BOADA Benoit",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:15, text:"JOUBERT Joannice",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:18, text:"PHOW Veng-hong",    start_date:"01-01-2014", duration:12,
                                    progress:0.25, open: false},
                                {id:6, text:"AQUILAR Axel",    start_date:"03-01-2014", duration:12,
                                    progress:0.25, open: false},
                                {id:9, text:"TICHKIEWITCH Erwan", start_date:"01-01-2014", duration:12,
                                    progress:1, open: true},
                                {id:6, text:"TEIXEIRA Michel",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:6, text:"SOHO Bienvenu",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:6, text:"FRAGASSI Fabien",    start_date:"01-01-2014", duration:8,
                                    progress:0.95, open: false},
                                {id:6, text:"CHOUCHI Ali",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:6, text:"KAMMOUNI Amal",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:17, text:"REINHARD Gautier st",    start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},

                                {id:6, text:"OPPENHEIM David",    start_date:"01-01-2014", duration:12,
                                    progress:0.67, open: false}

                            ]
                        }

                  }
                if ($scope.SelectedManag.firstAndLastName == "TRIGANO Fabien")
                {
                    $scope.tasks = {
                        data:[
                            {id:2, text:"EL BAKKOURI Imane", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:1, text:"EL BAZ Adil", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"HANGUIR Lamiae", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"NDONG Moustapha", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"AIT MOKHTAR Yasid", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:1, text:"INTWALI Victor", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:1, text:"FONTANA Clément", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"OUHAJOU Yoann", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"OUHAJOU Habib", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}





                        ]
                    }
                }


                if ($scope.SelectedManag.firstAndLastName == "TSAALBI Azedine")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"DUNY Pierre", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"MOUHAMED SALEH Cheikh-brahim", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:2, text:"BERTHELOT Cedric", start_date:"03-01-2014", duration:12,
                                progress:0.04, open: false},
                            {id:2, text:"TAMARELLE Xavier", start_date:"01-01-2014", duration:12,
                                progress:0.35, open: false},
                            {id:2, text:"GROUX Emmanuel", start_date:"03-01-2014", duration:12,
                                progress:0.6, open: false},
                            {id:2, text:"FAYACHE Dora", start_date:"03-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:2, text:"DELPLANQUE Stephane", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}



                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "TSAFACK LEKEUNDJI Billy")
                {
                    $scope.tasks = {
                        data:[
                            {id:2, text:"JLOULI Mohamed salah", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:1, text:"NGUYEN Luong viet", start_date:"01-01-2014", duration:12,
                                progress:0.08, open: true},
                            {id:2, text:"NGUYEN Luong viet", start_date:"01-03-2014", duration:12,
                                progress:0.66, parent: 1},
                            {id:2, text:"GASSOUMA Nizar", start_date:"01-01-2014", duration:9,
                                progress:0, open: false},
                            {id:4, text:"BEN ABDA Bochra", start_date:"01-01-2014", duration:12,
                                progress:0.08, open: true},
                            {id:5, text:"BEN ABDA Bochra", start_date:"07-02-2014", duration:12,
                                progress:0.66, parent: 4},

                            {id:2, text:"BIDE Esther", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"CHOUCHI Ali", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"SOHO Bienvenu", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"DIEYE Ibrahima", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"MOUMEN Karima", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}

                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "ZRIBI Karim")
                {
                    $scope.tasks = {
                        data:[
                            {id:4, text:"BEN NASR Emna", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:2, text:"JIANG Zhongchao", start_date:"01-01-2014", duration:12,
                                progress:0.03, open: false},
                            {id:2, text:"KARADJA Zoubida", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"TERKOUZI Ouafa", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"JAOUA Rym", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"FERCHICHI Mokhtar", start_date:"01-01-2014", duration:12,
                                progress:0.58, open: false},
                            {id:2, text:"BOHI Nawal", start_date:"01-01-2014", duration:12,
                                progress:0.58, open: false},
                            {id:2, text:"JOUBERT Joannice", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"HWMLI Rafik", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:1, text:"NGUYEN Luong viet", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"DAOUD Mohamed-achraf", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"KAMMOUNI Amal", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}










                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "AKIK Yassine")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"BOUSSEBAA Salma", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:1, text:"BOADA Benoit", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},

                            {id:1, text:"ZATLA Rachida", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:1, text:"JISSANG Melissa", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}

                        ]
                    }
                 }

                if ($scope.SelectedManag.firstAndLastName == "BEAUDREY Clément")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"LELOUP Julien", start_date:"01-01-2014", duration:12,
                                progress:0.58, open: false},
                            {id:1, text:"FERCHICHI Mokhtar", start_date:"01-01-2014", duration:12,
                                progress:0.58, open: false},
                            {id:1, text:"DONICA Ion", start_date:"03-01-2014", duration:12,
                                progress:0.57, open: false},
                            {id:1, text:"PAVLENKO Okasana", start_date:"03-01-2014", duration:12,
                                progress:0.57, open: false},
                            {id:1, text:"TSAFACK LEKEUNDJI Billy", start_date:"01-01-2014", duration:12,
                                progress:0.15, open: false},

                            {id:1, text:"LASSOUED Amna", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}

                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "BEJANI Bertrand")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"NGUYEN Luong viet", start_date:"01-01-2014", duration:1,
                                progress:1, open: true},
                            {id:2, text:"FERCHICHI Mokhtar", start_date:"07-02-2014", duration:11,
                                progress:0.71, parent: 1}


                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "BENSLIMANE Amira")
                {
                    $scope.tasks = {
                        data:[
                            {id:2, text:"TRIGANO Fabien", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"EL BAKKOURI Imane", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"HABASSI Seif eddine", start_date:"01-01-2014", duration:12,
                                progress:0.58, open: false},
                            {id:1, text:"EL BAZ Adil", start_date:"01-01-2014", duration:12,
                                progress:1, open: true},
                            {id:2, text:"HANGUIR Lamiae", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"AIT MOKHTAR Yasid", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"INTWALI Victor", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"NDONG Moustapha", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},

                            {id:2, text:"FONTANA Clément", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"RIVES Yoann", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false}



                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "BERNARD Marc-antoine")
                {
                    $scope.tasks = {
                        data:[
                            {id:2, text:"FADHLI Nabil", start_date:"01-01-2014", duration:12,
                                progress:0.84, open: false},
                            {id:1, text:"DISSEM Samy", start_date:"01-01-2014", duration:12,
                                progress:0.7, open: true},

                            {id:2, text:"DOMERGE Damien", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"LIU Xuyao", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"NASSIR Taha", start_date:"01-01-2014", duration:12,
                                progress:0.14, open: false},
                            {id:2, text:"LAASSIS Nordine", start_date:"03-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:2, text:"LEBA Pierre", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"TALLARD Robert", start_date:"01-01-2014", duration:12,
                                progress:0.23, open: false},
                            {id:2, text:"DIE LAGABBE Severine", start_date:"03-01-2014", duration:12,
                                progress:0.27, open: false},
                            {id:2, text:"LAI Yuxiao", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"REINHARD Gautier st", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"NGUYEN Frédéric", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"CASSIN Bertrand", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"TIMOUYAS Abdellah", start_date:"01-01-2014", duration:12,
                                progress:0.34, open: false},



                            {id:2, text:"MANSOUR Jihane", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"ISAYCHIKOVA Marina", start_date:"03-01-2014", duration:12,
                                progress:0.14, open: false}



                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "BROUTIN David")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"FADHLI Nabil", start_date:"01-01-2014", duration:12,
                                progress:0.83, open: true},
                            {id:2, text:"BECHAH Khaled", start_date:"01-02-2014", duration:11,
                                progress:0, open: false},
                            {id:2, text:"BERTHELOT Cedric", start_date:"04-01-2014", duration:12,
                                progress:0.04, open: false},

                            {id:2, text:"OPPENHEIM David", start_date:"01-01-2014", duration:12,
                                progress:0.67, open: false}


                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "CASSIN Bertrand")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"TRIGANO Fabien", start_date:"01-01-2014", duration:12,
                                progress:1, open: true},
                            {id:2, text:"EL BAKKOURI Imane", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},

                            {id:2, text:"NDONG Moustapha", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"AIT MOKHTAR Yasid", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"RIVES Yoann", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false}



                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "CAULLET Jerome")
                    {
                        $scope.tasks = {
                            data:[
                                {id:2, text:"CHIKHI Mohamed karim", start_date:"03-01-2014", duration:8,
                                    progress:0.9, open: false},
                                {id:1, text:"CHIBO Meryem", start_date:"03-01-2014", duration:3,
                                    progress:0.99, open: true},
                                {id:2, text:"SHIMI Zakaria", start_date:"01-01-2014", duration:3,
                                    progress:1, open: false},
                                {id:2, text:"NJETEIN Mbaiornom", start_date:"01-01-2014", duration:12,
                                    progress:1, open: false},
                                {id:3, text:"FRAGASSI Fabien", start_date:"01-01-2014", duration:1,
                                    progress:1, open: true},
                                {id:4, text:"FRAGASSI Fabien", start_date:"03-02-2014", duration:7,
                                    progress:0.9, parent: 3},
                                {id:2, text:"SLAOUI Cyrine", start_date:"03-01-2014", duration:8,
                                    progress:0.9, open: false},
                                {id:2, text:"ABADIA Hanane", start_date:"01-01-2014", duration:3,
                                    progress:1, open: false},

                                {id:2, text:"DEBBABI Fares", start_date:"01-01-2014", duration:2,
                                    progress:1, open: false},
                                {id:2, text:"BELLOT Guy", start_date:"03-01-2014", duration:12,
                                    progress:0.99, open: false},
                                {id:2, text:"TRUONG Anthony", start_date:"15-01-2014", duration:8,
                                    progress:0.9, open: false},
                                {id:2, text:"MARTIN Guillaume", start_date:"01-01-2014", duration:8,
                                    progress:0.9, open: false},
                                {id:2, text:"SABA Rabecca", start_date:"01-01-2014", duration:8,
                                    progress:0.9, open: false},
                                {id:2, text:"SALOME Benoit", start_date:"01-01-2014", duration:6,
                                    progress:1, open: false}







                            ]
                        }
                     }
                if ($scope.SelectedManag.firstAndLastName == "COMMAULT Benjamin")
                {
                    $scope.tasks = {
                        data:[
                            {id:2, text:"BEN NASR Emna", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:1, text:"SENOUCI Hicham-amin", start_date:"01-01-2014", duration:12,
                                progress:0.83, open: true},
                            {id:2, text:"RAYANE Chandar", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:4, text:"TOUATI Yassine", start_date:"03-02-2014", duration:12,
                                progress:1, open: false},

                            {id:2, text:"EMIRI Abiona", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:3, text:"TICHKIEWITCH Erwan", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"TEIXEIRA Michel", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"MAHMOUD Hammouda", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"GUERRIER Nezha", start_date:"01-01-2014", duration:8,
                                progress:1, open: false},

                            {id:2, text:"BAUCHER Mathieu", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"DHAER Toni", start_date:"01-01-2014", duration:10,
                                progress:1, open: false},
                            {id:5, text:"HADDAD Marouene", start_date:"01-01-2014", duration:1,
                                progress:0.4, open: true},
                            {id:6, text:"HADDAD Marouene", start_date:"18-01-2014", duration:12,
                                progress:0.7, parent: 5},
                            {id:2, text:"IBN CHARAA Ilhame", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},


                            {id:8, text:"GLENZA Skander", start_date:"04-01-2014", duration:1,
                                progress:0.3, open: false},
                            {id:7, text:"GLENZA Skander", start_date:"04-02-2014", duration:11,
                                progress:1, parent: 8},
                            {id:2, text:"MICHELET Antoine", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"HISLER Robin", start_date:"03-01-2014", duration:12,
                                progress:0.5, open: false}




                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "DALLE Sandrine")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"SAVINA Olga", start_date:"01-03-2014", duration:9,
                                progress:0, open: true},
                            {id:1, text:"BENOUFELLA Said", start_date:"01-01-2014", duration:12,
                                progress:0.66, open: true},
                            {id:2, text:"FARHAT Suzanne", start_date:"01-01-2014", duration:12,
                                progress:0.08, open: false},
                            {id:2, text:"GOSSELIN Karelle", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"BENZENATI Safy", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:2, text:"NGUYEN Tuan", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:2, text:"BALASUBRAMANIAM Prabala", start_date:"03-01-2014", duration:12,
                                progress:0.75, open: false},
                            {id:2, text:"LOUBARIS Manal", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false}


                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "DE JACQUELOT DU BOISROUVRAY Gaetan")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"BENOUFELLA Said", start_date:"01-01-2014", duration:12,
                                progress:0.66, open: true},
                            {id:2, text:"HASSINE Anouar", start_date:"01-01-2014", duration:12,
                                progress:0.85, open: false}


                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "DUMITRE SCU Eugene")
                {
                    $scope.tasks = {
                        data:[
                            {id:2, text:"MANSOUR Jihane", start_date:"04-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:1, text:"KHOURY Patrice", start_date:"18-01-2014", duration:12,
                                progress:0.22, open: true}



                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "DUNY Pierre")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"RADI Imad", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"DAOUD Mohamed-achraf", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}


                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "FERCHICHI Mokhtar")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"BOHI Nawal", start_date:"01-01-2014", duration:12,
                                progress:0.58, open: false},
                            {id:2, text:"SEGOT Thomas", start_date:"01-01-2014", duration:12,
                                progress:0.58, open: false}


                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "FRESLON Nicolas")
                {
                    $scope.tasks = {
                        data:[
                            {id:2, text:"DE GUALY DE SAINT ROME Marie-liesse", start_date:"07-01-2014", duration:11,
                                progress:0, open: false},
                            {id:1, text:"CHARLES Thomas", start_date:"07-01-2014", duration:12,
                                progress:0.85, open: true},
                            {id:2, text:"FAYACHE Dora", start_date:"07-01-2014", duration:12,
                                progress:0.22, open: false},
                            {id:2, text:"DE JACQUELOT DU BOISROUVRAY Gaetan", start_date:"03-01-2014", duration:12,
                                progress:0.92, open: false},
                            {id:2, text:"HACQUEBART Fabien", start_date:"01-01-2014", duration:12,
                                progress:0.58, open: false}



                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "GLENZA Skander")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"TERKOUZI Ouafa", start_date:"07-01-2014", duration:12,
                                progress:0.99, open: true}

                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "GRUNER Hans")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"FADHLI Nabil", start_date:"01-01-2014", duration:12,
                                progress:0.85, open: true},
                            {id:2, text:"OPPENHEIM David", start_date:"01-01-2014", duration:12,
                                progress:0.65, open: false},
                            {id:2, text:"ENNEBATI Mohamed", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}


                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "GZARA Hamdi")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"PATEL Salim", start_date:"01-01-2014", duration:12,
                                progress:1, open: true},
                            {id:2, text:"BELKHOJA Mohamed-Slim", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"BELLOT Guy", start_date:"07-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"BEZZI Youness", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}



                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "IBN CHARAA llhame")
                {
                    $scope.tasks = {
                        data:[

                            {id:2, text:"JISSANG Melissa", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:1, text:"AKIK Yassine", start_date:"01-01-2014", duration:12,
                                progress:1, open: true}

                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "ISAYCHIKOVA Marina")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"AMAMI Leila", start_date:"01-01-2014", duration:12,
                                progress:1, open: true},
                            {id:2, text:"CHEIKH MOHAMEDOU Raghya", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"BENGELLOUNI Youssef", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}


                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "JEAN-FRANCOIS Fabrice")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"LAASSIS Nordine", start_date:"04-01-2014", duration:12,
                                progress:0.22, open: true},
                            {id:2, text:"TIMOUYAS Abdellah", start_date:"01-01-2014", duration:12,
                                progress:0.34, open: false},
                            {id:2, text:"MANSOUR Jihane", start_date:"07-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"SALOME Benoit", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false}




                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "KIDAH Bouchra")
                {
                    $scope.tasks = {
                        data:[

                            {id:2, text:"LAUTIER Simon", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"PATEL Salim", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"TERKOUZI Ouafa", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:1, text:"EIDELWEN David", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},

                            {id:2, text:"BELKHOJA Mohamed-slim", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"GUERRIER Nezha", start_date:"01-01-2014", duration:12,
                                progress:0.65, open: false},
                            {id:8, text:"GLENZA Skander", start_date:"03-01-2014", duration:1,
                                progress:0.99, open: true},
                            {id:9, text:"GLENZA Skander", start_date:"03-01-2014", duration:12,
                                progress:0.92, parent: 8},
                            {id:2, text:"ILEANA Lidia", start_date:"01-06-2014", duration:6,
                                progress:0, open: false},
                            {id:2, text:"BRUNETEAU Adrien", start_date:"20-01-2014", duration:12,
                                progress:0.8, open: true},
                            {id:2, text:"LEROY Benjamin", start_date:"15-02-2014", duration:11,
                                progress:0, open: false}



                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "MABROUK Marjane")
                {
                    $scope.tasks = {
                        data:[
                            {id:2, text:"CHAKER Dorra", start_date:"03-01-2014", duration:12,
                                progress:0.8, open: false},
                            {id:2, text:"HADDAJI Haykel", start_date:"01-01-2014", duration:12,
                                progress:0.7, open: false},
                            {id:2, text:"LAUTIER Simon", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"POUPON Olivier", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"BELFDIL Radouane", start_date:"01-01-2014", duration:12,
                                progress:0.58, open: false},
                            {id:2, text:"BEN AHMED Ghazy", start_date:"01-01-2014", duration:12,
                                progress:0.03, open: false},
                            {id:2, text:"JLOULI Mohamed salah", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"KARADJA Zoubiba", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"RADI Imad", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:4, text:"NGUYEN Luong viet", start_date:"01-01-2014", duration:1,
                                progress:1, open: true},
                            {id:5, text:"NGUYEN Luong viet", start_date:"04-02-2014", duration:11,
                                progress:0.99, parent: 4},
                            {id:2, text:"DALLE Sabrine", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"ZHANG Jiaqi", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:1, text:"DUNY Pierre", start_date:"01-01-2014", duration:12,
                                progress:1, open: true},
                            {id:4, text:"BEN ABDA Bochra", start_date:"01-01-2014", duration:1,
                                progress:1, open: true},
                            {id:5, text:"BEN ABDA Bochra", start_date:"09-02-2014", duration:11,
                                progress:0.8, parent: 4},
                            {id:2, text:"RAYANE Chandar ", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"FERCHICHI Mokhtar", start_date:"01-01-2014", duration:12,
                                progress:0.58, open: false},
                            {id:2, text:"DHIB Yasmine", start_date:"25-03-2014", duration:12,
                                progress:0.8, open: false},
                            {id:2, text:"EMIRI Abiona", start_date:"04-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"MONNIER David", start_date:"04-01-2014", duration:12,
                                progress:0.33, open: false},

                            {id:2, text:"TEIXEIRA Michel", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"SOHO Bienvenu", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"CHOUCHI Ali", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"BOADA Benoit", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},


                            {id:2, text:"TOUATI Yassine", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}





                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "PETIT Samuel")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"BEN NASR Emna", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: true},
                            {id:2, text:"TERKOUZI Ouafa", start_date:"07-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"FERCHICHI Mokhtar", start_date:"07-01-2014", duration:12,
                                progress:0.58, open: false},
                            {id:2, text:"DONICA Ion", start_date:"04-01-2014", duration:12,
                                progress:0.58, open: false},
                            {id:2, text:"BOHI Nawal", start_date:"01-01-2014", duration:12,
                                progress:0.58, open: false},
                            {id:2, text:"BEAUDREY Clément", start_date:"01-01-2014", duration:12,
                                progress:0.58, open: false},
                            {id:2, text:"PAVLENKO Oksana", start_date:"07-01-2014", duration:12,
                                progress:0.65, open: false},

                            {id:2, text:"SLAOUI Cyrine", start_date:"07-01-2014", duration:12,
                                progress:0.65, open: false},
                            {id:2, text:"TSAFACK LEKEUNDJI Billy", start_date:"01-01-2014", duration:12,
                                progress:0.15, open: false},
                            {id:2, text:"SEGOT Thomas", start_date:"01-01-2014", duration:12,
                                progress:0.58, open: false},

                            {id:2, text:"LASSOUED Amna", start_date:"01-01-2014", duration:12,
                                progress:0.58, open: false}


                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "MADUREIRA Antonio")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"HABASSI Seif eddine", start_date:"01-01-2014", duration:12,
                                progress:0.58, open: true},
                            {id:2, text:"GROUX Emmanuel", start_date:"04-01-2014", duration:12,
                                progress:0.65, open: false},
                            {id:2, text:"ZAIDI Noureddine", start_date:"01-01-2014", duration:12,
                                progress:0.42, open: false},
                            {id:2, text:"DELPLANQUE Stephane", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}



                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "POUPON Olivier")
                {
                    $scope.tasks = {
                        data:[
                            {id:2, text:"RAYANE Chandar", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:1, text:"TOUATI Yassine", start_date:"01-01-2014", duration:12,
                                progress:1, open: true},

                            {id:2, text:"MAHMOUD Hammouda", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"BAUCHER Mathieu", start_date:"04-01-2014", duration:12,
                                progress:0.97, open: false},
                            {id:2, text:"HADDAD Marouene", start_date:"01-01-2014", duration:12,
                                progress:0.03, open: false},
                            {id:2, text:"HADDAD Marouene", start_date:"027-01-2014", duration:12,
                                progress:0.8, open: false},
                            {id:2, text:"MICHELET Antoine", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}

                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "MONNIER David")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"DOMERGE Damien", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:2, text:"NGUYEN Frédéric", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}


                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "RAMDANE Smahane")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"TAMARELLE Xavier", start_date:"01-01-2014", duration:12,
                                progress:0.34, open: true},
                            {id:2, text:"GROUX Emmanuel", start_date:"03-01-2014", duration:12,
                                progress:0.56, open: false},
                            {id:2, text:"FAYACHE Dora", start_date:"07-01-2014", duration:12,
                                progress:0.22, open: false},
                            {id:2, text:"DELPLANQUE Stephane", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}



                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "RENAULT Anaïs")
                {
                    $scope.tasks = {
                        data:[
                            {id:2, text:"JIANG Zhongchao", start_date:"01-01-2014", duration:12,
                                progress:0.03, open: false},
                            {id:1, text:"KARADJA Zoubidar", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},

                            {id:2, text:"JIANG Zhongchao", start_date:"01-01-2014", duration:12,
                                progress:0.04, open: false},
                            {id:3, text:"KOZLOVA Nadezda", start_date:"03-01-2014", duration:1,
                                progress:0.99, open: true},
                            {id:4, text:"KOZLOVA Nadezda", start_date:"27-02-2014", duration:11,
                                progress:0.99, parent: 3}

                        ]
                    }

                }
                if ($scope.SelectedManag.firstAndLastName == "SELLAMI Mohamed nabil")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"AMAMI Leila", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:2, text:"CHEIKH MOHAMEDOU Raghya", start_date:"03-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:2, text:"BENGELLOUN Youssef", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}

                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "SOHO Bienvenu")
                {
                    $scope.tasks = {
                        data:[
                            {id:2, text:"CSORBA Esder", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:3, text:"JLOULI Mohamed salah", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:1, text:"BEN ABDA Bochra", start_date:"01-01-2014", duration:12,
                                progress:0.08, open: true},
                            {id:2, text:"BEN ABDA Bochra", start_date:"09-02-2014", duration:11,
                                progress:0.98, parent: 1},

                            {id:4, text:"BIDE Esther", start_date:"06-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:4, text:"CHOUCHI Ali", start_date:"06-01-2014", duration:12,
                                progress:0.99, open: false},
                            {id:4, text:"DIEYE Ibrahima", start_date:"03-01-2014", duration:11,
                                progress:0.99, open: false},
                            {id:6, text:"XU Yi", start_date:"01-01-2014", duration:12,
                                progress:0.08, open: true},
                            {id:7, text:"XU Yi", start_date:"08-02-2014", duration:11,
                                progress:0.99, parent: 6},
                            {id:4, text:"DHIB Yasmine", start_date:"26-03-2014", duration:10,
                                progress:0.8, open: false},
                            {id:4, text:"MOUWEN Karima", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},

                            {id:4, text:"ZERZERI Cyrine", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}

                        ]
                    }
            }
            }

            else if ($scope.selectedBu.label == "Secteur public")
            {
                if ($scope.SelectedManag == undefined) {

                    $scope.tasks = {
                        data:[

                            {id:2, text:"AL ZAHDI Ibtihaj",    start_date:"01-01-2014", duration:12, order:10,
                                progress:0.25, open: false},
                            {id:4, text:"BESSON Jean-paul",    start_date:"01-01-2014", duration:12, order:20,
                                progress:0.04, open:false},
                            {id:5, text:"LEROUX Benoit",    start_date:"01-01-2014", duration:12, order:20,
                                progress:0.18, open: false},
                            {id:6, text:"GAILLARD Nicolas",    start_date:"25-01-2014", duration:12,
                                progress:0.43, open: false},
                            {id:6, text:"ALIOUNE Ndiaye",    start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:6, text:"HASNI Mohamed",    start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:5, text:"AOUNET Helmi",    start_date:"01-01-2014", duration:12, order:20,
                                progress:0.25, open: false},
                            {id:8, text:"BALLON Evelyne",    start_date:"01-01-2014", duration:3,
                                progress:1, open: true},
                            {id:9, text:"BALLON Evelyne",    start_date:"01-01-2014", duration:12,
                                progress:0.25, parent: 8},
                            {id:6, text:"LOBELLA Xxxx",    start_date:"14-07-2014", duration:6,
                                progress:1, open: false},
                            {id:1, text:"BOUSLIMI Foued", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:6, text:"GUTHIER Christophe",    start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:3, text:"RAMBAUD Alice",    start_date:"01-01-2014", duration:12, order:20,
                                progress:1, open: false},
                            {id:6, text:"BECHAH Khaled",    start_date:"01-01-2014", duration:12,
                                progress:0.08, open: false},
                            {id:7, text:"GENTIL Frédéric",    start_date:"09-01-2014", duration:12,
                                progress:0.2, open: true}


                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "GENTIL Frédéric")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"BALLOU Evelyne", start_date:"01-01-2014", duration:3,
                                progress:1, open: true},
                            {id:1, text:"BALLOU Evelyne", start_date:"12-07-2014", duration:6,
                                progress:1, parent: 1},
                            {id:2, text:"BESSON Jean-paul", start_date:"01-01-2014", duration:12,
                                progress:0.04, open: false},
                            {id:2, text:"RAMBAUD Alice", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},
                            {id:3, text:"BECHAH Khaled", start_date:"01-01-2014", duration:12,
                                progress:0.08, open: false},
                            {id:4, text:"AL ZAHDI Ibtihaj", start_date:"06-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:4, text:"GAUTHIER Christophe", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:4, text:"LEBA Pierre", start_date:"01-01-2014", duration:12,
                                progress:0, open: false},
                            {id:4, text:"LEROUX Benoit", start_date:"01-01-2014", duration:12,
                                progress:0.18, open: false},
                            {id:6, text:"AOUNET Helmi", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:4, text:"ALIOUNE Ndiaye", start_date:"01-01-2014", duration:12,
                                progress:0.5, open: false},
                            {id:4, text:"GAILLARD Nicolas", start_date:"15-01-2014", duration:12,
                                progress:0.43, open: false},
                            {id:4, text:"HASNI Mohamed", start_date:"01-01-2014", duration:12,
                                progress:1, open: false},

                            {id:4, text:"MOUAKHER Meriem", start_date:"01-01-2014", duration:12,
                                progress:0, open: false},
                            {id:7, text:"BOUSLIMI Foued", start_date:"01-01-2014", duration:12,
                                progress:1, open: false}




                        ]
                    }
                }
            }

            else if ($scope.selectedBu.label == "Services")
            {
                if ($scope.SelectedManag == undefined) {

                    $scope.tasks = {
                        data:[
                            {id:1, text:"SAVINA Olga", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false}



                        ]
                    }
                }

                if ($scope.SelectedManag.firstAndLastName == "DALLE Sandrine")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"SAVINA Olga", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false}

                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "BENAMOU Eric")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"GHAMGUI Bassem", start_date:"01-07-2014", duration:6,
                                progress:0, open: false}

                        ]
                    }
                }
            }


            else if ($scope.selectedBu.label == "Télécom")
            {
                if ($scope.SelectedManag == undefined) {

                    $scope.tasks = {
                        data:[
                            {id:1, text:"BESSAAD Khaoula", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:1, text:"SELLAMI Anis", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:1, text:"NEGROUCHE Sonia", start_date:"01-01-2014", duration:12,
                                progress:0.34, open: false}



                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "BRANGER Jacques")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"GHAMGUI Bassem", start_date:"01-07-2014", duration:6,
                                progress:0, open: false}

                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "DELBECQUE Jérôme")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"BEN MANSOUR Amine", start_date:"01-02-2014", duration:11,
                                progress:0, open: false},
                            {id:1, text:"SELLAMI Anis", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:1, text:"AKOUZ Malak", start_date:"01-07-2014", duration:6,
                                progress:0, open: false},
                            {id:1, text:"BESSAD Khaoula", start_date:"01-01-2014", duration:12,
                                progress:0.25, open: false},
                            {id:1, text:"DIOUF Siga", start_date:"01-04-2014", duration:8,
                                progress:0, open: false},
                            {id:1, text:"NEGROUCHE Sonia", start_date:"01-01-2014", duration:12,
                                progress:0.34, open: false},
                            {id:1, text:"LEROY Benjamin", start_date:"10-02-2014", duration:11,
                                progress:0, open: false}

                        ]
                    }
                }
                if ($scope.SelectedManag.firstAndLastName == "LE CORVAISIER Erwan")
                {
                    $scope.tasks = {
                        data:[
                            {id:1, text:"THABET Malek", start_date:"01-07-2014", duration:6,
                                progress:0, open: false},
                            {id:1, text:"MEZZAQ Houssam", start_date:"01-04-2014", duration:9,
                                progress:0, open: false},
                            {id:1, text:"DIOUF Siga", start_date:"01-04-2014", duration:9,
                                progress:0, open: false}

                        ]
                    }
                }
            }


        }


        $scope.leftButtons = [
            {
                type: 'button-icon icon ion-navicon',
                tap: function (e) {
                    $scope.sideMenuController.toggleLeft();
                }
            }
        ];

        $scope.rightButtons = [];
    })
    .controller('FournisseursController', function ($scope) {
        $scope.navTitle = "Dash Report";

        $scope.leftButtons = [
            {
                type: 'button-icon icon ion-navicon',
                tap: function (e) {
                    $scope.sideMenuController.toggleLeft();
                }
            }
        ];

        $scope.rightButtons = [];
        /////////////////////////////////////////////////////////////
        ////////////**********************RESOURCES HUMAINES***********************************
    })


        .controller('QualificationController', function ($scope, $location,$cookies,$cookieStore, homeService) {
        $scope.navTitle = "Qualifications";
        	$scope.customers= homeService.all();
        $scope.aller = function (page) {
            $location.url('/Main/' + page);
        };
        console.log('in serice essaiServ');

        $scope.test=function()
        {
            aller('Main.Autre');
        }
        $scope.emptyCookie=function()
        {

            delete $cookies ['login'];
            //$cookieStore.remove('password');
            aller('Main.Authentification');
        }
        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Resources');
                }
            }
        ];


    })
    .controller('salairesController', function ($scope, $location, homeService) {
        $scope.navTitle = "Salaires";
        $scope.customers = homeService.all();
        $scope.aller = function (page) {
            $location.url('/Main/' + page);
        };
        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Resources');
                }
            }
        ];

    })


    .controller('SuiviRHController', function ($scope,$cookieStore,$ionicLoading, $location,rhServ,rhService ,$http) {
        $scope.navTitle = "SuiviRH";
        $scope.sorti=rhServ.sorti;
        $scope.aller = function (page) {
            $location.url('/Main/' + page);
        };
        obj = $scope.detailPerson;
        $scope.go = function(name){
            obj = name;
            $location.url('/Main/SuiviRH/detail');
            //$state.go('Sortie.ListSuiviRh');
        }
        $http({
            url: baseUrl + 'rest/Ca/findAllBu',
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).success(function(data) {
                $scope.allBu = [
                    {

                        id: 3,
                        libelle: "Energie",
                        abreviation: "NRJ",
                        responsableId: 199,
                        responsableLabel: "GIFFARD François",
                        order: 0,
                        label: "Energie"
                    },
                    {

                        id: 2,
                        libelle: "Finance",
                        abreviation: "FIN",
                        responsableId: 362,
                        responsableLabel: "BIACHE Jean Luc",
                        order: 1,
                        label: "Finance"
                    }];
                //              $scope.$apply();
            });
        $scope.buChanged = function () {
 $scope.customers = [{
            firstAndLastName: "ALJANE Nabil",
                id: 110,
                firstName: "ALJANE",
                lastName: "Nabil",
                functionId: 35,
                functionLabel: "Ing. Consultant Senior N3",
                hiringDate: "2005-03-01"
        },
        {
            firstAndLastName: "BEN RABAH Walid",
            id: 137,
            firstName: "BEN RABAH",
            lastName: "Walid",
            functionId: 34,
            functionLabel: "Ing. Consultant Senior N2",
            hiringDate: "2011-02-14"
        },
        {
            firstAndLastName: "BENCHEKROUN Nacer",
            id: 404,
            firstName: "BENCHEKROUN",
            lastName: "Nacer"
        }];
           /* $http({
                url: baseUrl + 'graniteamf/resource/loadProjectManagerByBU/'+$scope.selectedBu.businessUnitDTO.id,
                method: 'GET',
                headers:{ 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {

                });*/
        };
        $scope.showConfirm=function()
        {


            /* for (var i=0; i<authorities.length; i++) {
             if (authorities[i] == 'ROLE_CONSULT_RAPORT_RH_PER_ESS') {

             }
             }*/
             /*$scope.loading = $ionicLoading.show({
             content: 'Loading',
             animation: 'fade-in',
             showBackdrop: true,
             maxWidth: 200,
             showDelay: 0
             });
            $scope.loading.hide();*/
          /*  rhService.get($scope.selectedBu.businessUnitDTO.id,$scope.SelectedManag.id,$scope.dateFin,$scope.dateDeb).then(function(data){

                     $scope.sorti =data ;

                },
                function(data){
                    alert('erreur');
                });*/
                $scope.sorti = [{
                    firstName: "HABASSI",
                    lastName: "Seif eddine",
                    dateEmbauche: "15/04/2010",
                    experienceTotal: "4 an 5 Mois",
                    experienceSoc: "4 an 2 Mois",
                    ancienneteBu: "2 an 1 mois",
                    qualification: "J2",
                    pointMort: 0,
                    salaire: 2057.78720743256,
                    salaireAnnuel: 27437.16276576747,
                    profil: "-",
                    devise: "€",
                    tauxFrais: 10
                },
                    {
                        firstName: "VOISIN",
                        lastName: "Mathieu",
                        dateEmbauche: "02/07/2012",
                        experienceTotal: "1 an 11 Mois",
                        experienceSoc: "1 an 11 Mois",
                        ancienneteBu: "0 an 9 mois",
                        qualification: "J1",
                        pointMort: 0,
                        salaire: 757.857793243602,
                        salaireAnnuel: 10086.838419391332,
                        profil: "-",
                        devise: "€",
                        tauxFrais: 9.84
                    },{
                        firstName: "EL BAKKOURI",
                        lastName: "Imane",
                        dateEmbauche: "02/11/2012",
                        experienceTotal: "1 an 7 Mois",
                        experienceSoc: "1 an 7 Mois",
                        ancienneteBu: "2 an 8 mois",
                        qualification: "J1",
                        pointMort: 0,
                        salaire: 1592.00346632861,
                        salaireAnnuel: 21226.712884381468,
                        profil: "-",
                        devise: "€",
                        tauxFrais: 10
                    }]
        }
        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Resources');
                }
            }
        ];
        $scope.left = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/SuiviRH/list');
                }
            }]

    })
    .controller('ListPeriodeEssaiCtrl', function ($scope,$cookieStore, $location) {
        $scope.navTitle = "Détails";
        $scope.detailPerson = obj;
        $scope.aller = function (page) {
            $location.url('/Main/' + page);
        };
        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/trial');
                }
            }
        ];

    })
    .controller('ListSuiviRhCtrl', function ($scope, $location) {
        $scope.navTitle = "Suivi RH";
        $scope.detailPerson = obj;

        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Sortie/list');
                }
            }
        ];
    })
    .controller('ListRhCtrl', function ($scope, $location) {
        $scope.navTitle = "Suivi RH";
        $scope.detailPerson = obj;

        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/SuiviRH/');
                }
            }
        ];
    })
    .controller('ResourceCtrl', function ($scope, $location) {
        $scope.navTitle = "Suivi RH";
        $scope.detailPerson = obj;

        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/');
                }
            }
        ];
    })
    .controller('CollaborateurController', function ($scope, $location, homeService) {
        $scope.navTitle = "Collaborateur";
        $scope.customers = homeService.all();
        $scope.aller = function (page) {
            $location.url('/Main/' + page);
        };
        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Resources');
                }
            }
        ];

    })
    .controller('trialController', function ($scope,$location,$state,$cookieStore,$ionicLoading,$timeout, periodEssai) {
        $scope.navTitle = "Dash Report";

       /* $scope.essai = periodEssai.essai;*/

        $scope.aller = function (page) {
            $location.url('/' + page);
        };
        $scope.detailPerson = {
            firstName :"",
            lastName : "",
            profil : "",
            qualification : "",
            experienceTotal : ""

        };
        obj = $scope.detailPerson;
        $scope.go = function(name){
        obj = name;
            $state.go('Main.ListPeriodeEssai');
        }
        $scope.essai= [
            {
                firstName: "JOMAA",
                lastName: "Inès",
                dateEmbauche: "02/12/2013",
                experienceTotal: "4 an 7 Mois",
                experienceSoc: "0 an 6 Mois",
                ancienneteBu: null,
                qualification: "J1",
                pointMort: null,
                profil: "Ingénieur Consultant",
                dateEssai: "01/04/2014",
                renouvele: "N"
            },{
                firstName: "BEN ELKADI",
                lastName: "Zakariae",
                dateEmbauche: "01/12/2012",
                experienceTotal: "1 an 6 Mois",
                experienceSoc: "1 an 6 Mois",
                qualification: "J1",
                dateEssai: "20/02/2013",
                renouvele: "N"
            },{
                firstName: "SEBBAN",
                lastName: "Jacques David",
                dateEmbauche: "03/05/2010",
                experienceTotal: "4 an 1 Mois",
                experienceSoc: "4 an 1 Mois",
                qualification: "J2",
                dateEssai: "31/08/2010",
                renouvele: "N"
            }]
       /* $scope.loading = $ionicLoading.show({
         content: 'Loading',
         animation: 'fade-in',
         showBackdrop: true,
         maxWidth: 200,
         showDelay: 0
         });
         $timeout(function () {
         $scope.loading.hide();
         }, 3000);*/


        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Resources');
                }
            }
        ];

    })
    .controller('SortiesController', function ($scope, $location,$cookieStore,$http,$state,sorService ,sortiService) {
        $scope.navTitle = "Sorties";
        $scope.sorti=sorService.sorti;
        $scope.aller = function (page) {
            $location.url('/Main/' + page);
        };
        $scope.detailPerson = {
            firstName :"",
            lastName : "",
            profil : "",
            qualification : "",
            experienceTotal : ""

        };
        obj = $scope.detailPerson;
        $scope.go = function(name){
            obj = name;
            $location.url('/Main/Sortie/detail');
            //$state.go('Sortie.ListSuiviRh');
        }

        $scope.showConfirm=function()
        {  $scope.sorti=[
            {
                firstName: "DIOUF",
                lastName: "Siga",
                dateEmbauche: "16/11/2010",
                experienceTotal: "4 an 11 Mois",
                experienceSoc: "3 an 7 Mois",
                ancienneteBu: null,
                qualification: "J1",
                profil: "Ingénieur Télécommunications INSA de Lyon",
                dateEssai: "30/11/2010",
                renouvele: "N",
                leavingDate: "30/03/2014"
            },
            {
                firstName: "PENINE",
                lastName: "Maité",
                dateEmbauche: "03/10/2011",
                experienceTotal: "2 an 8 Mois",
                experienceSoc: "2 an 8 Mois",
                qualification: "J2",
                dateEssai: "31/01/2012",
                renouvele: "N",
                leavingDate: "31/03/2014"
            }] ;
         /*   *//* for (var i=0; i<authorities.length; i++) {
             if (authorities[i] == 'ROLE_CONSULT_RAPORT_RH_SORTIE') {

             }
             }*//*
                sortiService.get($scope.dateDeb,$scope.dateFin).then(function(data){
                        console.log(data);
                        $scope.sorti =data ;
                    },
                function(data){
                    alert('vous ne possédez pas les role qui vous pemmette d\'y accéder');
                });*/
        }

        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Resources');
                }
            }
        ];
        $scope.left=[
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Sortie/list');
                }
            }
        ]
    })
/////////////////////////////////////////////////////////////
////////////************PROSPECTS CLIENTS***********************************

    .controller('CAPointMortController', function ($scope, $location, ClientsService) {
        $scope.navTitle = "CA/Point Mort";
        $scope.customers = ClientsService.all();
        $scope.aller = function (page) {
            $location.url('/Main/' + page);
        };
        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Prospects');
                }
            }
        ];
    })

    .controller('PvPiController', function ($scope, $location, ClientsService) {
        $scope.navTitle = "Prix de vente/Prix interne";
        $scope.customers = ClientsService.all();
        $scope.aller = function (page) {
            $location.url('/Main/' + page);
        };

        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Prospects');
                }
            }
        ];
    })

    .controller('zomCtrl', function ($scope,$state, $location,$http) {
        $scope.navTitle = "Zoom CA";
        $scope.goToLink = function () {
            $state.go('Main.Zoom');
        };
        var datedebut=localStorage.getItem('datedeb');
        var dateFin=localStorage.getItem('datedeb');
        $http({
            url: baseUrl +'graniteamf/chiffreAffaire/loadAllCa/'+datedebut  +"/"+dateFin ,
            method: 'GET',
            headers:{ 'login' :  localStorage.getItem('login'),
                'password':  localStorage.getItem('password')
            }
        }).success(function(data) {
                $scope.allBu = data;
                //              $scope.$apply();
            })
            .error(function() {
              //  alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

            });
        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/CA');
                }
            }
        ];
    })
    .controller('CAController', function ($scope, $location, ClientsService) {
        $scope.navTitle = "CA";
        $scope.customers = ClientsService.all();
        $scope.aller = function (page) {
            $location.url('/Main/' + page);
        };
        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Prospects');
                }
            }
        ];
    })
    .controller('EvolutionCAController', function ($scope, $location, ClientsService) {
        $scope.navTitle = "Evolution CA";
        $scope.customers = ClientsService.all();
        $scope.aller = function (page) {
            $location.url('/Main/' + page);
        };
        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Prospects');
                }
            }
        ];
    })
/////////////////////////////////////////////////////////////
////////////************Missions***********************************
    .controller('PlaningController', function ($scope, $location, PlaningService) {
        $scope.navTitle = "Suivi Planing";
        $scope.customers = PlaningService.all();
        $scope.aller = function (page) {
            $location.url('/Main/' + page);
        };
        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Missions');
                }
            }
        ];
    })
/////////////////////////////////////////////////////////////
////////////************Fournisserus***********************************
    .controller('EtatFournisseurController', function ($scope, $location, EtatFournisseurService,$http) {
        $scope.navTitle = "Etat Fournisseur";
        $scope.customers = EtatFournisseurService.all();
        $scope.aller = function (page) {
            $location.url('/Main/' + page);
        };
        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Fournisseurs');
                }
            }
        ];
        $scope.Provider = [
            {
                id: 103,
                function: "DIRECTEUR ",
                legalFormId: 3,
                currencyId: null,
                marketId: 6,
                contactOrigin: null,
                civilityId: 1,
                providerCompanyName: "ALTI",
                repLegalName: "MOREAU",
                repLegalFirstname: "PASCAL",
                rcsPlace: "NANTERRE",
                rcsNumber: "401595483",
                siretNumber: "40159548300066",
                capital: 366081
            },
            {
                id: 114,
                function: "GERANT",
                legalFormId: 1,
                currencyId: null,
                marketId: 6,
                contactOrigin: null,
                civilityId: 1,
                providerCompanyName: "OMICRONE",
                repLegalName: "JRIDI",
                repLegalFirstname: "MOHAMED",
                rcsPlace: "PARIS",
                rcsNumber: "531853562",
                siretNumber: "53185356200019"
            },
            {
                id: 115,
                function: null,
                legalFormId: 7,
                currencyId: null,
                marketId: 6,
                contactOrigin: null,
                civilityId: null,
                interval: null,
                badge: null,
                providerCompanyName: "PC SAS",
                repLegalName: null,
                repLegalFirstname: null,
                rcsPlace: "NANTERRE",
                rcsNumber: "480932474",
                siretNumber: "48093247400012",
                tvaNumber: null,
                employeesNumber: null,
                capital: 50000
            }];
       /* $http({
            url: baseUrl +'graniteamf/chiffreAffaire/loadProviders',
            method: 'GET',
            headers:  { 'login' :  localStorage.getItem('login'),
                'password':  localStorage.getItem('password')
            }
        }).success(function(data) {
                $scope.Provider = data;
                //              $scope.$apply();
            });*/
        $scope.showConfirm = function () {
            $scope.founisseur = [
                { ref : "65A532",
                    montFourni : "20000",
                    montClient : "35000",
                    devise : "€"

                },
                {
                    ref : "35A568",
                    montFourni : "600000",
                    montClient : "650000",
                    devise:"€"
                },
                {
                    ref : "15P072",
                    montFourni : "450000",
                    montClient : "900000",
                    devise:"€"
                },
                {
                    ref : "75A108",
                    montFourni : "656000",
                    montClient : "653510",
                    devise:"€"
                },
                {
                    ref : "43Z808",
                    montFourni : "128000",
                    montClient : "436520",
                    devise:"€"
                },
                {
                    ref : "38S905",
                    montFourni : "412700",
                    montClient : "874500",
                    devise:"€"
                }
            ];
            $http({

                url: baseUrl +'graniteamf/chiffreAffaire/Evolution/'+$scope.SelectedProvider.id+"/1"+"/"+$scope.dateDeb+"/"+$scope.dateFin,
                method: 'GET',
                headers: { 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {
                    console.log(data);



                })
                .error(function() {
                //    alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

                });
        };

    })

/////////////////////////////////////////////////////////////
////////////************Qualifications***********************************


    .controller('MyCtrl1', ['$scope','$http', 'UserFactory', function ($scope,$http,$cookieStore, UserFactory) {
        $scope.navTitle = "Dash Report";
        $scope.allBu = [
            {

                id: 3,
                libelle: "Energie",
                abreviation: "NRJ",
                responsableId: 199,
                responsableLabel: "GIFFARD François",
                order: 0,
                label: "Energie"
            },
            {

                id: 2,
                libelle: "Finance",
                abreviation: "FIN",
                responsableId: 362,
                responsableLabel: "BIACHE Jean Luc",
                order: 1,
                label: "Finance"
            }];
        /* $http({
            url: baseUrl + 'rest/Ca/findAllBu',
            method: 'GET',
             headers: { 'login' :  localStorage.getItem('login'),
                 'password':  localStorage.getItem('password')
             }
        }).success(function(data) {
                $scope.allBu = data;
  //              $scope.$apply();
            });*/

        $scope.dateDeb = {};
        $scope.dateFin = {};
        $scope.buId = {};
        $scope.customerId = {};
        $scope.test = [];

        $scope.buChanged = function () {
            $scope.customers = [{"prospectClientDTO":{"dateCreation":"2013-10-11T12:36:16.622+02:00","dateModification":"2013-11-28T13:48:22.231+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":143,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":250000,"compteClient":"CACCENTURE","compteCollectif":41110000,"compteIntitule":"ACCENTURE POST-TRADE PROCESSING","employeesNumber":2,"fonctionId":"Président","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 53 23 63 87","isValueMask":false,"value":"01 53 23 63 87"},"headQuarterWebSite":"","id":171,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"POUYFAUCON","numSiret":79268709700016,"numTva":"FR 88 792 687 097  ","numeroRegistreCommerce":792687097,"prenomRepLegal":"Pierre","raisonSocial":"ACCENTURE POST-TRADE PROCESSING SAS","secteurId":6,"secteurLabel":"Services","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-01-24T15:42:44.606+01:00","dateModification":"2013-11-28T13:48:22.519+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":4000000,"compteClient":"CAMUNDI","compteCollectif":41110000,"compteIntitule":"AMUNDI ALTERNATIVE INVESTMENTS","employeesNumber":2,"fonctionId":"Directeur Général","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":146,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"WATSON","numSiret":43961455300014,"numTva":"","numeroRegistreCommerce":439614553,"prenomRepLegal":"Andrew","raisonSocial":"AMUNDI","secteurId":2,"secteurLabel":"Assurances","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.646+02:00","dateModification":"2013-11-28T13:48:22.669+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":12,"businessUnitId":2,"businessUnitLabel":"Finance","capital":0,"compteClient":"CAPRIA","compteCollectif":41110000,"compteIntitule":"APRIA RSA","fonctionId":"Directeur Général","formeJuridiqueId":4,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":101,"idCivilite":1,"lieuRegistreCommerce":"","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"PAULOT","numSiret":77569189202486,"numTva":"","numeroRegistreCommerce":775691892,"prenomRepLegal":"Jean-marie","raisonSocial":"APRIA RSA","secteurId":2,"secteurLabel":"Assurances","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.751+02:00","dateModification":"2013-11-28T13:48:23.016+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":814000,"compteClient":"CASSET","compteCollectif":41110001,"compteIntitule":"ASSET TECHNOLOGY","fonctionId":"Président","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":102,"idCivilite":1,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"BIACHE","numSiret":43216017400020,"numTva":"FR68432160174","numeroRegistreCommerce":432160174,"prenomRepLegal":"Jean-luc","raisonSocial":"ASSET TECHNOLOGY","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-01-24T16:37:34.008+01:00","dateModification":"2014-01-16T16:11:09.373+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1384380,"compteClient":"CAXA","compteCollectif":41110000,"compteIntitule":"AXA INVESTMENT MANAGERS PARIS","employeesNumber":4,"fonctionId":"Global Head of Shared Operational Functions","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 44 45 70 00","isValueMask":false,"value":"01 44 45 70 00"},"headQuarterWebSite":"","id":147,"idCivilite":1,"lieuRegistreCommerce":"Nanterre","marcheId":101,"marcheLabel":"Finance - AXA IM","nomRepLegal":"COQUEMA","numSiret":35353450600046,"numTva":"","numeroRegistreCommerce":353534506,"prenomRepLegal":"Christophe","raisonSocial":"AXA INVESTMENT MANAGERS PARIS","secteurId":2,"secteurLabel":"Assurances","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T13:10:50.652+01:00","dateModification":"2014-01-15T17:42:16.737+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":2.526774896E9,"compteClient":"CBNP","compteCollectif":41110000,"compteIntitule":"BNP PARIBAS","employeesNumber":4,"fonctionId":"Responsable","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":165,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"GENIN","numSiret":66204244900014,"numTva":"","numeroRegistreCommerce":"662 042 449","prenomRepLegal":"Eric","raisonSocial":"BNP PARIBAS","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.760+02:00","dateModification":"2014-01-15T17:37:54.097+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1467,"accountResponsibleName":"GROS Clara","bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":3.23753355E8,"compteClient":"CBNPA","compteCollectif":41110000,"compteIntitule":"BNPP ARBITRAGE","fonctionId":"","formeJuridiqueId":9,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":104,"lieuRegistreCommerce":"Paris","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"","numSiret":39489583300033,"numTva":"FR30394895833","numeroRegistreCommerce":394895833,"prenomRepLegal":"","raisonSocial":"BNP PARIBAS ARBITRAGE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.765+02:00","dateModification":"2013-11-28T13:48:23.744+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":6.4931168E7,"compteClient":"CBNPP","compteCollectif":41110000,"compteIntitule":"BNPP AM","fonctionId":"Chief Operating Officer","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":105,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"BIVILLE","numSiret":31937883200038,"numTva":"FR93319378832","numeroRegistreCommerce":319378832,"prenomRepLegal":"Pascal","raisonSocial":"BNP PARIBAS ASSET MANAGEMENT","secteurId":8,"secteurLabel":"Asset management","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.770+02:00","dateModification":"2014-01-16T17:04:13.927+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":2.526774896E9,"compteClient":"CBNPCIB","compteCollectif":41110000,"compteIntitule":"BNPP CIB","fonctionId":"RESPONSABLE ACHATS","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":106,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"MARTY","numSiret":66204244900014,"numTva":"FR76662042449","numeroRegistreCommerce":662042449,"prenomRepLegal":"Laurent","raisonSocial":"BNP PARIBAS CIB","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-03-01T17:34:33.202+01:00","dateModification":"2013-11-28T13:48:24.085+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":0,"compteClient":"CBNPIPB","compteCollectif":41110000,"compteIntitule":"BNPP INVESTMENT PARTNERS BELGIUM","fonctionId":"Chief Executive Officer Belgium","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":156,"idCivilite":1,"lieuRegistreCommerce":"Brussels","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"LAFONT","numSiret":"","numTva":"","numeroRegistreCommerce":"","prenomRepLegal":"Olivier","raisonSocial":"BNP PARIBAS INVESTMENT PARTNERS BELGIUM","secteurId":1,"secteurLabel":"Finance de marché","statut":"Prospect","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-01T16:09:40.983+01:00","dateModification":"2013-12-20T16:24:41.073+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1203,"accountResponsibleName":"RAMDANE Smahane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.65279835E8,"compteClient":"CBNPSS","compteCollectif":41110000,"compteIntitule":"BNP PARIBAS SECURITIES SERVICES","employeesNumber":4,"fonctionId":"","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":155,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"","numSiret":55210801100065,"numTva":"","numeroRegistreCommerce":"552 108 011","prenomRepLegal":"","raisonSocial":"BNP PARIBAS SECURITIES SERVICES","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.891+02:00","dateModification":"2013-11-28T13:48:24.530+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":12,"businessUnitId":2,"businessUnitLabel":"Finance","capital":4.6722696E8,"compteClient":"CBPCE","compteCollectif":41110000,"compteIntitule":"BPCE","fonctionId":"DIRECTEUR","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":133,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"ROUBIN","numSiret":49345504200025,"numeroRegistreCommerce":493455042,"prenomRepLegal":"LAURENT","raisonSocial":"BPCE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.778+02:00","dateModification":"2013-11-28T13:48:24.668+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":12,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.15786838E9,"compteClient":"CCAISS","compteCollectif":41110000,"compteIntitule":"CAISSE EPARGNE PREVOYANCE IDF","fonctionId":"Membre du Directoire en charge de la Direction Financière","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":108,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"ERRERA","numSiret":38290094200014,"numTva":"FR29382900942","numeroRegistreCommerce":382900942,"prenomRepLegal":"Jean-Michel","raisonSocial":"CAISSE EPARGNE PREVOYANCE IDF","secteurId":7,"secteurLabel":"Banque de détail","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.783+02:00","dateModification":"2013-11-28T13:48:24.827+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":12,"businessUnitId":2,"businessUnitLabel":"Finance","capital":2.30960262E8,"compteClient":"CCALYO","compteCollectif":41110000,"compteIntitule":"CALYON","fonctionId":"Responsable Equity Derivatives & Commodities","formeJuridiqueId":8,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":109,"idCivilite":1,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"MEYER","numSiret":35325481600021,"numTva":"FR78353254816","numeroRegistreCommerce":353254816,"prenomRepLegal":"Philippe","raisonSocial":"CALYON","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-02-14T15:27:17.920+01:00","dateModification":"2013-11-28T13:48:25.010+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.5E7,"compteClient":"CCARMIGNAC","compteCollectif":41110000,"compteIntitule":"CARMIGNAC GESTION","fonctionId":"Chief Operating Officer","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":152,"idCivilite":3,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"RIBOUREL","numSiret":34950167600028,"numTva":"","numeroRegistreCommerce":349501676,"prenomRepLegal":"Caroline","raisonSocial":"CARMIGNAC GESTION","secteurId":2,"secteurLabel":"Assurances","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-07T18:44:22.270+01:00","dateModification":"2014-01-16T10:36:29.694+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":5.94151292E8,"compteClient":"CCNPA","compteCollectif":41110000,"compteIntitule":"CNP ASSURANCES","fonctionId":"Directrice","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":157,"idCivilite":3,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"GIRAUDON","numSiret":34173706200024,"numTva":"FR 59 341 737 062","numeroRegistreCommerce":"341 737 062","prenomRepLegal":"Laurence","raisonSocial":"CNP ASSURANCES","secteurId":2,"secteurLabel":"Assurances","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.797+02:00","dateModification":"2013-11-28T13:48:25.818+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":6.775271784E9,"compteClient":"CCREDI","compteCollectif":41110000,"compteIntitule":"CREDIT AGRICOLE CIB","fonctionId":"Responsable de GIO GIT BCI","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":112,"idCivilite":3,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"SAUVAGE","numSiret":30418770100350,"numTva":"","numeroRegistreCommerce":304187701,"prenomRepLegal":"Valérie","raisonSocial":"CRÉDIT AGRICOLE CIB","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-03-07T19:13:58.380+01:00","dateModification":"2013-12-18T12:04:00.556+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":5.00513102E8,"compteClient":"CDEXIA","compteCollectif":41110000,"compteIntitule":"DEXIA CREDIT LOCAL","fonctionId":"","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 58 58 70 00","isValueMask":false,"value":"01 58 58 70 00"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 58 58 77 77","isValueMask":false,"value":"01 58 58 77 77"},"headQuarterWebSite":"www.dexia-creditlocal.fr","id":158,"idCivilite":1,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"","numSiret":35180404200536,"numTva":"FR 49 351 804 042","numeroRegistreCommerce":"351 804 042","prenomRepLegal":"","raisonSocial":"DEXIA CREDIT LOCAL","secteurId":7,"secteurLabel":"Banque de détail","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.895+02:00","dateModification":"2013-11-28T13:48:26.593+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":3.06918E7,"compteClient":"CEXANE","compteCollectif":41110000,"compteIntitule":"EXANE","fonctionId":"SECRETAIRE GENERAL","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":134,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"ARZANO","numSiret":34204026800043,"numTva":"","numeroRegistreCommerce":342040268,"prenomRepLegal":"Jean","raisonSocial":"EXANE","secteurId":2,"secteurLabel":"Assurances","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T09:48:43.025+01:00","dateModification":"2013-11-28T13:48:27.468+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1203,"accountResponsibleName":"RAMDANE Smahane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":300000,"compteClient":"CGFIT","compteCollectif":41110000,"compteIntitule":"G-FIT","fonctionId":"Président","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 46 59 42 01","isValueMask":false,"value":"01 46 59 42 01"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 46 59 42 00","isValueMask":false,"value":"01 46 59 42 00"},"headQuarterWebSite":"","id":159,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"GRELLARD","numSiret":41865181600054,"numTva":"","numeroRegistreCommerce":"418 651 816","prenomRepLegal":"Philippe","raisonSocial":"G-FIT","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T10:19:20.257+01:00","dateModification":"2013-11-28T13:48:27.284+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":3.412E8,"compteClient":"CGAZT","compteCollectif":41110000,"compteIntitule":"GDF SUEZ TRADING","employeesNumber":4,"fonctionId":"Directeur Général","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":160,"idCivilite":1,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"CHAREYRE","numSiret":"","numTva":"FR 15 437 982 937","numeroRegistreCommerce":"437 982 937","prenomRepLegal":"Pierre","raisonSocial":"GDF SUEZ TRADING","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.904+02:00","dateModification":"2013-11-28T13:48:27.784+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":12,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.686569399E9,"compteClient":"CGROUP","compteCollectif":41110000,"compteIntitule":"GROUPAMA","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":136,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","numSiret":34311513500026,"numeroRegistreCommerce":343115135,"raisonSocial":"GROUPAMA","secteurId":2,"secteurLabel":"Assurances","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T10:41:58.607+01:00","dateModification":"2014-01-06T17:19:37.660+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1878910,"compteClient":"CGROUPAM","compteCollectif":41110000,"compteIntitule":"GROUPAMA ASSET MANAGEMENT","employeesNumber":4,"fonctionId":"Directeur des Activités Support","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 56 59 41 86","isValueMask":false,"value":"01 56 59 41 86"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 44 56 58 10","isValueMask":false,"value":"01 44 56 58 10"},"headQuarterWebSite":"www.groupama-am.fr","id":161,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"MERVAUD","numSiret":38952215200039,"numTva":"","numeroRegistreCommerce":"389 522 152","prenomRepLegal":"Serge","raisonSocial":"GROUPAMA ASSET MANAGEMENT","secteurId":8,"secteurLabel":"Asset management","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-01-18T16:39:23.508+01:00","dateModification":"2014-01-06T17:48:59.277+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":3.37189135E8,"compteClient":"CHSBC","compteCollectif":41110000,"compteIntitule":"HSBC","fonctionId":"Directeur Adjoint","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":145,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"DETOUT","numSiret":"","numTva":"","numeroRegistreCommerce":775670284,"prenomRepLegal":"Pierre","raisonSocial":"HSBC FRANCE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-01T13:21:34.247+01:00","dateModification":"2013-12-30T16:44:37.234+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1203,"accountResponsibleName":"RAMDANE Smahane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.0E9,"compteClient":"CBDF","compteCollectif":41110000,"compteIntitule":"LA BANQUE DE FRANCE","employeesNumber":4,"fonctionId":"","formeJuridiqueId":103,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 72 92 28 22","isValueMask":false,"value":"01 72 92 28 22"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 42 92 42 92","isValueMask":false,"value":"01 42 92 42 92"},"headQuarterWebSite":"www.banque-france.fr","id":154,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"","numSiret":57210489100013,"numTva":"FR 80 572 104 891","numeroRegistreCommerce":"572 104 891","prenomRepLegal":"","raisonSocial":"LA BANQUE DE FRANCE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T12:04:14.726+01:00","dateModification":"2014-01-16T11:05:38.317+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":2.34245409E9,"compteClient":"CBPOST","compteCollectif":41110000,"compteIntitule":"LA BANQUE POSTALE","employeesNumber":4,"fonctionId":"Directeur des Systèmes d'Information","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":162,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"BLIN","numSiret":42110064500033,"numTva":"","numeroRegistreCommerce":"421 100 645","prenomRepLegal":"Philippe","raisonSocial":"LA BANQUE POSTALE","secteurId":7,"secteurLabel":"Banque de détail","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.831+02:00","dateModification":"2014-01-17T09:41:19.720+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.611063E8,"compteClient":"CLYXOR","compteCollectif":41110000,"compteIntitule":"LYXOR AM","fonctionId":"","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":118,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"","numSiret":41886221500013,"numTva":"FR60418862215","numeroRegistreCommerce":418862215,"prenomRepLegal":"","raisonSocial":"LYXOR ASSET MANAGEMENT","secteurId":8,"secteurLabel":"Asset management","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.842+02:00","dateModification":"2013-12-27T09:25:17.524+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1203,"accountResponsibleName":"RAMDANE Smahane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":4.9317534208E9,"compteClient":"CNATIX","compteCollectif":41110000,"compteIntitule":"NATIXIS","fonctionId":"Direction Achats","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":120,"idCivilite":3,"lieuRegistreCommerce":"Paris","marcheId":102,"marcheLabel":"Finance - Natixis","nomRepLegal":"BUENO","numSiret":54204452400016,"numTva":"FR73542044524","numeroRegistreCommerce":542044524,"prenomRepLegal":"Martine","raisonSocial":"NATIXIS","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T12:29:17.149+01:00","dateModification":"2013-12-20T17:28:52.438+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1203,"accountResponsibleName":"RAMDANE Smahane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":5.043460476E7,"compteClient":"CNATIXAM","compteCollectif":41110000,"compteIntitule":"NATIXIS AM","employeesNumber":4,"fonctionId":"Directeur des Opérations","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 78 40 60 80","isValueMask":false,"value":"01 78 40 60 80"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 78 40 80 00","isValueMask":false,"value":"01 78 40 80 00"},"headQuarterWebSite":"www.am.natixis.com","id":163,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":102,"marcheLabel":"Finance - Natixis","nomRepLegal":"FOURNELLE","numSiret":32945073800078,"numTva":"","numeroRegistreCommerce":329450738,"prenomRepLegal":"Franck","raisonSocial":"NATIXIS ASSET MANAGEMENT","secteurId":8,"secteurLabel":"Asset management","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-04-12T11:32:28.974+02:00","dateModification":"2013-11-28T13:48:30.258+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":6.0E7,"compteClient":"CODDO","compteCollectif":41110000,"compteIntitule":"ODDO ET CIE","fonctionId":"DIRECTEUR ASSOCIE","headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":166,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"DE LEUSSE","numSiret":"","numTva":"","numeroRegistreCommerce":652027384,"prenomRepLegal":"Guy","raisonSocial":"ODDO ET CIE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T12:51:59.627+01:00","dateModification":"2013-11-28T13:48:31.932+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":80000,"compteClient":"CSOAT","compteCollectif":41110000,"compteIntitule":"SOAT","fonctionId":"Directeur Associé","formeJuridiqueId":3,"headQuarterEmail":"info@so-at.com","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 44 75 05 25","isValueMask":false,"value":"01 44 75 05 25"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 44 75 42 56","isValueMask":false,"value":"01 44 75 42 56"},"headQuarterWebSite":"","id":164,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"AZRIA","numSiret":43335376000039,"numTva":"","numeroRegistreCommerce":"433 353 760","prenomRepLegal":"Michel","raisonSocial":"SOAT","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.866+02:00","dateModification":"2014-01-16T15:11:29.962+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":9.7009998875E8,"compteClient":"CSOCIE","compteCollectif":41110000,"compteIntitule":"SOCIETE GENERALE","fonctionId":"","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":126,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"","numSiret":55212022200013,"numTva":"FR27552120222","numeroRegistreCommerce":552120222,"prenomRepLegal":"","raisonSocial":"SOCIETE GENERALE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.919+02:00","dateModification":"2013-11-28T13:48:32.266+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":6.1623908E7,"compteClient":"CSODEXO","compteCollectif":41110000,"compteIntitule":"SODEXO","fonctionId":"","headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":140,"lieuRegistreCommerce":"Nanterre","marcheId":6,"marcheLabel":"Services","nomRepLegal":"","numSiret":34039306500131,"numTva":"","numeroRegistreCommerce":340393065,"prenomRepLegal":"","raisonSocial":"SODEXO SOLUTIONS DE MOTIVATION FRANCE","secteurId":6,"secteurLabel":"Services","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-10-08T15:47:11.447+02:00","dateModification":"2013-11-28T13:48:32.799+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":362,"accountResponsibleName":"BIACHE Jean Luc","bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":40000,"compteClient":"CTALCANADA","compteCollectif":41110001,"compteIntitule":"TALAN CANADA","employeesNumber":1,"fonctionId":"Président","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":170,"idCivilite":1,"lieuRegistreCommerce":"","marcheId":6,"marcheLabel":"Services","nomRepLegal":"HOUAS","numSiret":"","numTva":"","numeroRegistreCommerce":"","prenomRepLegal":"Mehdi","raisonSocial":"TALAN CONSEILS CANADA","statut":"Client","teteGroupe":"n"}}];

//            console.log($scope.selectedBu);
//            $scope.customers = UserFactory.customers({buId: $scope.selectedBu.businessUnitDTO.id}, function (response) {
//            });
          /*  $http({
                url: baseUrl + 'rest/Ca/loadCust/'+$scope.selectedBu.businessUnitDTO.id,
                method: 'GET',
                headers: { 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {
                    $scope.customers = data;
                    $scope.$apply();

                });*/
        };
        $scope.showConfirm = function () {
            $scope.evolCa = [
                {
                    key: "Cumulative Return",
                    values: [["2012",6617198.884755416],["2013",8762491.367155015],["2014",4381277.056320357]]

                }
            ];
//            UserFactory.evolCa({buId: $scope.selectedBu.businessUnitDTO.id, customerId: $scope.SelectedClients.prospectClientDTO.id ,dateDeb: $scope.dateDeb, dateFin: $scope.dateFin},function (response) {
//                    $scope.evol = response ;
//            });
            /* for (var i=0; i<authorities.length; i++) {
             if (authorities[i] == 'ROLE_CONSULT_RAPPORTS_PROSPECT') {

             }
             }*/
          /*   $http({

                 url: baseUrl +'graniteamf/chiffreAffaire/Evolution/'+$scope.selectedBu.businessUnitDTO.id+"/"+$scope.SelectedClients.prospectClientDTO.id+"/"+$scope.dateDeb+"/"+$scope.dateFin,
                 method: 'GET',
                 headers: { 'login' :  localStorage.getItem('login'),
                     'password':  localStorage.getItem('password')
                 }
            }).success(function(data) {
                     console.log(data);
                     $scope.test = data;
                     $scope.evolCa = [
                         {
                             key: "Cumulative Return",
                             values: $scope.test
                         }
                     ];
                     $scope.colorFunction = function () {
                         return function(d){
                             return '#0000FF' ;
                         }
                     }
                     console.log($scope.evolCa);
                 })
                 .error(function() {
                     alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

                 });*/
        };

    }])

    .controller('ExampleCtrl', ['$scope','$state','$http', function ($scope,$state,$http) {
        $scope.niveau="niv1";

        $scope.ca = function () {
          /*  for (var i=0; i<authorities.length; i++) {
                if (authorities[i] == 'ROLE_CONSULT_RAPPORTS_PROSPECT') {

                }*/
            $scope.test = [{"ca":2836047.714367524,"label":"Télécom","id":1,"customerCAs":[{"id":107,"label":"BOUYGUES TELECOM","ca":2230904.135399199,"followUpCa":[{"id":1,"label":"AMOA","ca":1453751.879134957},{"id":2,"label":"AMOE","ca":24411.15106180308},{"id":3,"label":"Support","ca":38641.58770316511},{"id":6,"label":"PMO","ca":181398.2978889346},{"id":7,"label":"PMO / AMOA","ca":399417.1935788263},{"id":8,"label":"Processus","ca":50374.00304998501},{"id":9,"label":"Recette","ca":10706.189959261084},{"id":10,"label":"Urbanisme / Architecture","ca":15159.835149249977},{"id":100,"label":"Gestion de projet","ca":55495.90980166099},{"id":101,"label":"MOA / MOE","ca":1548.088071355596}],"prospectBillingAdrsCa":[{"id":405,"label":"","ca":2230904.135399199}]},{"id":115,"label":"FRANCE TÉLÉCOM","ca":84503.36857342396,"followUpCa":[{"id":1,"label":"AMOA","ca":58144.56995222486},{"id":5,"label":"Gouvernance","ca":26358.798621199094},{"id":6,"label":"PMO","ca":0.0}],"prospectBillingAdrsCa":[{"id":427,"label":"France TELECOM - CSPCF","ca":84503.36857342396}]},{"id":119,"label":"MONACO TELECOM","ca":14259.782382985577,"followUpCa":[{"id":1,"label":"AMOA","ca":90408.7462741876}],"prospectBillingAdrsCa":[{"id":435,"label":"MONACO TELECOM","ca":14259.782382985577}]},{"id":122,"label":"ORANGE","ca":213115.48495837316,"followUpCa":[{"id":5,"label":"Gouvernance","ca":49998.43448753816},{"id":6,"label":"PMO","ca":47291.076136571355},{"id":7,"label":"PMO / AMOA","ca":39677.01044306163}],"prospectBillingAdrsCa":[{"id":441,"label":"CSPCF","ca":18302.525095618304},{"id":941,"label":"CSPCF","ca":194812.95986275485}]},{"id":123,"label":"ORANGE TUNISIE","ca":115150.7514088391,"followUpCa":[{"id":1,"label":"AMOA","ca":79500.74799515773},{"id":2,"label":"AMOE","ca":35650.00341368137}],"prospectBillingAdrsCa":[{"id":443,"label":"","ca":115150.7514088391}]},{"id":124,"label":"RÉSEAU CLUBS BOUYGUES TÉLÉCOM","ca":95933.73491681177,"followUpCa":[{"id":1,"label":"AMOA","ca":91713.12383255918},{"id":7,"label":"PMO / AMOA","ca":4220.611084252584}],"prospectBillingAdrsCa":[{"id":445,"label":"RÉSEAU CLUBS BOUYGUES TÉLÉCOM","ca":95933.73491681177}]},{"id":130,"label":"TUNISIANA","ca":0.0,"followUpCa":[{"id":1,"label":"AMOA","ca":0.0},{"id":4,"label":"AME","ca":0.0}],"prospectBillingAdrsCa":[{"id":467,"label":"TUNISIANA","ca":0.0}]},{"id":167,"label":"SFR","ca":28149.12410232705,"followUpCa":[{"id":7,"label":"PMO / AMOA","ca":28149.12410232705}],"prospectBillingAdrsCa":[{"id":1489,"label":"Comptabilité Fournisseurs","ca":28149.12410232705}]},{"id":169,"label":"EMAGINE CONSULTING","ca":17684.0650880439,"followUpCa":[{"id":1,"label":"AMOA","ca":241261.99406397267}],"prospectBillingAdrsCa":[{"id":1516,"label":"Comptabilité Fournisseurs","ca":17684.0650880439}]},{"id":172,"label":"APTECH","ca":36347.26753752023,"followUpCa":[],"prospectBillingAdrsCa":[{"id":1769,"label":"","ca":36347.26753752023}]}]},{"ca":1.8118040511526015E7,"label":"Finance","id":2,"customerCAs":[{"id":102,"label":"ASSET TECHNOLOGY","ca":199578.12878468263,"followUpCa":[{"id":2,"label":"AMOE","ca":4430.591897346322},{"id":3,"label":"Support","ca":5329.902476068161},{"id":101,"label":"MOA / MOE","ca":2586.9729728596285}],"prospectBillingAdrsCa":[{"id":395,"label":"ASSET TECHNOLOGY","ca":133718.7233978833},{"id":602,"label":"ASSET TECHNOLOGY","ca":65859.40538679934}]},{"id":104,"label":"BNP PARIBAS ARBITRAGE","ca":768205.5158432408,"followUpCa":[{"id":1,"label":"AMOA","ca":491178.0599242076},{"id":2,"label":"AMOE","ca":22745.4358425813},{"id":3,"label":"Support","ca":117131.5733640352},{"id":101,"label":"MOA / MOE","ca":137150.44671241663}],"prospectBillingAdrsCa":[{"id":399,"label":"BNP PARIBAS ARBITRAGE","ca":222956.41226155212},{"id":907,"label":"ACI CEA01A1","ca":237123.3151434446},{"id":1166,"label":"BNP PARIBAS ARBITRAGE","ca":771.71253176406},{"id":907,"label":"ACI CEA01A1","ca":22243.617333996084},{"id":1166,"label":"BNP PARIBAS ARBITRAGE","ca":501.8185085852166},{"id":399,"label":"BNP PARIBAS ARBITRAGE","ca":78861.81169287389},{"id":907,"label":"ACI CEA01A1","ca":138354.25644005652}]},{"id":105,"label":"BNP PARIBAS ASSET MANAGEMENT","ca":47633.21844963355,"followUpCa":[{"id":1,"label":"AMOA","ca":307170.9995819946}],"prospectBillingAdrsCa":[{"id":401,"label":"BNP PARIBAS ASSET MANAGEMENT","ca":47633.21844963355}]},{"id":106,"label":"BNP PARIBAS CIB","ca":469384.7701467696,"followUpCa":[{"id":2,"label":"AMOE","ca":95111.56352019176},{"id":3,"label":"Support","ca":77310.98762004645},{"id":101,"label":"MOA / MOE","ca":37424.43787417028}],"prospectBillingAdrsCa":[{"id":403,"label":"BNP PARIBAS CIB","ca":56564.58871817911},{"id":902,"label":"BNPP CIB Procurement","ca":320358.75733349717}]},{"id":108,"label":"CAISSE EPARGNE PREVOYANCE IDF","ca":30987.533799046676,"followUpCa":[{"id":1,"label":"AMOA","ca":1354346.3486319808}],"prospectBillingAdrsCa":[{"id":407,"label":"CAISSE EPARGNE PREVOYANCE IDF","ca":30987.533799046676}]},{"id":112,"label":"CRÉDIT AGRICOLE CIB","ca":1524693.0138708563,"followUpCa":[{"id":2,"label":"AMOE","ca":110031.48563874196},{"id":7,"label":"PMO / AMOA","ca":79974.67506993563},{"id":101,"label":"MOA / MOE","ca":11328.038329244599}],"prospectBillingAdrsCa":[{"id":415,"label":"","ca":62339.1674591694},{"id":416,"label":"","ca":1261019.6473737648},{"id":415,"label":"","ca":133241.2772818679},{"id":1605,"label":"GSP/ICI Facturation - SQC G02 428","ca":56764.8834268097}]},{"id":118,"label":"LYXOR ASSET MANAGEMENT","ca":1787185.0736044808,"followUpCa":[{"id":1,"label":"AMOA","ca":946225.5882981467},{"id":2,"label":"AMOE","ca":100948.58551521784},{"id":3,"label":"Support","ca":431320.7372492635},{"id":8,"label":"Processus","ca":49319.04990728951},{"id":101,"label":"MOA / MOE","ca":259371.11263456344}],"prospectBillingAdrsCa":[{"id":433,"label":"DEVL/HUB/PRO","ca":1498870.4438724522}]},{"id":120,"label":"NATIXIS","ca":582218.6432370029,"followUpCa":[{"id":1,"label":"AMOA","ca":126621.89503012218},{"id":2,"label":"AMOE","ca":431981.0548537218},{"id":101,"label":"MOA / MOE","ca":23615.69335315888}],"prospectBillingAdrsCa":[{"id":1203,"label":"NATIXIS","ca":3442.9627474397416},{"id":1221,"label":"NATIXIS","ca":9385.179431643344},{"id":1242,"label":"NATIXIS","ca":21103.18107569587},{"id":1639,"label":"CSP Fournisseur","ca":29852.514687385417},{"id":1832,"label":"Florence BESSIS","ca":60633.58819618816},{"id":437,"label":"Etudes BFI - Actions Back Office Commodities","ca":87127.84338218557},{"id":1223,"label":"NATIXIS","ca":57569.1756220693},{"id":1224,"label":"NATIXIS","ca":216579.94146575732},{"id":1640,"label":"CSP Fournisseur","ca":20591.29336240004},{"id":1766,"label":"","ca":44767.67340706199},{"id":1827,"label":"CPS Fournisseurs","ca":5345.127614247616}]},{"id":126,"label":"SOCIETE GENERALE","ca":8832398.340255072,"followUpCa":[{"id":1,"label":"AMOA","ca":5083881.7461685},{"id":2,"label":"AMOE","ca":189041.00742960355},{"id":3,"label":"Support","ca":2608871.2546098744},{"id":5,"label":"Gouvernance","ca":69554.95276803154},{"id":6,"label":"PMO","ca":151741.84420450177},{"id":7,"label":"PMO / AMOA","ca":201323.53465535928},{"id":100,"label":"Gestion de projet","ca":1178.395191393792},{"id":101,"label":"MOA / MOE","ca":526805.6052278075}],"prospectBillingAdrsCa":[{"id":450,"label":"ACFI/ACR/EXP","ca":1440892.142567982},{"id":451,"label":"DEVL/HUB/PRO - BU S0001","ca":729276.5613175939},{"id":457,"label":"DEVL/HUB/PRO - BU S0001","ca":899294.8124638243},{"id":458,"label":"DEVL/HUB/PRO - BU S0001","ca":292672.6961668385},{"id":460,"label":"DEVL/HUB/PRO - BU S0001","ca":48433.54028752771},{"id":461,"label":"DEVL/HUB/PRO - BU S0001","ca":533711.56052324},{"id":684,"label":"DEVL/HUB/PRO - BU S0001","ca":708343.572792839},{"id":961,"label":"DEVL/HUB/PRO - BU S0001","ca":63281.745226006045},{"id":962,"label":"DEVL/HUB/PRO - BU S0001","ca":47754.984825616695},{"id":964,"label":"DEVL/HUB/PRO - BU S0001","ca":106711.65217956532},{"id":1277,"label":"SOCIETE GENERALE","ca":69822.19724744555},{"id":1298,"label":"DEVL/HUB/PRO","ca":64683.341653598516},{"id":1433,"label":"DEVL/HUB/PRO","ca":49045.47952013091},{"id":451,"label":"DEVL/HUB/PRO - BU S0001","ca":120055.98105300684},{"id":566,"label":"DEVL/HUB/PRO - BU S0001","ca":21427.922860230286},{"id":965,"label":"DEVL/HUB/PRO - BU S0001","ca":11701.640161983685},{"id":1205,"label":"SOCIETE GENERALE","ca":35855.46335438274},{"id":450,"label":"ACFI/ACR/EXP","ca":526940.3700381075},{"id":451,"label":"DEVL/HUB/PRO - BU S0001","ca":643533.8693952701},{"id":460,"label":"DEVL/HUB/PRO - BU S0001","ca":68147.02244639391},{"id":461,"label":"DEVL/HUB/PRO - BU S0001","ca":20898.8952445984},{"id":684,"label":"DEVL/HUB/PRO - BU S0001","ca":1344816.3446487277},{"id":964,"label":"DEVL/HUB/PRO - BU S0001","ca":4534.7528367769},{"id":451,"label":"DEVL/HUB/PRO - BU S0001","ca":69554.95276803154},{"id":1885,"label":"DEVL/HUB/PRO","ca":0.0},{"id":461,"label":"DEVL/HUB/PRO - BU S0001","ca":151741.84420450177},{"id":451,"label":"DEVL/HUB/PRO - BU S0001","ca":80341.39947049558},{"id":962,"label":"DEVL/HUB/PRO - BU S0001","ca":33251.65386587387},{"id":1433,"label":"DEVL/HUB/PRO","ca":87730.48131898981},{"id":451,"label":"DEVL/HUB/PRO - BU S0001","ca":1178.395191393792},{"id":453,"label":"DEVL/HUB/PRO - BU S0001","ca":70363.19727140949},{"id":457,"label":"DEVL/HUB/PRO - BU S0001","ca":61746.05549161329},{"id":460,"label":"DEVL/HUB/PRO - BU S0001","ca":57288.331201456065},{"id":1296,"label":"DEVL/HUB/PRO","ca":25789.994942983612}]},{"id":128,"label":"TALAN LLC","ca":5450.810245245706,"followUpCa":[{"id":1,"label":"AMOA","ca":5450.810245245706}],"prospectBillingAdrsCa":[{"id":465,"label":"TALAN LLC","ca":5450.810245245706}]},{"id":134,"label":"EXANE","ca":185055.00226316502,"followUpCa":[{"id":2,"label":"AMOE","ca":8698.199303448197},{"id":5,"label":"Gouvernance","ca":128708.62924286623},{"id":6,"label":"PMO","ca":47648.1737168506}],"prospectBillingAdrsCa":[{"id":475,"label":"EXANE","ca":185055.00226316502}]},{"id":139,"label":"ASSET ALPHA","ca":97800.85721257163,"followUpCa":[{"id":1,"label":"AMOA","ca":22198.131694082636},{"id":2,"label":"AMOE","ca":55367.29323669687},{"id":3,"label":"Support","ca":20235.43228179214}],"prospectBillingAdrsCa":[{"id":914,"label":"COMPTABILITE FOURNISSEURS","ca":97800.85721257163}]},{"id":140,"label":"SODEXO SOLUTIONS DE MOTIVATION FRANCE","ca":0.0,"followUpCa":[{"id":1,"label":"AMOA","ca":0.0},{"id":2,"label":"AMOE","ca":0.0}],"prospectBillingAdrsCa":[{"id":486,"label":"SODEXO SOLUTIONS DE MOTIVATION France","ca":0.0}]},{"id":145,"label":"HSBC FRANCE","ca":164114.13303510283,"followUpCa":[{"id":1,"label":"AMOA","ca":128436.20801527987},{"id":2,"label":"AMOE","ca":30995.300022549913},{"id":101,"label":"MOA / MOE","ca":4682.624997273068}],"prospectBillingAdrsCa":[{"id":881,"label":"HSBC FRANCE","ca":59822.749447878465},{"id":1237,"label":"HSBC France","ca":99608.75858995132},{"id":881,"label":"HSBC FRANCE","ca":4682.624997273068}]},{"id":146,"label":"AMUNDI","ca":199306.5092782709,"followUpCa":[{"id":1,"label":"AMOA","ca":31443.75246601884},{"id":101,"label":"MOA / MOE","ca":167862.75681225208}],"prospectBillingAdrsCa":[{"id":916,"label":"","ca":116415.42014262403}]},{"id":147,"label":"AXA INVESTMENT MANAGERS PARIS","ca":1349855.9250700984,"followUpCa":[{"id":1,"label":"AMOA","ca":522126.90053678973},{"id":2,"label":"AMOE","ca":67190.72792294451},{"id":3,"label":"Support","ca":22742.58056647307},{"id":7,"label":"PMO / AMOA","ca":95814.79782881102},{"id":101,"label":"MOA / MOE","ca":641980.91821508}],"prospectBillingAdrsCa":[{"id":926,"label":"AXA INVESTMENT MANAGERS PARIS","ca":950508.9699152182}]},{"id":152,"label":"CARMIGNAC GESTION","ca":36102.05046976918,"followUpCa":[{"id":1,"label":"AMOA","ca":33036.921013472616},{"id":101,"label":"MOA / MOE","ca":3065.129456296562}],"prospectBillingAdrsCa":[{"id":980,"label":"CARMIGNAC GESTION","ca":36102.05046976918}]},{"id":154,"label":"LA BANQUE DE FRANCE","ca":145464.92106462366,"followUpCa":[{"id":1,"label":"AMOA","ca":381523.568351951}],"prospectBillingAdrsCa":[{"id":1019,"label":"BANQUE DE France","ca":10669.589948914932},{"id":1431,"label":"Banque de France","ca":68903.90895293561},{"id":1463,"label":"DPMA-SAMOA-21-1159","ca":41054.74259025419}]},{"id":155,"label":"BNP PARIBAS SECURITIES SERVICES","ca":485324.27409156936,"followUpCa":[{"id":2,"label":"AMOE","ca":10918.923040698277},{"id":101,"label":"MOA / MOE","ca":238346.70376354374}],"prospectBillingAdrsCa":[{"id":1022,"label":"Grands Moulins de Pantin","ca":128002.01202663596},{"id":1024,"label":"","ca":44310.62887412258},{"id":1290,"label":"","ca":7636.635342314838},{"id":1523,"label":"ACI CPA02B1","ca":10918.923040698277},{"id":1022,"label":"Grands Moulins de Pantin","ca":8754.199846377593},{"id":1023,"label":"","ca":81770.19843184396}]},{"id":156,"label":"BNP PARIBAS INVESTMENT PARTNERS BELGIUM","ca":17626.24653014587,"followUpCa":[{"id":1,"label":"AMOA","ca":52100.31593783523}],"prospectBillingAdrsCa":[{"id":1032,"label":"BNP PARIBAS INVESTMENT PARTNERS BELGIUM SA","ca":17626.24653014587}]},{"id":157,"label":"CNP ASSURANCES","ca":50364.29032424693,"followUpCa":[{"id":3,"label":"Support","ca":15890.22091655757}],"prospectBillingAdrsCa":[{"id":1047,"label":"CNP ASSURANCES","ca":15890.22091655757}]},{"id":158,"label":"DEXIA CREDIT LOCAL","ca":119676.30511302689,"followUpCa":[{"id":1,"label":"AMOA","ca":7622.959876656543},{"id":2,"label":"AMOE","ca":111393.3817283269},{"id":101,"label":"MOA / MOE","ca":659.9635080434402}],"prospectBillingAdrsCa":[{"id":1050,"label":"DEXIA CREDIT LOCAL","ca":119016.34160498345}]},{"id":159,"label":"G-FIT","ca":24883.509818837065,"followUpCa":[{"id":2,"label":"AMOE","ca":9791.898535378275},{"id":101,"label":"MOA / MOE","ca":90686.90843173306}],"prospectBillingAdrsCa":[{"id":1057,"label":"G-FIT","ca":9791.898535378275}]},{"id":160,"label":"GDF SUEZ TRADING","ca":75595.29714827426,"followUpCa":[],"prospectBillingAdrsCa":[{"id":1061,"label":"GDF SUEZ TRADING","ca":60266.34325325491}]},{"id":161,"label":"GROUPAMA ASSET MANAGEMENT","ca":119238.90531973445,"followUpCa":[{"id":1,"label":"AMOA","ca":7084.966899105345},{"id":2,"label":"AMOE","ca":16748.514393828773},{"id":3,"label":"Support","ca":89667.22099069507},{"id":101,"label":"MOA / MOE","ca":5738.203036105261}],"prospectBillingAdrsCa":[{"id":1069,"label":"Groupama Asset Management","ca":113500.70228362919}]},{"id":162,"label":"LA BANQUE POSTALE","ca":215803.49801781122,"followUpCa":[{"id":1,"label":"AMOA","ca":33143.20452510379},{"id":2,"label":"AMOE","ca":68124.77952757847},{"id":101,"label":"MOA / MOE","ca":114535.51396512895}],"prospectBillingAdrsCa":[{"id":1078,"label":"La Banque Postale","ca":101267.98405268227},{"id":1700,"label":"","ca":55155.28525637932}]},{"id":163,"label":"NATIXIS ASSET MANAGEMENT","ca":339036.09202202177,"followUpCa":[{"id":1,"label":"AMOA","ca":236541.4843083359},{"id":2,"label":"AMOE","ca":62713.0156206247},{"id":101,"label":"MOA / MOE","ca":39781.59209306118}],"prospectBillingAdrsCa":[{"id":1084,"label":"NATIXIS ASSET MANAGEMENT","ca":226018.94291858195}]},{"id":164,"label":"SOAT","ca":100895.41915382713,"followUpCa":[{"id":1,"label":"AMOA","ca":49413.25131207703},{"id":101,"label":"MOA / MOE","ca":51482.16784175009}],"prospectBillingAdrsCa":[{"id":1088,"label":"SOAT","ca":49413.25131207703}]},{"id":165,"label":"BNP PARIBAS","ca":20788.29095459546,"followUpCa":[{"id":1,"label":"AMOA","ca":95129.35859012425}],"prospectBillingAdrsCa":[{"id":1091,"label":"BNP PARIBAS - SA","ca":2084.137441939676},{"id":1498,"label":"GRM","ca":3998.2612209860276}]},{"id":166,"label":"ODDO ET CIE","ca":79659.57385636172,"followUpCa":[{"id":6,"label":"PMO","ca":5318.5062208329355}],"prospectBillingAdrsCa":[{"id":1373,"label":"Comptabilité Fournisseurs","ca":79659.57385636172}]},{"id":171,"label":"ACCENTURE POST-TRADE PROCESSING SAS","ca":43714.362545930744,"followUpCa":[{"id":3,"label":"Support","ca":43714.362545930744}],"prospectBillingAdrsCa":[{"id":1641,"label":"APTP SAS","ca":43714.362545930744}]}]},{"ca":2.3674651630564064E7,"label":"Energie","id":3,"customerCAs":[{"id":103,"label":"ATANEURE","ca":40009.565030194346,"followUpCa":[{"id":1,"label":"AMOA","ca":705440.186888609}],"prospectBillingAdrsCa":[{"id":397,"label":"ATANEURE","ca":40009.565030194346}]},{"id":113,"label":"EDF","ca":1187912.8988528363,"followUpCa":[{"id":2,"label":"AMOE","ca":278389.81416444643},{"id":6,"label":"PMO","ca":100688.47608725533},{"id":10,"label":"Urbanisme / Architecture","ca":143403.98674272}],"prospectBillingAdrsCa":[{"id":420,"label":"EDF D.S.P.","ca":644899.597175008},{"id":423,"label":"EDF SA","ca":20531.024683406555},{"id":420,"label":"EDF D.S.P.","ca":252759.88807417802},{"id":423,"label":"EDF SA","ca":25629.926090268436},{"id":420,"label":"EDF D.S.P.","ca":244092.46282997535}]},{"id":114,"label":"ERDF","ca":1.8861065346998513E7,"followUpCa":[{"id":1,"label":"AMOA","ca":1.8090533296730056E7},{"id":2,"label":"AMOE","ca":233859.17514360364},{"id":7,"label":"PMO / AMOA","ca":273722.25804274774},{"id":8,"label":"Processus","ca":32508.714293304805},{"id":9,"label":"Recette","ca":97204.73223856854},{"id":10,"label":"Urbanisme / Architecture","ca":133237.1705502296}],"prospectBillingAdrsCa":[{"id":3,"label":"Pôle comptage","ca":238481.20259044028},{"id":425,"label":"SITE COMPTABLE D'ARRAS ","ca":1.8056666594147757E7},{"id":3,"label":"Pôle comptage","ca":208882.5214380954},{"id":425,"label":"SITE COMPTABLE D'ARRAS ","ca":97348.45089795715},{"id":3,"label":"Pôle comptage","ca":24454.527797885028},{"id":425,"label":"SITE COMPTABLE D'ARRAS ","ca":72750.2044406835},{"id":3,"label":"Pôle comptage","ca":18830.412141680765},{"id":425,"label":"SITE COMPTABLE D'ARRAS ","ca":114406.75840854885}]},{"id":116,"label":"GDF SUEZ","ca":996356.3227350711,"followUpCa":[{"id":1,"label":"AMOA","ca":3490920.7688690554}],"prospectBillingAdrsCa":[{"id":429,"label":"GDF SUEZ","ca":996356.3227350711}]},{"id":117,"label":"GRDF","ca":1660740.4435070422,"followUpCa":[],"prospectBillingAdrsCa":[{"id":431,"label":"GRDF Service Gaz","ca":1660740.4435070422}]},{"id":127,"label":"SOPRA GROUP","ca":872602.5802048716,"followUpCa":[{"id":2,"label":"AMOE","ca":62771.40602122707}],"prospectBillingAdrsCa":[{"id":463,"label":"SOPRA GROUP","ca":32292.009247183803},{"id":910,"label":"","ca":98360.02837893744},{"id":911,"label":"","ca":703171.9650008206},{"id":463,"label":"SOPRA GROUP","ca":38778.57757792988}]},{"id":144,"label":"RESEAU DE TRANSPORT D'ELECTRICITE","ca":38021.03822969361,"followUpCa":[{"id":100,"label":"Gestion de projet","ca":31971.644792240055}],"prospectBillingAdrsCa":[{"id":858,"label":"Traitement LADSERVICES ","ca":38021.03822969361}]},{"id":149,"label":"REXEL FRANCE SAS","ca":17943.435005843636,"followUpCa":[],"prospectBillingAdrsCa":[{"id":929,"label":"","ca":17943.435005843636}]}]},{"ca":56693.96614135972,"label":"Services","id":4,"customerCAs":[{"id":102,"label":"ASSET TECHNOLOGY","ca":33870.24384776862,"followUpCa":[{"id":1,"label":"AMOA","ca":39706.005188336465}],"prospectBillingAdrsCa":[{"id":395,"label":"ASSET TECHNOLOGY","ca":33870.24384776862}]},{"id":111,"label":"CONSORTIUM STADE DE FRANCE","ca":5835.76134056784,"followUpCa":[],"prospectBillingAdrsCa":[{"id":413,"label":"CONSORTIUM STADE DE FRANCE","ca":5835.76134056784}]},{"id":128,"label":"TALAN LLC","ca":4284.80844346806,"followUpCa":[{"id":3,"label":"Support","ca":4284.80844346806}],"prospectBillingAdrsCa":[{"id":465,"label":"TALAN LLC","ca":4284.80844346806}]},{"id":139,"label":"ASSET ALPHA","ca":12703.152509555193,"followUpCa":[{"id":1,"label":"AMOA","ca":55981.69035917614}],"prospectBillingAdrsCa":[{"id":484,"label":"ASSET ALPHA","ca":12703.152509555193}]},{"id":143,"label":"TALAN","ca":0.0,"followUpCa":[],"prospectBillingAdrsCa":[]}]},{"ca":114825.72454073402,"label":"Transport","id":5,"customerCAs":[{"id":125,"label":"SNCF","ca":28326.15230605941,"followUpCa":[],"prospectBillingAdrsCa":[{"id":447,"label":"SNCF","ca":28326.15230605941}]},{"id":153,"label":"CEREZA CONSEIL","ca":86499.57223467459,"followUpCa":[{"id":3,"label":"Support","ca":64771.42281569543},{"id":101,"label":"MOA / MOE","ca":6775.76387541764}],"prospectBillingAdrsCa":[{"id":1341,"label":"Service Comptabilité ","ca":14952.38554356153},{"id":1037,"label":"Comptabilité Fournisseurs","ca":39015.76073919426},{"id":1341,"label":"Service Comptabilité ","ca":32531.42595191881}]}]},{"ca":436807.3031342935,"label":"TTI","id":6,"customerCAs":[{"id":121,"label":"OALIA","ca":310321.7071292919,"followUpCa":[{"id":1,"label":"AMOA","ca":310321.7071292919}],"prospectBillingAdrsCa":[{"id":439,"label":"OALIA","ca":310321.7071292919}]},{"id":123,"label":"ORANGE TUNISIE","ca":126485.59600500159,"followUpCa":[{"id":2,"label":"AMOE","ca":20344.76334040867},{"id":3,"label":"Support","ca":106140.83266459292},{"id":101,"label":"MOA / MOE","ca":0.0}],"prospectBillingAdrsCa":[{"id":443,"label":"","ca":126485.59600500159}]},{"id":126,"label":"SOCIETE GENERALE","ca":0.0,"followUpCa":[{"id":3,"label":"Support","ca":0.0}],"prospectBillingAdrsCa":[{"id":451,"label":"DEVL/HUB/PRO - BU S0001","ca":0.0}]},{"id":130,"label":"TUNISIANA","ca":0.0,"followUpCa":[{"id":1,"label":"AMOA","ca":1036584.0210036852}],"prospectBillingAdrsCa":[{"id":467,"label":"TUNISIANA","ca":0.0}]}]},{"ca":1036584.0210036852,"label":"Secteur public","id":7,"customerCAs":[{"id":141,"label":"MINISTÈRE DE LA JUSTICE","ca":850850.899007275,"followUpCa":[],"prospectBillingAdrsCa":[{"id":564,"label":"Ministère de la Justice","ca":850850.899007275}]},{"id":142,"label":"MINISTÈRE DE L'ÉCOLOGIE DU DEVELOPPEMENT DURABLE","ca":32666.5843868628,"followUpCa":[],"prospectBillingAdrsCa":[{"id":643,"label":"","ca":32666.5843868628}]},{"id":150,"label":"MINISTÈRE DE L'ÉDUCATION NATIONALE","ca":153066.53760954732,"followUpCa":[],"prospectBillingAdrsCa":[{"id":1314,"label":"","ca":42188.399132355094},{"id":1459,"label":"Mission achats ","ca":110878.13847719222}]}]}];

            out = [{"ca":2836047.714367524,"label":"Télécom","id":1,"customerCAs":[{"id":107,"label":"BOUYGUES TELECOM","ca":2230904.135399199,"followUpCa":[{"id":1,"label":"AMOA","ca":1453751.879134957},{"id":2,"label":"AMOE","ca":24411.15106180308},{"id":3,"label":"Support","ca":38641.58770316511},{"id":6,"label":"PMO","ca":181398.2978889346},{"id":7,"label":"PMO / AMOA","ca":399417.1935788263},{"id":8,"label":"Processus","ca":50374.00304998501},{"id":9,"label":"Recette","ca":10706.189959261084},{"id":10,"label":"Urbanisme / Architecture","ca":15159.835149249977},{"id":100,"label":"Gestion de projet","ca":55495.90980166099},{"id":101,"label":"MOA / MOE","ca":1548.088071355596}],"prospectBillingAdrsCa":[{"id":405,"label":"","ca":2230904.135399199}]},{"id":115,"label":"FRANCE TÉLÉCOM","ca":84503.36857342396,"followUpCa":[{"id":1,"label":"AMOA","ca":58144.56995222486},{"id":5,"label":"Gouvernance","ca":26358.798621199094},{"id":6,"label":"PMO","ca":0.0}],"prospectBillingAdrsCa":[{"id":427,"label":"France TELECOM - CSPCF","ca":84503.36857342396}]},{"id":119,"label":"MONACO TELECOM","ca":14259.782382985577,"followUpCa":[{"id":1,"label":"AMOA","ca":90408.7462741876}],"prospectBillingAdrsCa":[{"id":435,"label":"MONACO TELECOM","ca":14259.782382985577}]},{"id":122,"label":"ORANGE","ca":213115.48495837316,"followUpCa":[{"id":5,"label":"Gouvernance","ca":49998.43448753816},{"id":6,"label":"PMO","ca":47291.076136571355},{"id":7,"label":"PMO / AMOA","ca":39677.01044306163}],"prospectBillingAdrsCa":[{"id":441,"label":"CSPCF","ca":18302.525095618304},{"id":941,"label":"CSPCF","ca":194812.95986275485}]},{"id":123,"label":"ORANGE TUNISIE","ca":115150.7514088391,"followUpCa":[{"id":1,"label":"AMOA","ca":79500.74799515773},{"id":2,"label":"AMOE","ca":35650.00341368137}],"prospectBillingAdrsCa":[{"id":443,"label":"","ca":115150.7514088391}]},{"id":124,"label":"RÉSEAU CLUBS BOUYGUES TÉLÉCOM","ca":95933.73491681177,"followUpCa":[{"id":1,"label":"AMOA","ca":91713.12383255918},{"id":7,"label":"PMO / AMOA","ca":4220.611084252584}],"prospectBillingAdrsCa":[{"id":445,"label":"RÉSEAU CLUBS BOUYGUES TÉLÉCOM","ca":95933.73491681177}]},{"id":130,"label":"TUNISIANA","ca":0.0,"followUpCa":[{"id":1,"label":"AMOA","ca":0.0},{"id":4,"label":"AME","ca":0.0}],"prospectBillingAdrsCa":[{"id":467,"label":"TUNISIANA","ca":0.0}]},{"id":167,"label":"SFR","ca":28149.12410232705,"followUpCa":[{"id":7,"label":"PMO / AMOA","ca":28149.12410232705}],"prospectBillingAdrsCa":[{"id":1489,"label":"Comptabilité Fournisseurs","ca":28149.12410232705}]},{"id":169,"label":"EMAGINE CONSULTING","ca":17684.0650880439,"followUpCa":[{"id":1,"label":"AMOA","ca":241261.99406397267}],"prospectBillingAdrsCa":[{"id":1516,"label":"Comptabilité Fournisseurs","ca":17684.0650880439}]},{"id":172,"label":"APTECH","ca":36347.26753752023,"followUpCa":[],"prospectBillingAdrsCa":[{"id":1769,"label":"","ca":36347.26753752023}]}]},{"ca":1.8118040511526015E7,"label":"Finance","id":2,"customerCAs":[{"id":102,"label":"ASSET TECHNOLOGY","ca":199578.12878468263,"followUpCa":[{"id":2,"label":"AMOE","ca":4430.591897346322},{"id":3,"label":"Support","ca":5329.902476068161},{"id":101,"label":"MOA / MOE","ca":2586.9729728596285}],"prospectBillingAdrsCa":[{"id":395,"label":"ASSET TECHNOLOGY","ca":133718.7233978833},{"id":602,"label":"ASSET TECHNOLOGY","ca":65859.40538679934}]},{"id":104,"label":"BNP PARIBAS ARBITRAGE","ca":768205.5158432408,"followUpCa":[{"id":1,"label":"AMOA","ca":491178.0599242076},{"id":2,"label":"AMOE","ca":22745.4358425813},{"id":3,"label":"Support","ca":117131.5733640352},{"id":101,"label":"MOA / MOE","ca":137150.44671241663}],"prospectBillingAdrsCa":[{"id":399,"label":"BNP PARIBAS ARBITRAGE","ca":222956.41226155212},{"id":907,"label":"ACI CEA01A1","ca":237123.3151434446},{"id":1166,"label":"BNP PARIBAS ARBITRAGE","ca":771.71253176406},{"id":907,"label":"ACI CEA01A1","ca":22243.617333996084},{"id":1166,"label":"BNP PARIBAS ARBITRAGE","ca":501.8185085852166},{"id":399,"label":"BNP PARIBAS ARBITRAGE","ca":78861.81169287389},{"id":907,"label":"ACI CEA01A1","ca":138354.25644005652}]},{"id":105,"label":"BNP PARIBAS ASSET MANAGEMENT","ca":47633.21844963355,"followUpCa":[{"id":1,"label":"AMOA","ca":307170.9995819946}],"prospectBillingAdrsCa":[{"id":401,"label":"BNP PARIBAS ASSET MANAGEMENT","ca":47633.21844963355}]},{"id":106,"label":"BNP PARIBAS CIB","ca":469384.7701467696,"followUpCa":[{"id":2,"label":"AMOE","ca":95111.56352019176},{"id":3,"label":"Support","ca":77310.98762004645},{"id":101,"label":"MOA / MOE","ca":37424.43787417028}],"prospectBillingAdrsCa":[{"id":403,"label":"BNP PARIBAS CIB","ca":56564.58871817911},{"id":902,"label":"BNPP CIB Procurement","ca":320358.75733349717}]},{"id":108,"label":"CAISSE EPARGNE PREVOYANCE IDF","ca":30987.533799046676,"followUpCa":[{"id":1,"label":"AMOA","ca":1354346.3486319808}],"prospectBillingAdrsCa":[{"id":407,"label":"CAISSE EPARGNE PREVOYANCE IDF","ca":30987.533799046676}]},{"id":112,"label":"CRÉDIT AGRICOLE CIB","ca":1524693.0138708563,"followUpCa":[{"id":2,"label":"AMOE","ca":110031.48563874196},{"id":7,"label":"PMO / AMOA","ca":79974.67506993563},{"id":101,"label":"MOA / MOE","ca":11328.038329244599}],"prospectBillingAdrsCa":[{"id":415,"label":"","ca":62339.1674591694},{"id":416,"label":"","ca":1261019.6473737648},{"id":415,"label":"","ca":133241.2772818679},{"id":1605,"label":"GSP/ICI Facturation - SQC G02 428","ca":56764.8834268097}]},{"id":118,"label":"LYXOR ASSET MANAGEMENT","ca":1787185.0736044808,"followUpCa":[{"id":1,"label":"AMOA","ca":946225.5882981467},{"id":2,"label":"AMOE","ca":100948.58551521784},{"id":3,"label":"Support","ca":431320.7372492635},{"id":8,"label":"Processus","ca":49319.04990728951},{"id":101,"label":"MOA / MOE","ca":259371.11263456344}],"prospectBillingAdrsCa":[{"id":433,"label":"DEVL/HUB/PRO","ca":1498870.4438724522}]},{"id":120,"label":"NATIXIS","ca":582218.6432370029,"followUpCa":[{"id":1,"label":"AMOA","ca":126621.89503012218},{"id":2,"label":"AMOE","ca":431981.0548537218},{"id":101,"label":"MOA / MOE","ca":23615.69335315888}],"prospectBillingAdrsCa":[{"id":1203,"label":"NATIXIS","ca":3442.9627474397416},{"id":1221,"label":"NATIXIS","ca":9385.179431643344},{"id":1242,"label":"NATIXIS","ca":21103.18107569587},{"id":1639,"label":"CSP Fournisseur","ca":29852.514687385417},{"id":1832,"label":"Florence BESSIS","ca":60633.58819618816},{"id":437,"label":"Etudes BFI - Actions Back Office Commodities","ca":87127.84338218557},{"id":1223,"label":"NATIXIS","ca":57569.1756220693},{"id":1224,"label":"NATIXIS","ca":216579.94146575732},{"id":1640,"label":"CSP Fournisseur","ca":20591.29336240004},{"id":1766,"label":"","ca":44767.67340706199},{"id":1827,"label":"CPS Fournisseurs","ca":5345.127614247616}]},{"id":126,"label":"SOCIETE GENERALE","ca":8832398.340255072,"followUpCa":[{"id":1,"label":"AMOA","ca":5083881.7461685},{"id":2,"label":"AMOE","ca":189041.00742960355},{"id":3,"label":"Support","ca":2608871.2546098744},{"id":5,"label":"Gouvernance","ca":69554.95276803154},{"id":6,"label":"PMO","ca":151741.84420450177},{"id":7,"label":"PMO / AMOA","ca":201323.53465535928},{"id":100,"label":"Gestion de projet","ca":1178.395191393792},{"id":101,"label":"MOA / MOE","ca":526805.6052278075}],"prospectBillingAdrsCa":[{"id":450,"label":"ACFI/ACR/EXP","ca":1440892.142567982},{"id":451,"label":"DEVL/HUB/PRO - BU S0001","ca":729276.5613175939},{"id":457,"label":"DEVL/HUB/PRO - BU S0001","ca":899294.8124638243},{"id":458,"label":"DEVL/HUB/PRO - BU S0001","ca":292672.6961668385},{"id":460,"label":"DEVL/HUB/PRO - BU S0001","ca":48433.54028752771},{"id":461,"label":"DEVL/HUB/PRO - BU S0001","ca":533711.56052324},{"id":684,"label":"DEVL/HUB/PRO - BU S0001","ca":708343.572792839},{"id":961,"label":"DEVL/HUB/PRO - BU S0001","ca":63281.745226006045},{"id":962,"label":"DEVL/HUB/PRO - BU S0001","ca":47754.984825616695},{"id":964,"label":"DEVL/HUB/PRO - BU S0001","ca":106711.65217956532},{"id":1277,"label":"SOCIETE GENERALE","ca":69822.19724744555},{"id":1298,"label":"DEVL/HUB/PRO","ca":64683.341653598516},{"id":1433,"label":"DEVL/HUB/PRO","ca":49045.47952013091},{"id":451,"label":"DEVL/HUB/PRO - BU S0001","ca":120055.98105300684},{"id":566,"label":"DEVL/HUB/PRO - BU S0001","ca":21427.922860230286},{"id":965,"label":"DEVL/HUB/PRO - BU S0001","ca":11701.640161983685},{"id":1205,"label":"SOCIETE GENERALE","ca":35855.46335438274},{"id":450,"label":"ACFI/ACR/EXP","ca":526940.3700381075},{"id":451,"label":"DEVL/HUB/PRO - BU S0001","ca":643533.8693952701},{"id":460,"label":"DEVL/HUB/PRO - BU S0001","ca":68147.02244639391},{"id":461,"label":"DEVL/HUB/PRO - BU S0001","ca":20898.8952445984},{"id":684,"label":"DEVL/HUB/PRO - BU S0001","ca":1344816.3446487277},{"id":964,"label":"DEVL/HUB/PRO - BU S0001","ca":4534.7528367769},{"id":451,"label":"DEVL/HUB/PRO - BU S0001","ca":69554.95276803154},{"id":1885,"label":"DEVL/HUB/PRO","ca":0.0},{"id":461,"label":"DEVL/HUB/PRO - BU S0001","ca":151741.84420450177},{"id":451,"label":"DEVL/HUB/PRO - BU S0001","ca":80341.39947049558},{"id":962,"label":"DEVL/HUB/PRO - BU S0001","ca":33251.65386587387},{"id":1433,"label":"DEVL/HUB/PRO","ca":87730.48131898981},{"id":451,"label":"DEVL/HUB/PRO - BU S0001","ca":1178.395191393792},{"id":453,"label":"DEVL/HUB/PRO - BU S0001","ca":70363.19727140949},{"id":457,"label":"DEVL/HUB/PRO - BU S0001","ca":61746.05549161329},{"id":460,"label":"DEVL/HUB/PRO - BU S0001","ca":57288.331201456065},{"id":1296,"label":"DEVL/HUB/PRO","ca":25789.994942983612}]},{"id":128,"label":"TALAN LLC","ca":5450.810245245706,"followUpCa":[{"id":1,"label":"AMOA","ca":5450.810245245706}],"prospectBillingAdrsCa":[{"id":465,"label":"TALAN LLC","ca":5450.810245245706}]},{"id":134,"label":"EXANE","ca":185055.00226316502,"followUpCa":[{"id":2,"label":"AMOE","ca":8698.199303448197},{"id":5,"label":"Gouvernance","ca":128708.62924286623},{"id":6,"label":"PMO","ca":47648.1737168506}],"prospectBillingAdrsCa":[{"id":475,"label":"EXANE","ca":185055.00226316502}]},{"id":139,"label":"ASSET ALPHA","ca":97800.85721257163,"followUpCa":[{"id":1,"label":"AMOA","ca":22198.131694082636},{"id":2,"label":"AMOE","ca":55367.29323669687},{"id":3,"label":"Support","ca":20235.43228179214}],"prospectBillingAdrsCa":[{"id":914,"label":"COMPTABILITE FOURNISSEURS","ca":97800.85721257163}]},{"id":140,"label":"SODEXO SOLUTIONS DE MOTIVATION FRANCE","ca":0.0,"followUpCa":[{"id":1,"label":"AMOA","ca":0.0},{"id":2,"label":"AMOE","ca":0.0}],"prospectBillingAdrsCa":[{"id":486,"label":"SODEXO SOLUTIONS DE MOTIVATION France","ca":0.0}]},{"id":145,"label":"HSBC FRANCE","ca":164114.13303510283,"followUpCa":[{"id":1,"label":"AMOA","ca":128436.20801527987},{"id":2,"label":"AMOE","ca":30995.300022549913},{"id":101,"label":"MOA / MOE","ca":4682.624997273068}],"prospectBillingAdrsCa":[{"id":881,"label":"HSBC FRANCE","ca":59822.749447878465},{"id":1237,"label":"HSBC France","ca":99608.75858995132},{"id":881,"label":"HSBC FRANCE","ca":4682.624997273068}]},{"id":146,"label":"AMUNDI","ca":199306.5092782709,"followUpCa":[{"id":1,"label":"AMOA","ca":31443.75246601884},{"id":101,"label":"MOA / MOE","ca":167862.75681225208}],"prospectBillingAdrsCa":[{"id":916,"label":"","ca":116415.42014262403}]},{"id":147,"label":"AXA INVESTMENT MANAGERS PARIS","ca":1349855.9250700984,"followUpCa":[{"id":1,"label":"AMOA","ca":522126.90053678973},{"id":2,"label":"AMOE","ca":67190.72792294451},{"id":3,"label":"Support","ca":22742.58056647307},{"id":7,"label":"PMO / AMOA","ca":95814.79782881102},{"id":101,"label":"MOA / MOE","ca":641980.91821508}],"prospectBillingAdrsCa":[{"id":926,"label":"AXA INVESTMENT MANAGERS PARIS","ca":950508.9699152182}]},{"id":152,"label":"CARMIGNAC GESTION","ca":36102.05046976918,"followUpCa":[{"id":1,"label":"AMOA","ca":33036.921013472616},{"id":101,"label":"MOA / MOE","ca":3065.129456296562}],"prospectBillingAdrsCa":[{"id":980,"label":"CARMIGNAC GESTION","ca":36102.05046976918}]},{"id":154,"label":"LA BANQUE DE FRANCE","ca":145464.92106462366,"followUpCa":[{"id":1,"label":"AMOA","ca":381523.568351951}],"prospectBillingAdrsCa":[{"id":1019,"label":"BANQUE DE France","ca":10669.589948914932},{"id":1431,"label":"Banque de France","ca":68903.90895293561},{"id":1463,"label":"DPMA-SAMOA-21-1159","ca":41054.74259025419}]},{"id":155,"label":"BNP PARIBAS SECURITIES SERVICES","ca":485324.27409156936,"followUpCa":[{"id":2,"label":"AMOE","ca":10918.923040698277},{"id":101,"label":"MOA / MOE","ca":238346.70376354374}],"prospectBillingAdrsCa":[{"id":1022,"label":"Grands Moulins de Pantin","ca":128002.01202663596},{"id":1024,"label":"","ca":44310.62887412258},{"id":1290,"label":"","ca":7636.635342314838},{"id":1523,"label":"ACI CPA02B1","ca":10918.923040698277},{"id":1022,"label":"Grands Moulins de Pantin","ca":8754.199846377593},{"id":1023,"label":"","ca":81770.19843184396}]},{"id":156,"label":"BNP PARIBAS INVESTMENT PARTNERS BELGIUM","ca":17626.24653014587,"followUpCa":[{"id":1,"label":"AMOA","ca":52100.31593783523}],"prospectBillingAdrsCa":[{"id":1032,"label":"BNP PARIBAS INVESTMENT PARTNERS BELGIUM SA","ca":17626.24653014587}]},{"id":157,"label":"CNP ASSURANCES","ca":50364.29032424693,"followUpCa":[{"id":3,"label":"Support","ca":15890.22091655757}],"prospectBillingAdrsCa":[{"id":1047,"label":"CNP ASSURANCES","ca":15890.22091655757}]},{"id":158,"label":"DEXIA CREDIT LOCAL","ca":119676.30511302689,"followUpCa":[{"id":1,"label":"AMOA","ca":7622.959876656543},{"id":2,"label":"AMOE","ca":111393.3817283269},{"id":101,"label":"MOA / MOE","ca":659.9635080434402}],"prospectBillingAdrsCa":[{"id":1050,"label":"DEXIA CREDIT LOCAL","ca":119016.34160498345}]},{"id":159,"label":"G-FIT","ca":24883.509818837065,"followUpCa":[{"id":2,"label":"AMOE","ca":9791.898535378275},{"id":101,"label":"MOA / MOE","ca":90686.90843173306}],"prospectBillingAdrsCa":[{"id":1057,"label":"G-FIT","ca":9791.898535378275}]},{"id":160,"label":"GDF SUEZ TRADING","ca":75595.29714827426,"followUpCa":[],"prospectBillingAdrsCa":[{"id":1061,"label":"GDF SUEZ TRADING","ca":60266.34325325491}]},{"id":161,"label":"GROUPAMA ASSET MANAGEMENT","ca":119238.90531973445,"followUpCa":[{"id":1,"label":"AMOA","ca":7084.966899105345},{"id":2,"label":"AMOE","ca":16748.514393828773},{"id":3,"label":"Support","ca":89667.22099069507},{"id":101,"label":"MOA / MOE","ca":5738.203036105261}],"prospectBillingAdrsCa":[{"id":1069,"label":"Groupama Asset Management","ca":113500.70228362919}]},{"id":162,"label":"LA BANQUE POSTALE","ca":215803.49801781122,"followUpCa":[{"id":1,"label":"AMOA","ca":33143.20452510379},{"id":2,"label":"AMOE","ca":68124.77952757847},{"id":101,"label":"MOA / MOE","ca":114535.51396512895}],"prospectBillingAdrsCa":[{"id":1078,"label":"La Banque Postale","ca":101267.98405268227},{"id":1700,"label":"","ca":55155.28525637932}]},{"id":163,"label":"NATIXIS ASSET MANAGEMENT","ca":339036.09202202177,"followUpCa":[{"id":1,"label":"AMOA","ca":236541.4843083359},{"id":2,"label":"AMOE","ca":62713.0156206247},{"id":101,"label":"MOA / MOE","ca":39781.59209306118}],"prospectBillingAdrsCa":[{"id":1084,"label":"NATIXIS ASSET MANAGEMENT","ca":226018.94291858195}]},{"id":164,"label":"SOAT","ca":100895.41915382713,"followUpCa":[{"id":1,"label":"AMOA","ca":49413.25131207703},{"id":101,"label":"MOA / MOE","ca":51482.16784175009}],"prospectBillingAdrsCa":[{"id":1088,"label":"SOAT","ca":49413.25131207703}]},{"id":165,"label":"BNP PARIBAS","ca":20788.29095459546,"followUpCa":[{"id":1,"label":"AMOA","ca":95129.35859012425}],"prospectBillingAdrsCa":[{"id":1091,"label":"BNP PARIBAS - SA","ca":2084.137441939676},{"id":1498,"label":"GRM","ca":3998.2612209860276}]},{"id":166,"label":"ODDO ET CIE","ca":79659.57385636172,"followUpCa":[{"id":6,"label":"PMO","ca":5318.5062208329355}],"prospectBillingAdrsCa":[{"id":1373,"label":"Comptabilité Fournisseurs","ca":79659.57385636172}]},{"id":171,"label":"ACCENTURE POST-TRADE PROCESSING SAS","ca":43714.362545930744,"followUpCa":[{"id":3,"label":"Support","ca":43714.362545930744}],"prospectBillingAdrsCa":[{"id":1641,"label":"APTP SAS","ca":43714.362545930744}]}]},{"ca":2.3674651630564064E7,"label":"Energie","id":3,"customerCAs":[{"id":103,"label":"ATANEURE","ca":40009.565030194346,"followUpCa":[{"id":1,"label":"AMOA","ca":705440.186888609}],"prospectBillingAdrsCa":[{"id":397,"label":"ATANEURE","ca":40009.565030194346}]},{"id":113,"label":"EDF","ca":1187912.8988528363,"followUpCa":[{"id":2,"label":"AMOE","ca":278389.81416444643},{"id":6,"label":"PMO","ca":100688.47608725533},{"id":10,"label":"Urbanisme / Architecture","ca":143403.98674272}],"prospectBillingAdrsCa":[{"id":420,"label":"EDF D.S.P.","ca":644899.597175008},{"id":423,"label":"EDF SA","ca":20531.024683406555},{"id":420,"label":"EDF D.S.P.","ca":252759.88807417802},{"id":423,"label":"EDF SA","ca":25629.926090268436},{"id":420,"label":"EDF D.S.P.","ca":244092.46282997535}]},{"id":114,"label":"ERDF","ca":1.8861065346998513E7,"followUpCa":[{"id":1,"label":"AMOA","ca":1.8090533296730056E7},{"id":2,"label":"AMOE","ca":233859.17514360364},{"id":7,"label":"PMO / AMOA","ca":273722.25804274774},{"id":8,"label":"Processus","ca":32508.714293304805},{"id":9,"label":"Recette","ca":97204.73223856854},{"id":10,"label":"Urbanisme / Architecture","ca":133237.1705502296}],"prospectBillingAdrsCa":[{"id":3,"label":"Pôle comptage","ca":238481.20259044028},{"id":425,"label":"SITE COMPTABLE D'ARRAS ","ca":1.8056666594147757E7},{"id":3,"label":"Pôle comptage","ca":208882.5214380954},{"id":425,"label":"SITE COMPTABLE D'ARRAS ","ca":97348.45089795715},{"id":3,"label":"Pôle comptage","ca":24454.527797885028},{"id":425,"label":"SITE COMPTABLE D'ARRAS ","ca":72750.2044406835},{"id":3,"label":"Pôle comptage","ca":18830.412141680765},{"id":425,"label":"SITE COMPTABLE D'ARRAS ","ca":114406.75840854885}]},{"id":116,"label":"GDF SUEZ","ca":996356.3227350711,"followUpCa":[{"id":1,"label":"AMOA","ca":3490920.7688690554}],"prospectBillingAdrsCa":[{"id":429,"label":"GDF SUEZ","ca":996356.3227350711}]},{"id":117,"label":"GRDF","ca":1660740.4435070422,"followUpCa":[],"prospectBillingAdrsCa":[{"id":431,"label":"GRDF Service Gaz","ca":1660740.4435070422}]},{"id":127,"label":"SOPRA GROUP","ca":872602.5802048716,"followUpCa":[{"id":2,"label":"AMOE","ca":62771.40602122707}],"prospectBillingAdrsCa":[{"id":463,"label":"SOPRA GROUP","ca":32292.009247183803},{"id":910,"label":"","ca":98360.02837893744},{"id":911,"label":"","ca":703171.9650008206},{"id":463,"label":"SOPRA GROUP","ca":38778.57757792988}]},{"id":144,"label":"RESEAU DE TRANSPORT D'ELECTRICITE","ca":38021.03822969361,"followUpCa":[{"id":100,"label":"Gestion de projet","ca":31971.644792240055}],"prospectBillingAdrsCa":[{"id":858,"label":"Traitement LADSERVICES ","ca":38021.03822969361}]},{"id":149,"label":"REXEL FRANCE SAS","ca":17943.435005843636,"followUpCa":[],"prospectBillingAdrsCa":[{"id":929,"label":"","ca":17943.435005843636}]}]},{"ca":56693.96614135972,"label":"Services","id":4,"customerCAs":[{"id":102,"label":"ASSET TECHNOLOGY","ca":33870.24384776862,"followUpCa":[{"id":1,"label":"AMOA","ca":39706.005188336465}],"prospectBillingAdrsCa":[{"id":395,"label":"ASSET TECHNOLOGY","ca":33870.24384776862}]},{"id":111,"label":"CONSORTIUM STADE DE FRANCE","ca":5835.76134056784,"followUpCa":[],"prospectBillingAdrsCa":[{"id":413,"label":"CONSORTIUM STADE DE FRANCE","ca":5835.76134056784}]},{"id":128,"label":"TALAN LLC","ca":4284.80844346806,"followUpCa":[{"id":3,"label":"Support","ca":4284.80844346806}],"prospectBillingAdrsCa":[{"id":465,"label":"TALAN LLC","ca":4284.80844346806}]},{"id":139,"label":"ASSET ALPHA","ca":12703.152509555193,"followUpCa":[{"id":1,"label":"AMOA","ca":55981.69035917614}],"prospectBillingAdrsCa":[{"id":484,"label":"ASSET ALPHA","ca":12703.152509555193}]},{"id":143,"label":"TALAN","ca":0.0,"followUpCa":[],"prospectBillingAdrsCa":[]}]},{"ca":114825.72454073402,"label":"Transport","id":5,"customerCAs":[{"id":125,"label":"SNCF","ca":28326.15230605941,"followUpCa":[],"prospectBillingAdrsCa":[{"id":447,"label":"SNCF","ca":28326.15230605941}]},{"id":153,"label":"CEREZA CONSEIL","ca":86499.57223467459,"followUpCa":[{"id":3,"label":"Support","ca":64771.42281569543},{"id":101,"label":"MOA / MOE","ca":6775.76387541764}],"prospectBillingAdrsCa":[{"id":1341,"label":"Service Comptabilité ","ca":14952.38554356153},{"id":1037,"label":"Comptabilité Fournisseurs","ca":39015.76073919426},{"id":1341,"label":"Service Comptabilité ","ca":32531.42595191881}]}]},{"ca":436807.3031342935,"label":"TTI","id":6,"customerCAs":[{"id":121,"label":"OALIA","ca":310321.7071292919,"followUpCa":[{"id":1,"label":"AMOA","ca":310321.7071292919}],"prospectBillingAdrsCa":[{"id":439,"label":"OALIA","ca":310321.7071292919}]},{"id":123,"label":"ORANGE TUNISIE","ca":126485.59600500159,"followUpCa":[{"id":2,"label":"AMOE","ca":20344.76334040867},{"id":3,"label":"Support","ca":106140.83266459292},{"id":101,"label":"MOA / MOE","ca":0.0}],"prospectBillingAdrsCa":[{"id":443,"label":"","ca":126485.59600500159}]},{"id":126,"label":"SOCIETE GENERALE","ca":0.0,"followUpCa":[{"id":3,"label":"Support","ca":0.0}],"prospectBillingAdrsCa":[{"id":451,"label":"DEVL/HUB/PRO - BU S0001","ca":0.0}]},{"id":130,"label":"TUNISIANA","ca":0.0,"followUpCa":[{"id":1,"label":"AMOA","ca":1036584.0210036852}],"prospectBillingAdrsCa":[{"id":467,"label":"TUNISIANA","ca":0.0}]}]},{"ca":1036584.0210036852,"label":"Secteur public","id":7,"customerCAs":[{"id":141,"label":"MINISTÈRE DE LA JUSTICE","ca":850850.899007275,"followUpCa":[],"prospectBillingAdrsCa":[{"id":564,"label":"Ministère de la Justice","ca":850850.899007275}]},{"id":142,"label":"MINISTÈRE DE L'ÉCOLOGIE DU DEVELOPPEMENT DURABLE","ca":32666.5843868628,"followUpCa":[],"prospectBillingAdrsCa":[{"id":643,"label":"","ca":32666.5843868628}]},{"id":150,"label":"MINISTÈRE DE L'ÉDUCATION NATIONALE","ca":153066.53760954732,"followUpCa":[],"prospectBillingAdrsCa":[{"id":1314,"label":"","ca":42188.399132355094},{"id":1459,"label":"Mission achats ","ca":110878.13847719222}]}]}];
            $scope.xFunction = function(){
                return function(d) {

                    return d.label;
                };
            }
            $scope.yFunction = function(){
                return function(d) {
                    return d.ca;
                };
            }

            $scope.descriptionFunction = function(){
                return d.label;
                //return d.label;
            }
            $scope.goToZoom=function()
            {


                $scope.test=out;
                $scope.niveau="niv1";


            }
            $scope.goToLink = function () {
                if ($scope.niveau=="niv1")
                {

                    $scope.test=$scope.selectedBu.customerCAs;
                    $scope.niveau="niv2";
                }
                else {
                    if($scope.niveau="niv2") {
                        $scope.test=$scope.selectedBu.followUpCa;
                        console.log("test "+$scope.test);
                        $scope.niveau="niv3"
                    }


                };
            }
            $http({

                url: baseUrl +'graniteamf/chiffreAffaire/loadAllCa/'+$scope.dateDeb  +"/"+$scope.dateFin ,
                method: 'GET',
                timeout: 400000 ,
                headers:{ 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }

            }).success(function(data) {
               //     alert("in success");
                    $scope.test = data;

                    out = data;
                //    alert("in success");
                    console.log($scope.test);
                    $scope.xFunction = function(){
                        return function(d) {

                            return d.label;
                        };
                    }
                    $scope.yFunction = function(){
                        return function(d) {
                           return d.ca;
                        };
                    }

                    $scope.descriptionFunction = function(){
                            return d.label;
                            //return d.label;
                        }
                    $scope.goToZoom=function()
                    {


                            $scope.test=out;
                            $scope.niveau="niv1";


                    }
                    $scope.goToLink = function () {
                        if ($scope.niveau=="niv1")
                        {

                            $scope.test=$scope.selectedBu.customerCAs;
                            $scope.niveau="niv2";
                        }
                        else {
                            if($scope.niveau="niv2") {
                                $scope.test=$scope.selectedBu.followUpCa;
                                console.log("test "+$scope.test);
                                $scope.niveau="niv3"
                            }


                        };
                    }

                    $scope.xFunction = function(){
                            return function(d) {

                                return d.label;
                            };
                        }
                    $scope.yFunction = function(){
                            return function(d) {
                                return d.ca;
                            };
                        }

                    $scope.descriptionFunction = function(){
                            return d.label;
                            //return d.label;
                        }


                })
                .error(function() {
             //       alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

                });
        }

    }])



    .controller('UserCtrl', ['$base64','$http','$state','$cookieStore', '$scope', function($base64,$http,$state,$cookieStore, $scope,$window) {
        $scope.navTitle = "Dash Report";
        $scope.user = {username: '', password: ''};
        $scope.message = '';


        $scope.submit = function () {
            $state.go('Main.Resources');
           /* $http({
                method: 'GET',
                url: baseUrl+'graniteamf/home/login.json',
                headers: {'login': $scope.user.username,
                    'password': $scope.user.password}
            })
                .success(function (data, status, headers, config) {
                    $scope.result=data;

                  *//*  var authorities=[];
                    angular.forEach(data, function(key){
                        this.push(key.abrvFonct);
                    }, authorities);*//*

                    localStorage.setItem('login' , $scope.user.username);
                    localStorage.setItem('password' , $scope.user.password);
                    alert("test:" + localStorage.getItem("login"));
                    alert("test:" + localStorage.getItem("password"));

                    alert("im authentifed");
                    if (($scope.user.username == 'byblos.adm@gmail.com' && $scope.user.password == 'byblos' ))
                    {
                        $state.go('MainAdm.ResourcesAdmin');
                    }
                    else {
                        $state.go('Main.Resources');
                    }
                })
                .error(function() {
                    alert('vérfivez votre login et votre mot de passe ' );

                });*/
        };

        $http.defaults.headers.login =  $scope.user.username;
        $http.defaults.headers.password = $scope.user.password;
    }])
    .controller('ColabCtrl', function($scope,$http,$cookieStore) {

        /*  for (var i=0; i<authorities.length; i++) {
         if (authorities[i] == 'ROLE_CONSULT_RAPORT_RH_COLLAB') {

         }*/
        var values = [
            {
                firstAndLastName: "BOUSLIMI Foued"

            },
            {
                firstAndLastName: "LAHAIE Yann"
            },
            {
                firstAndLastName: "BALLOU Evelyne"
            }
        ];
        angular.forEach(values, function(key){
            this.push(key.firstAndLastName);
        }, log);
        //console.log(log);
        $scope.test = log;
        $scope.exampleData = [
            {
                "key" : "Quantity" ,
                "bar": true,
                "values" :[["2008",188.68297691146557],["2009",91.99489841703323],["2010",214.99733146176555],["2011",184.2351172235789],["2012",184.2351172235789],["2013",184.2351172235789],["2014",184.2351172235789]]
            },
            {
                "key" : "Price" ,
                "line": true,
                "values" :[["2008",0],["2009",-0.5124366812370182],["2010",-0.37297336037449397],["2011",-0.39654655049844306],["2012",-0.42011974062239216],["2013",-0.44369293074634125],["2014",-0.46726612087029035]]
            }
        ]

        $scope.xAxisTickFormat = function(){
            return function(d){
                return d3.time.format('%x')(new Date(d));  //uncomment for date format
            }
        }

        $scope.y1AxisTickFormat = function(){
            return function(d){
                return d3.format(',f')(d);
            }
        }
        $scope.y2AxisTickFormat = function(){
            return function(d){
                return '$' + d3.format(',.2f')(d);
            }
        }
      /*  $http({
            url: baseUrl + 'graniteamf/resource/loadActiveEmployee',
            method: 'GET',
            headers: { 'login' :  localStorage.getItem('login'),
                'password':  localStorage.getItem('password')
            }
        }).success(function(data) {
                $scope.employe = data;
                //console.log($scope.employe.firstAndLastName);
                $scope.yourchoice = $scope.employe;
               // console.log($scope.employe);
                //              $scope.$apply();
                var values =  $scope.employe;
               //console.log(values);
                var log = [];
                angular.forEach(values, function(key){
                    this.push(key.firstAndLastName);
                }, log);
                //console.log(log);
                $scope.test = log;

                $scope.event = function () {
                    pers= $scope.a;
                    //console.log($scope.employe);

                    var log1 = [];
                    angular.forEach(values, function(key){
                       // this.push(key.firstAndLastName);
                        if (key.firstAndLastName == pers)
                        {
                            id = key.id;
                            console.log (id);
                            $http({
                                url: baseUrl + 'graniteamf/resource/findPayIncreaseById/' + id,
                                method: 'GET',
                                headers: { 'login' :  localStorage.getItem('login'),
                                    'password':  localStorage.getItem('password')
                                }
                            }).success(function(data) {
                                    var tab = [];
                                    $scope.salary = data;
                                    $http({
                                        url: baseUrl + 'graniteamf/resource/findPayIncreaseByIdLine/' + id,
                                        method: 'GET',
                                        headers: { 'login' :  localStorage.getItem('login'),
                                            'password':  localStorage.getItem('password')
                                        }
                                    }).success(function(data) {
                                            var tab = [];
                                            $scope.Line = data;


                                            $scope.exampleData = [
                                                {
                                                    "key" : "Quantity" ,
                                                    "bar": true,
                                                    "values" : $scope.salary
                                                },
                                                {
                                                    "key" : "Price" ,
                                                    "line": true,
                                                    "values" : $scope.Line
                                                }
                                            ]


                                            $scope.xAxisTickFormat = function(){
                                                return function(d){
                                                    return d3.time.format('%x')(new Date(d));  //uncomment for date format
                                                }
                                            }

                                            $scope.y1AxisTickFormat = function(){
                                                return function(d){
                                                    return d3.format(',f')(d);
                                                }
                                            }
                                            $scope.y2AxisTickFormat = function(){
                                                return function(d){
                                                    return '$' + d3.format(',.2f')(d);
                                                }
                                            }



                                        });

                                });
                        }
                    },log1)
                }

            })
            .error(function() {
                alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

            });*/
        /*  for (var i=0; i<authorities.length; i++) {
         if (authorities[i] == 'ROLE_CONSULT_RAPORT_RH_COLLAB') {

         }*/
        $http({
            url: baseUrl + 'rest/Ca/findAllBu',
            method: 'GET',
            headers: { 'login' :  localStorage.getItem('login'),
                'password':  localStorage.getItem('password')
            }
        }).success(function(data) {
                $scope.allBu = data;
                //              $scope.$apply();
            });

        $scope.buChanged = function () {

            $http({
                url: baseUrl + 'graniteamf/resource/findEmployeeByBU/'+$scope.selectedBu.businessUnitDTO.id,
                method: 'GET',
                headers: { 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {
                    $scope.Clients = data;
                    console.log("data of colab "+ $scope.Clients );
                   // $scope.$apply();

                });
            $scope.colabChanged = function () {

                            $http({
                                url: baseUrl + 'graniteamf/resource/moyenneSalaire/'+$scope.SelectedClients.id+ "/" +$scope.selectedBu.businessUnitDTO.id,
                                method: 'GET',
                                headers: { 'login' :  localStorage.getItem('login'),
                                    'password':  localStorage.getItem('password')
                                }
                            }).success(function(data) {
                                    $scope.SalaireBu = data;

                                    $scope.exampleData = [
                                        {
                                            "key": $scope.SelectedClients.firstAndLastName,

                                            "values":data[0]
                                        },
                                        {
                                            "key": $scope.selectedBu.businessUnitDTO.label,
                                            "values":data[1]
                                        },
                                        {
                                            "key": "Talan",
                                            "values": data[2]
                                        }
                                    ];

                                })
                                .error(function() {
                       //             alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

                                });




            }

        }

        $scope.$on('tab.shown', function() {
            // Maybe load some content here
        });
        $scope.$on('tab.hidden', function() {
            // Perhaps cycle out some data in memory here
        });
    })

    .controller('CaPointCtrl',  function($scope,$state,$location,$cookieStore, $http) {
        $scope.allBu = [
            {

                id: 3,
                libelle: "Energie",
                abreviation: "NRJ",
                responsableId: 199,
                responsableLabel: "GIFFARD François",
                order: 0,
                label: "Energie"
            },
            {

                id: 2,
                libelle: "Finance",
                abreviation: "FIN",
                responsableId: 362,
                responsableLabel: "BIACHE Jean Luc",
                order: 1,
                label: "Finance"
            }];
      /*  $http({
            url: baseUrl + 'rest/Ca/findAllBu',
            method: 'GET',
            headers: { 'login' :  localStorage.getItem('login'),
                'password':  localStorage.getItem('password')
            }
        }).success(function(data) {
                $scope.allBu = data;
                //              $scope.$apply();
            });*/


        $scope.buChanged = function () {
//            console.log($scope.selectedBu);
//            $scope.customers = UserFactory.customers({buId: $scope.selectedBu.businessUnitDTO.id}, function (response) {
//            });
            $scope.customers = [{"prospectClientDTO":{"dateCreation":"2013-10-11T12:36:16.622+02:00","dateModification":"2013-11-28T13:48:22.231+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":143,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":250000,"compteClient":"CACCENTURE","compteCollectif":41110000,"compteIntitule":"ACCENTURE POST-TRADE PROCESSING","employeesNumber":2,"fonctionId":"Président","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 53 23 63 87","isValueMask":false,"value":"01 53 23 63 87"},"headQuarterWebSite":"","id":171,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"POUYFAUCON","numSiret":79268709700016,"numTva":"FR 88 792 687 097  ","numeroRegistreCommerce":792687097,"prenomRepLegal":"Pierre","raisonSocial":"ACCENTURE POST-TRADE PROCESSING SAS","secteurId":6,"secteurLabel":"Services","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-01-24T15:42:44.606+01:00","dateModification":"2013-11-28T13:48:22.519+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":4000000,"compteClient":"CAMUNDI","compteCollectif":41110000,"compteIntitule":"AMUNDI ALTERNATIVE INVESTMENTS","employeesNumber":2,"fonctionId":"Directeur Général","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":146,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"WATSON","numSiret":43961455300014,"numTva":"","numeroRegistreCommerce":439614553,"prenomRepLegal":"Andrew","raisonSocial":"AMUNDI","secteurId":2,"secteurLabel":"Assurances","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.646+02:00","dateModification":"2013-11-28T13:48:22.669+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":12,"businessUnitId":2,"businessUnitLabel":"Finance","capital":0,"compteClient":"CAPRIA","compteCollectif":41110000,"compteIntitule":"APRIA RSA","fonctionId":"Directeur Général","formeJuridiqueId":4,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":101,"idCivilite":1,"lieuRegistreCommerce":"","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"PAULOT","numSiret":77569189202486,"numTva":"","numeroRegistreCommerce":775691892,"prenomRepLegal":"Jean-marie","raisonSocial":"APRIA RSA","secteurId":2,"secteurLabel":"Assurances","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.751+02:00","dateModification":"2013-11-28T13:48:23.016+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":814000,"compteClient":"CASSET","compteCollectif":41110001,"compteIntitule":"ASSET TECHNOLOGY","fonctionId":"Président","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":102,"idCivilite":1,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"BIACHE","numSiret":43216017400020,"numTva":"FR68432160174","numeroRegistreCommerce":432160174,"prenomRepLegal":"Jean-luc","raisonSocial":"ASSET TECHNOLOGY","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-01-24T16:37:34.008+01:00","dateModification":"2014-01-16T16:11:09.373+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1384380,"compteClient":"CAXA","compteCollectif":41110000,"compteIntitule":"AXA INVESTMENT MANAGERS PARIS","employeesNumber":4,"fonctionId":"Global Head of Shared Operational Functions","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 44 45 70 00","isValueMask":false,"value":"01 44 45 70 00"},"headQuarterWebSite":"","id":147,"idCivilite":1,"lieuRegistreCommerce":"Nanterre","marcheId":101,"marcheLabel":"Finance - AXA IM","nomRepLegal":"COQUEMA","numSiret":35353450600046,"numTva":"","numeroRegistreCommerce":353534506,"prenomRepLegal":"Christophe","raisonSocial":"AXA INVESTMENT MANAGERS PARIS","secteurId":2,"secteurLabel":"Assurances","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T13:10:50.652+01:00","dateModification":"2014-01-15T17:42:16.737+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":2.526774896E9,"compteClient":"CBNP","compteCollectif":41110000,"compteIntitule":"BNP PARIBAS","employeesNumber":4,"fonctionId":"Responsable","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":165,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"GENIN","numSiret":66204244900014,"numTva":"","numeroRegistreCommerce":"662 042 449","prenomRepLegal":"Eric","raisonSocial":"BNP PARIBAS","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.760+02:00","dateModification":"2014-01-15T17:37:54.097+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1467,"accountResponsibleName":"GROS Clara","bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":3.23753355E8,"compteClient":"CBNPA","compteCollectif":41110000,"compteIntitule":"BNPP ARBITRAGE","fonctionId":"","formeJuridiqueId":9,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":104,"lieuRegistreCommerce":"Paris","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"","numSiret":39489583300033,"numTva":"FR30394895833","numeroRegistreCommerce":394895833,"prenomRepLegal":"","raisonSocial":"BNP PARIBAS ARBITRAGE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.765+02:00","dateModification":"2013-11-28T13:48:23.744+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":6.4931168E7,"compteClient":"CBNPP","compteCollectif":41110000,"compteIntitule":"BNPP AM","fonctionId":"Chief Operating Officer","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":105,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"BIVILLE","numSiret":31937883200038,"numTva":"FR93319378832","numeroRegistreCommerce":319378832,"prenomRepLegal":"Pascal","raisonSocial":"BNP PARIBAS ASSET MANAGEMENT","secteurId":8,"secteurLabel":"Asset management","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.770+02:00","dateModification":"2014-01-16T17:04:13.927+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":2.526774896E9,"compteClient":"CBNPCIB","compteCollectif":41110000,"compteIntitule":"BNPP CIB","fonctionId":"RESPONSABLE ACHATS","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":106,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"MARTY","numSiret":66204244900014,"numTva":"FR76662042449","numeroRegistreCommerce":662042449,"prenomRepLegal":"Laurent","raisonSocial":"BNP PARIBAS CIB","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-03-01T17:34:33.202+01:00","dateModification":"2013-11-28T13:48:24.085+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":0,"compteClient":"CBNPIPB","compteCollectif":41110000,"compteIntitule":"BNPP INVESTMENT PARTNERS BELGIUM","fonctionId":"Chief Executive Officer Belgium","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":156,"idCivilite":1,"lieuRegistreCommerce":"Brussels","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"LAFONT","numSiret":"","numTva":"","numeroRegistreCommerce":"","prenomRepLegal":"Olivier","raisonSocial":"BNP PARIBAS INVESTMENT PARTNERS BELGIUM","secteurId":1,"secteurLabel":"Finance de marché","statut":"Prospect","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-01T16:09:40.983+01:00","dateModification":"2013-12-20T16:24:41.073+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1203,"accountResponsibleName":"RAMDANE Smahane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.65279835E8,"compteClient":"CBNPSS","compteCollectif":41110000,"compteIntitule":"BNP PARIBAS SECURITIES SERVICES","employeesNumber":4,"fonctionId":"","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":155,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"","numSiret":55210801100065,"numTva":"","numeroRegistreCommerce":"552 108 011","prenomRepLegal":"","raisonSocial":"BNP PARIBAS SECURITIES SERVICES","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.891+02:00","dateModification":"2013-11-28T13:48:24.530+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":12,"businessUnitId":2,"businessUnitLabel":"Finance","capital":4.6722696E8,"compteClient":"CBPCE","compteCollectif":41110000,"compteIntitule":"BPCE","fonctionId":"DIRECTEUR","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":133,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"ROUBIN","numSiret":49345504200025,"numeroRegistreCommerce":493455042,"prenomRepLegal":"LAURENT","raisonSocial":"BPCE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.778+02:00","dateModification":"2013-11-28T13:48:24.668+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":12,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.15786838E9,"compteClient":"CCAISS","compteCollectif":41110000,"compteIntitule":"CAISSE EPARGNE PREVOYANCE IDF","fonctionId":"Membre du Directoire en charge de la Direction Financière","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":108,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"ERRERA","numSiret":38290094200014,"numTva":"FR29382900942","numeroRegistreCommerce":382900942,"prenomRepLegal":"Jean-Michel","raisonSocial":"CAISSE EPARGNE PREVOYANCE IDF","secteurId":7,"secteurLabel":"Banque de détail","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.783+02:00","dateModification":"2013-11-28T13:48:24.827+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":12,"businessUnitId":2,"businessUnitLabel":"Finance","capital":2.30960262E8,"compteClient":"CCALYO","compteCollectif":41110000,"compteIntitule":"CALYON","fonctionId":"Responsable Equity Derivatives & Commodities","formeJuridiqueId":8,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":109,"idCivilite":1,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"MEYER","numSiret":35325481600021,"numTva":"FR78353254816","numeroRegistreCommerce":353254816,"prenomRepLegal":"Philippe","raisonSocial":"CALYON","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-02-14T15:27:17.920+01:00","dateModification":"2013-11-28T13:48:25.010+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.5E7,"compteClient":"CCARMIGNAC","compteCollectif":41110000,"compteIntitule":"CARMIGNAC GESTION","fonctionId":"Chief Operating Officer","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":152,"idCivilite":3,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"RIBOUREL","numSiret":34950167600028,"numTva":"","numeroRegistreCommerce":349501676,"prenomRepLegal":"Caroline","raisonSocial":"CARMIGNAC GESTION","secteurId":2,"secteurLabel":"Assurances","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-07T18:44:22.270+01:00","dateModification":"2014-01-16T10:36:29.694+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":5.94151292E8,"compteClient":"CCNPA","compteCollectif":41110000,"compteIntitule":"CNP ASSURANCES","fonctionId":"Directrice","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":157,"idCivilite":3,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"GIRAUDON","numSiret":34173706200024,"numTva":"FR 59 341 737 062","numeroRegistreCommerce":"341 737 062","prenomRepLegal":"Laurence","raisonSocial":"CNP ASSURANCES","secteurId":2,"secteurLabel":"Assurances","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.797+02:00","dateModification":"2013-11-28T13:48:25.818+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":6.775271784E9,"compteClient":"CCREDI","compteCollectif":41110000,"compteIntitule":"CREDIT AGRICOLE CIB","fonctionId":"Responsable de GIO GIT BCI","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":112,"idCivilite":3,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"SAUVAGE","numSiret":30418770100350,"numTva":"","numeroRegistreCommerce":304187701,"prenomRepLegal":"Valérie","raisonSocial":"CRÉDIT AGRICOLE CIB","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-03-07T19:13:58.380+01:00","dateModification":"2013-12-18T12:04:00.556+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":5.00513102E8,"compteClient":"CDEXIA","compteCollectif":41110000,"compteIntitule":"DEXIA CREDIT LOCAL","fonctionId":"","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 58 58 70 00","isValueMask":false,"value":"01 58 58 70 00"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 58 58 77 77","isValueMask":false,"value":"01 58 58 77 77"},"headQuarterWebSite":"www.dexia-creditlocal.fr","id":158,"idCivilite":1,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"","numSiret":35180404200536,"numTva":"FR 49 351 804 042","numeroRegistreCommerce":"351 804 042","prenomRepLegal":"","raisonSocial":"DEXIA CREDIT LOCAL","secteurId":7,"secteurLabel":"Banque de détail","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.895+02:00","dateModification":"2013-11-28T13:48:26.593+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":3.06918E7,"compteClient":"CEXANE","compteCollectif":41110000,"compteIntitule":"EXANE","fonctionId":"SECRETAIRE GENERAL","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":134,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"ARZANO","numSiret":34204026800043,"numTva":"","numeroRegistreCommerce":342040268,"prenomRepLegal":"Jean","raisonSocial":"EXANE","secteurId":2,"secteurLabel":"Assurances","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T09:48:43.025+01:00","dateModification":"2013-11-28T13:48:27.468+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1203,"accountResponsibleName":"RAMDANE Smahane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":300000,"compteClient":"CGFIT","compteCollectif":41110000,"compteIntitule":"G-FIT","fonctionId":"Président","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 46 59 42 01","isValueMask":false,"value":"01 46 59 42 01"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 46 59 42 00","isValueMask":false,"value":"01 46 59 42 00"},"headQuarterWebSite":"","id":159,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"GRELLARD","numSiret":41865181600054,"numTva":"","numeroRegistreCommerce":"418 651 816","prenomRepLegal":"Philippe","raisonSocial":"G-FIT","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T10:19:20.257+01:00","dateModification":"2013-11-28T13:48:27.284+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":3.412E8,"compteClient":"CGAZT","compteCollectif":41110000,"compteIntitule":"GDF SUEZ TRADING","employeesNumber":4,"fonctionId":"Directeur Général","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":160,"idCivilite":1,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"CHAREYRE","numSiret":"","numTva":"FR 15 437 982 937","numeroRegistreCommerce":"437 982 937","prenomRepLegal":"Pierre","raisonSocial":"GDF SUEZ TRADING","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.904+02:00","dateModification":"2013-11-28T13:48:27.784+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":12,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.686569399E9,"compteClient":"CGROUP","compteCollectif":41110000,"compteIntitule":"GROUPAMA","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":136,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","numSiret":34311513500026,"numeroRegistreCommerce":343115135,"raisonSocial":"GROUPAMA","secteurId":2,"secteurLabel":"Assurances","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T10:41:58.607+01:00","dateModification":"2014-01-06T17:19:37.660+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1878910,"compteClient":"CGROUPAM","compteCollectif":41110000,"compteIntitule":"GROUPAMA ASSET MANAGEMENT","employeesNumber":4,"fonctionId":"Directeur des Activités Support","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 56 59 41 86","isValueMask":false,"value":"01 56 59 41 86"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 44 56 58 10","isValueMask":false,"value":"01 44 56 58 10"},"headQuarterWebSite":"www.groupama-am.fr","id":161,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"MERVAUD","numSiret":38952215200039,"numTva":"","numeroRegistreCommerce":"389 522 152","prenomRepLegal":"Serge","raisonSocial":"GROUPAMA ASSET MANAGEMENT","secteurId":8,"secteurLabel":"Asset management","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-01-18T16:39:23.508+01:00","dateModification":"2014-01-06T17:48:59.277+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":3.37189135E8,"compteClient":"CHSBC","compteCollectif":41110000,"compteIntitule":"HSBC","fonctionId":"Directeur Adjoint","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":145,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"DETOUT","numSiret":"","numTva":"","numeroRegistreCommerce":775670284,"prenomRepLegal":"Pierre","raisonSocial":"HSBC FRANCE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-01T13:21:34.247+01:00","dateModification":"2013-12-30T16:44:37.234+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1203,"accountResponsibleName":"RAMDANE Smahane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.0E9,"compteClient":"CBDF","compteCollectif":41110000,"compteIntitule":"LA BANQUE DE FRANCE","employeesNumber":4,"fonctionId":"","formeJuridiqueId":103,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 72 92 28 22","isValueMask":false,"value":"01 72 92 28 22"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 42 92 42 92","isValueMask":false,"value":"01 42 92 42 92"},"headQuarterWebSite":"www.banque-france.fr","id":154,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"","numSiret":57210489100013,"numTva":"FR 80 572 104 891","numeroRegistreCommerce":"572 104 891","prenomRepLegal":"","raisonSocial":"LA BANQUE DE FRANCE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T12:04:14.726+01:00","dateModification":"2014-01-16T11:05:38.317+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":2.34245409E9,"compteClient":"CBPOST","compteCollectif":41110000,"compteIntitule":"LA BANQUE POSTALE","employeesNumber":4,"fonctionId":"Directeur des Systèmes d'Information","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":162,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"BLIN","numSiret":42110064500033,"numTva":"","numeroRegistreCommerce":"421 100 645","prenomRepLegal":"Philippe","raisonSocial":"LA BANQUE POSTALE","secteurId":7,"secteurLabel":"Banque de détail","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.831+02:00","dateModification":"2014-01-17T09:41:19.720+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.611063E8,"compteClient":"CLYXOR","compteCollectif":41110000,"compteIntitule":"LYXOR AM","fonctionId":"","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":118,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"","numSiret":41886221500013,"numTva":"FR60418862215","numeroRegistreCommerce":418862215,"prenomRepLegal":"","raisonSocial":"LYXOR ASSET MANAGEMENT","secteurId":8,"secteurLabel":"Asset management","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.842+02:00","dateModification":"2013-12-27T09:25:17.524+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1203,"accountResponsibleName":"RAMDANE Smahane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":4.9317534208E9,"compteClient":"CNATIX","compteCollectif":41110000,"compteIntitule":"NATIXIS","fonctionId":"Direction Achats","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":120,"idCivilite":3,"lieuRegistreCommerce":"Paris","marcheId":102,"marcheLabel":"Finance - Natixis","nomRepLegal":"BUENO","numSiret":54204452400016,"numTva":"FR73542044524","numeroRegistreCommerce":542044524,"prenomRepLegal":"Martine","raisonSocial":"NATIXIS","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T12:29:17.149+01:00","dateModification":"2013-12-20T17:28:52.438+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1203,"accountResponsibleName":"RAMDANE Smahane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":5.043460476E7,"compteClient":"CNATIXAM","compteCollectif":41110000,"compteIntitule":"NATIXIS AM","employeesNumber":4,"fonctionId":"Directeur des Opérations","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 78 40 60 80","isValueMask":false,"value":"01 78 40 60 80"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 78 40 80 00","isValueMask":false,"value":"01 78 40 80 00"},"headQuarterWebSite":"www.am.natixis.com","id":163,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":102,"marcheLabel":"Finance - Natixis","nomRepLegal":"FOURNELLE","numSiret":32945073800078,"numTva":"","numeroRegistreCommerce":329450738,"prenomRepLegal":"Franck","raisonSocial":"NATIXIS ASSET MANAGEMENT","secteurId":8,"secteurLabel":"Asset management","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-04-12T11:32:28.974+02:00","dateModification":"2013-11-28T13:48:30.258+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":6.0E7,"compteClient":"CODDO","compteCollectif":41110000,"compteIntitule":"ODDO ET CIE","fonctionId":"DIRECTEUR ASSOCIE","headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":166,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"DE LEUSSE","numSiret":"","numTva":"","numeroRegistreCommerce":652027384,"prenomRepLegal":"Guy","raisonSocial":"ODDO ET CIE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T12:51:59.627+01:00","dateModification":"2013-11-28T13:48:31.932+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":80000,"compteClient":"CSOAT","compteCollectif":41110000,"compteIntitule":"SOAT","fonctionId":"Directeur Associé","formeJuridiqueId":3,"headQuarterEmail":"info@so-at.com","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 44 75 05 25","isValueMask":false,"value":"01 44 75 05 25"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 44 75 42 56","isValueMask":false,"value":"01 44 75 42 56"},"headQuarterWebSite":"","id":164,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"AZRIA","numSiret":43335376000039,"numTva":"","numeroRegistreCommerce":"433 353 760","prenomRepLegal":"Michel","raisonSocial":"SOAT","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.866+02:00","dateModification":"2014-01-16T15:11:29.962+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":9.7009998875E8,"compteClient":"CSOCIE","compteCollectif":41110000,"compteIntitule":"SOCIETE GENERALE","fonctionId":"","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":126,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"","numSiret":55212022200013,"numTva":"FR27552120222","numeroRegistreCommerce":552120222,"prenomRepLegal":"","raisonSocial":"SOCIETE GENERALE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.919+02:00","dateModification":"2013-11-28T13:48:32.266+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":6.1623908E7,"compteClient":"CSODEXO","compteCollectif":41110000,"compteIntitule":"SODEXO","fonctionId":"","headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":140,"lieuRegistreCommerce":"Nanterre","marcheId":6,"marcheLabel":"Services","nomRepLegal":"","numSiret":34039306500131,"numTva":"","numeroRegistreCommerce":340393065,"prenomRepLegal":"","raisonSocial":"SODEXO SOLUTIONS DE MOTIVATION FRANCE","secteurId":6,"secteurLabel":"Services","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-10-08T15:47:11.447+02:00","dateModification":"2013-11-28T13:48:32.799+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":362,"accountResponsibleName":"BIACHE Jean Luc","bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":40000,"compteClient":"CTALCANADA","compteCollectif":41110001,"compteIntitule":"TALAN CANADA","employeesNumber":1,"fonctionId":"Président","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":170,"idCivilite":1,"lieuRegistreCommerce":"","marcheId":6,"marcheLabel":"Services","nomRepLegal":"HOUAS","numSiret":"","numTva":"","numeroRegistreCommerce":"","prenomRepLegal":"Mehdi","raisonSocial":"TALAN CONSEILS CANADA","statut":"Client","teteGroupe":"n"}}];
          /*  $http({
                    url: baseUrl + 'rest/Ca/loadCust/'+$scope.selectedBu.id,
                method: 'GET',
                headers: { 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {
                    $scope.customers = data;
                    //$scope.$apply();

                });*/
        };
        $scope.ClientChanged = function () {
            $scope.projet = [{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":113,"projectCode":null,"customerId":null,"customerLabel":null,"label":"AMPERE","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":107,"projectCode":null,"customerId":null,"customerLabel":null,"label":"COSIM & MOA T","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":106,"projectCode":null,"customerId":null,"customerLabel":null,"label":"Homologation","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":122,"projectCode":null,"customerId":null,"customerLabel":null,"label":"IE","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":111,"projectCode":null,"customerId":null,"customerLabel":null,"label":"IODE","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":123,"projectCode":null,"customerId":null,"customerLabel":null,"label":"IRIS","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":124,"projectCode":null,"customerId":null,"customerLabel":null,"label":"LINKY","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":110,"projectCode":null,"customerId":null,"customerLabel":null,"label":"MOA Flux","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":108,"projectCode":null,"customerId":null,"customerLabel":null,"label":"PDM","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":109,"projectCode":null,"customerId":null,"customerLabel":null,"label":"PDM&C5","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":104,"projectCode":null,"customerId":null,"customerLabel":null,"label":"SGE","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":103,"projectCode":null,"customerId":null,"customerLabel":null,"label":"SI Producteurs - AF","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":102,"projectCode":null,"customerId":null,"customerLabel":null,"label":"SI Producteurs - MOA SI","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":121,"projectCode":null,"customerId":null,"customerLabel":null,"label":"SIAL - GDROM","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":112,"projectCode":null,"customerId":null,"customerLabel":null,"label":"SIAP","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":118,"projectCode":null,"customerId":null,"customerLabel":null,"label":"Tamaris","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false}];
           /* $http({
                url: baseUrl + 'graniteamf/chiffreAffaire/loadGroupedProjectLabels/'+$scope.SelectedClients.prospectClientDTO.id,
                method: 'GET',
                headers: { 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {
                    $scope.projet = data;
                    // $scope.$apply();

                });*/
        };
        obj = $scope.detailPerson;
        $scope.go = function(name){
            obj = name;
            //$state.go('ListPeriodeEssai');
        }
        $scope.showConfirm = function () {
            $scope.affaire =[{"employee":"DE GUALY DE SAINT ROME Marie-liesse","ca":45317.398340217755,"pm":84910.16375129521,"devise":"€"},{"employee":"ACHKAR Nayla","ca":60686.47876337172,"pm":0.0,"devise":"€"},{"employee":"SZWEDOWSKI Julien","ca":19231.617218283925,"pm":88618.03024739919,"devise":"€"},{"employee":"GOBIN Damien","ca":79131.88193130949,"pm":126179.44442434341,"devise":"€"},{"employee":"DIALLO FOFANA Mariam","ca":81797.94001941389,"pm":121598.44691296805,"devise":"€"},{"employee":"BEN MOUSSA Wifak","ca":517.1653788369134,"pm":66412.27380015732,"devise":"€"},{"employee":"BEN ELKADI Zakariae","ca":5642.722223998982,"pm":43281.42485858437,"devise":"€"},{"employee":"BRIFFAUT Nicolas","ca":17227.13015864511,"pm":20134.77387883556,"devise":"€"},{"employee":"HMIDA Montassar","ca":41838.7144092657,"pm":113153.68126584495,"devise":"€"},{"employee":"CARDINAL Marie","ca":46535.557867493466,"pm":57917.37315055463,"devise":"€"},{"employee":"ORIOL Marjolaine","ca":28871.68059159168,"pm":115232.67418480635,"devise":"€"},{"employee":"SOULALIOUX Isabelle","ca":37835.60953115345,"pm":84387.75627240143,"devise":"€"},{"employee":"NGUYEN TRONG Luong","ca":87114.28920823993,"pm":90810.15278476418,"devise":"€"},{"employee":"BEN MANSOUR Amine","ca":10635.401773417829,"pm":57987.85778593142,"devise":"€"},{"employee":"OUAZZANY Jade","ca":10729.519306836652,"pm":53668.81720430107,"devise":"€"},{"employee":"DRAME Ibrahima-sory","ca":19894.096308499586,"pm":20103.284552845536,"devise":"€"}]

            /*  for (var i=0; i<authorities.length; i++) {
             if (authorities[i] == 'ROLE_CONSULT_RAPPORTS_PROSPECT') {

             }*/
          /*  $http({
                url: baseUrl + 'graniteamf/chiffreAffaire/loadPvVsPi/' + $scope.dateFin+"/"+$scope.dateDeb  +"/"+$scope.selectedBu.businessUnitDTO.id+"/"+$scope.SelectedClients.prospectClientDTO.id+"/"+$scope.SelectedProjet.id+"/1" ,
                method: 'GET',
                headers:{ 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {

                    $scope.affaire = data;

                })
                .error(function() {
                    alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

                });*/
        }
        $scope.showChart = function () {
            /*  for (var i=0; i<authorities.length; i++) {
             if (authorities[i] == 'ROLE_CONSULT_RAPPORTS_PROSPECT') {

             }*/
            $scope.chartCaVsEmpl = [
                {
                    key: "Cumulative Return",
                    values: [["DE GUALY DE SAINT ROME Marie-liesse",45317.398340217755],["ACHKAR Nayla",60686.47876337172],["SZWEDOWSKI Julien",19231.617218283925],["GOBIN Damien",79131.88193130949],["DIALLO FOFANA Mariam",81797.94001941389],["BEN MOUSSA Wifak",517.1653788369134],["BEN ELKADI Zakariae",5642.722223998982],["BRIFFAUT Nicolas",17227.13015864511],["HMIDA Montassar",41838.7144092657],["CARDINAL Marie",46535.557867493466],["ORIOL Marjolaine",28871.68059159168],["SOULALIOUX Isabelle",37835.60953115345],["NGUYEN TRONG Luong",87114.28920823993],["BEN MANSOUR Amine",10635.401773417829],["OUAZZANY Jade",10729.519306836652],["DRAME Ibrahima-sory",19894.096308499586]]
                }
            ];
           /* $http({
                url: baseUrl + 'graniteamf/chiffreAffaire/loadPvVsPiJson/' + $scope.dateFin+"/"+$scope.dateDeb  +"/"+$scope.selectedBu.businessUnitDTO.id+"/"+$scope.SelectedClients.prospectClientDTO.id+"/"+$scope.SelectedProjet.id+"/1" ,
                method: 'GET',
                headers: { 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {

                    $scope.chiffreAffaireVsEmploye = data;
                    $scope.chartCaVsEmpl = [
                        {
                            key: "Cumulative Return",
                            values: $scope.chiffreAffaireVsEmploye
                        }
                    ];
                })
                .error(function() {
                    alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

                });*/

        }

    })

    .controller('PvPiCtrl',  function($scope,$state,$location,$cookieStore, $http) {
        $scope.allBu = [
            {

                id: 3,
                libelle: "Energie",
                abreviation: "NRJ",
                responsableId: 199,
                responsableLabel: "GIFFARD François",
                order: 0,
                label: "Energie"
            },
            {

                id: 2,
                libelle: "Finance",
                abreviation: "FIN",
                responsableId: 362,
                responsableLabel: "BIACHE Jean Luc",
                order: 1,
                label: "Finance"
            }];
      /*  $http({
            url: baseUrl + 'rest/Ca/findAllBu',
            method: 'GET',
            headers: { 'login' :  localStorage.getItem('login'),
                'password':  localStorage.getItem('password')
            }
        }).success(function(data) {
                $scope.allBu = data;
                //              $scope.$apply();
            });*/


        $scope.buChanged = function () {
            $scope.customers = [{"prospectClientDTO":{"dateCreation":"2013-10-11T12:36:16.622+02:00","dateModification":"2013-11-28T13:48:22.231+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":143,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":250000,"compteClient":"CACCENTURE","compteCollectif":41110000,"compteIntitule":"ACCENTURE POST-TRADE PROCESSING","employeesNumber":2,"fonctionId":"Président","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 53 23 63 87","isValueMask":false,"value":"01 53 23 63 87"},"headQuarterWebSite":"","id":171,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"POUYFAUCON","numSiret":79268709700016,"numTva":"FR 88 792 687 097  ","numeroRegistreCommerce":792687097,"prenomRepLegal":"Pierre","raisonSocial":"ACCENTURE POST-TRADE PROCESSING SAS","secteurId":6,"secteurLabel":"Services","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-01-24T15:42:44.606+01:00","dateModification":"2013-11-28T13:48:22.519+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":4000000,"compteClient":"CAMUNDI","compteCollectif":41110000,"compteIntitule":"AMUNDI ALTERNATIVE INVESTMENTS","employeesNumber":2,"fonctionId":"Directeur Général","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":146,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"WATSON","numSiret":43961455300014,"numTva":"","numeroRegistreCommerce":439614553,"prenomRepLegal":"Andrew","raisonSocial":"AMUNDI","secteurId":2,"secteurLabel":"Assurances","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.646+02:00","dateModification":"2013-11-28T13:48:22.669+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":12,"businessUnitId":2,"businessUnitLabel":"Finance","capital":0,"compteClient":"CAPRIA","compteCollectif":41110000,"compteIntitule":"APRIA RSA","fonctionId":"Directeur Général","formeJuridiqueId":4,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":101,"idCivilite":1,"lieuRegistreCommerce":"","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"PAULOT","numSiret":77569189202486,"numTva":"","numeroRegistreCommerce":775691892,"prenomRepLegal":"Jean-marie","raisonSocial":"APRIA RSA","secteurId":2,"secteurLabel":"Assurances","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.751+02:00","dateModification":"2013-11-28T13:48:23.016+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":814000,"compteClient":"CASSET","compteCollectif":41110001,"compteIntitule":"ASSET TECHNOLOGY","fonctionId":"Président","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":102,"idCivilite":1,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"BIACHE","numSiret":43216017400020,"numTva":"FR68432160174","numeroRegistreCommerce":432160174,"prenomRepLegal":"Jean-luc","raisonSocial":"ASSET TECHNOLOGY","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-01-24T16:37:34.008+01:00","dateModification":"2014-01-16T16:11:09.373+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1384380,"compteClient":"CAXA","compteCollectif":41110000,"compteIntitule":"AXA INVESTMENT MANAGERS PARIS","employeesNumber":4,"fonctionId":"Global Head of Shared Operational Functions","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 44 45 70 00","isValueMask":false,"value":"01 44 45 70 00"},"headQuarterWebSite":"","id":147,"idCivilite":1,"lieuRegistreCommerce":"Nanterre","marcheId":101,"marcheLabel":"Finance - AXA IM","nomRepLegal":"COQUEMA","numSiret":35353450600046,"numTva":"","numeroRegistreCommerce":353534506,"prenomRepLegal":"Christophe","raisonSocial":"AXA INVESTMENT MANAGERS PARIS","secteurId":2,"secteurLabel":"Assurances","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T13:10:50.652+01:00","dateModification":"2014-01-15T17:42:16.737+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":2.526774896E9,"compteClient":"CBNP","compteCollectif":41110000,"compteIntitule":"BNP PARIBAS","employeesNumber":4,"fonctionId":"Responsable","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":165,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"GENIN","numSiret":66204244900014,"numTva":"","numeroRegistreCommerce":"662 042 449","prenomRepLegal":"Eric","raisonSocial":"BNP PARIBAS","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.760+02:00","dateModification":"2014-01-15T17:37:54.097+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1467,"accountResponsibleName":"GROS Clara","bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":3.23753355E8,"compteClient":"CBNPA","compteCollectif":41110000,"compteIntitule":"BNPP ARBITRAGE","fonctionId":"","formeJuridiqueId":9,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":104,"lieuRegistreCommerce":"Paris","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"","numSiret":39489583300033,"numTva":"FR30394895833","numeroRegistreCommerce":394895833,"prenomRepLegal":"","raisonSocial":"BNP PARIBAS ARBITRAGE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.765+02:00","dateModification":"2013-11-28T13:48:23.744+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":6.4931168E7,"compteClient":"CBNPP","compteCollectif":41110000,"compteIntitule":"BNPP AM","fonctionId":"Chief Operating Officer","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":105,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"BIVILLE","numSiret":31937883200038,"numTva":"FR93319378832","numeroRegistreCommerce":319378832,"prenomRepLegal":"Pascal","raisonSocial":"BNP PARIBAS ASSET MANAGEMENT","secteurId":8,"secteurLabel":"Asset management","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.770+02:00","dateModification":"2014-01-16T17:04:13.927+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":2.526774896E9,"compteClient":"CBNPCIB","compteCollectif":41110000,"compteIntitule":"BNPP CIB","fonctionId":"RESPONSABLE ACHATS","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":106,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"MARTY","numSiret":66204244900014,"numTva":"FR76662042449","numeroRegistreCommerce":662042449,"prenomRepLegal":"Laurent","raisonSocial":"BNP PARIBAS CIB","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-03-01T17:34:33.202+01:00","dateModification":"2013-11-28T13:48:24.085+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":0,"compteClient":"CBNPIPB","compteCollectif":41110000,"compteIntitule":"BNPP INVESTMENT PARTNERS BELGIUM","fonctionId":"Chief Executive Officer Belgium","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":156,"idCivilite":1,"lieuRegistreCommerce":"Brussels","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"LAFONT","numSiret":"","numTva":"","numeroRegistreCommerce":"","prenomRepLegal":"Olivier","raisonSocial":"BNP PARIBAS INVESTMENT PARTNERS BELGIUM","secteurId":1,"secteurLabel":"Finance de marché","statut":"Prospect","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-01T16:09:40.983+01:00","dateModification":"2013-12-20T16:24:41.073+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1203,"accountResponsibleName":"RAMDANE Smahane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.65279835E8,"compteClient":"CBNPSS","compteCollectif":41110000,"compteIntitule":"BNP PARIBAS SECURITIES SERVICES","employeesNumber":4,"fonctionId":"","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":155,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":100,"marcheLabel":"Finance - BNP","nomRepLegal":"","numSiret":55210801100065,"numTva":"","numeroRegistreCommerce":"552 108 011","prenomRepLegal":"","raisonSocial":"BNP PARIBAS SECURITIES SERVICES","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.891+02:00","dateModification":"2013-11-28T13:48:24.530+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":12,"businessUnitId":2,"businessUnitLabel":"Finance","capital":4.6722696E8,"compteClient":"CBPCE","compteCollectif":41110000,"compteIntitule":"BPCE","fonctionId":"DIRECTEUR","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":133,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"ROUBIN","numSiret":49345504200025,"numeroRegistreCommerce":493455042,"prenomRepLegal":"LAURENT","raisonSocial":"BPCE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.778+02:00","dateModification":"2013-11-28T13:48:24.668+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":12,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.15786838E9,"compteClient":"CCAISS","compteCollectif":41110000,"compteIntitule":"CAISSE EPARGNE PREVOYANCE IDF","fonctionId":"Membre du Directoire en charge de la Direction Financière","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":108,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"ERRERA","numSiret":38290094200014,"numTva":"FR29382900942","numeroRegistreCommerce":382900942,"prenomRepLegal":"Jean-Michel","raisonSocial":"CAISSE EPARGNE PREVOYANCE IDF","secteurId":7,"secteurLabel":"Banque de détail","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.783+02:00","dateModification":"2013-11-28T13:48:24.827+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":12,"businessUnitId":2,"businessUnitLabel":"Finance","capital":2.30960262E8,"compteClient":"CCALYO","compteCollectif":41110000,"compteIntitule":"CALYON","fonctionId":"Responsable Equity Derivatives & Commodities","formeJuridiqueId":8,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":109,"idCivilite":1,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"MEYER","numSiret":35325481600021,"numTva":"FR78353254816","numeroRegistreCommerce":353254816,"prenomRepLegal":"Philippe","raisonSocial":"CALYON","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-02-14T15:27:17.920+01:00","dateModification":"2013-11-28T13:48:25.010+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.5E7,"compteClient":"CCARMIGNAC","compteCollectif":41110000,"compteIntitule":"CARMIGNAC GESTION","fonctionId":"Chief Operating Officer","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":152,"idCivilite":3,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"RIBOUREL","numSiret":34950167600028,"numTva":"","numeroRegistreCommerce":349501676,"prenomRepLegal":"Caroline","raisonSocial":"CARMIGNAC GESTION","secteurId":2,"secteurLabel":"Assurances","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-07T18:44:22.270+01:00","dateModification":"2014-01-16T10:36:29.694+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":5.94151292E8,"compteClient":"CCNPA","compteCollectif":41110000,"compteIntitule":"CNP ASSURANCES","fonctionId":"Directrice","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":157,"idCivilite":3,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"GIRAUDON","numSiret":34173706200024,"numTva":"FR 59 341 737 062","numeroRegistreCommerce":"341 737 062","prenomRepLegal":"Laurence","raisonSocial":"CNP ASSURANCES","secteurId":2,"secteurLabel":"Assurances","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.797+02:00","dateModification":"2013-11-28T13:48:25.818+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":6.775271784E9,"compteClient":"CCREDI","compteCollectif":41110000,"compteIntitule":"CREDIT AGRICOLE CIB","fonctionId":"Responsable de GIO GIT BCI","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":112,"idCivilite":3,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"SAUVAGE","numSiret":30418770100350,"numTva":"","numeroRegistreCommerce":304187701,"prenomRepLegal":"Valérie","raisonSocial":"CRÉDIT AGRICOLE CIB","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-03-07T19:13:58.380+01:00","dateModification":"2013-12-18T12:04:00.556+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":5.00513102E8,"compteClient":"CDEXIA","compteCollectif":41110000,"compteIntitule":"DEXIA CREDIT LOCAL","fonctionId":"","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 58 58 70 00","isValueMask":false,"value":"01 58 58 70 00"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 58 58 77 77","isValueMask":false,"value":"01 58 58 77 77"},"headQuarterWebSite":"www.dexia-creditlocal.fr","id":158,"idCivilite":1,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"","numSiret":35180404200536,"numTva":"FR 49 351 804 042","numeroRegistreCommerce":"351 804 042","prenomRepLegal":"","raisonSocial":"DEXIA CREDIT LOCAL","secteurId":7,"secteurLabel":"Banque de détail","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.895+02:00","dateModification":"2013-11-28T13:48:26.593+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":3.06918E7,"compteClient":"CEXANE","compteCollectif":41110000,"compteIntitule":"EXANE","fonctionId":"SECRETAIRE GENERAL","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":134,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"ARZANO","numSiret":34204026800043,"numTva":"","numeroRegistreCommerce":342040268,"prenomRepLegal":"Jean","raisonSocial":"EXANE","secteurId":2,"secteurLabel":"Assurances","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T09:48:43.025+01:00","dateModification":"2013-11-28T13:48:27.468+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1203,"accountResponsibleName":"RAMDANE Smahane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":300000,"compteClient":"CGFIT","compteCollectif":41110000,"compteIntitule":"G-FIT","fonctionId":"Président","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 46 59 42 01","isValueMask":false,"value":"01 46 59 42 01"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 46 59 42 00","isValueMask":false,"value":"01 46 59 42 00"},"headQuarterWebSite":"","id":159,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"GRELLARD","numSiret":41865181600054,"numTva":"","numeroRegistreCommerce":"418 651 816","prenomRepLegal":"Philippe","raisonSocial":"G-FIT","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T10:19:20.257+01:00","dateModification":"2013-11-28T13:48:27.284+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":3.412E8,"compteClient":"CGAZT","compteCollectif":41110000,"compteIntitule":"GDF SUEZ TRADING","employeesNumber":4,"fonctionId":"Directeur Général","formeJuridiqueId":7,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":160,"idCivilite":1,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"CHAREYRE","numSiret":"","numTva":"FR 15 437 982 937","numeroRegistreCommerce":"437 982 937","prenomRepLegal":"Pierre","raisonSocial":"GDF SUEZ TRADING","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.904+02:00","dateModification":"2013-11-28T13:48:27.784+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":12,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.686569399E9,"compteClient":"CGROUP","compteCollectif":41110000,"compteIntitule":"GROUPAMA","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":136,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","numSiret":34311513500026,"numeroRegistreCommerce":343115135,"raisonSocial":"GROUPAMA","secteurId":2,"secteurLabel":"Assurances","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T10:41:58.607+01:00","dateModification":"2014-01-06T17:19:37.660+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1878910,"compteClient":"CGROUPAM","compteCollectif":41110000,"compteIntitule":"GROUPAMA ASSET MANAGEMENT","employeesNumber":4,"fonctionId":"Directeur des Activités Support","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 56 59 41 86","isValueMask":false,"value":"01 56 59 41 86"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 44 56 58 10","isValueMask":false,"value":"01 44 56 58 10"},"headQuarterWebSite":"www.groupama-am.fr","id":161,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"MERVAUD","numSiret":38952215200039,"numTva":"","numeroRegistreCommerce":"389 522 152","prenomRepLegal":"Serge","raisonSocial":"GROUPAMA ASSET MANAGEMENT","secteurId":8,"secteurLabel":"Asset management","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-01-18T16:39:23.508+01:00","dateModification":"2014-01-06T17:48:59.277+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":3.37189135E8,"compteClient":"CHSBC","compteCollectif":41110000,"compteIntitule":"HSBC","fonctionId":"Directeur Adjoint","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":145,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"DETOUT","numSiret":"","numTva":"","numeroRegistreCommerce":775670284,"prenomRepLegal":"Pierre","raisonSocial":"HSBC FRANCE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-01T13:21:34.247+01:00","dateModification":"2013-12-30T16:44:37.234+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1203,"accountResponsibleName":"RAMDANE Smahane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.0E9,"compteClient":"CBDF","compteCollectif":41110000,"compteIntitule":"LA BANQUE DE FRANCE","employeesNumber":4,"fonctionId":"","formeJuridiqueId":103,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 72 92 28 22","isValueMask":false,"value":"01 72 92 28 22"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 42 92 42 92","isValueMask":false,"value":"01 42 92 42 92"},"headQuarterWebSite":"www.banque-france.fr","id":154,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"","numSiret":57210489100013,"numTva":"FR 80 572 104 891","numeroRegistreCommerce":"572 104 891","prenomRepLegal":"","raisonSocial":"LA BANQUE DE FRANCE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T12:04:14.726+01:00","dateModification":"2014-01-16T11:05:38.317+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":2.34245409E9,"compteClient":"CBPOST","compteCollectif":41110000,"compteIntitule":"LA BANQUE POSTALE","employeesNumber":4,"fonctionId":"Directeur des Systèmes d'Information","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":162,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"BLIN","numSiret":42110064500033,"numTva":"","numeroRegistreCommerce":"421 100 645","prenomRepLegal":"Philippe","raisonSocial":"LA BANQUE POSTALE","secteurId":7,"secteurLabel":"Banque de détail","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.831+02:00","dateModification":"2014-01-17T09:41:19.720+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":1.611063E8,"compteClient":"CLYXOR","compteCollectif":41110000,"compteIntitule":"LYXOR AM","fonctionId":"","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":118,"lieuRegistreCommerce":"Nanterre","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"","numSiret":41886221500013,"numTva":"FR60418862215","numeroRegistreCommerce":418862215,"prenomRepLegal":"","raisonSocial":"LYXOR ASSET MANAGEMENT","secteurId":8,"secteurLabel":"Asset management","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.842+02:00","dateModification":"2013-12-27T09:25:17.524+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1203,"accountResponsibleName":"RAMDANE Smahane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":4.9317534208E9,"compteClient":"CNATIX","compteCollectif":41110000,"compteIntitule":"NATIXIS","fonctionId":"Direction Achats","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":120,"idCivilite":3,"lieuRegistreCommerce":"Paris","marcheId":102,"marcheLabel":"Finance - Natixis","nomRepLegal":"BUENO","numSiret":54204452400016,"numTva":"FR73542044524","numeroRegistreCommerce":542044524,"prenomRepLegal":"Martine","raisonSocial":"NATIXIS","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T12:29:17.149+01:00","dateModification":"2013-12-20T17:28:52.438+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1203,"accountResponsibleName":"RAMDANE Smahane","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":5.043460476E7,"compteClient":"CNATIXAM","compteCollectif":41110000,"compteIntitule":"NATIXIS AM","employeesNumber":4,"fonctionId":"Directeur des Opérations","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 78 40 60 80","isValueMask":false,"value":"01 78 40 60 80"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 78 40 80 00","isValueMask":false,"value":"01 78 40 80 00"},"headQuarterWebSite":"www.am.natixis.com","id":163,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":102,"marcheLabel":"Finance - Natixis","nomRepLegal":"FOURNELLE","numSiret":32945073800078,"numTva":"","numeroRegistreCommerce":329450738,"prenomRepLegal":"Franck","raisonSocial":"NATIXIS ASSET MANAGEMENT","secteurId":8,"secteurLabel":"Asset management","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-04-12T11:32:28.974+02:00","dateModification":"2013-11-28T13:48:30.258+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":6.0E7,"compteClient":"CODDO","compteCollectif":41110000,"compteIntitule":"ODDO ET CIE","fonctionId":"DIRECTEUR ASSOCIE","headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":166,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"DE LEUSSE","numSiret":"","numTva":"","numeroRegistreCommerce":652027384,"prenomRepLegal":"Guy","raisonSocial":"ODDO ET CIE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2013-03-08T12:51:59.627+01:00","dateModification":"2013-11-28T13:48:31.932+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":1197,"accountResponsibleName":"BERNARD Marc-antoine","bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":80000,"compteClient":"CSOAT","compteCollectif":41110000,"compteIntitule":"SOAT","fonctionId":"Directeur Associé","formeJuridiqueId":3,"headQuarterEmail":"info@so-at.com","headQuarterFax":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 44 75 05 25","isValueMask":false,"value":"01 44 75 05 25"},"headQuarterPhone":{"isReferenced":false,"countryIndicator":33,"countryMask":"XX.XX.XX.XX.XX","disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"(+33) 01 44 75 42 56","isValueMask":false,"value":"01 44 75 42 56"},"headQuarterWebSite":"","id":164,"idCivilite":1,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"AZRIA","numSiret":43335376000039,"numTva":"","numeroRegistreCommerce":"433 353 760","prenomRepLegal":"Michel","raisonSocial":"SOAT","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client","teteGroupe":"n"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.866+02:00","dateModification":"2014-01-16T15:11:29.962+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":365,"accountResponsibleName":"MABROUK Marjane","bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":9.7009998875E8,"compteClient":"CSOCIE","compteCollectif":41110000,"compteIntitule":"SOCIETE GENERALE","fonctionId":"","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":126,"lieuRegistreCommerce":"Paris","marcheId":1,"marcheLabel":"Finance","nomRepLegal":"","numSiret":55212022200013,"numTva":"FR27552120222","numeroRegistreCommerce":552120222,"prenomRepLegal":"","raisonSocial":"SOCIETE GENERALE","secteurId":1,"secteurLabel":"Finance de marché","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2012-09-21T17:20:42.919+02:00","dateModification":"2013-11-28T13:48:32.266+01:00","isReferenced":false,"societeId":1,"bankAssociateId":101,"billingReleaseStatus":4,"businessUnitId":2,"businessUnitLabel":"Finance","capital":6.1623908E7,"compteClient":"CSODEXO","compteCollectif":41110000,"compteIntitule":"SODEXO","fonctionId":"","headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":140,"lieuRegistreCommerce":"Nanterre","marcheId":6,"marcheLabel":"Services","nomRepLegal":"","numSiret":34039306500131,"numTva":"","numeroRegistreCommerce":340393065,"prenomRepLegal":"","raisonSocial":"SODEXO SOLUTIONS DE MOTIVATION FRANCE","secteurId":6,"secteurLabel":"Services","statut":"Client"}},{"prospectClientDTO":{"dateCreation":"2013-10-08T15:47:11.447+02:00","dateModification":"2013-11-28T13:48:32.799+01:00","isReferenced":false,"societeId":1,"accountResponsibleId":362,"accountResponsibleName":"BIACHE Jean Luc","bankAssociateId":101,"billingReleaseStatus":1,"businessUnitId":2,"businessUnitLabel":"Finance","capital":40000,"compteClient":"CTALCANADA","compteCollectif":41110001,"compteIntitule":"TALAN CANADA","employeesNumber":1,"fonctionId":"Président","formeJuridiqueId":3,"headQuarterEmail":"","headQuarterFax":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterPhone":{"isReferenced":false,"disabledFalse":false,"disabledTrue":true,"fullPhoneNumber":"","isValueMask":false},"headQuarterWebSite":"","id":170,"idCivilite":1,"lieuRegistreCommerce":"","marcheId":6,"marcheLabel":"Services","nomRepLegal":"HOUAS","numSiret":"","numTva":"","numeroRegistreCommerce":"","prenomRepLegal":"Mehdi","raisonSocial":"TALAN CONSEILS CANADA","statut":"Client","teteGroupe":"n"}}];
//            console.log($scope.selectedBu);
//            $scope.customers = UserFactory.customers({buId: $scope.selectedBu.businessUnitDTO.id}, function (response) {
//            });
           /* $http({
                url: baseUrl + 'rest/Ca/loadCust/'+$scope.selectedBu.businessUnitDTO.id,
                method: 'GET',
                headers: { 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {
                    $scope.customers = data;
                    //$scope.$apply();

                });*/
        };
        $scope.ClientChanged = function () {
            $scope.projet = [{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":113,"projectCode":null,"customerId":null,"customerLabel":null,"label":"AMPERE","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":107,"projectCode":null,"customerId":null,"customerLabel":null,"label":"COSIM & MOA T","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":106,"projectCode":null,"customerId":null,"customerLabel":null,"label":"Homologation","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":122,"projectCode":null,"customerId":null,"customerLabel":null,"label":"IE","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":111,"projectCode":null,"customerId":null,"customerLabel":null,"label":"IODE","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":123,"projectCode":null,"customerId":null,"customerLabel":null,"label":"IRIS","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":124,"projectCode":null,"customerId":null,"customerLabel":null,"label":"LINKY","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":110,"projectCode":null,"customerId":null,"customerLabel":null,"label":"MOA Flux","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":108,"projectCode":null,"customerId":null,"customerLabel":null,"label":"PDM","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":109,"projectCode":null,"customerId":null,"customerLabel":null,"label":"PDM&C5","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":104,"projectCode":null,"customerId":null,"customerLabel":null,"label":"SGE","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":103,"projectCode":null,"customerId":null,"customerLabel":null,"label":"SI Producteurs - AF","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":102,"projectCode":null,"customerId":null,"customerLabel":null,"label":"SI Producteurs - MOA SI","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":121,"projectCode":null,"customerId":null,"customerLabel":null,"label":"SIAL - GDROM","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":112,"projectCode":null,"customerId":null,"customerLabel":null,"label":"SIAP","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false},{"connectedUser":null,"creator":null,"dateCreation":null,"dateModification":null,"societeId":null,"rowIndex":null,"isModified":null,"isReferenced":false,"id":118,"projectCode":null,"customerId":null,"customerLabel":null,"label":"Tamaris","isClosed":null,"contactsDtos":null,"contactsNames":null,"contactsTel":null,"contactsEmail":null,"parentProject":null,"parentProjectLabel":null,"subProjectsDtos":null,"subProjectsSearchDtos":"","subProjectsExportDtos":"","typePrestationsDtos":null,"typePrestationsSearchDtos":"","typePrestationsExportDtos":"","domainesFonctionnelsDtos":[],"domainesFonctionnelsDtosToRemove":[],"domainesFonctionnelsSearchDtos":"","domainesFonctionnelsExportDtos":"","environnementTechniquesDtos":[],"environnementTechniquesDtosToRemove":[],"environnementTechniquesSearchDtos":"","environnementTechniquesExportDtos":"","dateDebut":null,"dateFin":null,"duree":"","budget":null,"budgetStr":"0.0","responsableProjet":null,"responsableProjetNom":null,"nbreIntervenants":null,"businessUnitId":null,"businessUnitLabel":null,"secteurId":null,"secteurLabel":null,"intervenants":null,"competences":null,"organisation":null,"valAjoutee":null,"responsabilitesActivites":null,"livrables":null,"elementsReussite":null,"rexTalan":null,"syntheseProjet":null,"syntheseIntervention":null,"domaineFonctionnel":null,"environnementTechnique":null,"methodeUtilisee":null,"responsableProjetClt":null,"budgetClt":null,"budgetCltStr":"0.0","nbreIntervenantsClt":null,"dateDebutClt":null,"dateFinClt":null,"dureeClt":"","organistaionProjetClt":null,"contexteProjet":null,"objectifsProjet":null,"enjeuxProjet":null,"statut":null,"deviseClient":null,"deviseProjet":null,"canClose":false,"canReopen":false,"canDelete":false,"hasDoc":false,"hasSingleDoc":false,"subProject":false}];
           /* $http({
                url: baseUrl + 'graniteamf/chiffreAffaire/loadGroupedProjectLabels/'+$scope.SelectedClients.prospectClientDTO.id,
                method: 'GET',
                headers: { 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {
                    $scope.projet = data;
                   // $scope.$apply();

                });*/
        };
        obj = $scope.detailPerson;
        $scope.go = function(name){
            obj = name;
            //$state.go('ListPeriodeEssai');
        }
        $scope.showConfirm = function () {
            /*  for (var i=0; i<authorities.length; i++) {
             if (authorities[i] == 'ROLE_CONSULT_RAPPORTS_PROSPECT') {

             }*/
            $scope.affaire =[{"employee":"DE GUALY DE SAINT ROME Marie-liesse","ca":45317.398340217755,"pm":84910.16375129521,"devise":"€"},{"employee":"ACHKAR Nayla","ca":60686.47876337172,"pm":0.0,"devise":"€"},{"employee":"SZWEDOWSKI Julien","ca":19231.617218283925,"pm":88618.03024739919,"devise":"€"},{"employee":"GOBIN Damien","ca":79131.88193130949,"pm":126179.44442434341,"devise":"€"},{"employee":"DIALLO FOFANA Mariam","ca":81797.94001941389,"pm":121598.44691296805,"devise":"€"},{"employee":"BEN MOUSSA Wifak","ca":517.1653788369134,"pm":66412.27380015732,"devise":"€"},{"employee":"BEN ELKADI Zakariae","ca":5642.722223998982,"pm":43281.42485858437,"devise":"€"},{"employee":"BRIFFAUT Nicolas","ca":17227.13015864511,"pm":20134.77387883556,"devise":"€"},{"employee":"HMIDA Montassar","ca":41838.7144092657,"pm":113153.68126584495,"devise":"€"},{"employee":"CARDINAL Marie","ca":46535.557867493466,"pm":57917.37315055463,"devise":"€"},{"employee":"ORIOL Marjolaine","ca":28871.68059159168,"pm":115232.67418480635,"devise":"€"},{"employee":"SOULALIOUX Isabelle","ca":37835.60953115345,"pm":84387.75627240143,"devise":"€"},{"employee":"NGUYEN TRONG Luong","ca":87114.28920823993,"pm":90810.15278476418,"devise":"€"},{"employee":"BEN MANSOUR Amine","ca":10635.401773417829,"pm":57987.85778593142,"devise":"€"},{"employee":"OUAZZANY Jade","ca":10729.519306836652,"pm":53668.81720430107,"devise":"€"},{"employee":"DRAME Ibrahima-sory","ca":19894.096308499586,"pm":20103.284552845536,"devise":"€"}]
        /*$http({
            url: baseUrl + 'graniteamf/chiffreAffaire/loadCavsPm/' + $scope.dateFin+"/"+$scope.dateDeb  +"/"+$scope.selectedBu.businessUnitDTO.id+"/"+$scope.SelectedClients.prospectClientDTO.id+"/"+$scope.SelectedProjet.id+"/1" ,
            method: 'GET',
            headers: { 'login' :  localStorage.getItem('login'),
                'password':  localStorage.getItem('password')
            }
        }).success(function(data) {

                $scope.affaire = data;

            })
            .error(function() {
                alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

            });*/
        }
        $scope.showChart = function () {
            /*  for (var i=0; i<authorities.length; i++) {
             if (authorities[i] == 'ROLE_CONSULT_RAPPORTS_PROSPECT') {

             }*/
            $scope.chartCaVsEmpl = [
                {
                    key: "Cumulative Return",
                    values: [["DE GUALY DE SAINT ROME Marie-liesse",45317.398340217755],["ACHKAR Nayla",60686.47876337172],["SZWEDOWSKI Julien",19231.617218283925],["GOBIN Damien",79131.88193130949],["DIALLO FOFANA Mariam",81797.94001941389],["BEN MOUSSA Wifak",517.1653788369134],["BEN ELKADI Zakariae",5642.722223998982],["BRIFFAUT Nicolas",17227.13015864511],["HMIDA Montassar",41838.7144092657],["CARDINAL Marie",46535.557867493466],["ORIOL Marjolaine",28871.68059159168],["SOULALIOUX Isabelle",37835.60953115345],["NGUYEN TRONG Luong",87114.28920823993],["BEN MANSOUR Amine",10635.401773417829],["OUAZZANY Jade",10729.519306836652],["DRAME Ibrahima-sory",19894.096308499586]]

                }
            ];
     /*       $http({
                url: baseUrl + 'graniteamf/chiffreAffaire/loadCavsPmJson/' + $scope.dateFin+"/"+$scope.dateDeb  +"/"+$scope.selectedBu.businessUnitDTO.id+"/"+$scope.SelectedClients.prospectClientDTO.id+"/"+$scope.SelectedProjet.id+"/1" ,
                method: 'GET',
                headers:{ 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {

                    $scope.chiffreAffaireVsEmploye = data;
                    $scope.chartCaVsEmpl = [
                        {
                            key: "Cumulative Return",
                            values: $scope.chiffreAffaireVsEmploye
                        }
                    ];
                })
                .error(function() {
                    alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

                });*/

        }

    })
    .controller('QualiBUCtrl',  function($scope,$state,$location,$cookieStore, $http) {
        $scope.navTitle = "Superposition des graphes";

        $scope.goToLink = function () {
            $state.go('Main.superpositionQualif');
        };
     //   alert("test:" + localStorage.getItem("login"));
        /*  for (var i=0; i<authorities.length; i++) {
         if (authorities[i] == 'ROLE_CONSULT_RAPORT_RH_PROFIL') {

         }*/
        $scope.findProfils = [
            {
                key: "TALAN SAS",
                values:[["J1",57],["J2",35],["J3",30],["S1",42],["S2",26],["S3",17],["M1",7],["M2",4],["M3",1],["E1",2],["E2",0],["E3",0]]
            }
        ];
       /* $http({
            url: baseUrl + 'graniteamf/resource/json/profil',
            method: 'GET',
            headers: { 'login' :  localStorage.getItem('login'),
                'password':  localStorage.getItem('password')
            }

        }).success(function(data) {
                $scope.test = data;


                //              $scope.$apply();
            })
            .error(function() {
               alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

            });*/
        $scope.allBu = [
            {

                id: 3,
                libelle: "Energie",
                abreviation: "NRJ",
                responsableId: 199,
                responsableLabel: "GIFFARD François",
                order: 0,
                label: "Energie"
            },
            {

                id: 2,
                libelle: "Finance",
                abreviation: "FIN",
                responsableId: 362,
                responsableLabel: "BIACHE Jean Luc",
                order: 1,
                label: "Finance"
            }];
      /*  $http({
            url: baseUrl + 'rest/Ca/findAllBu',
            method: 'GET',
            headers: { 'login' :  localStorage.getItem('login'),
                'password':  localStorage.getItem('password')
            }
        }).success(function(data) {
                $scope.allBu = data;
                //              $scope.$apply();
            });
*/
        $scope.dataBu = function () {
            $scope.findProfilsById = [
                {
                    key: $scope.selectedBu.label,
                    color: '#d62728',
                    values:[["J1",57],["J2",35],["J3",30],["S1",42],["S2",26],["S3",17],["M1",7],["M2",4],["M3",1],["E1",2],["E2",0],["E3",0]]
                }
            ];
            /*$http({

                url: baseUrl + 'graniteamf/resource/findProfilByBu/'+$scope.selectedBu.businessUnitDTO.id,
                method: 'GET',
                headers: { 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }

            }).success(function(data) {

                    console.log(data);
                    $scope.sorti = data;
                    $scope.findProfilsById = [
                        {
                            key: $scope.selectedBu.businessUnitDTO.label,
                            color: '#d62728',
                            values: $scope.sorti
                        }
                    ];
                })

        };*/
        }
        $scope.showConfirm = function () {
            $scope.exampleData = [
                {
                    "key": "TALAN SAS",
                    color:'#1E7FCB',
                    "values": [["J1",57],["J2",35],["J3",30],["S1",42],["S2",26],["S3",17],["M1",7],["M2",4],["M3",1],["E1",2],["E2",0],["E3",0]]
                },
                {
                    "key": $scope.selectedBu.label,
                    color:  '#d62728',
                    "values": [["J1",57],["J2",35],["J3",30],["S1",42],["S2",26],["S3",17],["M1",7],["M2",4],["M3",1],["E1",2],["E2",0],["E3",0]]
                }

            ];
            /*  for (var i=0; i<authorities.length; i++) {
             if (authorities[i] == 'ROLE_CONSULT_RAPORT_RH_PROFIL') {

             }*/
           /* $http({
                url: baseUrl + 'graniteamf/resource/json/profil',
                method: 'GET',
                headers: { 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {
                    $scope.test = data;

                    //              $scope.$apply();

            $http({

                url: baseUrl + 'graniteamf/resource/findProfilByBu/'+$scope.selectedBu.businessUnitDTO.id,
                method: 'GET',
                headers: { 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }

            }).success(function(data) {

                    $scope.sorti = data;

            $scope.exampleData = [
                   {
                      "key": "TALAN SAS",
                       color:'#1E7FCB',
                       "values":   $scope.sorti
                   },
                  {
                     "key": $scope.selectedBu.businessUnitDTO.label,
                      color:  '#d62728',
                     "values":  $scope.test
                  }

             ];
                });
                })
                .error(function() {
                    alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

                });*/
    }
            $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Qualification');
                }
            }
        ];

        $scope.$on('tab.shown', function() {
            // Maybe load some content here
        });
        $scope.$on('tab.hidden', function() {
            // Perhaps cycle out some data in memory here
        });
    })
    .controller('SalaireTalanCtrl', function($scope,$cookieStore,$state,$http,$location) {
        $scope.navTitle = "Superposition des graphes";
        $scope.goToLink = function () {
            $state.go('Main.superpositionSalaire');
        };
        /*  for (var i=0; i<authorities.length; i++) {
         if (authorities[i] == ' ROLE_CONSULT_RAPORT_RH_SAL') {

         }*/
        $scope.findSalaire = [
            {
                key: "TALAN SAS",
                values: [["J1",57],["J2",35],["J3",30],["S1",42],["S2",26],["S3",17],["M1",7],["M2",4],["M3",1],["E1",2],["E2",0],["E3",0]]
            }
        ];
      /*  $http({
            url: baseUrl + 'graniteamf/resource/json/findAVGSalaire',
            method: 'GET',
            headers:{ 'login' :  localStorage.getItem('login'),
                'password':  localStorage.getItem('password')
            }
        }).success(function(data) {
                $scope.Salaire = data;
                $scope.findSalaire = [
                    {
                        key: "TALAN SAS",
                        values: $scope.Salaire
                    }
                ];

                //              $scope.$apply();
            }) .error(function() {
                alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

            });*/
        $scope.allBu = [
            {

                id: 3,
                libelle: "Energie",
                abreviation: "NRJ",
                responsableId: 199,
                responsableLabel: "GIFFARD François",
                order: 0,
                label: "Energie"
            },
            {

                id: 2,
                libelle: "Finance",
                abreviation: "FIN",
                responsableId: 362,
                responsableLabel: "BIACHE Jean Luc",
                order: 1,
                label: "Finance"
            }];
       /* $http({
            url: baseUrl + 'rest/Ca/findAllBu',
            method: 'GET',
            headers: { 'login' :  localStorage.getItem('login'),
                'password':  localStorage.getItem('password')
            }
        }).success(function(    data) {
                $scope.allBu = data;
                //              $scope.$apply();
            });*/
        $scope.dataBu = function () {
            $scope.findSalaireById = [
                {
                    key: $scope.selectedBu.label,
                    color: '#d62728',
                    values: [["J1",57],["J2",35],["J3",30],["S1",42],["S2",26],["S3",17],["M1",7],["M2",4],["M3",1],["E1",2],["E2",0],["E3",0]]
                }];
           /* $http({

                url: baseUrl + 'graniteamf/resource/json/findAVGSalaireByBu/'+$scope.selectedBu.businessUnitDTO.id,
                method: 'GET',
                headers: { 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {

                    console.log(data);
                    $scope.salairebyid = data;
                    $scope.findSalaireById = [
                        {
                            key: $scope.selectedBu.businessUnitDTO.label,
                            color: '#d62728',
                            values: $scope.salairebyid
                        }
                    ];
                });*/
        };
        $scope.showConfirm = function () {
            /*  for (var i=0; i<authorities.length; i++) {
             if (authorities[i] == ' ROLE_CONSULT_RAPORT_RH_SAL') {

             }*/
            $scope.exampleData = [
                {
                    "key": $scope.selectedBu.label,
                    color: '#d62728',
                    "values": [["J1",57],["J2",35],["J3",30],["S1",42],["S2",26],["S3",17],["M1",7],["M2",4],["M3",1],["E1",2],["E2",0],["E3",0]]
                },
                {
                    "key": "TALAN SAS",
                    color: '#1E7FCB',
                    "values": [["J1",57],["J2",35],["J3",30],["S1",42],["S2",26],["S3",17],["M1",7],["M2",4],["M3",1],["E1",2],["E2",0],["E3",0]]
                }

            ];
           /* $http({
                url: baseUrl + 'graniteamf/resource/json/findAVGSalaire',
                method: 'GET',
                headers: { 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {
                    $scope.test = data;

                    //              $scope.$apply();

                    $http({

                        url: baseUrl + 'graniteamf/resource/json/findAVGSalaireByBu/'+$scope.selectedBu.businessUnitDTO.id,
                        method: 'GET',
                        headers: { 'login' :  localStorage.getItem('login'),
                            'password':  localStorage.getItem('password')
                        }
                    }).success(function(data) {

                            $scope.sorti = data;


                            $scope.exampleData = [
                                {
                                    "key": $scope.selectedBu.businessUnitDTO.label,
                                    color: '#d62728',
                                    "values":   $scope.sorti
                                },
                                {
                                    "key": "TALAN SAS",
                                    color: '#1E7FCB',
                                    "values":  $scope.test
                                }

                            ];
                        });
                })
                .error(function() {
                    alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

                });*/
        }
        $scope.leftButtons = [
            {
                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
                tap: function (e) {
                    $location.url('/Main/Qualification');
                }
            }
        ];
        $scope.$on('tab.shown', function() {
            // Maybe load some content here
        });
        $scope.$on('tab.hidden', function() {
            // Perhaps cycle out some data in memory here
        });
    });

//    .controller('', function($scope,$state,$location) {
//        $scope.navTitle = "Superposition des graphes";
//        $scope.goToLink = function () {
//            $state.go('superpositionSalaire');
//        };
//        $scope.leftButtons = [
//            {
//                type: 'button icon-left ion-arrow-left-a button-clear button-dark',
//                tap: function (e) {
//                    $location.url('/Qualification');
//                }
//            }
//        ];
//        $scope.$on('tab.shown', function() {
//            // Maybe load some content here
//        });
//        $scope.$on('tab.hidden', function() {
//            // Perhaps cycle out some data in memory here
//        });
//    });
//
