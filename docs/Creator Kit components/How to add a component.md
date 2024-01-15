---
sidebar_position: 1
---

# How to add a component

After installing the **addressable system** in your project and receiving the remote data correctly, you will find a package called "**Reflectis-SDK-CreatorKit**" in your project's asset folder.

![CKComponent](/img/sdkcomponent_1.png) 

The "**Reflectis-SDK-CreatorKit**" package is composed of various asset prefabs with **built-in** logic, ready to be taken and dragged into your scene, for immediate use. 

It also includes **individual scripts**, each representing a different behavior that can be associated with a **GameObject of your choice**. 
To ensure the proper functioning of individual scripts, they must be accompanied by the **correct components** inside the object’s Inspector.

**Components** are the functional elements of every GameObject. These components contain properties that you can edit to define the **behavior** of a GameObject.

![CKComponent](/img/sdkcomponent_2.png) 

## Assign a behavior to an object
The steps to attach a behavior to an object are as follows:

1. **Drag an existing asset** or right click on the hierarchy of Unity to **create** a new GameObject

	![CKComponent](/img/sdkcomponent_3.png) 

2. Through the inspector, add a **Box Collider** to the GameObject you want to interact with, with the "**Is Trigger**" checkbox selected to enable interaction with the user

	![CKComponent](/img/sdkcomponent_4.png) 

3. **Drag and drop** the desired behavior script from the Reflectis SDK folder: *Packages → Reflectis-SDK-CreatorKit → Runtime → Scripts*, onto the GameObject's inspector		. 
Alternatively, you can select "**Add component**" in the inspector and type the **name of the script** you want to associate

	:::danger[Warning]		
	Please note that it's not possible to insert **two SDK scripts** into the same object, with the exception of "**Toggle**" and "**Broadcast event**", which can coexist in the same object along with another script.
	
	Distributing the scripts between parent and children to obtain more behaviors for the same object is **allowed**, but requires **testing and a good handling** of the different components.
	
	:::

	![CKComponent](/img/sdkcomponent_6.png) 

4. **Edit** the public parameters of the script according to your preferences:

	![CKComponent](/img/sdkcomponent_7.png) 

5. Add the **final components** needed to initiate the desired behavior of the object (empty objects, colliders, audio sources, or others depending on the chosen script).
