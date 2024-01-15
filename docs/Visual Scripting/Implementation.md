---
sidebar_position: 2
---

# Implementation

To use "**Visual scripting**" package you have to use the graph editor:

- Click "**Edit Graph**" on the "**Script Machine**" component to open the **Graph editor** and start editing the nodes on the graph to obtain the desired behavior

	![VisualScripting](/img/visualscripting_3.png)

- When embedded to the object and placed on the scene, the visual scripted behavior will start as "**Not Networked**" 

- To be able to **network** the behavior of the object to all the users, the ```Visual Scripting Network Event Placeholder``` is needed.
Without it the interactions made with the graph editor will be visible only to the client and not the rest of the server.

	![VisualScripting](/img/visualscripting_4.png)

When the graph and the logic is ready, the object and the scene can be built as **addressable** and sent to become a world inside the application by using the **back office**’s world upload portal.

## Networking a behavior

The Node "**Convert Action**" is essential for being able **to network a behavior**. This node doesn’t exist from the beginning and needs to be inserted into the Unity visual scripting Library, before becoming usable.

Here’s how:
- Add the ```VisualScriptingNetworkEventPlaceholder``` script as an available node
- Go to: *Edit → Project Setting → Visual Scripting → Node Library*

	![VisualScripting](/img/visualscripting_5.png)

- Click "**+**” and add "**Reflectis.SDK.CreatorKit**"

	![VisualScripting](/img/visualscripting_6.png)

- Press "**Regenerate Nodes**".

After doing this the ```VisualScriptingNetworkEventPlaceholder``` script needs to become an available node:

- Go to *Edit → Project Setting → Visual Scripting → Type Options*

	![VisualScripting](/img/visualscripting_5.png)

- Click "**+**" and add ```VisualScriptingNetworkEventPlaceholder``` script to the list 

	![VisualScripting](/img/visualscripting_7.png)

- Press **Regenerate Nodes** again.

From this point on it’s possible to call the method "**Action Invoke**" as a usable node on the Graph Editor.

![VisualScripting](/img/visualscripting_8.png)

All the events referenced in the Event Name string space will be **networked**.

:::danger[Warning]
The method "**Action Invoke**" of referenced events must have **0 arguments**, or it will result in a compiling error.
:::

From this point forward the custom event can be **customized freely** to obtain a special behavior not present in the Creator Kit.
