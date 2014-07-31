function Rider() {
	this.location = "";
	this.knownServers = [];
	this.requestRide = function (fromNode, toNode) {
		this.location = fromNode;
		var result;
		for (var server in this.knownServers) {
			result = server.takeRequest({from:fromNode, to:toNode, rider:this});
			if (result) {
				return;
			}
		}
		console.log('failed to request ride');
	}
}