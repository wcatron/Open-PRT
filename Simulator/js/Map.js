var Map = {
	links: []
};
Map.getLink = function (link) {
	var results = $.query("SELECT ?to ?from ?distance WHERE { "+link+" prt:toNode ?to ; prt:fromNode ?from ; prt:distance ?distance . }");
	return results;
}
Map.loadLinks = function () {
	var results = $.query("SELECT ?from ?link ?to ?distance WHERE { ?link prt:toNode ?to . ?link prt:fromNode ?from . ?link prt:distance ?distance . } ORDER BY ?distance LIMIT 100");
	links = results;
}
Map.loadLinks();