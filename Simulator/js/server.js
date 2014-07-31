function Server() {
	this.zone = [];
	this.podcars = [];
	this.trackPodCar = function (podcar) {
		this.podcars[podcar.id] = podcar;
	}
	this.stopTrackingPodCar = function (podcar) {
		this.podcars[podcar.id] = undefined;
	}
	this.next = function (){
		for (var podcar in this.podcars) {
			podcar.next();
		}
	}
	this.takeRequest = function () {
		for (var podcar in this.podcars) {
			if (podcar.available()) {
				podcar.
				return true;
			}
		}
		return false;
	}
}