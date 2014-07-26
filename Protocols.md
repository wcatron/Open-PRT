Protocols
=================

Standardized protocols for any application to communicat with the PRT system.

### Request PodCar ASAP

Rider requests a podcar asap.

```
Rider -> Server
{
	"location":"A",
	"destination":"B",
	"asap":true
}

Server -> Rider
{
	"accepted":true,
	"request_id":"req1"
}
```

Server then begins processing the request. 
- Check for podcar which are available, or will become available within a certain threshold, near the request.location from the server.operationalSet of podcars. Keep broadening scope until a match is found.

```
Server -> PodCar
{
	"location":"A",
	"destination":"B",
	"user":"user1"
}
Adds to podcar's queue of assignments.

Podcar -> Server
{
	"accepted":true,
	"request_id":"req1"
}
```

```
Server -> Rider
{
	"request_id":"req1",
	"state":"confirmed",
	"eta":500,
	"id":"19A"
}
```

### PodCar Status Update

PodCar informs the server of its current status.

````
PodCar -> Server
{
	"vitals": 0.38,
	"location": "C",
	"freeAt": "11:27:30"
}
````

### Rider Anon-Status Update

Rider applications periodically alert the nearest server of thier location to allow podcars to preemtivally deploy to densly populated areas.