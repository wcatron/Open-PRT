function Server(id) {
	this.id = id;
	this.zone = [];
	this.podcars = [];
	this.trackPodCar = function (podcar) {
		this.podcars[podcar.id] = podcar;
	}
	this.stopTrackingPodCar = function (podcar) {
		this.podcars[podcar.id] = undefined;
	}
	this.next = function (){
		for (var index in this.podcars) {
			var podcar = this.podcars[index];
			podcar.next();
		}
	}
	this.takeRequest = function (request) {
		for (var index in this.podcars) {
			var podcar = this.podcars[index];
			if (podcar.available()) {
				if (podcar.takeAssignment(request)) {
					console.log('Assigned request: '+request+' to PodCar: '+podcar.id);
					return true;
				}
			}
		}
		return false;
	}
}