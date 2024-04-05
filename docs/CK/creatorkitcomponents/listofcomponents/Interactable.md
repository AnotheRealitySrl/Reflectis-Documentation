---
sidebar_position: 6
---

# Interactable

```InteractablePlaceholder``` 
			
Script component to attach to an object to make it **interactable** and associate it with a logic.

To configure the content shown in the **Interactable Placeholder**, you can manage it as follows:

![ComponentList](/img/componentlist_12.png) 

- **Interaction Colliders** is a parameter in which you have to drag objects that you want to be **interactive** and be **triggered** according to the action performed on them.
	
	:::warning[Danger]	
	It's also important to include in the list the **object itself** into which the component has been attached, otherwise it will not work
	:::

- Interaction modes parameter is a **selectionable list** based on
**Filter** parameter is a **selectionable list** based on what you want to display on the **Dashboard**:

- **Environment**, you need to pass, on the **Dashboard Name Filter** parameter, the name of the environment you want to display on it

- **Category**, you need to pass, on the **Dashboard Name Filter** parameter, the name of the category of events you want to display on it

- **Tag & None**, currently not implemented their logic.

It's important to define the **Dashboard Name Filter** parameter, to show the elements based on what you chose in the **Filter** list.
For instance, on the image below, we have passed the **Category** of events named "UnitTest".

![ComponentList](/img/componentlist_13.png)

:::tip[Note]
In the Creator Kit, you can find the **EnvironmentalDashboardPlaceholder** as an example of a basic configuration of the dashboard working logic.
:::