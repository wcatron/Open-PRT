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
- Check for available PodCars, or those which will become available within a certain threshold, near the request.location from the server.operationalSet of podcars. Keep broadening scope until a match is found.

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

Rider applications periodically alert the nearest server of their location to allow PodCars to preemptively deploy to densely populated areas.

## Navigation Protocols Between PodCars and Nodes

The PodCar informs the node of it's current position (link, distance, speed) and the time it would like to enter the node. If the time slot is available the node schedules it and confirms the link, time, and speed with the PodCar. If the time conflicts with other scheduled events or can be optimized the Node will schedule and propose a new time and speed. This proposal can also be used after the initial confirmation to optimize within a certain time threshold to ensure confirmations can be recieved and confirmed.

**Proposition**

```
PodCar -> Node
{
	"confirmed":false,
	"link":"A-D",
	"distance":15,
	"speed":22,
	"request":{
		"node":"D",
		"time":223,
		"speed":25
	}
}
```

**Success**, no scheduling conflicts.

```
Node -> PodCar
{
	"scheduled":true,
	"time":223,
	"speed":25
}
```

**Problem**, scheduling conflict.

```
Node -> PodCar
{
	"scheduled":true,
	"time":244,
	"speed":20
}
```

**Optimize**, high traffic from another link has no openings. Speed up or slow down to find a gap.

```
Node -> PodCar
{
	"scheduled":false,
	"options":[
		{
			"time":200,
			"speed":30
		},
		{
			"time":270,
			"speed":15
		}
	]
}
```

**Confirmation**

```
PodCar -> Node
{
	"confirmed":true,
	"node":"D",
	"time":270,
	"speed":15
}

```

Other communications include confirmations when necessary and cancelations.
