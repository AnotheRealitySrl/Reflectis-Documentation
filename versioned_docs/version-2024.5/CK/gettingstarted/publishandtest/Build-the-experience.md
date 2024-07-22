---
sidebar_position: 5 
---

# Build the experience
When the scene is completed it needs to build the addressables.
:::danger[Warning] 
	Remember to first correctly **configure addressables** [here](../startanewproject/Addressable-setup).
:::

You have to click on "**Reflectis**" on the top bar and then click on "**Configure and build Addressables**".

![BuildWorld](/img/buildworld_1_2.png)

Then, click on "**Build Addressables**" in this panel:

![BuildWorld](/img/buildworld_2.png)

This configurator is useful, because it allows you to **warn** (via red crosses) of any errors, such as incorrect addressables names, missing build path or load path links, unreferenced scenes, etc.

:::danger[Warning] 
	In case there are any errors, you can click on "**Fix**" and the configurator will automatically fix them.
:::

In addition, you may find **warnings**, such as these in the panel below: 

![BuildWorld](/img/buildworld_3.png)

In this case you will have to **follow the instructions** and fix the warnings directly by clicking on "**Open**".


When all the checkmarks are green, you will be able to click on "**Build addressables**" to complete the build, and then you can move on to [publishing](Publish-the-world).