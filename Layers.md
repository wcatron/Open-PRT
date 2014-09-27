# Layers

There are several layers to the Open PRT structure. The names and ideas of each based on an abstration of the Internet's layered structure.

## Physical Link Layer

These are the physical components that make up the network's infastructure. Links are static connectors between nodes and can be very different from one another. Based on these differences nodes can decide which pods are capabable of using the link.

Features
- Connection Types
- Direction of Traffic Flow
- Capacity of Traffic Flow
- Load size
- Turning Degrees of Difficulty
- Max Speed

## PRT Layer

Made up of the PodCars which travel along the link layer and the nodes which direct them along the links.

### Nodes

Nodes are aware of the links around them and their features.

### PodCars

PodCars communicate with the Nodes to direct them to their destinations. They have assignments which they carry out. They inform the Nodes of their features.

Features
- Connection Types
- Turning Abilities
- Speed Abilities
- Load size
- Protocols Accepted

## Transport Layer

Are made up of the servers which know about the Nodes and PodCars in their zone. They are responsible for communicating tasks and other information to PodCars. There can be several protocols accepted such as a standard point-to-point protocol, freight may have special protocols with special instructions for loading and unloading, maintance protocols would be required to send to maintence PodCars. Because zones overlap, servers can specialize in different protocols and new protocols can be implented incrementally.

### Servers

- PodCars
- Nodes
- Zone
- Protocols Accepted

## Application Layer

APIs will be available for applications to make requests of the Transport Layer. 
