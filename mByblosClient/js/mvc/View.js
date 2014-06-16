// *************************** Templates ***********************************//
$.templates({
	li_congeTemplate : '{{if #parent)}}<li id="conge-{{>id}}"><a href="#/conge/{{>id}}"> <h4> {{>firstName}} {{>lastName}}</h4> <p>Date: <em>{{>submitedDateLabel}}</em> </p></a></li>'
	 + '{{else}} <li style="text-align:center"> <em>pas de demande</em></li> {{/if}}',
	 
	li_craTemplate : '{{if #parent)}}<li id="cra-{{>id}}"><a href="#/cra/{{>id}}"> <p style="font-size:100%; font-weight:bold">{{>nom}} {{>prenom}}</p>'
	+ '<p><span><em>Mois de prestation: </em><strong>{{>monthYear}}</strong>  </span></p><p style="color: #959DA3"><em> Date: {{>submitedDate}}</em></p></a></li>'
	+ '{{else}} <li style="text-align:center"> <em>pas de CRA à valider</em></li> {{/if}}',
	
	li_invoiceTemplate : '{{if #parent)}}<li id="invoice-{{>id}}"><a href="#/invoice/{{>id}}"> <p style="font-size:100%; font-weight:bold">{{>numFacture}}</p>'
	+ '<p><span><em>Client: </em><strong>{{>prospectClientLabel}}</strong>  </span></p><p style="color: #959DA3"><em> Date: {{>dateFactureLabel}}</em></p></a></li>'
	+ '{{else}} <li style="text-align:center"> <em>pas de facture à valider</em></li> {{/if}}',


	li_missionTemplate : '{{if #parent)}}<li id="mission-{{>projectId}}"><a href="#/mission/{{>projectId}}"> <h4> {{>prospectRaisonSocial}} </h4> <p>Type: <strong>{{>contractType}}</strong> </p></a></li>'
	 + '{{else}} <li style="text-align:center"> <em>pas de mission à valider</em></li> {{/if}}',

	li_contratTemplate : '{{if (#data != null && #data != \'undefined\')}}<li data-icon="check"><a href="#/mission/{{>id}}" data-theme="d"> <h4> {{>reference}}</h4><p><em>Date de fin:{{>endDate}}</em> </p></a>'
	 + '<a href="#/cloturer-contrat-dialog/{{>id}}" data-theme="d" >cloturer</a></li>'
	 + '{{else}} <li style="text-align:center"> <em>pas de contrat à cloturer</em></li> {{/if}}'
,
	
	li_fraisTemplate : '{{if #parent)}}<li ><a  href="#/frais/{{>id}}" data-theme="d"> <h4> {{>employeeName}}</h4>'
	+ '<p class="ui-li-count"  > {{>amount}} {{>currencyLabel}} </strong> </p>'
	+ '<p><em>{{if submitedDate}}Soumis le:{{>submitedDate}}{{else}} {{if year && month}} Période: {{>month}}-{{>year}}{{/if}} {{/if}}</em> </p>'
	+ '</a>'
	+ '</li>'
	+ '{{else}} <li style="text-align:center"> <em>pas de frais à valider</em></li> {{/if}}'
	 
,

	userTemplate : '<h4 style="display:inline;color:#253E93"> <span style="font-size: small;color:#000;"> Bonjour </span> {{>lastName}}</h4><div class="notification"><a href="#" ><img src="js/images/message-2.png"/> <div >{{>numMsg}}</div></a></div>',

	userPanelTemplate : '<img src="js/images/profile.jpg" class="profilepic" /> <div style="float:right">  <h3 > {{>firstName}} {{>lastName}}  </h3> </div>',

	demandeHeaderTitleTemplate : '{{if typeDemandeId == 2}} {{>typeDemandeLabel}} {{/if}} {{if typeDemandeId == 3}} Demande de Compétence {{/if}}',

	demandePageTemplate : '{{if id}}<div style="text-align:center;font-size:large;margin-bottom:1em;" ><span id="demande-nom"> {{>firstName}} {{>lastName}} </span></div>'
	 + '<div style="text-align:center;font-size:small;font-weight:bold;margin-bottom:1em;" > {{>submitedDateLabel}}</div>'
	/* demande de competence*/
	 + '{{if typeDemandeId == 3}}'
	 + '<div class="demande-detail"><div class="ui-grid-a">'
	 + '<div class="ui-block-a demande-detail-titre" style="border:none" >Élément à ajouter: </div>'
	 + '<div style="border:none" class="ui-block-b demande-detail-valeur"  > {{>typeAjout}}</div>'
	 + '<div class="ui-block-a demande-detail-titre"  >Domaine de connaissance: </div><div class="ui-block-b demande-detail-valeur"  >'
	 + '<span id="demande-dated">{{>domaine}}  </span> </div>'
	 + '<div class="ui-block-a demande-detail-titre" >Compétence: </div><div class="ui-block-b demande-detail-valeur"  >'
	 + '<span id="demande-datef"> {{>competence}} </span></div>'
	 + '<div  class="ui-block-a demande-detail-titre"  >Libellé: </div><div class="ui-block-b demande-detail-valeur"> {{>libelle}} </div>'
	 + '<div class="ui-block-a demande-detail-titre"  > Statut: </div><div class="ui-block-b demande-detail-valeur"   >{{>statusLabel}}  </div> </div>'
	 + '<div><label for="commentaire">Commentaire:</label><textarea name="commentaire" id="demande-commentaire" readonly  style="border:none" onmousedown="return false;"> {{>commentaire}}</textarea></div>'
	 + '</div>'
	 + '{{/if}}'

	/* demande de congé */
	 + '{{if typeDemandeId == 2}}'
	 + '{{for details}}'
	 + '<div class="demande-detail"><div class="ui-grid-a">'
	 + '<div class="ui-block-a demande-detail-titre" style="border:none" >Type</div>'
	 + '<div style="border:none"class="ui-block-b demande-detail-valeur"> {{>abrvType}} </div>'
	 + '<div class="ui-block-a demande-detail-titre">Début: </div><div class="ui-block-b demande-detail-valeur"  >'
	 + '{{>dateDebutLabel}}  <span id="demande-datedam" style="color: red; font-size:x-small;"> {{>zoneDebut}} </span> </div>'
	 + '<div class="ui-block-a demande-detail-titre"  >Fin: </div><div class="ui-block-b demande-detail-valeur"  >'
	 + '{{>dateFinLabel}}<span id="demande-datefam" style="color: red; font-size:x-small;"> {{>zoneFin}} </span> </div>'
	 + '<div  class="ui-block-a demande-detail-titre"  >Nb. jour: </div><div class="ui-block-b demande-detail-valeur"> {{>numberOfDays}} </div>'
	 + '</div>'
	 + '<div><label for="commentaire">Commentaire:</label><textarea name="commentaire" id="demande-commentaire" readonly  style="border:none" onmousedown="return false;"> {{>comment}}</textarea></div>'
	 + '</div>'
	 + '{{/for}}'
	 + '{{/if}}'
	 
	 /* commun */
	 + '<div class="demande-status ' 
	 + '{{if statusId == 9 || statusId == 3}}demande-status-validated{{/if}} {{if statusId == 10}}demande-status-refused{{/if}}">'
	 + '<div class="ui-grid-a">'
	 + '<div class="ui-block-a "  > Statut: </div><div class="ui-block-b demande-status-text"   >{{>status}} {{>statusLabel}}   </div>'
	 + '</div></div>'

	 + '{{if showCommands}}<div style="" ><a href="#/dialog-valider-demande" data-role="button" data-theme="g"  > Valider </a></div></div>'
	 + '<div style="display:block; width="100%" ><div style="float:left;width:45%"><a  href="#/dialog-refuser-demande" data-role="button" data-theme="f"  > Refuser </a></div>'
	 + '<div style="float:right;width:45%" ><a href="#/dialog-delete-demande" data-role="button" data-theme="f"  > Supprimer </a></div>'
	 + '{{/if}}'
	 + '</div>{{else}}{{include tmpl="errorTemplate"/}}{{/if}}'
,
	
	fraiPageTemplate:'{{if id}}<div style="text-align:center;font-size:large;margin-bottom:1em;" >{{>employeeName}}</div>'
	 + '<div style="text-align:center;font-size:small;font-weight:bold;margin-bottom:1em;" > </div>'
	 + '{{for costDetails}}'
	 + '<div class="demande-detail"><div class="ui-grid-a">'
	 + '<div class="ui-block-a demande-detail-titre" style="border:none" >Date</div>'
	 + '<div style="border:none"class="ui-block-b demande-detail-valeur"> {{>date}} </div>'
	 + '<div class="ui-block-a demande-detail-titre">Nature de frais: </div><div class="ui-block-b demande-detail-valeur"  >'
	 + '{{>natureLabel}}</div>'
	 + '<div class="ui-block-a demande-detail-titre"  >Description: </div><div class="ui-block-b demande-detail-valeur"  >'
	 + '{{>label}}</div>'
	 + '<div  class="ui-block-a demande-detail-titre"  >Montant (TTC):  </div><div class="ui-block-b demande-detail-valeur"> {{>amount}} {{>#parent.parent.data.currencyLabel}} </div>'
	 + '<div  class="ui-block-a demande-detail-titre"  >Montant à refacturer (TTC):  </div><div class="ui-block-b demande-detail-valeur"> {{>toReBillAmount}} {{>#parent.parent.data.currencyLabel}} </div>'
	 + '<div  class="ui-block-a demande-detail-titre"  >Montant à rembourser (TTC):  </div><div class="ui-block-b demande-detail-valeur"> {{>toRepaidAmount}} {{>#parent.parent.data.currencyLabel}} </div>'
	 + '</div>'
	 + '</div>'
	 + '{{/for}}'
	 
	 + '<div class="demande-status"><div class="ui-grid-b">'
	 + '<div class="ui-block-a "  style="text-align: center"> Total: <div><strong>{{>amount}} {{>currencyLabel}}</strong></div></div>'
	 + '<div class="ui-block-b " style="text-align: center">à refacturer: <div><strong>{{>toReBillAmount}} {{>currencyLabel}}</strong></div></div>'
	 + '<div class="ui-block-c " style="text-align: center"> à rembourser: <div><strong>{{>toRepaidAmount}} {{>currencyLabel}}</strong></div></div>'
	 + '</div></div>'
		
	 + '<div class="demande-status ' 
	 + '{{if status == 9 }}demande-status-validated{{/if}} {{if statusId == 10}}demande-status-refused{{/if}}">'
	 + '<div class="ui-grid-a">'
	 + '<div class="ui-block-a "  > Statut: </div><div class="ui-block-b demande-status-text"   >{{>statusLabel}}   </div>'
	 + '</div></div>'
	
	 + '{{if showCommands }}<div style="" ><a href="#/dialog-valider-frais" data-role="button" data-theme="g"  > Valider </a></div></div>'
	 + '<div style="display:block; width="100%" ><div ><a  href="#/dialog-refuser-frais" data-role="button" data-theme="f"  > Refuser </a></div>'
	 + '</div>'
	 + '{{/if}}'
	 + '</div>{{else}}{{include tmpl="errorTemplate"/}}{{/if}}'
,
	projectPageTemplate: '{{if id}}<div class="contract-reference" style="font-size:small"><p ><strong>{{if contractType != null && contractType == CP}} Référence: {{else}} Référence Contrat Talan: {{/if}}</strong>{{>contract.reference}}</p></div>'
	+			'<div id="project-content-collaps-set" data-role="collapsible-set" data-theme="h" >'
	+			'<div  id="project-general-info-collaps-header" data-role="collapsible" data-collapsed-icon="arrow-d"  data-expanded-icon="arrow-u">'
	+			'<h2> Infos Générales </h2>'
	+				'<ul id="project-general-info-collaps" data-role="listview"  data-divider-theme="d" data-inset="false">'
	+					'<li data-role="list-divider"> Client</li>'
	+					'<li><div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Raison sociale: </em> </div><div class="ui-block-b" style=" font-weight:normal"> {{>contract.prospectRaisonSocial}} </div><div></li>'
	+					'<li><div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>BU: </em> </div><div class="ui-block-b" style=" font-weight:normal">   {{>businessUnitLabel}}</div><div></li>'
	+					'<li data-role="list-divider"> Mission</li>'
	+					'<li><div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Intitulé: </em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>title}} </div><div></li>'
	+					'<li><div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Type contrat: </em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>missionProjectTypeLabel}} </div><div></li>'
	+					'<li><div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Type prestation: </em> </div><div class="ui-block-b" style=" font-weight:normal">   {{>followUpTypeLabel}} </div><div></li>'
	+					'<li><div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Facturable: </em> </div><div class="ui-block-b" style=" font-weight:normal">   {{if billable}} Oui {{else}} Non {{/if}}</div><div></li>'
	+					'<li><div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Domaine: </em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>domainLabel}} </div><div></li>'
	+					'<li><div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Projet: </em> </div><div class="ui-block-b" style=" font-weight:normal">   {{>groupedProjectLabel}} </div><div></li>'
	+					'<li><div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Début: {{>expectedBeginDate}} </em> </div><div class="ui-block-b" style="font-size: small">   <em>Fin: {{>expectedEndDate}}</em> </div><div></li>'
	+					'<li data-role="list-divider"> Lieu d\'exécution</li>'
	+					'<li><div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>{{if addressType == C}}Locaux du client	: {{else}} Locaux de Talan :{{/if}} </em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>clientAdresse}} </div><div></li>'
	+				'</ul>'
	+			'</div>'
	+			'<div data-role="collapsible" data-collapsed-icon="arrow-d"  data-expanded-icon="arrow-u">'
	+			'<h2> Infos Contrat</h2>'
	+				'<ul id="project-info-contract-collaps" data-role="listview" data-divider-theme="d" data-inset="false">'
	+					'<li data-role="list-divider">Conditions générales</p></li>'
	+					'<li><div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Référence Contrat Client:</em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>contract.clientPieceReference}}</p></div></div></li>'
	+					'<li><div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Contrat cadre:</em> </div><div class="ui-block-b" style=" font-weight:normal"> {{>contract.frameworkContractReference}}</p></div></div></li>'
	+					'<li> <div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Sous-traitance autorisée:</em> </div><div class="ui-block-b" style=" font-weight:normal">  {{if contract.allowOutSourcing == "Y"}} Oui {{/if}}{{if contract.allowOutSourcing == "N"}} Non {{else}} Non précisé {{/if}}</div></div></li>'
	+					'<li> <div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Grille des Presta. Compl.:</em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>overTimeGridId}}</div></div></li>'
	+					'<li> <div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Préavis de résiliation:</em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>cancellationNotice}}</div></div></li>'
	+					'<li> <div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Options de reconduction:</em> </div><div class="ui-block-b" style=" font-weight:normal"> {{if renewalOptions}} Oui {{else}} Non {{/if}}</div></div></li>'
	
	+					'<li data-role="list-divider">Conditions financières</li>'
	+					'<li> <div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Nombre de jours commandés:</em> </div><div class="ui-block-b" style=" font-weight:normal">   {{>contract.orderedDaysNumber}} </div></div></li>'
	+					'<li> <div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Mode de règlement:</em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>contract.paymentModeLabel}}</div></div></li>'
	+					'<li> <div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Délai de règlemen:</em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>contract.paymentDelaysLabel}}</div></div></li>'
	+					'<li> <div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Adresse de facturation:</em> </div><div class="ui-block-b" style=" font-weight:normal"> {{>contract.prospectBillingAddressLabel}}</div></div></li>'
	+					'<li> <div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Devise:</em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>contract.currencyId}}</div></div></li>'
	+					'<li> <div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Commentaire de règlement:</em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>contract.commentairePayementMode}}</div></div></li>'
	+					'<li> <div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Périodicité de facturation:</em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>contract.billingFrequencyId}}</div></div></li>'
	
	+					'<li data-role="list-divider">Conditions de facturation</li>'	
	+					'<li> <div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Facturation des prestations: </em> </div><div class="ui-block-b" style=" font-weight:normal"> Groupée </div></div></li>'
	+					'<li> <div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Facturation des prestations: complémentaires:</em> </div><div class="ui-block-b" style=" font-weight:normal">  Groupée</div></div></li>'
	+					'<li> <div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small"><em>Facturation des Frais:</em> </div><div class="ui-block-b" style=" font-weight:normal">  Groupée</div></div></li>'
	+				'</ul>'
	+			'</div>'
	
	+			'<div data-role="collapsible" data-collapsed-icon="arrow-d"  data-expanded-icon="arrow-u">'
	+			'<h2> Ressources</h2>'
	+				'<ul id="project-ressources-collaps" data-role="listview" data-divider-theme="d" data-inset="false">'
	+					'{{for costAndPricings}}<li>'
	+ 						'<div class="demande-detail"><div class="ui-grid-a">'
	+ 							'<div class="ui-block-a demande-detail-titre" style="border:none" >Nom</div>'
	+ 							'<div style="border:none"class="ui-block-b demande-detail-valeur"> {{>employee.firstName}} </div>'
	+ 							'<div class="ui-block-a demande-detail-titre" style="border:none" >Prénom</div>'
	+ 							'<div style="border:none"class="ui-block-b demande-detail-valeur"> {{>employee.lastName}} </div>'
	+ 							'<div class="ui-block-a demande-detail-titre" style="border:none" >Rôle</div>'
	+ 							'<div style="border:none"class="ui-block-b demande-detail-valeur"> {{>qualificationLabe}} </div>'
	+ 							'<div class="ui-block-a demande-detail-titre" style="border:none" >Manager</div>'
	+ 							'<div style="border:none"class="ui-block-b demande-detail-valeur"> {{>managerLabe}} </div>'
	+ 							'<div class="ui-block-a demande-detail-titre" style="border:none" >Senior</div>'
	+ 							'<div style="border:none"class="ui-block-b demande-detail-valeur"> {{>seniorLabe}} </div>'
	+ 							'<div class="ui-block-a demande-detail-titre" style="border:none" >Date de début</div>'
	+ 							'<div style="border:none"class="ui-block-b demande-detail-valeur"> {{>startDate}} </div>'
	+ 							'<div class="ui-block-a demande-detail-titre" style="border:none" >Date de fin</div>'
	+ 							'<div style="border:none"class="ui-block-b demande-detail-valeur"> {{>endDate}} </div>'
	+ 							'<div class="ui-block-a demande-detail-titre" style="border:none" >Nbr jours</div>'
	+ 							'<div style="border:none"class="ui-block-b demande-detail-valeur"> {{>orderDaysNumber}} </div>'
	+ 							'<div class="ui-block-a demande-detail-titre" style="border:none" >Tarif vente/j</div>'
	+ 							'<div style="border:none"class="ui-block-b demande-detail-valeur"> {{>tjm}} {{>#parent.parent.data.contract.shownDevise}}</div>'
	+ 							'<div class="ui-block-a demande-detail-titre" style="border:none" >Tarif total	</div>'
	+ 							'<div style="border:none"class="ui-block-b demande-detail-valeur"> {{>totalTarif}} {{>#parent.parent.data.contract.shownDevise}}</div>'
	+				'{{/for}}</li>'
	+ 				'<li><div class="demande-status">'
	+ 					'<div class="ui-grid-a">'
	+ 					'<div class="ui-block-a "  > Total Nbr jours: </div><div class="ui-block-b demande-status-text">{{>totalDays}}</div>'
	+ 					'<div class="ui-block-a "  > Tarif total: </div><div class="ui-block-b demande-status-text">{{>globalTarif}} {{>contract.shownDevise}}</div>'
	+ 					'<div class="ui-block-a "  > Total Contrat: </div><div class="ui-block-b demande-status-text">{{>globalAmount}} {{>contract.shownDevise}}</div>'
	+ 				'</div></div></li>'
	+				'</ul>'
	+			'</div>'
	
	+ '<div class="horizontal-separator" ></div>'
	+ '<div class="demande-status ' 
	+ '{{if status == 12 || status == 15 || status == 20}}demande-status-validated{{/if}} {{if status == 13 || status == 14}}demande-status-refused{{/if}}">'
	+ '<div class="ui-grid-a">'
	+ '<div class="ui-block-a "  > Statut: </div><div class="ui-block-b demande-status-text"   >{{>statusLabel}}   </div>'
	+ '</div></div>'
	+ '<div class="horizontal-separator" ></div>'
	+ '{{if showUserAction}} <div style="" ><a href="#/dialog-valider-mission" data-role="button" data-theme="g"  > Valider </a></div></div>'
	+ '<div style="display:block; width="100%" ><div style="float:left;width:100%"><a  href="#/dialog-refuser-mission" data-role="button" data-theme="f"  > Refuser </a></div>'
	+ '{{/if}}'
	+ '</div>'
	
	+'</div> {{else}}{{include tmpl="errorTemplate"/}}{{/if}}'
,
	invoicePageTemplate:'{{if bill}}<div id="project-content-collaps-set" data-role="collapsible-set" data-theme="h" >'
	+			'<div  id="facture-entete-info-collaps-header" data-role="collapsible" data-collapsed-icon="arrow-d"  data-expanded-icon="arrow-u">'
	+			'<h2> Entête </h2>'
	+				'<ul id="facture-entete-info-collaps" data-role="listview"  data-divider-theme="d" data-inset="false">'
	+					'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Client:</em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>bill.prospectClientLabel}} </div></div></li>'
	+					'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Ref contrat Talan: </em> </div><div class="ui-block-b" style=" font-weight:normal"> {{>internalReference}} </div></div></li>'
	+					'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Ref contrat Client: </em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>customerReference}} </div></div></li>'
	+					'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>N° de facture: </em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>bill.numFacture}} </div></div></li>'
	+					'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Date: </em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>bill.dateFactureLabel}} </div></div></li>'
	+					'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Mode de réglement: </em> </div><div class="ui-block-b" style=" font-weight:normal"> {{>bill.regulationModeLabel}} </div></div></li>'
	+					'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Délai de réglement: </em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>bill.regulationDelayLabel}} - {{>bill.dateEcheanceLabel}} </div></div></li>'
	+					'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Responsable: </em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>contactsClient}} </div></div></li>'
	+					'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Adresse de facturation: </em> </div><div class="ui-block-b" style=" font-weight:normal;font-size: small">  {{>bill.adresseLabel}} </div></div></li>'
	+					'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Exemplaires: </em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>bill.nbrExemplaires}} </div></div></li>'
	+				'</ul>'
	+			'</div>'
	+			'<div  id="facture-description-collaps-header" data-role="collapsible" data-collapsed-icon="arrow-d"  data-expanded-icon="arrow-u">'
	+			'<h2> Description </h2>'
	+				'<ul id="facture-description-collaps" data-role="listview"  data-divider-theme="d" data-inset="false">'
	+					'{{for billsDetails}}'
	+					'<li data-role="list-divider"><div class="ui-grid-a"><div class="ui-block-a" style="font-size : small"> <em>N° de proforma:</em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>proformaNumber}} </div></div></li>'
	+					'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Désignation : </em> </div><div class="ui-block-b" style=" font-weight:normal"> {{>designation}} </div></div></li>'
	+					'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Quantité : </em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>qte}} </div></div></li>'
	+					'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Prix Unitaire : </em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>pu}} {{>#parent.parent.data.bill.deviseLabel}} </div></div></li>'
	+					'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Montant : </em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>amount}} {{>#parent.parent.data.bill.deviseLabel}}</div></div></li>'
	+					'{{/for}}'
	
	+					'<li data-role="list-divider" data-theme="d"><div style="font-size : small;text-align:center"> <em>Total</em> </div></li>'
	+					'<li data-theme="h"><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Remise : </em> </div><div class="ui-block-b" style=" font-weight:normal"> {{if bill.montantRemise}}{{>bill.montantRemise}} {{>bill.deviseLabel}} {{/if}}</div></div></li>'
	+					'<li data-theme="h"><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Total HT : </em> </div><div class="ui-block-b" style=" font-weight:normal"> {{if bill.montantHt}}{{>bill.montantHt}} {{>bill.deviseLabel}}{{/if}}</div></div></li>'
	+					'<li data-theme="h"><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>TVA ({{>bill.tauxTvaValeur}}) : </em> </div><div class="ui-block-b" style=" font-weight:normal">  {{if bill.montantTva}}{{>bill.montantTva}} {{>bill.deviseLabel}} {{/if}}</div></div></li>'
	+					'<li data-theme="h"><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Total TTC : </em> </div><div class="ui-block-b" style=" font-weight:normal">  {{if bill.montantTtc}}{{>bill.montantTtc}} {{>bill.deviseLabel}} {{/if}}</div></div></li>'
	+				'</ul>'
	+			'</div>'
	
	+			'<div  id="facture-entete-info-collaps-header" data-role="collapsible" data-collapsed-icon="arrow-d"  data-expanded-icon="arrow-u">'
	+			'<h2> Commentaire </h2>'
	+				'<ul id="facture-entete-info-collaps" data-role="listview"  data-divider-theme="d" data-inset="false">'
	+ 					'<li><div><label for="commentaire1">Commentaire Désignation:</label><textarea name="commentaire1"  readonly  style="border:none" onmousedown="return false;">'
	+					'{{>bill.commentaireDetailFact}}</textarea></div></li>'
	+ 					'<li><div><label for="commentaire2">Nos références:</label><textarea name="commentaire2"  readonly  style="border:none" onmousedown="return false;">'
	+					'{{>bill.commentaireRefInterne}}</textarea></div></li>'
	+ 					'<li><div><label for="commentaire3">Vos références:</label><textarea name="commentaire3"  readonly  style="border:none" onmousedown="return false;">'
	+					'{{>bill.commentaireRefClient}}</textarea></div></li>'
	+				'</ul>'
	+			'</div>'
	
	+ '<div class="horizontal-separator" ></div>'
	+ '<div class="demande-status ' 
	+ '{{if bill.statusId == 3 || bill.statusId == 4 || bill.statusId == 5}}demande-status-validated{{/if}} {{if bill.statusId == 6}}demande-status-refused{{/if}}">'
	+ '<div class="ui-grid-a">'
	+ '<div class="ui-block-a "  > Statut: </div><div class="ui-block-b demande-status-text"   >{{>bill.statusLabel}}   </div>'
	+ '</div></div>'
	+ '<div class="horizontal-separator" ></div>'
	+ '{{if showUserCommands}}<div style="" ><a href="#/dialog-valider-facture" data-role="button" data-theme="g"  > Valider </a></div></div>'
	+ '<div style="display:block; width="100%" ><div style="float:left;width:100%"><a  href="#/dialog-refuser-facture" data-role="button" data-theme="f"  > Refuser </a></div>'
	+ '{{/if}}'
	+ '</div>'
				
	+'</div> {{else}}{{include tmpl="errorTemplate"/}}{{/if}}'

,
	errorTemplate : '<h3> Something is wrong !</h3><p><em><strong>mbyblos</strong></em> encountered some problems, we\'ll be back soon </p> '
,

	craPageTemplate : '{{if craDto}}<div style="text-align:center;font-size:large;margin-bottom:1em;" >{{>craDto.nom}} {{>craDto.prenom}}</div>'
	 + '<div style="text-align:center;font-size:small;font-weight:bold;margin-bottom:1em;" > {{>labelDate}}</div>'
	+'<div data-role="collapsible-set" data-theme="h">'
	+			'<div data-role="collapsible" data-collapsed-icon="arrow-d"  data-expanded-icon="arrow-u" >'
	+				'<h2> PROJETS </h2>'
	+				'<ul data-role="listview">'
	+				'{{for ligneProjectBeans}}'
	+				'<li><div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small; width: 20%" > <em>Client:</em> </div><div class="ui-block-b" style=" font-weight:normal; font-size:small; padding-bottom: 8px;width: 80%">  {{>customerLabel}}</div></div>'
	+				'<div class="ui-grid-a" ><div class="ui-block-a" style="font-size: small;width: 20%"> <em>Type:</em> </div><div class="ui-block-b" style=" font-weight:normal;font-size:small;padding-bottom: 8px; width: 80%"> {{>typeLabel}}</div></div>'
	+				'<div class="ui-grid-a"><div class="ui-block-a" style="font-size: small;width: 20%"> <em>Projet:</em> </div><div class="ui-block-b" style=" font-weight:normal; font-size:small; padding-bottom: 8px;width: 80%">  {{>projectLabel}}</div></div>'
	+				'<div class="ui-grid-a" data-theme="f" ><div class="ui-block-a" style="font-size: small; width: 20%"> <em>Total:</em> </div><div class="ui-block-b" style=" font-weight:normal;font-size:small;padding-bottom: 8px; width: 80%">  {{>monthBean.total.valueLabel}}</div></div></li>'
	+				'{{/for}} {{if ligneProjectBeans.length == 0}} <li></li> {{/if}}'
	+				'<ul/>'
	+			'</div>'
	+			'<div data-role="collapsible" data-collapsed-icon="arrow-d"  data-expanded-icon="arrow-u">'
	+				'<h2> PROJET NON FACTURABLE </h2>'
	+				'<ul data-role="listview">'
	+				'{{for projectNFlignes}}'
	+				'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Client:</em> </div><div class="ui-block-b" style=" font-weight:normal; font-size:small">  {{>customerLabel}}</div></div>'
	+				'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Total:</em> </div><div class="ui-block-b" style=" font-weight:normal">  {{>monthBean.total.valueLabel}}</div></div></li>'
	+				'{{/for}} {{if projectNFlignes.length == 0}} <li></li> {{/if}} '
	+				'</ul>'
	+			'</div>'
				
	+			'<div data-role="collapsible" data-collapsed-icon="arrow-d"  data-expanded-icon="arrow-u">'
	+				'<h2> HORS PROJET</h2>'
	+				'<ul data-role="listview">'
	+				'{{for lignes}}'
	+					'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>{{>label}} :</em> </div><div class="ui-block-b" style=" font-weight:normal"> {{>monthBean.total.valueLabel}}</div></div></li>'
	+				'{{/for}} {{if lignes.length == 0}} <li></li> {{/if}} '
	+				'<ul/>'
	+			'</div>'
				
	+			'<div data-role="collapsible" data-collapsed-icon="arrow-d"  data-expanded-icon="arrow-u">'
	+				'<h2>REGULARISATION</h2>'
	+				'<ul data-role="listview">'
	+				'{{for regularisationlignes}}'
	+				'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Client:</em> </div><div class="ui-block-b" style=" font-weight:normal"> {{>customerLabe}}</div></div></li>'
	+				'<li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Projet:</em> </div><div class="ui-block-b" style=" font-weight:normal"> {{>label}}</div></div></li>'
	+				'{{/for}} {{if regularisationlignes.length == 0}} <li></li> {{/if}} '
	+				'<ul/>'
	+			'</div>'
	+			'<ul data-role="listview" data-inset="true"><li><div class="ui-grid-a"><div class="ui-block-a" style="font-size: small"> <em>Total :</em> </div><div class="ui-block-b" style=" font-weight:normal">{{>monthBean.total.valueLabel}}</div></div></li></ul>'
	+		'</div>'
	
	+ '<div class="horizontal-separator" ></div>'
	+ '<div class="demande-status ' 
	+ '{{if craDto.statutId == 2}}demande-status-validated{{/if}} {{if craDto.statutId == 3}}demande-status-refused{{/if}}">'
	+ '<div class="ui-grid-a">'
	+ '<div class="ui-block-a "  > Statut: </div><div class="ui-block-b demande-status-text"   >{{>craDto.statutLabel}}   </div>'
	+ '</div></div>'
	+ '<div class="horizontal-separator" ></div>'
	+ '{{if showUserAction}} <div style="" ><a href="#/dialog-valider-cra" data-role="button" data-theme="g"  > Valider </a></div></div>'
	+ '<div style="display:block; width="100%" ><div style="float:left;width:100%"><a  href="#/dialog-refuser-cra" data-role="button" data-theme="f" > Refuser </a></div>'
	+ '{{/if}}'
	
	+ '</div> {{else}}{{include tmpl="errorTemplate"/}}{{/if}}'
	

	
,
	 
	DialogTemplate : '<div class="dialog-title"><h3>{{>title}}</h3></div>'
	 + '<p class="dialog-body">{{>body}}</p>'
	 + '<a href="{{>okLink}}" data-role="button"  data-theme="d"  data-inline="true" data-mini="true" style="width: 45%;"> Oui </a>'
	 + '<a  onclick="from_popup = true; back() ;" data-role="button"  data-inline="true" data-mini="true" data-theme="d" style="width: 45%">Annuler</a>'
,
	ErrorDialogTemplate : '<div id="error-container" ><div id="error-header" ><h3>{{>title}}</h3></div>'
	 + '<div id="error-content" data-role="content" ><p>{{>body}}</p>'
	 + '<a  href="#/home" data-role="button"  data-theme="f"  >{{>okText}}</a></div><div>',
	li_workflowTemplate : '{{if user}}<div class="workflow-cell"><div class="workflow-cell-title"><img src="js/images/{{>icon}}" ></img><h3> {{>actor}} </h3> </div>'
	 + '<div> {{>name}} {{>user}} </div> {{if startDate}}<div><em>  le {{>startDate}}  </em></div>{{/if}}</div> {{/if}}',
	rejectDemandeDialog : ''
	 + '<div><label for="commentaire">Motif:</label><textarea name="commentaire" id="reject-comment-{{>type}}-{{>id}}"  style="border:none" ></textarea></div>'
	 + '<div><a href="{{>okLink}}" data-role="button"  data-theme="d"  data-inline="true" data-mini="true" style="width: 40%;"> OK </a>'
	 + '<a  onclick="from_popup = true; back() ;" data-role="button"  data-inline="true" data-mini="true" data-theme="d" style="width: 40%">Annuler</a></div>'
});

//********************************* Views *******************************************/
jQuery.extend({

	ListView : function () {
		var self = this;

		var template = 'li_congeTemplate';

		self.render = function (el, data, _template) {
			if (_template) {
				template = _template;
			}
			if (!data[0])
				data = null;
			var content = $.render[template](data);
			var html = '<ul data-role="listview" data-theme="d" data-count-theme="h" data-inset="true" >'
				 + content
				 + '</ul>';
			$(el).html(html).trigger('create');

		}

	},

	/* 			Render a collaps view
	 * @id 			: id of the ul inside the collaps
	 * @el			: the container's ID in witch the view will render
	 * @data		: a json array containing the data to render
	 * @title		: the title of the collaps widget
	 * @dataKind	: type of the data used to choose template
	 */
	CollapseView : function (el, data, title, dataKind) {
		var TAG = "View.collapseView";
		var self = this;
		var ULID = 'collaps-conge'; // default id of the ul element in this collaps
		var e = el;
		var d = data;
		var t = title;
		var k = dataKind;
		var html;

		// choose the template;
		switch (k) {
		case 'Conge': {
			html = $.render.li_congeTemplate(d) ;
				break;
			} // default;
		case 'Mission': {
				ULID = 'collaps-mission';
				 html = $.render.li_missionTemplate(d) ;
				break;
			}
		case 'CRA':{
			ULID = 'collaps-cra';
			html = $.render.li_craTemplate(d) ;
			break;
		}
		case 'Facture':{
			ULID = 'collaps-facture';
			html = $.render.li_invoiceTemplate(d) ;
			break;
		}
		case 'Frais':{
			ULID = 'collaps-frais';
			html = $.render.li_fraisTemplate(d) ;
			break;
		}
		
		default:
			break;
		} // swtich


		// render the widget
		self.render = function () {
			var size = 0;
			if (d && d.length) 
			{
				size = d.length;
			}
			var content = '';
			content = '<div  id="' + ULID + '" data-role="collapsible" data-theme="h" data-iconpos="left" data-icon="none" data-inset="true"  >'
				 + '<h2>' + t + ' (' + size + ') </h2><ul data-role="listview" data-theme="d">'
				 + html + '</ul>' + '</div>';

			$('#' + el).append(content).trigger('create');

		}

		//self.render();
	} // endOf CollapsView
,

	// UserView
	UserView : function (data) {
		var welcomeBann = '#user-view';
		var panelProfile = '#panel-user-profile';
		var self = this
			self.render = function () {
			var content = $.render.userTemplate(data);
			$(welcomeBann).html(content).trigger('create');
			content = $.render.userPanelTemplate(data);
			$(panelProfile).html(content).trigger('create');
		}

		self.render();
	} //endOF UserView
,

	HomeView : function () {
		var d;
		var collapses = 'collaps-set';
		var congeCollpas;
		var missionCollpas;
		var userView;
		$('#' + collapses).html('');
		this.render = function (_data) {
			if (_data)
				d = _data;
			if (d.demandes) {
				congeCollpas = new $.CollapseView(collapses, d.demandes, 'Congés', 'Conge');
				congeCollpas.render();

			}
			if (d.missions) {
				missionCollpas = new $.CollapseView(collapses, d.missions, 'Contrats', 'Mission');
				missionCollpas.render();
			}
			if (d.cra) {
				var craCollaps = new $.CollapseView(collapses, d.cra, 'CRA', 'CRA');
				craCollaps.render();
			}
			if (d.invoices) {
				var invoiceCollaps = new $.CollapseView(collapses, d.invoices, 'Factures', 'Facture');
				invoiceCollaps.render();
			}
			if (d.frais) {
				var fraisCollaps = new $.CollapseView(collapses, d.frais, 'Frais', 'Frais');
				fraisCollaps.render();
			}
			if (d.user) {
				userView = new $.UserView(d.user);
			}
		}

	} // endOf HomeView
,

	WorkflowFlowView : function (el) {
		var self = this;
		this.render = function (data) {
			var content = $.render.li_workflowTemplate(data);
			$(el).html(content).trigger("updatelayout");;
		}
	},

	DemandeView : function () {
		var self = this;
		var el = '#demande-content';
		var el_title = '#demande-header-title';
		var el_valider = '#valider-dialog';
		var el_refuser = '#refuser-dialog';
		var el_delete = '#delete-dialog';
		this.render = function (data) {
			if (data.wf) {
				var workflow = new $.WorkflowFlowView("#demande-workflow");
				workflow.render(data);
				//$("#demande-workflow").trigger("updatelayout");
			} else {
				var content = $.render.demandePageTemplate(data);
				var title = $.render.demandeHeaderTitleTemplate(data);
				var dialogData = new Object();
				dialogData.title = 'Valider ?';
				dialogData.body = 'Etes-vous sur de vouloir valider cette demande?';
				dialogData.okLink = '#/valider-demande/' + data.id;
				dialogData.cancelLink = '';
				var dialogValider = $.render.DialogTemplate(dialogData);

				//dialogData.title = 'Refuser ?';
				//dialogData.body = 'voulez vous refuser cette demande?';
				dialogData.okLink = '#/refuser-demande/' + data.id;
				dialogData.cancelLink = '';
				dialogData.id = data.id;
				dialogData.type = 'demande';
				var dialogrefuser = $.render.rejectDemandeDialog(dialogData);

				dialogData.title = 'Suprimer ?';
				dialogData.body = 'voulez vous suprimer cette demande?';
				dialogData.okLink = '#/delete-demande/' + data.id;
				dialogData.cancelLink = '';
				var dialogdelete = $.render.DialogTemplate(dialogData);

				$(el_title).html(title);
				$(el_valider).html(dialogValider).trigger('create');
				$(el_refuser).html(dialogrefuser).trigger('create');
				$(el_delete).html(dialogdelete).trigger('create');
				$(el).html(content).trigger('create');

			}
		}
	} // end of DemandeView
,
	FraiView : function () {
		var self = this;
		var el = '#frais-content';
		//var el_title = '#demande-header-title';
		var el_valider = '#valider-frais-dialog';
		var el_refuser = '#refuser-frais-dialog';
		this.render = function (data) {
				var content = $.render.fraiPageTemplate(data);
				var dialogData = new Object();
				dialogData.title = 'Valider ?';
				dialogData.body = 'Etes-vous sur de vouloir valider ces frais?';
				dialogData.okLink = '#/valider-frais/' + data.id;
				dialogData.cancelLink = '';
				var dialogValider = $.render.DialogTemplate(dialogData);

				//dialogData.title = 'Refuser ?';
				//dialogData.body = 'voulez vous refuser cette demande?';
				dialogData.okLink = '#/refuser-frais/' + data.id;
				dialogData.cancelLink = '';
				dialogData.id = data.id;
				dialogData.type = 'frais';
				var dialogrefuser = $.render.rejectDemandeDialog(dialogData);


			
				$(el_valider).html(dialogValider).trigger('create');
				$(el_refuser).html(dialogrefuser).trigger('create');
				$(el).html(content).trigger('create');

			
		}
	} // end of FraisView
,

	ProjectView : function () {
		var self = this;
		var el = "#project-content";
		var el_valider = '#dialog-valider-mission';
		var el_refuser = '#dialog-refuser-mission';
		this.render = function (data) {
			if (data.wf) {
				var workflow = new $.WorkflowFlowView("#mission-workflow");
				workflow.render(data);
				$('#mission-workflow').trigger("updatelayout");
			} else {
			
			var content = $.render.projectPageTemplate(data);
	
			var dialogData = new Object();
			dialogData.title = 'Valider ?';
			dialogData.body = 'Etes-vous sur de vouloir valider ce projet?';
			dialogData.okLink = '#/valider-project/' + data.id;
			dialogData.cancelLink = '';
			var dialogValider = $.render.DialogTemplate(dialogData);

				//dialogData.title = 'Refuser ?';
				//dialogData.body = 'voulez vous refuser cette demande?';
			dialogData.okLink = '#/refuser-project/' + data.id;
			dialogData.cancelLink = '';
			dialogData.id = data.id;
			dialogData.type = 'project';
			var dialogrefuser = $.render.rejectDemandeDialog(dialogData);
			
			
			$(el_valider).html(dialogValider).trigger('create');
			$(el_refuser).html(dialogrefuser).trigger('create');
			$(el).empty();
			$(el).html(content);
			}
			
			
			/******************* #### Enhancement of the content is done when the pagebeforshow is triggered  *************/
			
			/* $( content).appendTo( el ).trigger( "create" );
			$('#project-general-info-collaps').trigger('create');
			$('#project-info-contract-collaps').trigger('create');
		
			
			
			//$(el).trigger('create');
			
			$('#project-content-collaps-set').collapsibleset().collapsibleset( "refresh" );	
			//$('#project-content').find('ul[data-role=listview]').listview();  */
			//$(el).trigger('refresh').trigger('create');
			
		}
		
	}
	,
	
	FactureView : function () {
		var self = this;
		var el = "#facture-content";
		var el_valider = '#dialog-valider-facture';
		var el_refuser = '#dialog-refuser-facture';
		this.render = function (data) {
			if (data.wf) {
				var workflow = new $.WorkflowFlowView("#facture-workflow");
				workflow.render(data);
				$('#facture-workflow').trigger("updatelayout");
			} else {
			if(data.id){
			var content = $.render.invoicePageTemplate(data);
	
			var dialogData = new Object();
			dialogData.title = 'Valider ?';
			dialogData.body = 'Etes-vous sur de vouloir valider cette facture?';
			dialogData.okLink = '#/valider-facture/' + data.id;
			dialogData.cancelLink = '';
			var dialogValider = $.render.DialogTemplate(dialogData);

			dialogData.title = 'Refuser ?';
			dialogData.body = 'voulez vous refuser cette facture?';
			dialogData.okLink = '#/refuser-facture/' + data.id;
			dialogData.cancelLink = '';
			dialogData.id = data.id;
			dialogData.type = 'facture';
			var dialogrefuser = $.render.rejectDemandeDialog(dialogData);
			
			}
			
			$(el_valider).html(dialogValider).trigger('create');
			$(el_refuser).html(dialogrefuser).trigger('create');
			$(el).empty();
			$(el).html(content);
			}
			
		
			
		}
		
	}

,
	
	CraView : function () {
		var self = this;
		var el = "#cra-content";
		var el_valider = '#dialog-valider-cra';
		var el_refuser = '#dialog-refuser-cra';
		this.render = function (data) {
			if (data.wf) {
				var workflow = new $.WorkflowFlowView("#cra-workflow");
				workflow.render(data);
				$('#cra-workflow').trigger("updatelayout");
			} else {
			
			var content = $.render.craPageTemplate(data);
			if(data.id){
			var dialogData = new Object();
			dialogData.title = 'Valider ?';
			dialogData.body = 'Etes-vous sur de vouloir valider ce CRA?';
			dialogData.okLink = '#/valider-cra/' + data.craDto.id;
			dialogData.cancelLink = '';
			var dialogValider = $.render.DialogTemplate(dialogData);

			dialogData.title = 'Refuser ?';
			dialogData.body = 'voulez vous refuser ce CRA?';
			dialogData.okLink = '#/refuser-cra/' + data.craDto.id;
			dialogData.cancelLink = '';
			dialogData.id = data.craDto.id;
			dialogData.type = 'cra';
			var dialogrefuser = $.render.rejectDemandeDialog(dialogData);
			}
			
			$(el_valider).html(dialogValider).trigger('create');
			$(el_refuser).html(dialogrefuser).trigger('create');
			$(el).empty();
			$(el).html(content);
			}
			
			
			
		}
		
	}
,
	DialogView : function (el, _data) {
		this.render = function (data) {
			var content = $.render.DialogTemplate(data);
			$(el).html(content).trigger('create');
		}
		this.render(_data);

	}
,

	ErrorDialogView : function (data) {
		var self = this;
		var el = '#error-dialog';

		self.render = function (data) {
			var content = $.render.ErrorDialogTemplate(data);
			
			$(el).html(content).trigger('create');
			
		}

		this.render(data);

	}

});

/* var collapseView = function (el, data, title, dataKind){
var TAG = "View.collapseView";
var defaultTemplate = '#tpl-list-demande' ;
var e = el;
var d = data;
var t = title;
var k = dataKind
var tpl = defaultTemplate;

// render the widget
this.render = function(){
var content = '';

content = '<div  id="collaps-conge" data-role="collapsible" data-theme="h" data-iconpos="right" >'
+ '<h2>'+ t +'</h2><ul data-role="listview" data-theme="d">'
+ $( tpl ).render( d ) +'</ul>' + '</div>';

// console.log(TAG + '.Render: ');
// console.log(d);
el.append(content).trigger('create');

}

render();
} */
