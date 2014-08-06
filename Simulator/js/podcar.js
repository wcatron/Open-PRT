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
		this.currentLink = Map.getLink(this.location.link);
		this.getBaseServer();
	}
	this.getBaseServer = function () {
		var nextNode = this.currentLink.to;
		if (this.base) {
			if (this.base.zone.indexOf(nextNode) != -1) {
				return this.base;
			}
		}
		for (var index in this.knownServers) {
			var server = this.knownServers[index];
			if (server.zone.indexOf(nextNode) != -1) {
				server.trackPodCar(this);
				this.base = server;
				return this.base;
			}
		}
		console.log('Could not find base server');
		return this.knownServers[0]; // Should not happen.
	}
	this.available = function () {
		return (this.availableIn() == 0);
	}
	this.availableIn = function () {
		return this.tta;
	}
	this.takeAssignment = function (assignment) {
		assignment.haveRider = false;
		console.log('took assignment from: '+assignment.from+' to: '+assignment.to);
		var results_toRider = Map.getBestLink(this.currentLink.to,assignment.from);
		var results_toDestination = Map.getBestLink(assignment.from,assignment.to);
		this.tta = ( results_toRider.distance + results_toDestination.distance ) / speed;
		this.assignments.push(assignment);
		return true;
	}
	this.next = function () {
		if (this.assignments.length > 0) {
			if (this.assignments[0].to == this.currentLink.to && this.assignments[0].haveRider) { // Close
				console.log('Close');
				if (this.currentLink.distance > this.location.distance) {
					this.location.distance += this.speed;
					return;
				} else {
					console.log ("Arrived! Successfully Dilivered Rider: "+this.assignments[0].rider);
					this.assignments.shift();
					return;
				}
			}
			if (this.currentLink.distance > this.location.distance) {
				this.location.distance += this.speed;
				console.log('Continue on link: '+this.location.link);
				return;
			} else {
				
				var destination;
				if (this.assignments[0].haveRider) {
					destination = this.assignments[0].to;
				} else {
					if (this.currentLink.to == this.assignments[0].from) {
						// Are you where the rider is.
						this.assignments[0].haveRider = true;
						console.log('Picked Up Rider');
						return;
					}
					destination = this.assignments[0].from;
				}
				var results = Map.getBestLink(this.currentLink.to,destination);
				var loc = {
					link:results.link,
					distance:0
				};
				this.tta = results.distance / speed;
				this.setLocation(loc);
				console.log('End of link');
				return;
				//End of link decision time.
			}
			console.log('TO-DO');
		}
	}
}