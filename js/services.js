angular.module('app.services', ['ngResource'])

/**
 * A simple example service that returns some data.
 */
.factory('MenuService', function() {

  var menuItems = [
      { text: 'Resources Humaines', iconClass: 'icon ion-person-stalker', link: 'Resources'},
      { text: 'Prospects', iconClass: 'icon ion-stats-bars', link: 'Prospects'},
      { text: "Missions", iconClass: 'icon ion-ios7-pie', link: 'Missions'},
      { text: 'Fournisseurs', iconClass: 'icon ion-search', link: 'Fournisseurs'},
      { text: 'Autre', iconClass: 'icon ion-plus-circled', link: 'Autre'}
  ];

  return {
    all: function() {
      		return menuItems;
    }
  }

})
    .service('periodEssai',function()
    {
        this.essai;
    })
    .service('essaiServ', function($http,periodEssai)
        {

        this.get = function(){
            console.log('in serice essaiServ');
            $http({
                url: baseUrl +'graniteamf/resource/suiviPeriodEssai',
                method: 'GET',
                headers: { 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {
                    periodEssai.essai = data;
                    console.log(periodEssai.essai);
                })
                .error(function() {
                    //alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

                });
        }

    })

    .service('sorService',function() {
        this.sorti;
    })
    .service('sortiService',function($http,sorService,$q){

        this.get = function(x,y){
            var deferred = $q.defer();
            $http({
                url: baseUrl +'graniteamf/resource/suiviSortie/' + x +"/"+y,
                method: 'GET',
                headers:{ 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {
                    sorService.sorti=data;
                    deferred.resolve(data) ;

                })
                .error(function() {

                    /*//alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );*/
                    deferred.reject('vous ne possédez pas les role qui vous pemmette d\'y accéder');
                });
            return deferred.promise;
        }


    })
    .service('rhServ',function(){
        this.sorti;
    })
    .service('rhService', function($http,$q,rhServ){
        this.get = function(x,y,z,t){
            var deferred = $q.defer();

            $http({
                url: baseUrl+'graniteamf/resource/SuiviRH/' +x+"/"+y+"/"+z+"/"+t+"/1"+"/1",
                method: 'GET',
                headers: { 'login' :  localStorage.getItem('login'),
                    'password':  localStorage.getItem('password')
                }
            }).success(function(data) {

                    rhServ.sorti = data;
                    deferred.resolve(data) ;
                })
                .error(function() {
                    //alert('vous ne possédez pas les role qui vous pemmette d\'y accéder ' );

                });
            return deferred.promise;
        }
    })

    .factory('homeAdminService', function() {

        var menuItems = [
            { text: 'Rechercher un utilisateur', iconClass: 'icon ion-person', link: 'recherche'},
            { text: 'Creer un utilisateur', iconClass: 'icon ion-person-add', link: 'AddUser'},
            { text: "Gérer les roles ", iconClass: 'icon ion-android-friends', link: 'role'}

        ];

        return {
            all: function() {
                return menuItems;
            }
        }
    })
    .factory('userService', function() {

        var menuItems = [
            {
                Resource:"BYBLOS BO Admin ventes",
                Login:"byblos.vente@gmail.com",
                password: "",
                Societe:"TALAN SAS"
            },
            {
                Resource:"BYBLOS Collaborateur",
                Login:"byblos.collab@gmail.com",
                password: "",
                Societe:"TALAN SAS"
            }

        ];

        return {
            all: function() {
                return menuItems;
            }
        }
    })

    .factory('MenuAdmService', function() {

        var menuItems = [

            {name:'Droits D\'accès',iconClass: 'icon ion-person-stalker', link: 'ResourcesAdmin'},
            {name:'Société',iconClass: 'icon ion-card', link: 'Société'}



        ];

        return {
            all: function() {
                return menuItems;
            }
        }
    })
.factory('homeService', function() {

  var menuItems = [
    
			{name:'Qualifications',iconClass: 'icon ion-person-stalker', link: 'Qualification'},
			{name:'salaires',iconClass: 'icon ion-stats-bars', link: 'salaires'},
			{name:'Période d\'essai',iconClass: 'icon ion-ios7-pie', link: 'trial'},
			{name:'Sorties',iconClass: 'icon ion-ios7-compose', link: 'Sortie/list'},
            {name:'Suivi RH',iconClass: 'icon ion-search', link: 'SuiviRH/list'},
            {name:'Collaborateurs',iconClass: 'icon ion-android-friends', link: 'Collaborateur'}

			
  ];

  return {
    all: function() {
      		return menuItems;
    }
  }
})
.factory('ClientsService', function() {

  var menuItems = [
    
			{name:'CA\/Point Mort',iconClass: 'icon ion-person-stalker', link: 'CAPointMort'},
			{name:'Pv\/Pi',iconClass: 'icon ion-stats-bars', link: 'PvPi'},
			{name:'CA',iconClass: 'icon ion-ios7-pie', link: 'CA'},
			{name:'Evolution CA',iconClass: 'icon ion-search', link: 'EvolutionCA'}
			
  ];

  return {
    all: function() {
      		return menuItems;
    }
  }
})
.factory('PlaningService', function() {

  var menuItems = [
    
			{name:'Suivi Planing',iconClass: 'icon ion-person-stalker', link: 'Planing'}
			
  ];

  return {
    all: function() {
      		return menuItems;
    }
  }
})
.factory('EtatFournisseurService', function() {

  var menuItems = [
    
			{name:'Etat Fournisseur',iconClass: 'icon ion-person-stalker', link: 'EtatFournisseur'}
			
  ];

  return {
    all: function() {
      		return menuItems;
    }
  }
})
    .factory('EtatFournisseurService', function() {

        var menuItems = [

            {name:'Etat Fournisseur',iconClass: 'icon ion-person-stalker', link: 'EtatFournisseur'}

        ];

        return {
            all: function() {
                return menuItems;
            }
        }
    })


//.factory('UserFactory', function ($resource) {
//    return $resource('http://localhost:8088/byblos/rest/Ca/findAllBu')
//	, {}, {
//        query: {
//            method: 'GET',
//            params: {},
//            isArray: true
//        }
//    }
//});


.factory('UserFactory', function ($resource) {
    return $resource("http://localhost:8088/byblos/rest/Ca/:methode/:buId/:customerId/:dateDeb/:dateFin/:projectId/:listSoc",
    {methode : "@methode", dateDeb : "@dateDeb", dateFin : "@dateFin", buId : "@buId", customerId : "@customerId", projectId : "@projectId", listSoc : "@listSoc"},
        {
            customers : {
                method : "GET",
                params : {methode : "loadCust"},
                isArray : true,
                crossDomain : true
               // headers: { 'auth-token': 'YnlibG9zLmRnQGdtYWlsLmNvbTpieWJsb3M=' }
            },
            allBu : {
                method : "GET",
                params : {methode : "findAllBu"},
                isArray : true
//                headers: { 'auth-token': 'YnlibG9zLmRnQGdtYWlsLmNvbTpieWJsb3M=' }
            },
            evolCa : {
                method : "GET",
                params : {methode : "loadEvolution"},
                isArray : true,

                headers: { 'Authorization': 'YnlibG9zLmRnQGdtYWlsLmNvbTpieWJsb3M=' }


            },
            loadAllCa : {
                method : "GET",
                params : {methode : "loadAllCa"},
                isArray : true
//
            }
        }
    )
});
