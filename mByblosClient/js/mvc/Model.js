//Models

jQuery.extend({

	Dao : function(){
		var self = this;
		self.sem  = 0; // used to sync all ajax calls 
		self.SEM_MAX = 0;
		var repo = new Array(); 
		var demandes = new $.DemandeModel();
		var missions = new $.MissionModel();
		var user = new $.UserModel();
		var listeners = new Array();
		
		
		self.getDemandes = function(){
			return repo.demandes;
		}
		self.getMissions = function(){
			return repo.missions;
		}
		self.getUser = function(){
			return repo.user;
		}
		
			var demandelistener = new $.DemandeModelListener({
			loadBegin : function() {
				
			},
			loadFinish : function(data) {
				
				self.sem++;
				console.log('dao demande ok '+self.sem);
				repo.demandes = data;
				if(self.sem == self.SEM_MAX){
					self.notifyDone(repo);
				}
				
			},
			loadError : function() {
				self.sem++;
				if(self.sem == self.SEM_MAX){
					self.notifyDone(repo);
				}
				self.notifyError('DEMANDE')
				
			}
			});
			
			var missionlistener = new $.MissionModelListener({
			loadBegin : function() {
				
			},
			loadFinish : function(data) {
			
				self.sem++;
				repo.missions = (data);
				console.log('dao mission ok '+self.sem);
				if(self.sem == self.SEM_MAX){
					self.notifyDone(repo);
				}
			},
			loadError : function() {
				self.sem++;
				if(self.sem == self.SEM_MAX){
					self.notifyDone(repo);
				}
				self.notifyError('MISSION');
			}
			});
			
			var userlistener = new $.UserModelListener({
			loadBegin : function() {
				
			},
			loadFinish : function(data) {
			
				self.sem++;
				console.log('dao user ok '+self.sem);
				repo.user = data;
				if(self.sem == self.SEM_MAX){
					self.notifyDone(repo);
				}
			},
			loadError : function() {
				self.sem++;
				if(self.sem == self.SEM_MAX){
					self.notifyDone(repo);
				}
				self.notifyError('USER');
			}
			});
		
			demandes.addListener(demandelistener);
			missions.addListener(missionlistener);
			user.addListener(userlistener);
		
		self.load = function(config){
			console.log( Object.keys(config).length);
			self.SEM_MAX = Object.keys(config).length;
			if(config.demande) demandes.fetch();
			if(config.mission) missions.fetch();
			if(config.user)user.fetch();
			
		}
		
		self.addListener = function(list){
			listeners.push(list);
		}
		
		self.notifyDone = function(data){
			$.each(listeners, function(i){
				listeners[i].loadDone(data);
			});
		}
		
		self.notifyError = function(error){
			$.each(listeners, function(i){
				listeners[i].loadError(error);
			});
		}
	
	}

	,
	
	DaoListener: function(list) {
			if(!list) list = {};
			return $.extend({
				loadDone : function(data) { },
				loadError : function(error) { }
			}, list);
	}
	
	,





	DemandeModel : function ( ){
	var self = this;
	var url = DEMANDE_URL;
	var demandeCache;
	var listeners = new Array();
	
	
	
	self.fetch = function(){
		demandeCache = new Array(); 
		self.notifyLoadBegin();
		
		
			$.ajax({
			url: url,
			dataType: 'json',
			success: function(data) {
     
				$.each(data, function(index, item) {
					item.i_ = index;
					demandeCache.push(item);
				});
				self.notifyLoadFinish (demandeCache);
			}
			,
			error: function(){ console.log('error loading demandes'); self.notifyError();}
			,
			timeout: 3000 //3 second timeout
		});
	
		
	
	}
	
	/**
	* get output as array (demandeCache)
	*/
	
	self.getAll = function (){
	 var a = new Array();
		if(demandeCache){
			console.log('Model.getAll: From Cache :D');
			for ( var i in demandeCache) { a.push(demandeCache[i]); };
			return a;
		}
	
	}
	
	
	self.getById = function(id){
		
		if(demandeCache){
			console.log('Model.getById: from cache ');
			return demandeCache[id];
		}else{
			// fetch one item from server
			console.log('Model.getById: need to fetch item from server');
			return ;
		}
	}
	
	
	/**
	 * add a listener to this model
	 */
	self.addListener = function(list){
		listeners.push(list);
	}
	
	/**
	 * notify everone that we're starting 
	 * to load some data
	 */
	self.notifyLoadBegin = function(){
		$.each(listeners, function(i){
			listeners[i].loadBegin();
		});
	}
	
	self.notifyLoadFinish = function(data){
		$.each(listeners, function(i){
			listeners[i].loadFinish(data);
		});
	}
	
	self.notifyError = function(){
	$.each(listeners, function(i){
		listeners[i].loadError();
	});
	}
	}, // EndOf DemandeModel
	
	
	
	/**
	* Mission Model
	*/
	MissionModel : function(){
	var self = this;
	var url = baseurl+"missions?jsoncallback=?";
	var missionCache;
	var listeners = new Array();
	
	
	
	self.fetch = function(){
		missionCache = new Array(); 
		self.notifyLoadBegin();
		
		
		$.ajax({
			url: url,
			dataType: 'json',
			success: function(data) {
     
				$.each(data, function(index, item) {
					item.i_ = index;
					missionCache.push(item);
				});
				self.notifyLoadFinish (missionCache);
			}
			,
			error: function(){ console.log('error loading missions'); self.notifyError();}
			,
			timeout: 3000 //3 second timeout
		});
		
		
	
	}
	
	/**
	* get output as array (missionCache)
	*/
	
	self.getAll = function (){
	 var a = new Array();
		if(missionCache){
			console.log('Model.getAll: From Cache :D');
			for ( var i in missionCache) { a.push(missionCache[i]); };
			return a;
		}
	}
	
	
	self.getById = function(id){
		
		if(missionCache){
			console.log('Model.getById: from cache ');
			return missionCache[id];
		}else{
			// fetch one item from server
			console.log('Model.getById: need to fetch item from server');
			return ;
		}
	}
	
	
	/**
	 * add a listener to this model
	 */
	self.addListener = function(list){
		listeners.push(list);
	}
	
	/**
	 * notify everone that we're starting 
	 * to load some data
	 */
	self.notifyLoadBegin = function(){
		$.each(listeners, function(i){
			listeners[i].loadBegin();
		});
	}
	
	self.notifyLoadFinish = function(data){
		$.each(listeners, function(i){
			listeners[i].loadFinish(data);
		});
	}
	
	self.notifyError = function(){
		$.each(listeners, function(i){
			listeners[i].loadError();
		});
	}
	
	}
	
	,
	
	/**
	* User Model
	*/
	UserModel : function(){
	var self = this;
	var url = USER_URL;
	var userCache;
	var listeners = new Array();
	
	
	
	self.fetch = function(){
		userCache = []; 
		self.notifyLoadBegin();
		
		$.ajax({
			url: url,
			dataType: 'json',
			crossDomain: true,
			beforeSend : function(req) {
				req.setRequestHeader('Authorization',borhToken);
			},
			
			success: function(data) {
     
				if(data){
				
					userCache.push(data);
				
				self.notifyLoadFinish (userCache);
				return data;
			
			}
			}
			,
			error: function(){ console.log('error loading User'); self.notifyError();}
			,
			timeout: 3000 //3 second timeout
		});
		
		
		
		
	
	}
	
	/**
	* get output as array (userCache)
	*/
	
	self.getUser = function (){
	 var a = new Array();
		if(userCache){
			for ( var i in userCache) { a.push(userCache[i]); };
			return a;
		}
	
	}
	
	
	/**
	 * add a listener to this model
	 */
	self.addListener = function(list){
		listeners.push(list);
	}
	
	/**
	 * notify everone that we're starting 
	 * to load some data
	 */
	self.notifyLoadBegin = function(){
		$.each(listeners, function(i){
			listeners[i].loadBegin();
		});
	}
	
	self.notifyLoadFinish = function(data){
		$.each(listeners, function(i){
			listeners[i].loadFinish(data);
		});
	}
	}
	
	/* self.notifyError = function(){
	$.each(listeners, function(i){
			listeners[i].loadError();
	});
	} */
	
	,
	
	GenericModel : function ( _url, _callback, _method, _data){
		var self = this ;
		var url = _url;
		var data = null;
		var type = 'GET';
		var callback = _callback;
		
		self.fetch = function(){
		if(_method) type = _method;
		if(_data ) data = _data;
			$.ajax({
				url: url,
				type: type,
				dataType: 'json',
				data: data,
				crossDomain: true,
				beforeSend : function(req) {
					req.setRequestHeader('Authorization',auth);
				},
				success: function(data) {
					console.log("generic model done loading data");
					callback(data);
				}
				,
				error: function(error){ console.log('error loading data'); callback(error);  }
				,
				timeout: 15000 //timeout
			});
		}// end of fetch
		
		self.setCallback = function(c) { callback = c ;}
		self.setUrl = function(u) { url = u ;}
		
	}
	
	,
	
	
	
	 // **************************************************************************** //
	 // *********************** Listeners ****************************************** //
	 // **************************************************************************** //
	
		/**
		* Conge Model Listener 'inteface'
		*/
		DemandeModelListener: function(list) {
			if(!list) list = {};
			return $.extend({
				loadBegin : function() { },
				loadFinish : function() { },
				loadError : function() { }
			}, list);
		}
	,
		
		/**
		* Mission Model Listener 'inteface'
		*/
		MissionModelListener: function(list) {
			if(!list) list = {};
			return $.extend({
				loadBegin : function() { },
				loadFinish : function() { },
				loadError : function() { }
			}, list);
		}
	,
		/**
		* User Model Listener 'inteface'
		*/
		UserModelListener: function(list) {
			if(!list) list = {};
			return $.extend({
				loadBegin : function() { },
				loadFinish : function() { },
				loadError : function() { }
			}, list);
		}
});