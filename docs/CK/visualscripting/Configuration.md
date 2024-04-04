---
sidebar_position: 0
---

# Configuration

Use The Reflectis Creator Kit to bring your ideas to life, with the help of **Visual Scripting**!

Use the Reflectis **nodes library** to have access to many different information and use them to create a **custom behaviour** for every element of each environment. 

If you want to learn more about how visual scripting works and is used, here are some **Unity tutorials** to learn it:

- [How to use Unity’s visual scripting](https://docs.unity3d.com/Packages/com.unity.visualscripting@1.7/manual/index.html)

- [Tutorial example of Unity’s Visual scripting implementation](https://learn.unity.com/project/visual-scripting-application-clive-the-cat-s-visual-crypting)

## How to install it

To implement **Visual Scripting** in a Reflectis project you need to use the Unity "**Visual Scripting**" package, available from the package manager. 
When installed, it allows you to use the **Script Machine** to open the graph editor and **start scripting**.

These are the steps to proceed:
- Install the "**Visual scripting**" package from the Package Manager

	![VisualScripting](/img/visualscripting_1.png)

- Add component "**Script machine**" to an object (only **after downloading** the "**Visual Scripting**" package!)

	![VisualScripting](/img/visualscripting_2.png)

- The “Source” of the graph can be of two types:
	- "**Embed**" - that allows for graph scripting in the **current object only** (easier to manage)
	- "**Graph**" - that makes it possible to **share graph files** (useful to be saved beforehand or to use them on another object). 
	In this case, you will have to **save the new graph** in a folder among the project assets.

Moreover, you can easily convert an embed graph to a shared one by clicking on the "**Convert**" button.

## How to setup Visual Scripting Nodes

Before using the nodes you have to go to "**Reflectis**" and then click on "**Setup Visual Scripting Nodes**”.

This will allow the Unity project to include the **nodes** in the graphs as well as to detect **VR inputs** from the VR controller mapping.

![VisualScripting](/img/visualscripting_5.png)
