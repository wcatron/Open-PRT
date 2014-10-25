Objects
==============

The objects interacting with the protocols.

## Rider

#### Goals

The rider's goal is to move from one location to another as quickly as possible. They request rides from their base server. They keep a list of their nearest servers and select one as their base server. They notify servers of thier reassignment.

#### Data

- Location
- Rides
- Requests
- BaseServer
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
- ServiceCenters
- Zone

## Node

Manages the PodCars coming into the node through the connecting links.

#### Goals

The Node's goal is to direct traffic much like a traffic light although in addition it would direct the PodCar to the "best" route based on it's local knowledge and other optimisation efforts. Not all nodes are the same and their are not physical devices or servers. One physical server could handle thousands of simple intersections for loading stations while another could handle one busy interection.

#### Data

- TimeTables
- ConnectedNodes
- Requests
- KnownServers
- ServiceCenters
- Zone

## PodCar

#### Goals

The PodCar's goal is to recieve assignments from it's base server and complete them. Picking riders up and taking them to their destination. They notify their base server of obstructions and maintainance needs. They keep a list of their nearest servers and select one as their base server. They notify servers of thier reassignment.

#### Data

- Location
- BaseServer
- KnownServers
- Owner

## PodCar Scanners

#### Goals

The scanner's goal is to inspect PodCars for exposives, toxins, and general waste and clear them without disrupting their assignments. The scanners direct approaching podcars to be scanned, refusal is flagged. If a scan displays an issue the PodCar is given a new assignment to either quarantine or follow-up. Refusal to do either is flagged. Follow ups would use additionally more granular scanning.

#### Data

- Location
- Approaching PodCars
- ServersInZone

## PodCar Service Centers

#### Goals

The service center's goal is to maintain PodCars that are assigned to go to them. They diagnose the problem and verify them for road safety. Example of vitals that must be maintained: oil, tire pressure, tire wear, battery charge, and cleanliness.

#### Data

- Scheduled PodCar Visists
- ServersInZone
- Capacity
