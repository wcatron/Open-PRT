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

The scanner's goal is to inspect PodCars for exposives, toxins, and general waste and clear them without disrupting their assignments. The scanners direct approaching podcars to be scanned, refusal is flagged. If a scan displays an issue the PodCar is given a new assignment to either quarentine or follow-up. Refusal to do either is flagged. Follow ups would use additinal more granular scanning.

#### Data

- Location
- Approaching PodCars
- ServersInZone

## PodCar Service Centers

#### Goals

The service center's goal is to maintain PodCars that are assigned to go to them. They diagnose the problem and verify them for road safty.

#### Data

- Scheduled PodCar Visists
- ServersInZone
- Capacity