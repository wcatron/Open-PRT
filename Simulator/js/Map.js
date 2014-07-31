var Map = {
};
Map.getLink = function (link) {
	var results = $.query("SELECT ?to ?from ?distance WHERE { "+link+" prt:toNode ?to ; prt:fromNode ?from ; prt:distance ?distance . }");
	return results;
}