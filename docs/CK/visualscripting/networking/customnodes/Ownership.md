---
sidebar_position: 1
---

# Ownership

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
