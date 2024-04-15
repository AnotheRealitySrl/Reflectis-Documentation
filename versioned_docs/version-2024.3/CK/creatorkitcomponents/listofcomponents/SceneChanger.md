---
sidebar_position: 1
---

# Scene changer 

```SceneChangerPlaceholder```

This is a script component to attach to an object to make it a **scene changer**. 
It needs a "**Collider**" component as a trigger to work. It must reference **Scene Addressable Name** (not the event) that needs to teleport to. 

:::danger[Warning]
The referenced environment must have associated **only** one static event or it won’t work from the back office list.
:::

![ComponentList](/img/componentlist_1.png) 

:::tip[Note]
Flag ”Enter Generic Instance” is obsolete and doesn’t have any effect on the behavior of the component.
:::