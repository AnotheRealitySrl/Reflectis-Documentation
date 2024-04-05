---
sidebar_position: 2
---

# Expose Nodes

These nodes will make it possible to reference specific information of different structures of the Reflectis platform.

## Expose *CMUser* Node

![Nodes](/img/expose-nodes1.png)

The output variables and their functionality are:
- **ID**, user identification number
- **Name**, username
- **E Mail**, registration mail associated with the account
- **Roles**, a list that contains the names of the roles attached to the user.

## Expose *CMEvent* Node

![Nodes](/img/expose-nodes2.png)

The output variables and their functionality are:
- **ID**, event identification number
- **Title**, the name of the event
- **Description**, event description
- **Start Date Time**, the time the event becomes available
- **End Date Time**, the time the event deactivates
- **Category ID**, identification number for the category associated with the event
- **Category Name**, name of the category associated with the event
- **Subcategory ID**, identification number for the subcategory associated with the event
- **Subcategory Name**, name of the subcategory associated with the event
- **Is Event Public**, checks if the event is public or not
- **Is Event Static**, checks if the event is static or not.

## Expose *CMEnvironment* Node

![Nodes](/img/expose-nodes3.png)

The output variables and their functionality are:
- **ID**, environment identification number
- **Name**, environment label
- **Description**, environment description
- **Addressable Key**, addressable name of the environment
- **Catalog**, name of the catalog that contains the environment.

## Expose *Manipulable* Node

![Nodes](/img/expose-nodes5.png)

The output variables and their functionality are:
- **Game Object Reference**, reference to the GameObject owning the generic interact from the input
- **Interaction colliders**, list of the colliders referenced in the interactable placeholder
- **Is Manipulated**, check if the object is being manipulated
- **Manipulation Input**, reference to the method used to manipulate the object (VR hands, VR lasers, mouse).

## Expose *Generic Interactable* Node

![Nodes](/img/expose-nodes4.png)

The output variables and their functionality are:
- **Game Object Reference**, reference to the GameObject owning the generic interact from the input
- **Interaction states**, reference in which state is the object between idle, selected, interacting and hovered
- **Interaction colliders**, list of the colliders referenced in the interactable placeholder.