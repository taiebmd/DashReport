// API URLs
baseurl = "http://192.168.8.28:8088/byblos/ws/";
USER_URL = baseurl + "home/user/";
DEMANDE_URL = baseurl + "demandes/manager/sparetime/"
DEMANDE_DETAILS_URL = baseurl + "demandes/manager/tovalidate/";
DEMANDE_VALIDATION_URL = baseurl + "demandes/manager/validate/";
DEMANDE_WORKFLOW_URL = baseurl + "workflows/demande/";
DEMANDES_TO_VALIDATE_URL = baseurl + "demandes/manager/tovalidate/";
DEMANDES_WAITING_URL = baseurl + "demandes/manager/current/";
DEMANDES_HISTORY_URL = baseurl + "demandes/manager/history/";
COLLAB_DEMANDES_WAITING_URL = baseurl + "demandes/waiting/";
COLLAB_DEMANDES_HISTORY_URL = baseurl + "demandes/history/";
DEMANDE_REJECTION_URL = baseurl + "demandes/manager/reject/";
DEMANDE_DELETE_URL = baseurl + "demandes/manager/delete/";
MISSION_CAN_BE_CLOSED = baseurl + "missions/readytoclose/" ;
MISSION_A_VALIDER = baseurl + "missions/contractstovalidate/";
MISSION_CLOSE_CONTRACT = baseurl + "missions/closecontract/";
MISSION_FRAIS_TO_VALIDATE = baseurl + "missions/cost/tovalidate/";
MISSION_FRAIS_ALL = baseurl + "missions/cost/all/";
MISSIN_FRAIS_DETAILS = baseurl + "missions/cost/";
MISSIN_PROJECT_DETAILS = baseurl + "missions/";
MISSION_WORKFLOW_URL = baseurl + "workflows/mission/";
MISSION_CRA_TO_VALIDATE = baseurl + "missions/cra/tovalidate/"
INVOICE_TO_VALIDATE = baseurl + "invoices/tovalidate/";
INVOICE_PROFORMA_TO_VALIDATE = baseurl + "invoices/proformas/tovalidate/"
INVOICE_HOME_TO_VALIDATE = baseurl + "invoices/billstohome/"
INVOICE_DETAILS = baseurl + "invoices/";
CRA_DETAILS = baseurl + "cra/";
CRA_WORKFLOW_URL = baseurl + "cra/workflow/";


// Global Variables
visited_test = false;
from_popup = false;
consulter_demande_currTab = 'consulter-demandes-avalider-tab';
mes_conges_currTab = 'mes-conges-encours-tab';
gerer_missions_currTab = 'gerer-missions-canbeclosed-tab';
gerer_frais_currTab = 'gerer-frais-avalider-tab';
gerer_facture_currTab = 'gerer-facture-avalider-tab'
loaderHits = 0;
contrat_id = 0;
show_message = false;

auth = '';
connected = false;
back_url = '#/home'; // don't know where you come from ? just return to home

managerToken = 'Basic YnlibG9zLm1hbmFnZXJAZ21haWwuY29tOjEyMzQ1';

borhToken = 'Basic YnlibG9zLmJvcmhAZ21haWwuY29tOjEyMzQ1';
AUTH_TOKEN = borhToken;



globalDemandeId = 0;

function showNavBar() {
	$('#navbar').show();
};

function hideNavBar() {
	$('#navbar').hide();
};

function loadContent(pageName) {
	$('#mainpage').html($('#' + pageName).html()).trigger('create');
};

function loadSecondPage() {

	//$('#container').load('pages/second.html').trigger('create');
	//$.mobile.changePage( "pages/second.html", { transition: "slideup" } );
	page1 = $('#page1');
	container = $('#container');
	container.empty();
	container.html(page1.html()).trigger("create");
	//$('#container a').buttonMarkup();
	//container.page();

	console.log("called !");
}

// load content of a page to the container
function loadPage(pageid) {
	newpage = $('#' + pageid);
	container = $('#container');
	container.empty();
	container.html(newpage.html()).trigger("create");
}

// update a collapse liste and it's title (number of items)
function updateCollpase(titleId, listId, url) {
	// populate a list from a distant server
	$.getJSON(url, null, function (data) {

		list = $('#' + listId);
		list.empty();
		$.each(data, function (index, demande) {

			console.log(index);
			list.append('<li> <a href="#demande" data-rel="dialog" onClick="globalDemandeId=' + demande.id + '" id="' + demande.id + '" ><h3> ' + demande.owner + '</h3><p><strong>Date:</strong>' + demande.date + ' </p> </a></li> ').trigger("create");

		});
		//$("#collaps-title-conge").empty();
		$("#" + titleId).text(data.length);
		list.listview('refresh');
		console.log(data.length);
		//return data.length;

	});
}

// fill the blancs in page demande
function loadDemandeById(id) {

	$.getJSON(baseurl + "conge/" + id + "?jsoncallback=?", null, function (data) {

		console.log(data.id + " " + data.owner);

		$('#demande-nom').text(data.owner);
		$('#demande-date').text(data.date);
		$('#demande-dated').text(data.dated);
		$('#demande-datef').text(data.datef);
		$('#demande-datedam').text(data.datedam);
		$('#demande-datefam').text(data.datefam);
		$('#demande-nbrjour').text(data.nbrjour);
		$('#demande-status').text(data.status);

		hideLoader();

	});

}

//show loader
var showLoader = function (hits) {
if(hits) loaderHits = hits; else loaderHits = 1;
	$('.ui-loader').css('display', 'block');
}

//hide loader
var hideLoader = function (forseit) {
if(forseit) $('.ui-loader').css('display', 'none'); else{
if(loaderHits > 0) loaderHits--;
if(loaderHits == 0)
	$('.ui-loader').css('display', 'none');
}
}

function back(safe) {
	// when safe is true hash is changed to trusted url
	if (safe) {
		if (back_url != null && back_url != '')
			window.location.hash = back_url;
	} else
		window.history.back();
}

function hideElement(id) {
	document.getElementById(id).style.visibility = 'hidden'
}
function showElement(id) {
	document.getElementById(id).style.visibility = 'visible'
}
function hideMessage(){
$('#message').hide();
}
function showMessage(duration){
show_message = false;
$('#message').show();
$('#message').delay(duration).fadeOut('slow');
}

function toggle_overlay(b){

	if(b) {
		 var docHeight = $(document).height();

			$("body").append("<div id='overlay'></div>");

			$("#overlay")
			.height(docHeight)
			.css({
			'opacity' : 0.4,
			'position': 'absolute',
			'top': 0,
			'left': 0,
			'background-color': 'black',
			'width': '100%',
			'z-index': 5000
			});
	}else{
		$('#overlay').remove();
		//document.body.removeChild(document.getElementById("overlay"));
	}
}


function getDateAsString(dateAsNumbers) {
	var date = new Date(dateAsNumbers);
	var month = date.getMonth() > 8 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1);
	var dateAsString = date.getDate() + "/" + month + "/" + date.getFullYear();
	return dateAsString;
}

function make_base_auth(user, password) {
	var tok = user + ':' + password;
	var hash = $.base64.encode(tok);
	return "Basic " + hash;
}

function setActiveConsulterDemandeTab(tab) {
	console.log('active tab: ' + tab);
	switch (tab) {
	case 'consulter-demandes-avalider-tab': {
			console.log('case 1');
			consulter_demande_currTab = tab;

			$('#' + consulter_demande_currTab).addClass('ui-btn-active');
			$('#consulter-demandes-encours-tab').removeClass('ui-btn-active');
			$('#consulter-demandes-historique-tab').removeClass('ui-btn-active');

			$('#consulter-demande-encours').hide();
			$('#consulter-demande-history').hide();
			$('#consulter-demande-avalider').show();
			break;

		}
	case 'consulter-demandes-encours-tab': {

			console.log('case 2');
			consulter_demande_currTab = tab;

			$('#' + consulter_demande_currTab).addClass('ui-btn-active');
			$('#consulter-demandes-avalider-tab').removeClass('ui-btn-active');
			$('#consulter-demandes-historique-tab').removeClass('ui-btn-active');

			$('#consulter-demande-avalider').hide();
			$('#consulter-demande-history').hide();
			$('#consulter-demande-encours').show();

			break;
		}
	case 'consulter-demandes-historique-tab': {

			console.log('case 3');
			consulter_demande_currTab = tab;

			$('#' + consulter_demande_currTab).addClass('ui-btn-active');
			$('#consulter-demandes-avalider-tab').removeClass('ui-btn-active');
			$('#consulter-demandes-encours-tab').removeClass('ui-btn-active');

			$('#consulter-demande-avalider').hide();
			$('#consulter-demande-encours').hide();
			$('#consulter-demande-history').show();

			break;
		}
	}
}

function setActiveMesCongesTab(tab) {
	console.log('active tab: ' + tab);
	switch (tab) {
	case 'mes-conges-encours-tab': {
			console.log('case 1');
			mes_conges_currTab = tab;

			$('#' + mes_conges_currTab).addClass('ui-btn-active');
			$('#mes-conges-historique-tab').removeClass('ui-btn-active');
			$('#mes-conges-history').hide();
			$('#mes-conges-encours').show();
			break;

		}
	case 'mes-conges-historique-tab': {

			console.log('case 2');
			mes_conges_currTab = tab;

			$('#' + mes_conges_currTab).addClass('ui-btn-active');
			$('#mes-conges-encours-tab').removeClass('ui-btn-active');
			$('#mes-conges-encours').hide();
			$('#mes-conges-history').show();
			break;
		}
	}
}

function setActiveGererMissionTab(tab) {
	console.log('active tab: ' + tab);
	switch (tab) {
	case 'gerer-missions-canbeclosed-tab': {
			console.log('case 1');
			gerer_missions_currTab = tab;

			$('#' + gerer_missions_currTab).addClass('ui-btn-active');
			$('#gerer-missions-avalider-tab').removeClass('ui-btn-active');
			$('#gerer-missions-avalider').hide();
			$('#gerer-missions-canbeclosed').show();
			break;

		}
	case 'gerer-missions-avalider-tab': {

			console.log('case 2');
			gerer_missions_currTab = tab;

			$('#' + gerer_missions_currTab).addClass('ui-btn-active');
			$('#gerer-missions-canbeclosed-tab').removeClass('ui-btn-active');
			$('#gerer-missions-canbeclosed').hide();
			$('#gerer-missions-avalider').show();
			break;
		}
	}
}

function setActiveGererFraisTab(tab) {
	console.log('active tab: ' + tab);
	switch (tab) {
	case 'gerer-frais-avalider-tab': {
			console.log('case 1');
			gerer_frais_currTab = tab;

			$('#' + gerer_frais_currTab).addClass('ui-btn-active');
			$('#gerer-frais-tous-tab').removeClass('ui-btn-active');
			$('#gerer-frais-tous').hide();
			$('#gerer-frais-avalider').show();
			break;

		}
	case 'gerer-frais-tous-tab': {

			console.log('case 2');
			gerer_frais_currTab = tab;

			$('#' + gerer_frais_currTab).addClass('ui-btn-active');
			$('#gerer-frais-avalider-tab').removeClass('ui-btn-active');
			$('#gerer-frais-avalider').hide();
			$('#gerer-frais-tous').show();
			break;
		}
	}
}
function setActiveGererFactureTab(tab) {
	console.log('active tab: ' + tab);
	switch (tab) {
	case 'gerer-facture-avalider-tab': {
			console.log('case 1');
			gerer_facture_currTab = tab;

			$('#' + gerer_facture_currTab).addClass('ui-btn-active');
			$('#gerer-proforma-avalider-tab').removeClass('ui-btn-active');
			$('#gerer-proforma-avalider').hide();
			$('#gerer-facture-avalider').show();
			break;

		}
	case 'gerer-proforma-avalider-tab': {

			console.log('case 2');
			gerer_facture_currTab = tab;

			$('#' + gerer_facture_currTab).addClass('ui-btn-active');
			$('#gerer-facture-avalider-tab').removeClass('ui-btn-active');
			$('#gerer-facture-avalider').hide();
			$('#gerer-proforma-avalider').show();
			break;
		}
	}
}

/* function setCookie(c_name, value, exdays) {
var exdate = new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1) {
c_start = c_value.indexOf(c_name + "=");
}
if (c_start == -1) {
c_value = null;
} else {
c_start = c_value.indexOf("=", c_start) + 1;
var c_end = c_value.indexOf(";", c_start);
if (c_end == -1) {
c_end = c_value.length;
}
c_value = unescape(c_value.substring(c_start, c_end));
}
return c_value;
} */

function setCookie(name, value, days) {
	/*if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else
		var expires = "";*/
	//document.cookie = name + "=" + value + expires + "; path=/";
	window.localStorage.setItem(name, value);
}
function getCookie(c_name) {
	/*if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) {
				c_end = document.cookie.length;
			}
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}*/
	var value = window.localStorage.getItem(c_name);
	if(value) return value; else return "";
}
