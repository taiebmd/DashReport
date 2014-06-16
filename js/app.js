var app = angular.module('app', ['nvd3ChartDirectives', 'legendDirectives', 'ionic', 'ngCookies', 'autocomplete', 'app.controllers', 'app.services']);

app.config(function($compileProvider) {
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

});

app.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

	$stateProvider
	////////////////////////////////////////////
	//*******************left****************//
	.state('Outh', {
		url : '/Outh',
		controller : 'UserCtrl',
		templateUrl : 'templates/Authentification.html'
	}).state('Main', {
		url : '/Main',
		controller : '',
		templateUrl : 'templates/Abstract.html'
	}).state('Main.Autre', {
		url : '/Autre',
		controller : 'AutreCtrl',
		templateUrl : 'templates/Autre.html'
	}).state('MainAdm', {
		url : '/MainAdm',
		controller : '',
		templateUrl : 'templates/AbstractAdmin.html'
	}).state('Main.Resources', {
		url : '/Resources',
		controller : 'ResourcesController',
		templateUrl : 'templates/Resources.html'
	}).state('MainAdm.ResourcesAdmin', {
		url : '/ResourcesAdmin',
		controller : 'ResourcesAdminCtrl',
		templateUrl : 'templates/ResourcesAdmin.html'
	}).state('MainAdm.recherche', {
		url : '/recherche',
		controller : 'rechercheController',
		templateUrl : 'templates/recherche.html'
	}).state('Main.Sortie', {
		url : '/Sortie',
		controller : 'SortiesController',
		templateUrl : 'templates/test.html'
	}).state('Main.Sortie.Liste_personne', {
		url : '/list',
		controller : 'ResourceCtrl',
		views : {
			'inception' : {
				templateUrl : "templates/Sorties.html"
			}
		}
	}).state('Main.Sortie.ListSuiviRh', {
		url : '/detail',

		views : {
			'inception' : {
				templateUrl : 'templates/ListSuiviRh.html'
			}
		}
	}).state('Main.SuiviRH.Liste_person', {
		url : '/list',
		controller : 'ResourceCtrl',
		views : {
			'inception' : {
				templateUrl : "templates/SuiviRH.html"
			}
		}
	}).state('Main.SuiviRH.ListRH', {
		url : '/detail',
		controller : 'ResourceCtrl',
		views : {
			'inception' : {
				templateUrl : "templates/ListRH.html"
			}
		}
	}).state('Main.ListPeriodeEssai', {
		url : '/ListPeriodeEssai',
		controller : 'ListPeriodeEssaiCtrl',
		templateUrl : 'templates/ListPeriodeEssai.html'
	}).state('Main.Zoom', {
		url : '/Zoom',
		controller : 'zomCtrl',
		templateUrl : 'templates/Zoom.html'
	}).state('MainAdm.droits', {
		url : '/droits',
		controller : 'droitsController',
		templateUrl : 'templates/ResourcesAdmin.html'
	}).state('MainAdm.AddUser', {
		url : '/AddUser',
		controller : 'rechercheController',
		templateUrl : 'templates/AddUser.html'
	}).state('MainAdm.Société', {
		url : '/Société',
		controller : 'SociétéController',
		templateUrl : 'templates/Société.html'
	}).state('Main.Prospects', {
		url : '/Prospects',
		controller : 'ProspectsController',
		templateUrl : 'templates/Prospects.html'
	}).state('Main.Missions', {
		url : '/Missions',
		controller : 'MissionsController',
		templateUrl : 'templates/Missions.html'
	}).state('Main.Fournisseurs', {
		url : '/Fournisseurs',
		controller : 'FournisseursController',
		templateUrl : 'templates/Fournisseurs.html'
	})
	////////////////////////////////////////////
	//*******************resources Humaines****************//

	.state('Main.Qualification', {
		url : '/Qualification',
		controller : 'QualificationController',
		templateUrl : 'templates/Qualification.html'
	}).state('Main.superpositionQualif', {
		url : '/superpositionQualif',
		controller : 'QualiBUCtrl',
		templateUrl : 'templates/superpositionQualif.html'
	}).state('Main.superpositionSalaire', {
		url : '/superpositionSalaire',
		controller : 'SalaireTalanCtrl',
		templateUrl : 'templates/superpositionSalaire.html'
	}).state('Main.salaires', {
		url : '/salaires',
		controller : 'salairesController',
		templateUrl : 'templates/salaires.html'
	}).state('Main.trial', {
		url : '/trial',
		controller : 'trialController',
		templateUrl : 'templates/trial.html'
	}).state('Main.SuiviRH', {
		url : '/SuiviRH',
		controller : 'SuiviRHController',
		templateUrl : 'templates/globalRH.html'
	}).state('Main.Collaborateur', {
		url : '/Collaborateur',
		controller : 'CollaborateurController',
		templateUrl : 'templates/Collaborateur.html'
	})
	////////////////////////////////////////////
	//*******************Prospects Clients****************//

	.state('Main.CAPointMort', {
		url : '/CAPointMort',
		controller : 'CAPointMortController',
		templateUrl : 'templates/CAPointMort.html'
	}).state('Main.PvPi', {
		url : '/PvPi',
		controller : 'PvPiController',
		templateUrl : 'templates/PvPI.html'
	}).state('Main.CA', {
		url : '/CA',
		controller : 'CAController',
		templateUrl : 'templates/CA.html'
	}).state('Main.EvolutionCA', {
		url : '/EvolutionCA',
		controller : 'EvolutionCAController',
		templateUrl : 'templates/EvolutionCA.html'
	})
	////////////////////////////////////////////
	//*******************Missions***************//
	.state('Main.Planing', {
		url : '/Planing',
		controller : 'PlaningController',
		templateUrl : 'templates/Planing.html'
	})
	////////////////////////////////////////////
	//*******************Fournisseurs***************//
	.state('Main.EtatFournisseur', {
		url : '/EtatFournisseur',
		controller : 'EtatFournisseurController',
		templateUrl : 'templates/EtatFournisseur.html'
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/Outh');

}]);
/*    run(function($rootScope, $location) {
 $rootScope.$on( "$routeChangeStart", function(event, next, current) {
 if ($rootScope.loggedInUser == null && $rootScope.loggedInPass) {
 // no logged user, redirect to /login
 if ( next.templateUrl === "templates/Authentification.html") {
 } else {
 $location.path("/Authentification");
 }
 }
 });
 });*/
