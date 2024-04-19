---
sidebar_position: 1
---

# Synced Flow Nodes

## Ownership Nodes

Regarding **ownership**, there are **3 function nodes** which can be called in the node graph:

- "**Is Owned Locally**" - makes a check that the user who is requesting the change on the object, has ownership on it. If so, it executes the next instruction, otherwise it calls the "**Try Get Ownership**" function.

	![Ownership](/img/isownedlocally.png)

- "**Try Get Ownership**" - is used to to gain ownership (based on the parameter configured in the editor). It doesn’t need to have an **output node**.

	![Ownership](/img/trygetownership.png)

- "**Release Ownership**" - is used to release ownership of the object (except if the user is **already the owner** of the object, in which case nothing will happen). 
It is not usually used, because instead the ownership check is done and then the request is made if it is not.

	![Ownership](/img/releaseownership.png)

