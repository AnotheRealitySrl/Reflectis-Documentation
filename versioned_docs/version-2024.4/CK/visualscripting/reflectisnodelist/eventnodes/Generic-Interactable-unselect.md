---
sidebar_position: 3
---

# Generic Interactable Unselect

This node must be present in a **different script machine** than the one referenced inside the variable "Interaction Script Machine" in the **Interactable placeholder** of the object.

It must be present in a script machine attached to an **empty GameObject**.

Reference the script machine containing this node in the "**Unselect on Destroy Script Machine**" variable, which appears after selecting the "**Need Unselect on destroy script machine**" checkbox.

![Nodes](/img/event-nodes10.png)

![Nodes](/img/event-nodes11.png)

## Generic Interactable *Unselect onDestroy* Node

This node will trigger if the object generic interactable is destroyed while being selected. 

Use it to describe actions that you want to make sure that **will be over** once the object is **destroyed**, even while it is selected.

![Nodes](/img/event-nodes12.png)
