function PodCar(id) {
	this.id = id;
	this.location = {
	};
	this.assignments = []; // {to: 'node:8'}
	this.currentLink = {};
	this.tta = 0;
	this.speed = 5;
	
	this.setLocation = function (loc) {
		this.location = loc;
		this.currentLink = Map.getLink(this.loc.link);
		this.resolveBaseServer();
	}
	this.getBaseServer = function () {
		var nextNode = Map.getLink(this.loc.link).to;
		if (this.base) {
			if (this.base.zone.indexOf(nextNode) != -1) {
				return this.base;
			}
		}
		for (var server in this.knownServers) {
			if (server.zone.indexOf(nextNode) != -1) {
				server.trackPodCar(this);
				this.base = server;
				return this.base;
			}
		}
		console.log('Could not find base server');
		return this.knownServers[0]; // Should not happen.
	}
	this.availableIn = function () {
		return this.tta;
	}
	this.takeAssignment = function (assignment) {
		this.assignments[] = assignment;
	}
	this.next = function () {
		if (this.assignment.length > 0) {
			if (this.assignment[0].to == this.currentLink.to) { // Close
				if (this.currentLink.distance > this.location.distance) {
					this.location.distance += this.speed;
				} else {
					console.log ("Arrived! Successfully Dilivered Rider: "+this.assignment[0].rider);
				}
			}
			
			this.assignment[0]
		}
	}
}