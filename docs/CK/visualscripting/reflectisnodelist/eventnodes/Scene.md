---
sidebar_position: 4
---

# Scene

These nods allow you to connect and proc flows from specific moments of the scene loading process.

## *Load*

This node will trigger when the scene **has finished loading**, but **before** scene setup is completed and placeholder initialization has started.
The **execution** of all the flows started from this node will be awaited before proceeding with the scene setup.

![Nodes](/img/sceneload.png)

## *Setup*

This node will trigger during the **scene setup**, after all the placeholders have been mapped. 
The **execution** of all the flows started from this node will be awaited before proceeding with the loading panel fadeout to the scene.

![Nodes](/img/scenesetup.png)

## *Setup Completed*

This node will trigger when the **scene setup is completed** and the loading panel fadeout to the scene has been completed.

![Nodes](/img/setupcompleted.png)

:::danger[Warning]
Use these nodes insted of the Unity's "On Start" node if you need to instantiate objects from the environment at the start of the event. Not using these nodes will have unwanted results, like objects spawned in the wrong event.
:::