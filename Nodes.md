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

#### Goals

The server's goal is to assign tasks to their fleet. Maintain the health of thier fleet through notification of ubstructions to assigning them a service shop to have work done. Proccess requests for rides within it's operational zone.

#### Data

- Fleet 
	- Location
	- FreeAt
	- Vitals
	Complete list of PodCars reporting to this server. PodCars have the authority to switch servers as long as they complete their assigned tasks. This list includes PodCars charging.
- Requests
- KnownServers
- Zone

## PodCar

#### Goals

The PodCar's goal is to recieve assignments from it's base server and complete them. Picking riders up and taking them to their destination. They notify their base server of obstructions and maintainance needs. They keep a list of their nearest servers and select one as their base server. They notify servers of thier reassignment.

#### Data

- Location
- BaseServer
- KnownServers
- Owner
