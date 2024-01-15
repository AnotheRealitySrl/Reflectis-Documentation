---
sidebar_position: 2
---

# Component properties

Scripts attached as components on GameObjects, have **common properties**, which apply to all.

![ComponentProp](/img/componentprop_1.png) 

- **Is Networked**

	This parameter determines whether an object is **connected to the server**, meaning its data and interactions are recorded online and visible to other players. 

	It's fundamental to select this option when working in a **multiplayer environment**. No need to select this option if the scene is intended for single-player use.

- **Initialization ID**

	This parameter **identifies an object** within the list of all GameObjects containing Reflectis SDK behaviors in the scene	. 
It's essential that every object containing an SDK component has a **unique identification number**; otherwise, it could compromise the functionality of created objects. 

	When adding a new object to the environment with an SDK component, you **must update** the list with the new identification numbers: **click on the three dots** above the script component of the object's behavior and select "**Set All Placeholder New ID**"

	![ComponentProp](/img/componentprop_2.png) 

- **Is Interactable**

	This parameter determines whether an object is **interactive or not**. It specifies whether the associated behavior script **will be triggered** by the object itself (in which case the parameter **is checked**) or if it needs to be called by another object containing the "**Broadcast Event**" script, a component that is used to invoke the behavior of other objects.
