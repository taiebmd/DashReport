$(document).bind("mobileinit", function () {
	$.mobile.ajaxEnabled = false;
	$.mobile.linkBindingEnabled = false;
	$.mobile.hashListeningEnabled = false;
	$.mobile.pushStateEnabled = false;
	var storedToken = getCookie('auth');
	if (storedToken != null && storedToken != '')
		auth = storedToken;
});

Path.map('#/conge/:id').to(function () {
	hideMessage();
	toggle_overlay(false);
	if(show_message) showMessage(3000);
	
	var id = this.params["id"];
	console.log('demande url ' + DEMANDE_DETAILS_URL + id);
	showLoader();
	var demande_loaded = function () {
		//$('#demande').on('swipeleft', deleteHandler); //
	hideLoader();
		
	$.mobile.changePage($('#demande'), {
			transition : "slide"
	});
	};

	var demandeController = new $.DemandeController(demande_loaded, id);
	demandeController.init();

	/* var deleteHandler = function () {
	console.log('delete demande !');
	window.location.hash = "#/dialog-delete-demande";
	}; */

});

Path.map('#/dialog-delete-demande').to(function () {
	$('#delete-dialog').trigger('create');
	$('#delete-dialog').popup("open");
});

Path.map('#/dialog-valider-demande').to(function () {
	$('#valider-dialog').trigger('create');
	$('#valider-dialog').popup("open");
	//$.mobile.changePage($('#valider-dialog'), { transition: "pop"});
});

Path.map('#/dialog-refuser-demande').to(function () {
	$('#refuser-dialog').trigger('create');
	$('#refuser-dialog').popup("open");
	//$.mobile.changePage($('#refuser-dialog'), { transition: "pop"});
});

Path.map('#/valider-demande/:id').to(function () {

		showLoader();
		toggle_overlay(true);
		$('#valider-dialog').popup("close");
		var id = this.params['id'];
		var url = DEMANDE_VALIDATION_URL + id;
		console.log('valider demande: ' + url);
		var callback = function (data) {
		hideLoader();
		toggle_overlay(false);
			if (data.id) {
				console.log("validation avec succés");
				
				show_message = true;
				self.location.hash = '#/conge/' + id;
			} else {
				// handle the error, error handler ?
				
				console.log("demande validation error handler", data);
				var dialogData = new Object();
				dialogData.title = "Erreur Validation";
				dialogData.body = "la demande n'est pas validée, veuillez reéssayer plus tard ";
				dialogData.okText = "OK";
				var errorDialog = new $.ErrorDialogView(dialogData);
				//$('#error-dialog').trigger('create');
				$('#error-dialog').dialog();
				$.mobile.changePage($('#error-dialog'), {
					transition : "pop"
				});

			}
		}
		var validationModel = new $.GenericModel(url, callback)
		validationModel.fetch();
		
	
});
Path.map('#/delete-demande/:id').to(function () {
	
		showLoader();
		toggle_overlay(true);
		$('#delete-dialog').popup("close");
		var id = this.params['id'];
		var url = DEMANDE_DELETE_URL + id;
		console.log('delete demande: ' + url);
		var callback = function (data) {
		hideLoader();
		toggle_overlay(false);
			if (data.id) {
				console.log("delete avec succés");
				
				show_message = true;
				self.location.hash = '#/conge/' + id;
			} else {
				// handle the error, error handler ?
	
				console.log("demande delete error handler", data);
				var dialogData = new Object();
				dialogData.title = "Erreur suppression";
				dialogData.body = "la demande n'est pas supprimée, veuillez reéssayer plus tard ";
				dialogData.okText = "OK";
				var errorDialog = new $.ErrorDialogView(dialogData);
				//$('#error-dialog').trigger('create');
				$('#error-dialog').dialog();
				$.mobile.changePage($('#error-dialog'), {
					transition : "pop"
				});

			}
		}
		var validationModel = new $.GenericModel(url, callback, 'DELETE')
			validationModel.fetch();
});
Path.map('#/refuser-demande/:id').to(function () {
	showLoader();
	toggle_overlay(true);
	var id = this.params['id'];
	var url = DEMANDE_REJECTION_URL + id;
	$('#refuser-dialog').popup("close");
	var comment = $("#reject-comment-demande-"+id).val();
	console.log('reject comment: ' + comment);
	var data = {
		"comment" : comment
	};
	var callback = function (msg) {
		hideLoader();
		console.log(msg);
		if (msg.id) {
			console.log("demande rejetée avec succés");
			toggle_overlay(false);
			show_message = true;
			self.location.hash = '#/conge/' + id;
		} else {
		
			console.log("erreur reject de demande");
			console.log(data);
			toggle_overlay(false);
			
				var dialogData = new Object();
				dialogData.title = "Erreur Rejet";
				dialogData.body = "la demande n'est pas refusée, veuillez reéssayer plus tard ";
				dialogData.okText = "OK";
				var errorDialog = new $.ErrorDialogView(dialogData);

				$('#error-dialog').trigger('create');
				$.mobile.changePage($('#error-dialog') , {
					transition : "pop"
				});
			
		
		}

	};
	var rejectModel = new $.GenericModel(url, callback, 'POST', data);
	rejectModel.fetch();

	//window.location.hash = '#/conge/' + id;
});

Path.map('#/home').to(function () {
	
	if(connected){
	
	back_url = '#/home';
	hideMessage();
	showLoader(2);
	// clear the container (this is a bug fix)
	$('#collaps-set').html('');

	var homeController = new $.HomeController();
	homeController.init();
	loadPage("page1");
	$.mobile.changePage($('#main'));
	hideElement('homebutton');
	console.log('#home');
	}else{
		hideLoader();
		//self.location.hash = '#/loginpage';
		self.location.hash = '#/main';
	}

});

Path.map('#/deconnexion').to(function () {
	$('#deconnexion').popup("open")
});

Path.map('#/deconnexion-oui').to(function () {
	auth = '';
	connected = false;
	setCookie('auth', '');
	self.location.hash = '#/loginpage';
});
Path.map('#/loginpage').to(function () {
	hideMessage();
	hideLoader();
	toggle_overlay(false);
	/*if (auth != null && auth != '') {
		connected = true;
		window.location.hash = '#/home'
	}*/
	hideElement('#loginerror');
	hideElement('#notfounderror');
	//$.mobile.changePage($('#connectionfrom'));
	$.mobile.changePage($('#main'));
});


Path.map('#/consulter-demandes').to(function () {
	back_url = '#/consulter-demandes';
	showLoader(3);
	showElement('homebutton');
	
	var consulterDemandeController = new $.ConsulterDemandesController();
	consulterDemandeController.init();
	loadPage('consulter-demandes');
	//consulter_demande_currTab = 'consulter-demandes-avalider-tab';
	setActiveConsulterDemandeTab(consulter_demande_currTab);
	$("#consulter-demandes-navbar a").click(function () {
		var tab = $(this).attr("id");
		setActiveConsulterDemandeTab(tab);
	});

	$("#nav-panel").panel("close");
	$.mobile.changePage($('#main'));
});
Path.map('#/mes-conges').to(function () {
	back_url = '#/mes-conges';
	showLoader(2);
	showElement('homebutton');
	
	var mesCongesController = new $.MesCongesController();
	mesCongesController.init();
	loadPage('mes-conges');

	setActiveMesCongesTab(mes_conges_currTab);
	$("#mes-conges-navbar a").click(function () {
		var tab = $(this).attr("id");
		setActiveMesCongesTab(tab);
	});

	$("#nav-panel").panel("close");
	$.mobile.changePage($('#main'));
});
Path.map('#/gerer-missions').to(function () {
	back_url = '#/gerer-missions';
	hideMessage()
	if(show_message) showMessage(2000);
	showLoader(2);
	showElement('homebutton');
	
	var gererMissionController = new $.GererMissionController();
	gererMissionController.init();
	
	loadPage('gerer-missions');
	
	setActiveGererMissionTab(gerer_missions_currTab);
	$("#gerer-missions-navbar a").click(function () {
		var tab = $(this).attr("id");
		setActiveGererMissionTab(tab);
	});

	$("#nav-panel").panel("close");
	$.mobile.changePage($('#main'));
});
Path.map('#/cloturer-contrat-dialog/:id').to(function () {
	contrat_id = this.params['id'];
	$('#cloturer-contrat-dialog').popup("open");
});
Path.map('#/cloturer-contrat').to(function () {
	$('#cloturer-contrat-dialog').popup("close");
	toggle_overlay(true);
	var url = MISSION_CLOSE_CONTRACT + contrat_id;
	var callback = function(data) {
		if(data.id && data.id == contrat_id){
			console.log('contrat cloturé: '+ contrat_id);
			toggle_overlay(false);
			show_message = true;
			self.location.hash = '#/gerer-missions';
		}else{
			toggle_overlay(false);
			console.log('erreur cloturer contrat');
			var dialogData = new Object();
				dialogData.title = "Erreur Clôture";
				dialogData.body = "le contrat n'est pas clôturé, veuillez reéssayer plus tard ";
				dialogData.okText = "OK";
				var errorDialog = new $.ErrorDialogView(dialogData);
				$('#error-dialog').trigger('create');
				$.mobile.changePage($('#error-dialog'), {
					transition : "pop"
				});
		}
	}
	
	var cloturerModel = new $.GenericModel(url, callback, 'POST');
	cloturerModel.fetch();
	
});

Path.map('#/gerer-frais').to(function () {
	back_url = '#/gerer-frais';
	showLoader(2);
	showElement('homebutton');
	
	var gererFraisController = new $.GererFraisController();
	gererFraisController.init();
	
	loadPage('gerer-frais');
	
	setActiveGererFraisTab(gerer_frais_currTab);
	$("#gerer-frais-navbar a").click(function () {
		var tab = $(this).attr("id");
		setActiveGererFraisTab(tab);
	});

	$("#nav-panel").panel("close");
	$.mobile.changePage($('#main'));
});

Path.map('#/frais/:id').to(function () {
	hideMessage();
	if(show_message) showMessage(3000);
	var id = this.params["id"];
	console.log('frais url ' + MISSIN_FRAIS_DETAILS + id);
	showLoader();
	var frais_loaded = function () {
		
		hideLoader();
		$.mobile.changePage($('#frais'), {
			transition : "slide"
		});
	};

	var fraisController = new $.FraisController(frais_loaded, id);
	fraisController.init();

});

Path.map('#/valider-frais/:id').to(function () {
		showLoader();
		toggle_overlay(true);
		var id = this.params['id'];
		var url = MISSIN_FRAIS_DETAILS + id;
		console.log('valider frais: ' + url);
		var callback = function (data) {
		hideLoader();
			if (data.id) {
				toggle_overlay(false);
				console.log("validation avec succés");
				show_message = true;
				self.location.hash = '#/frais/' + id;
				
			} else {
				toggle_overlay(false);
				hideLoader();
				console.log("frais validation error handler", data);
				var dialogData = new Object();
				dialogData.title = "Erreur Validation";
				dialogData.body = "La note de frais n'est pas validée, reéssayer plus tard";
				dialogData.okText = "OK";
				var errorDialog = new $.ErrorDialogView(dialogData);
				$.mobile.changePage($('#error-dialog'), {
					transition : "pop"
				});

			}
		}
		var validationModel = new $.GenericModel(url, callback,'POST')
			validationModel.fetch();
		//$.mobile.changePage($('#refuser-dialog'), { transition: "pop"});
	
});

Path.map('#/refuser-frais/:id').to(function () {
	showLoader();
	toggle_overlay(true);
	var id = this.params['id'];
	var url = MISSIN_FRAIS_DETAILS +"reject/" + id;
	$('#refuser-frais-dialog').popup("close");
	var comment = $("#reject-comment-frais-"+id).val();
	console.log('reject comment: ' + comment);
	var data = {
		"comment" : comment
	};
	var callback = function (msg) {
		toggle_overlay(false);
		hideLoader();
		console.log(msg);
		if (msg.id) {

			console.log("frais rejetée avec succés");
			show_message = true;
			self.location.hash = '#/frais/' + id;
		} else {
				
				hideLoader();
				console.log("frais validation error handler", data);
				var dialogData = new Object();
				dialogData.title = "Erreur rejet";
				dialogData.body = "La note de frais n'est pas refusée, reéssayer plus tard";
				dialogData.okText = "OK";
				var errorDialog = new $.ErrorDialogView(dialogData);
				$.mobile.changePage($('#error-dialog'), {
					transition : "pop"
				});
			
		
		}

	};
	var rejectModel = new $.GenericModel(url, callback, 'POST', data);
	rejectModel.fetch();

	//window.location.hash = '#/conge/' + id;
});



Path.map('#/dialog-valider-frais').to(function () {
	$('#valider-frais-dialog').popup("open");
});
Path.map('#/dialog-refuser-frais').to(function () {
	$('#refuser-frais-dialog').popup("open");
	
});



Path.map('#/mission/:id').to(function () {
	hideMessage();
	if(show_message) showMessage(3000);
	var id = this.params["id"];
	console.log('project url ' + MISSIN_PROJECT_DETAILS + id);
	showLoader();
	var project_loaded = function () {
		
		hideLoader();
		
		// need it to trigger pagebeforeshow
		$.mobile.changePage($('#default'), {
			transition              : 'none'
		});
		$.mobile.changePage($('#project'), {
			allowSamePageTransition : false,
			transition              : 'slide'
		});
	};

	var projectController = new $.ProjectController(project_loaded, id);
	projectController.init(); 
});

Path.map('#/valider-project/:id').to(function () {
	showLoader();
	toggle_overlay(true);
	var id = this.params['id'];
	var url = MISSIN_PROJECT_DETAILS +"validate/" + id;
	$('#dialog-valider-mission').popup("close");

	var callback = function (msg) {
		hideLoader();
		toggle_overlay(false);
		console.log(msg);
		if (msg.id) {
			console.log("mission validé avec succés");
			show_message = true;
			self.location.hash = '#/mission/' + id;
		} else {
				hideLoader();
				console.log("project validation error handler", data);
				var dialogData = new Object();
				dialogData.title = "Erreur rejet";
				dialogData.body = "Le projet n'est pas validé, reéssayer plus tard";
				dialogData.okText = "OK";
				var errorDialog = new $.ErrorDialogView(dialogData);
				$.mobile.changePage($('#error-dialog'), {
					transition : "pop"
				});
		}

	};
	var rejectModel = new $.GenericModel(url, callback, 'POST');
	rejectModel.fetch();


});

Path.map('#/refuser-project/:id').to(function () {
	showLoader();
	var id = this.params['id'];
	var url = MISSIN_PROJECT_DETAILS +"reject/" + id;
	$('#dialog-refuser-mission').popup("close");
	
	var comment = $("#reject-comment-project-"+id).val();
	console.log('reject comment: ' + comment);
	var data = {
		"comment" : comment
	};
	var callback = function (msg) {
		hideLoader();
		console.log(msg);
		if (msg.id) {
			console.log("mission réfusé avec succés");
			show_message = true;
			self.location.hash = '#/mission/' + id;
		} else {
			hideLoader();
				console.log("Porject validation error handler", data);
				var dialogData = new Object();
				dialogData.title = "Erreur rejet";
				dialogData.body = "Le projet n'est pas réfusé, reéssayer plus tard";
				dialogData.okText = "OK";
				var errorDialog = new $.ErrorDialogView(dialogData);
				$.mobile.changePage($('#error-dialog'), {
					transition : "pop"
				});
		}

	};
	var rejectModel = new $.GenericModel(url, callback, 'POST',data);
	rejectModel.fetch();

});

Path.map('#/dialog-valider-mission').to(function () {
	$('#dialog-valider-mission').popup("open")
});
Path.map('#/dialog-refuser-mission').to(function () {
	$('#dialog-refuser-mission').popup("open")
});


Path.map('#/gerer-cras').to(function () {
	back_url = '#/gerer-cras';
	showLoader(1);
	showElement('homebutton');
	
	var gererCraController = new $.GererCraController();
	gererCraController.init();
	
	
	loadPage('gerer-cras');
	$("#nav-panel").panel("close");
	$.mobile.changePage($('#main'));
});

Path.map('#/cra/:id').to(function () {
	hideMessage();
	if(show_message) showMessage(3000);
	var id = this.params["id"];
	console.log('cra id ' + id);
	showLoader();
	var cra_loaded = function () {
		hideLoader();
		// need it to trigger pagebeforeshow
		$.mobile.changePage($('#default'), {
			transition              : 'none'
		});
		$.mobile.changePage($('#cra'), {
			allowSamePageTransition : false,
			transition              : 'slide'
		});
	};

	var craController = new $.CraController(cra_loaded, id);
	craController.init(); 
	
	/*$.mobile.changePage($('#cra'), {
			allowSamePageTransition : false,
			transition              : 'slide'
	});*/
});

Path.map('#/dialog-valider-cra').to(function () {
	$('#dialog-valider-cra').popup("open");

});
Path.map('#/dialog-refuser-cra').to(function () {
	$('#dialog-refuser-cra').popup("open");

});

Path.map('#/valider-cra/:id').to(function () {
	$('#dialog-valider-cra').popup("close");
	var id = this.params['id'];
	self.location.hash = '/cra/' + id;
});
Path.map('#/refuser-cra/:id').to(function () {
	$('#dialog-refuser-cra').popup("close");
	self.location.hash = '/cra/' + id;
});

Path.map('#/cloturer-mois').to(function () {
	hideMessage();
	$.mobile.changePage($('#cloturer-mois'), {
			transition              : 'slide'
	});
});
Path.map('#/gerer-facture').to(function () {
	back_url = '#/gerer-facture';
	showLoader(1);
	showElement('homebutton');
	
	var gererFactureController = new $.GererFactureController();
	gererFactureController.init();
	
	loadPage('gerer-facture');
	
	setActiveGererFactureTab(gerer_facture_currTab);
	$("#gerer-facture-navbar a").click(function () {
		var tab = $(this).attr("id");
		setActiveGererFactureTab(tab);
	});

	$("#nav-panel").panel("close");
	$.mobile.changePage($('#main'));
});

Path.map('#/invoice/:id').to(function () {
	hideMessage();
	if(show_message) showMessage(3000);
	var id = this.params["id"];
	console.log('invoice url ' + INVOICE_DETAILS + id);
	showLoader();
	var facture_loaded = function () {
		hideLoader();
		// need it to trigger pagebeforeshow
		$.mobile.changePage($('#default'), {
			transition              : 'none'
		});
		$.mobile.changePage($('#facture'), {
			allowSamePageTransition : false,
			transition              : 'slide'
		});
	};

	var factureController = new $.FactureController(facture_loaded, id);
	factureController.init(); 
	
});
Path.map('#/dialog-valider-facture').to(function () {
	$('#dialog-valider-facture').popup("open")
});
Path.map('#/dialog-refuser-facture').to(function () {
	$('#dialog-refuser-facture').popup("open")
});

Path.root('#/loginpage');




$(document).on("pageinit", function () {
	Path.listen();
	var storedToken = getCookie('auth');
	if (storedToken != null && storedToken != '')
		auth = storedToken;
	$("#btnconnexion").on('tap',function () {
		var username = $("#username").val();
		var password = $("#password").val();
		console.log("form submit: " + username + password);
		$.ajax({
			type : "POST",
			crossDomain : true,
			url : baseurl + "home/login.json",
			success : function (msg, status, xhr) {
				connected = true;
				auth = make_base_auth(username, password);
				connected = true;
				console.log(auth);
				setCookie("auth", auth, 3);
				console.log('cookie: ' + getCookie("auth"));
				self.location.hash = '#/home';
			},
			beforeSend : function (req) {
				req.setRequestHeader('Authorization', make_base_auth(username, password));
			},
			complete : function (xhr) {
				console.log('login complete');
			},
			error : function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				if (xhr.status == 401)
					showElement('#loginerror');
				if (xhr.status == 400)
					showElement('#notfounderror');
				//self.location.hash = "#/loginpage";
			}
		});
	});
	
	// enhancement of the content
	$('#project').on('pagebeforeshow', function(event) {
		console.log('page pagebeforeshow triggered');

		$("#project-content").trigger("create");
		$("#mission-workflow").trigger("updatelayout");
		
	});
	
	$('#project').on('pageshow', function(event) {
		console.log('page pageshow triggered');
		$( "#project-general-info-collaps" ).trigger( "expand" );
		
	});
	
	$('#facture').on('pagebeforeshow', function(event) {
		console.log('page pagebeforeshow triggered');

		$("#facture-content").trigger("create");
		$("#facture-workflow").trigger("updatelayout");
		
	});
	$('#facture').on('pageshow', function(event) {
		console.log('page pageshow triggered');
		$( "#facture-entete-info-collaps" ).trigger( "expand" );
		
	});
	$('#cra').on('pagebeforeshow', function(event) {

		$("#cra-content").trigger("create");
		$("#cra-workflow").trigger("updatelayout");
		
	});
	/*$('#error-dialog').on('pagebeforeshow', function(event) {
		$("#error-dialog").trigger("create");
		console.log('error dialog page before show');
	});*/
	

	//$.mobile.defaultPageTransition = 'none';
	//$('#home').closest('.ui-btn').hide();
	//updateCollpase("collaps-title-conge","list-conge",baseurl+"conges?jsoncallback=?");
	//$.mobile.page.prototype.options.addBackBtn = true;
	//$.mobile.useFastClick  = false;
	/*Path.map('#/login').to(function(){
	$.ajax({
	type: "POST",
	crossDomain: true,
	url: "http://localhost:8088/byblos/ws/home/login.json",
	success: function(msg, status, xhr){

	auth = make_base_auth(username, password);
	console.log(auth);
	self.location.hash='#/home';
	},
	beforeSend : function(req) {
	req.setRequestHeader('Authorization', make_base_auth(username, password));
	},
	complete:function (xhr) { console.log('login complete'); },
	error: function (xhr, ajaxOptions, thrownError) {
	console.log(xhr.status);
	self.location.hash = "#/loginpage";
	}
	});
	//$.mobile.changePage($('#connectionfrom'));
	});
	 */

});
