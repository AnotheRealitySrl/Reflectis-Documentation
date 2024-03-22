---
sidebar_position: 1
---

# Synced variables

Regarding **synced variables**, there are **2 event nodes**, which can be called in the node graph.

![VisualScripting](/img/networkvs_14.png)

The event nodes are as follows:

- "**On Synced Variable Changed**" - is called when the value of the variable, with the same name written in "**Variable Name**", **has been changed**. 
In addition, the variable will be synchronized only because of this event, otherwise the change will occur only locally.

	:::tip[Note]
	If a change to a variable is called, but the value remains the same, then this event will not be called.
	:::

	![VisualScripting](/img/networkvs_15.png)

- "**On Synced Variable Changed Init**" - is called at scene initialization, only if actual changes of the recalled variable in "**Variable Name**" have occurred. 
This node is called only if **the user isn’t the creator of the room** and enters later, and is used **to call back** any instructions executed at the time of the variable change. (e.g. starting a sound or changing a score).

	![VisualScripting](/img/networkvs_16.png)

