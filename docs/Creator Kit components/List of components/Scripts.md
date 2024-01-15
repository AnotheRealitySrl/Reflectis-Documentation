---
sidebar_position: 1
---

# Scripts

Scripts components to drag into the inspector of scene assets and 3D objects are:

1. ```SceneChangerPlaceholder```

	Script component to attach to an object to make it a **scene changer**. 
It needs a "**Collider**" component as a trigger to work. It must reference **Scene Addressable Name** (not the event) that needs to teleport to. 

	:::danger[Warning]
	The referenced environment must have associated **only** one static event or it won’t work from the back office list.
	:::

	![ComponentList](/img/componentlist_1.png) 

	:::danger[Warning]
	Flag ”Enter Generic Instance” is obsolete and doesn’t have any effect on the behavior of the component.
	:::

2. ```MapCameraPlaceholder```
	
	Script component to attach to an *empty* object to make it a **map camera**	. 
Create an empty object and attach this script to it. A camera will become attached to the empty object and it needs to be placed **on top of the map** to achieve the planar map feeling. 

	What the camera sees is what will be presented when clicking "**Map**" on the "**Tablet**" function into the world. Move it and rotate it until it appears **flat** in the camera preview.

	![ComponentList](/img/componentlist_2.png) 

	![ComponentList](/img/componentlist_3.png) 

3. ```TeleportationPlaceholder```  + ```TeleportationDestinationPlaceholder``` 

	*TeleportationPlaceholder* is a script component to attach to an object to make it a **teleporter**.

	![ComponentList](/img/componentlist_4.png) 

	The script needs to reference an *empty* object to be used as "**Destination**" and a collider to use as trigger. 

	The empty object itself needs a specific script called "**TeleportationDestination**". This script also requires a **name** for the teleporter since it will appear and be clickable on the main map as a **position PIN**.
	
	![ComponentList](/img/componentlist_5.png) 

	:::tip[Note]
	In VR, a **custom reticle** changes the shape that appears when the teleporter is hit with the teleport raycast of the player.
	:::
	
4. ```VoiceChatGroupPlaceholder``` 
			
	Script component to attach to an object to make it a **private voice chat area**. Select a name for the **private channel** or flag it as the main voice channel of the server.
	
	:::danger[Warning]
	There can't be **two main voice channels** in a scene.
	:::

	![ComponentList](/img/componentlist_6.png) 

5. ```Media Player Controller Placeholder``` + ```Media Container Placeholder```

	Script components to attach to a **canvas** and a child to make it an available **big screen**.

	![ComponentList](/img/componentlist_7.png) 

	The preferred hierarchy starts with an **empty** object named "**BigScreen**"	. 
The empty object must have a "**Canvas**" as a child (in world space). 
The canvas must have attached the ```Media Player Controller Placeholder``` component, that manages the ability of big screens to **receive media files** from the users and **show them**.

	The component must be structured as follows:

	![ComponentList](/img/componentlist_8.png) 

	In the "**Addressable Key**" value write "**BigScreen**".

	Attach an *empty* child to the canvas and call it "**Media Player**" (it automatically becomes a rect transform). 
	Attach to this child the ```Media Container Placeholder``` and set it as follows:

	![ComponentList](/img/componentlist_9.png)

	In the "**Addressable Key**" valute it’s possible to write down 3 options:

		- ImagePlayer
		- VideoPlayer
		- PresentationPlayer

	These options will decide which **type of files** the big screen can manage.

	Finally, this layer will become the visible **big screen**, so is from this layer that it’s possible to manage the **size** and the **position** of i	t.
It’s possible to have all **3 options active** at the same time by creating a child for each option.

	![ComponentList](/img/componentlist_10.png)
