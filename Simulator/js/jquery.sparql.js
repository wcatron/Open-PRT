(function( $ ) {
	 
    $.fn.query = function(query ,options) {
		if (options) {
	 	   	var opts = $.extend( {}, $.fn.defaults, options);
	        $.fn.defaults = opts;
		}
		query = this.prefixesAsString() + query;
		var json_string = $.ajax(
		        {
		           url: $.fn.defaults.source, 
				   data: {"query":query,"output":"json"},
				   type: "GET",
		           async: false, 
		           dataType: 'json'
		        }
		    ).responseText;
		if (json_string.indexOf('Error') == -1) {
			var json = $.parseJSON(json_string);
			return json.results.bindings;
		}
		//ERROR
		
		return {"error":true,"response":json_string}; //evenutally parse code and other data
		
	}
	
	//This needs to be verbsForSubject and versbForObject then added back to original repository.
	
	$.fn.verbsForObject = function (object) {
		var results = $(this).query('SELECT distinct ?v where {'+object+' ?v ?o.}');
		var verbs = new Array();
		
		for (i = 0; i < results.length; i++) {
			verbs.push(results[i].v);
		}
		return verbs;
	}
	
	$.fn.verbsForDirectObject = function (object) {
		var results = $(this).query('SELECT distinct ?v where {?o ?v '+ object +'.}');
		var verbs = new Array();
		
		for (i = 0; i < results.length; i++) {
			verbs.push(results[i].v);
		}
		return verbs;
	}
	
	$.fn.resolvePrefix = function (str) {
		for (var key in $.fn.defaults.prefixes) {
			var prefix = $.fn.defaults.prefixes[key];
			if (str.indexOf(prefix) == 0) {
				return key+str.substr(prefix.length);
			}
		}
		return str;
	}
	
	$.fn.prefixesAsString = function () {
		var str = "";
		$.each($.fn.defaults.prefixes, function (key, value) {
			str += "prefix "+key+" <"+value+"> ";
		});
		return str;
	}
	
//	$.fn.query.prefixString = function() {
		
//	}
	
	// Plugin defaults
	$.fn.defaults = {
		"source":"http://localhost:3030/ds/query", //Defualt source to use out of the sources
		"prefixes":{
			"link:":"urn:open-prt:furman.link.",
			"node:":"urn:open-prt:furman.node.",
			'rdf:':'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
			'prt:':'http://open-prt.org#'
		}
	};
	
	
}( jQuery ));

