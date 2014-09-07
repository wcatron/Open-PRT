var simulator = {};

simulator.createVisual = function () {
	$time = $('<div />',{
		id: 'time'
	}).html('0');
	
	$('body').append($time);
	
	this.$servers = $('<div />',{
		id: 'servers'
	});
	
	$('body').append(this.$servers);
	
	for (var index in servers) {
		var server_obj = servers[index];
		$server = $('<div />',{
			id:'server-'+server_obj.id
		});
		this.$servers.append($server);
		for (var podcar_num in servers[index].podcars) {
			var podcar_obj = servers[index].podcars[podcar_num];
			$podcar = $('<div />',{
				id:'podcar-'+podcar_obj.id
			});
			$podcar.append($('<span />',{
				class:'distance'
			}));
			$podcar.append($('<span />',{
				class:'link'
			}));
			$('#server-'+server_obj.id).append($podcar);
		}
	}
}


simulator.refreshVisual = function () {
	$('#time').html(time);
	
	for (var index in servers) {
		for (var podcar_num in servers[index].podcars) {
			var podcar_obj = servers[index].podcars[podcar_num];
			$podcar = $('#podcar-'+podcar_obj.id);
			$podcar.find('.distance').html(podcar_obj.location.distance);
			$podcar.find('.link').html(podcar_obj.location.link);
		}
	}
}