jQuery.extend({

	HomeController : function (){
		var self = this;
		var homeView;
		var homeData = [];
		var m_user;
		var m_conge;
		var m_mission;
		var m_cra;
		var m_invoice;
		var m_frais;
		var cbk_user = function(data){homeData.user = data; homeView.render(homeData);delete homeData.user ; hideLoader();};
		var cbk_conge = function(data){homeData.demandes = data; homeView.render(homeData);delete homeData.demandes;hideLoader();};
		var cbk_mission = function(data){homeData.missions = data; homeView.render(homeData);delete homeData.missions;hideLoader();};
		var cbk_cra = function(data){homeData.cra = data; homeView.render(homeData);delete homeData.cra;hideLoader();};
		var cbk_invoice = function(data){homeData.invoices = data; homeView.render(homeData);delete homeData.invoices;hideLoader();};
		var cbk_frais = function(data){homeData.frais = data; homeView.render(homeData);delete homeData.frais;hideLoader();};
		
		
		self.init = function (){
		$('collaps-set').html('');
			homeView = new $.HomeView();
			m_user = new $.GenericModel(USER_URL,cbk_user);
			m_conge = new $.GenericModel(DEMANDE_URL,cbk_conge);
			m_mission = new $.GenericModel(MISSION_A_VALIDER,cbk_mission);
			m_cra = new $.GenericModel(MISSION_CRA_TO_VALIDATE,cbk_cra);
			m_invoice = new $.GenericModel(INVOICE_HOME_TO_VALIDATE,cbk_invoice);
			m_frais = new $.GenericModel(MISSION_FRAIS_TO_VALIDATE,cbk_frais);
			m_user.fetch();
			m_conge.fetch();
			m_mission.fetch();
			m_cra.fetch();
			m_invoice.fetch();
			m_frais.fetch();
			
		}
		
		
	}
	
	,
	
	DemandeController : function (callback,id) {
		var dmd_url = DEMANDE_DETAILS_URL + id;
		var wf_url = DEMANDE_WORKFLOW_URL + id;
		var self = this;
		var demandeView;
		var m_demande;
		var m_workflow;
		var cbk_demande = function (data){
			// format dates
			data.demandDate = getDateAsString(data.demandDate);
			data.dateDebut = getDateAsString(data.dateDebut);
			data.dateFin = getDateAsString(data.dateFin);
			demandeView.render(data); callback(); 
		} ;
		
		var cbk_workflow = function (data) {
			data.wf = true;
			console.log(data);
			$.each(data, function (index, item){
				if(data[index].startDate) data[index].startDate = getDateAsString(data[index].startDate);
				if(data[index].icon) data[index].icon =  data[index].icon.replace('/resources/upload/images/','');
			});
			demandeView.render(data);
			
		}
		
		
		
		self.init = function (){
			demandeView = new $.DemandeView();
			m_demande = new $.GenericModel(dmd_url,cbk_demande);
			m_workflow = new $.GenericModel(wf_url,cbk_workflow);
			m_demande.fetch();
			m_workflow.fetch();
			
		}
	}
	,
	
	ConsulterDemandesController : function (){
		var self = this;
		// var m_toValidate;
		// var m_waiting;
		// var m_history;
		var toValidateListView;
		var waitingListView;
		var historyListView
		
		var cbk_toValidate = function(data){toValidateListView.render('#consulter-demande-avalider',data); hideLoader(); };
		var cbk_waiting = function(data){  waitingListView.render('#consulter-demande-encours',data); hideLoader();};
		var cbk_history = function(data){ historyListView.render('#consulter-demande-history',data); hideLoader();};
		
		self.init = function(){
			toValidateListView = new $.ListView();
			waitingListView = new $.ListView();
			historyListView = new $.ListView();
			var m_toValidate = new $.GenericModel(DEMANDES_TO_VALIDATE_URL, cbk_toValidate);
			var m_waiting = new $.GenericModel(DEMANDES_WAITING_URL, cbk_waiting);
			var m_history = new $.GenericModel(DEMANDES_HISTORY_URL, cbk_history);
			m_toValidate.fetch();
			m_waiting.fetch();
			m_history.fetch();
			
		}
	}
	,
	
	MesCongesController : function (){
		var self = this;	
		var waitingListView;
		var historyListView
		
		var cbk_waiting = function(data){  waitingListView.render('#mes-conges-encours',data); hideLoader();};
		var cbk_history = function(data){ historyListView.render('#mes-conges-history',data); hideLoader();};
		
		self.init = function(){

			waitingListView = new $.ListView();
			historyListView = new $.ListView();
			var m_waiting = new $.GenericModel(COLLAB_DEMANDES_WAITING_URL, cbk_waiting);
			var m_history = new $.GenericModel(COLLAB_DEMANDES_HISTORY_URL, cbk_history);
			m_waiting.fetch();
			m_history.fetch();
			
		}
	}
	,
	GererMissionController : function (){
		var self = this;	
		var tab1ListView;
		var tab2ListView;
		
		var cbk_tab1 = function(data){
			$.each(data, function (index, item){
				if(data[index].endDate) data[index].endDate = getDateAsString(data[index].endDate); 
			});
			
			var dialogData = new Object();
			dialogData.title = 'Cloturer ?';
			dialogData.body = 'Etes-vous sur de vouloir cloturer ce contrat?';
			dialogData.okLink = '#/cloturer-contrat';
			dialogData.cancelLink = '';
			tab1ListView.render('#gerer-missions-canbeclosed',data,'li_contratTemplate'); 
			var cloturerDialog = new $.DialogView('#cloturer-contrat-dialog',dialogData);
			
			hideLoader();
		};
		var cbk_tab2 = function(data){ tab2ListView.render('#gerer-missions-avalider',data,'li_missionTemplate'); hideLoader();};
		
		self.init = function(){

			tab1ListView = new $.ListView();
			tab2ListView = new $.ListView();
			var m_tab1 = new $.GenericModel(MISSION_CAN_BE_CLOSED, cbk_tab1);
			var m_tab2 = new $.GenericModel(MISSION_A_VALIDER, cbk_tab2);
			m_tab1.fetch();
			m_tab2.fetch();
			
		}
	}
	,
	
	GererFraisController : function (){
		var self = this;	
		var tab1ListView;
		var tab2ListView;
		
		var cbk_tab1 = function(data){
			/* $.each(data, function (index, item){
				if(data[index].endDate) data[index].endDate = getDateAsString(data[index].endDate); 
			}); */
			
			tab1ListView.render('#gerer-frais-avalider',data,'li_fraisTemplate'); 
			hideLoader();
		};
		var cbk_tab2 = function(data){
			tab2ListView.render('#gerer-frais-tous',data,'li_fraisTemplate'); 
			hideLoader();
		};
		
		self.init = function(){

			tab1ListView = new $.ListView();
			tab2ListView = new $.ListView();
			var m_tab1 = new $.GenericModel(MISSION_FRAIS_TO_VALIDATE, cbk_tab1);
			var m_tab2 = new $.GenericModel(MISSION_FRAIS_ALL, cbk_tab2);
			m_tab1.fetch();
			m_tab2.fetch();
			
		}
	}
	,
	FraisController : function (callback,id) {
		var frai_url = MISSIN_FRAIS_DETAILS + id;
		var self = this;
		var demandeView;
		var m_frai;
		var cbk_frai = function (data){
			// format dates
			fraiView.render(data); callback(); 
		} ;
		
		self.init = function (){
			fraiView = new $.FraiView();
			m_frai = new $.GenericModel(frai_url,cbk_frai);
			m_frai.fetch();
		}
	}
	,
	ProjectController : function (callback,id) {
		var url = MISSIN_PROJECT_DETAILS + id;
		var wf_url = MISSION_WORKFLOW_URL + id;
		var self = this;
		var projectView;
		var m;
		var cbk = function (data){
			// format dates
			if(data.costAndPricings){
				for(var i = 0 ; i < data.costAndPricings.length; i++){
					data.costAndPricings[i].startDate = getDateAsString(data.costAndPricings[i].startDate);
					data.costAndPricings[i].endDate = getDateAsString(data.costAndPricings[i].endDate);
				}
			}
			projectView.render(data);  callback();
		} ;
		
		var cbk_workflow = function (data) {
			data.wf = true;
			console.log(data);
			$.each(data, function (index, item){
				if(data[index].startDate) data[index].startDate = getDateAsString(data[index].startDate);
				if(data[index].icon) data[index].icon =  data[index].icon.replace('/resources/upload/images/','');
			});
			//data.startDate =  getDateAsString(data.startDate);
			projectView.render(data);
			
		}
		
		self.init = function (){
			projectView = new $.ProjectView();
			m = new $.GenericModel(url,cbk);
			m.fetch();
			
			m_workflow = new $.GenericModel(wf_url,cbk_workflow);
			m_workflow.fetch();
		}
	}
	,
	GererCraController : function (){
		var self = this;	
		var tab1ListView;
		
		var cbk_tab1 = function(data){
			
			tab1ListView.render('#list-cra-a-valider',data,'li_craTemplate'); 
			hideLoader();
		};
	
		
		self.init = function(){
			tab1ListView = new $.ListView();
			var m_tab1 = new $.GenericModel(MISSION_CRA_TO_VALIDATE, cbk_tab1);
			m_tab1.fetch();
		}
	}
	,
	GererFactureController : function (){
		var self = this;	
		var tab1ListView;
		var tab2ListView;
		
		var cbk_tab1 = function(data){
			
			tab1ListView.render('#gerer-facture-avalider',data,'li_invoiceTemplate'); 
			hideLoader();
		};
		var cbk_tab2 = function(data){
			tab2ListView.render('#gerer-proforma-avalider',data,'li_invoiceTemplate'); 
			hideLoader();
		};
		
		self.init = function(){
			tab1ListView = new $.ListView();
			tab2ListView = new $.ListView();
			var m_tab1 = new $.GenericModel(INVOICE_TO_VALIDATE, cbk_tab1);
			var m_tab2 = new $.GenericModel(INVOICE_PROFORMA_TO_VALIDATE, cbk_tab2);
			m_tab1.fetch();
			m_tab2.fetch();
			
		}
	}
	
	,
	FactureController : function (callback,id) {
		var url = INVOICE_DETAILS + id;
		var wf_url = MISSION_WORKFLOW_URL + id;
		var self = this;
		var factureView;
		var m;
		var cbk = function (data){
			// format dates
			/*if(data.costAndPricings){
				for(var i = 0 ; i < data.costAndPricings.length; i++){
					data.costAndPricings[i].startDate = getDateAsString(data.costAndPricings[i].startDate);
					data.costAndPricings[i].endDate = getDateAsString(data.costAndPricings[i].endDate);
				}
			}*/
			factureView.render(data);  callback();
		} ;
		
		var cbk_workflow = function (data) {
			data.wf = true;
			console.log(data);
			$.each(data, function (index, item){
				if(data[index].startDate) data[index].startDate = getDateAsString(data[index].startDate);
				if(data[index].icon) data[index].icon =  data[index].icon.replace('/resources/upload/images/','');
			});
			//data.startDate =  getDateAsString(data.startDate);
			factureView.render(data);
			
		}
		
		self.init = function (){
			factureView = new $.FactureView();
			m = new $.GenericModel(url,cbk);
			m.fetch();
			
			//m_workflow = new $.GenericModel(wf_url,cbk_workflow);
			//m_workflow.fetch();
		}
	}
	
	,
	
	
	CraController : function (callback,id) {
		var url = CRA_DETAILS + id;
		var wf_url = CRA_WORKFLOW_URL + id;
		var self = this;
		var craView;
		var m;
		var cbk = function (data){
			craView.render(data);  callback();
		} ;
		
		var cbk_workflow = function (data) {
			data.wf = true;
			console.log(data);
			$.each(data, function (index, item){
				
			});
			//data.startDate =  getDateAsString(data.startDate);
			craView.render(data);
			
		}
		
		self.init = function (){
			craView = new $.CraView();
			m = new $.GenericModel(url,cbk);
			m.fetch();
			
			m_workflow = new $.GenericModel(wf_url,cbk_workflow);
			m_workflow.fetch();
		}
	}
	

























	// create a collapse widget in the given element
	/*
	* @element: element's ID in witch the collaps widget will be added
	* @collapsTitle: title of the widget
	* @collapsKind: what kind of data will the widget receive, used to properley create links
	*/
/* 	CollapsController: function(element,collapsTitle, collapsKind){
		// create model corresponding to the data kind
		switch(collapsKind){
		case 'Conge' : 
		{
			var demandeModel = new $.DemandeModel();
			var mlist = new $.DemandeModelListener({
			loadBegin : function() {
				console.log('begin '+ collapsKind +' fetching');
			},
			loadFinish : function(data) {
				console.log('fetching '+collapsKind+' finished')
				
				var congeCollpas = new  $.CollapseView (element,data,collapsTitle,collapsKind);
				congeCollpas.render();
			}
			});
			
			demandeModel.addListener(mlist);
			demandeModel.fetch();
			break;
		
		}
		case 'Mission' : 
		{
			var missionModel = new $.MissionModel();
			var missionListener = new $.MissionModelListener({
			loadBegin : function() {
				console.log('begin '+ collapsKind +' fetching');
			},
			loadFinish : function(missions) {
				console.log('fetching '+collapsKind+' finished')
				var missionCollpas = new $.CollapseView (element,missions,collapsTitle,'Mission');
				missionCollpas.render();
			}
			});
			
			missionModel.addListener(missionListener);
			missionModel.fetch();
			break;
		}

		} // Swtich

	} // EndOf CollapsContorller
	
	, */
	
	/* UserController: function(){
	
		var userModel = new $.UserModel();
			var mlist = new $.UserModelListener({
			loadBegin : function() {
				console.log('begin User fetching');
			},
			loadFinish : function(data) {
				console.log('fetching User finished')
				console.log(data);
				var userView = new  $.UserView (data);
			}
			});
			
			userModel.addListener(mlist);
			userModel.fetch();
	} */
	
	
	
});
