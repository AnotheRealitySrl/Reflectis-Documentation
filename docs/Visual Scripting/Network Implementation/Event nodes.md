---
sidebar_position: 3
---

# Event nodes

In order for the synchronized variables to actually be displayed by other users, it’s necessary to use events in the "**Synced Object**" script.

Initially, you have to:
- Click on "**Edit Graph**" in the "**Script Machine**" and use the right mouse button to open a **dropdown menu**
- Click on "**Events**" and then on the "**Reflectis**" folder.

	![VisualScripting](/img/networkvs_4.png)![VisualScripting](/img/networkvs_5.png)

Inside the folder there will be two other folders:
- "**Ownership**" - which is used to assign ownership to the user who wants to edit a feature of an object
- "**Synced object**" - to edit a synchronized variable, which is linked to the object in question, and send the update to the server.

![VisualScripting](/img/networkvs_6.png)


## How to manage ownership

Regarding **ownership**, there are **3 function nodes** and **3 event nodes**, which can be called in the node graph.

![VisualScripting](/img/networkvs_7.png)

The function nodes are as follows:

- "**If Owned Locally**" - makes a check that the user who is requesting the change on the object, has ownership on it. If so, it executes the next instruction, otherwise it calls the "**Try Get Ownership**" function

	![VisualScripting](/img/networkvs_8.png)

- "**Try Get Ownership**" - is used to to gain ownership (based on the parameter configured in the editor). It doesn’t need to have an **output node**

	![VisualScripting](/img/networkvs_9.png)

- "**Release Ownership**" - is used to release ownership of the object (except if the user is **already the owner** of the object, in which case nothing will happen). 
It’s not usually used, because instead the ownership check is done and then the request is made if it’s not.

	![VisualScripting](/img/networkvs_10.png)


The event nodes are as follows:

- "**On Owner Changed**" - is called when the user becomes the **owner** of the object. 
In the example below, the event is only called when the **ownership request is successful**, in which case it can execute the "**Set Local Position**" instruction on the object

	![VisualScripting](/img/networkvs_11.png)

- "**On Owner Request Failed**" - is called when the **ownership request fails**, due to external problems, such as at the server or roles

	![VisualScripting](/img/networkvs_12.png)

- "**On Owner Lost**", is called when the user **loses ownership**, because it has been assigned to another user.

	![VisualScripting](/img/networkvs_13.png)


## How to manage synced variables

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

## How to manage collisions in VR

In order to **check collisions** when the user is with the **VR headset**, a check must be made on the "**Player**" tag and only start the collision when it finds the Game object with this tag.

This is an **example** of how nodes should be set up:

![VisualScripting](/img/networkvs_17.png)

