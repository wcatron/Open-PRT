var Map = {
	links: []
};
Map.getLink = function (link) {
	var results = $.fn.query("SELECT ?to ?from ?distance WHERE { link:"+link+" prt:toNode ?to ; prt:fromNode ?from ; prt:distance ?distance . }");
	if (results.length == 0) {
		return null;
	}
	var link = {
		link:'link:'+link,
		to: $.fn.resolvePrefix(results[0].to.value),
		from: $.fn.resolvePrefix(results[0].from.value),
		distance: parseInt(results[0].distance.value)
	};
	return link;
}
Map.getBestLink = function (starting_node,ending_node) {
	var choices = this.loadLinksFromNode(starting_node);
	var options = [
	];
	for (var i = 0; i < choices.length; i++) {
		var option = {
			'links':[choices[i].link],
			'distance':choices[i].distance
		};
		options.push(option);
	}
	var found = false;
	while (!found) {
		var shortest_option = options[0];
		var shortest_option_index = 0;
		for (var i = 1; i < options.length; i++) {
			if (shortest_option.distance > options[i].distance) {
				shortest_option = options[i];
				shortest_option_index = i;
			}
		}
		// Now we have the shortest option
		
		// get the next nodes and split the options
		
		var last_link = shortest_option.links[shortest_option.links.length - 1];
		
		var choices = this.loadLinksFromNode(last_link.to);
		
		for (var i = 0; i < choices.length; i++) {
			var links = shortest_option.links;
			links.push(choices[i].link);
			var option = {
				'links':links,
				'distance':shortest_option.distance+choices[i].distance
			};
			options.push(option);
			if (choices[i].link.to == ending_node) {
				found = true;
			}
		}
		
		options.pop(i);
	}
	
	console.log("found");
	
}
Map.loadLinks = function () {
	var results = $.fn.query("SELECT ?from ?link ?to ?distance WHERE { ?link prt:toNode ?to . ?link prt:fromNode ?from . ?link prt:distance ?distance . } ORDER BY ?distance LIMIT 100");
	this.links = results;
}
Map.loadLinksFromNode = function (node) {
	var results = $.fn.query("SELECT ?from ?link ?to ?distance WHERE { ?link prt:fromNode "+node+" . ?link prt:toNode ?to . ?link prt:fromNode ?from . ?link prt:distance ?distance . } ORDER BY ?distance LIMIT 100");
	links = this.formatLinks(results);
	return links;
}
Map.formatLinks = function (links) {
	var return_links = [];
	for (var i = 0; i < links.length; i++) {
		var link_array = links[i];
		var link = {
			link: $.fn.resolvePrefix(link_array.link.value),
			to: $.fn.resolvePrefix(link_array.to.value),
			from: $.fn.resolvePrefix(link_array.from.value),
			distance: parseInt(link_array.distance.value)
		};
		return_links.push(link);
	}
	return return_links;
}
Map.loadLinks();