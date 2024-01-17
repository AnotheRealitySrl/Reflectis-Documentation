---
sidebar_position: 2
---

# Teleportation

```TeleportationPlaceholder```  + ```TeleportationDestinationPlaceholder``` 

*TeleportationPlaceholder* is a script component to attach to an object to make it a **teleporter**.

![ComponentList](/img/componentlist_4.png) 

The script needs to reference an *empty* object to be used as "**Destination**" and a collider to use as trigger. 

The empty object itself needs a specific script called "**TeleportationDestination**". This script also requires a **name** for the teleporter since it will appear and be clickable on the main map as a **position PIN**.
	
![ComponentList](/img/componentlist_5.png) 

:::tip[Note]
In VR, a **custom reticle** changes the shape that appears when the teleporter is hit with the teleport raycast of the player.
:::
