Nodes
==============

The objects interacting with the protocols.

## Riders

Those riding the PRT whose goal is to move from one location to another as quicly as possible.

Information they contain.

- Location
- Rides
- Requests
- KnownServers

## Server

The manager of all tasks associated with the PRT.

- OperationalSet 
	- Location
	- FreeAt
	- Vitals
	Complete list of PodCars reporting to this server. PodCars have the authority to switch servers as long as they complete their assigned tasks. This includes PodCars charging.
- Requests
- KnownServers

## PodCar

- Location

- BaseServer
- KnownServers