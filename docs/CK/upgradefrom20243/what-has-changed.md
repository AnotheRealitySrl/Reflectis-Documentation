---
sidebar_position: 1
---

# What has changed

From the 2024.3 Creator Kit version, the changes in this version are as follows:

[AGGIUNGERE I CAMBIAMENTI, COME NEL FORMATO SOTTOSTANTE]

- **Adding addressables Configurator**, the addressables structure setup becomes much easier and is divided by steps.
In this version it is possible to **build addressables** automatically, with the click of a button.
In addition, **error checking** has been added for each step and the possibility to fix them easily.
	For **more information**, check out the section [Build the experience](../gettingstarted/publishandtest/Build-the-experience).

- **Adding Interactable placeholder**, a **new component** was included in the list of components, relating to **interactions** to be associated with an object in the scene.
This placeholder has another component, called "**Script Machine**", to set actions through the node graph.
	For **more information**, check out the section [Interactable placeholder](../creatorkitcomponents/listofcomponents/Interactable).

- **Adding new Visual Scripting nodes**, these nodes help creators retrieve specific information and contain different logics of the scriptable actions of the previous Creator Kit version.
This is the list of the new nodes:
	- **Get Nodes**, contain the information of the object referenced in the node’s name.
	- **Expose Nodes**,  make it possible to reference specific information of the object referenced in the node’s name
	- **Flow Nodes**, these nodes allow to trigger logic flows already contained in the Reflectis structure. (*Scriptable actions logic 2024.2*)
	- **Event Nodes**, list of Nodes that allow associating to a specific interaction the triggering of other actions or nodes. 
	- **VR Mapping Node**, this single node allows to reference any button mapped in both VR controllers to work as triggers for the events associated through Visual Scripting. 
	Needs the "**DefaultXRActionEnabler**" prefab present in the Unity scene to work.
	
	For **more information**, check out the section [Reflectis Nodes](../../category/reflectis-nodes).

