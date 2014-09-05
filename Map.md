# Map

The map for the Open PRT system is a network of nodes and links. Links go from node a node to another node have a particular distance and average speed. 

## Intersections (Nodes)

This section describes some basic philosophies for how to manage intersection in a PRT setting. Every network can bedescribed by mergent and divergent intersections. Some however are more complex than others. A link that comes into a node and branches off into two or more links is one of the most basic and least likely to cause problems. A merging node where two branches come in and one goes out is more complex requiring timing and coordination between incoming podcars.

Scheduling is requried in order to insure cars do not try to merge at the same time. There are two methods for scheduling that should be adopted in an Open-PRT model.

### Scheduler Based

The scheduler method uses precise time tables to schedule when podcars will enter and exit nodes and links. A system like this if often required for rail based approaches when there are not means to reorder incomming pods. Requests for access will have to populate from where the podcar is all the way to the distination blocking out their scheduled blocks of time to enter and leave the node or link. Each node or link will keep a current master schedule and proccess new requests for time.

Examples to come.

### Block/Wave Based

The block or wave based approach uses estimation to schedule demand for a certain merging path and alots time that podcars can enter the node and leave the node from their particular link into the node. This method works well for networks where podcars can reorder themselves such as self-driving cars on roads. The goal is to never make a podcar wait and never have a moment when podcars arn't passing through the node. This resembels your standard 4 way multilane intersection. This approach works well when you can't tell every podcar where exactly to be because there could be hundreds of cars approaching the intersection and serveral dozens going through.

## Connectors (Links)

Connectors can be any number of surfaces for PodCars to travel along. They have limitations for speed, capacity and PodCar type (freight, passenger, service). The physical surfaces could be rail, paved road, boat, plane or train.
