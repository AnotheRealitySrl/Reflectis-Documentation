---
sidebar_position: 2
---

# Assets
You can interact with asserts in the environment that have a **behaviour**, such as color picker, zoom in on a dashboard, start a video on the big screen, etc. or cause a certain event with their interaction.

In **WebGL**, by clicking on a 3D object with a behavior, you can trigger it. Meanwhile in **VR**, you can point the *controller* at the object and press the *trigger button*.

## Spawn an asset
If you spawn an asset, such as an image, video or 3D object, you will have different rules for moving and changing the **size** and **rotation**.

In **WebGL**, changes to an object occur as follows:
- **Movement**, with left-click drag and drop
- **Scaling**, with left-click drag and drop + movement of mouse wheel
- **Rotation**, with right-click drag and drop.

Should the player wish to **walk** around the area, **dragging** the media, it can do so with *WASD*, while holding down the object in the center, with the *left button*.

If you want to **delete** an asset, you can *right-click* on it and then press the *trash* icon.

In **VR**, changes to an object occur with the *controller’s pointer* at the object and pressing the **trigger button**.

:::tip[Note]
If you see other avatars, they are **full body** (both VR and WebGL), whereas when you see yourself downwards (**in VR**), you will only see **virtual hands**. 
However, if you look at your avatar from a mirror you will see it **full body**.
:::

## Extra 3D object properties

With regard to a **3D object**, in addition to the basic properties, if provided by the uploaded asset, it can also be defined:
- The **colour**
- Whether to **explode** the object
- **Scale it non-proportionally** on one of the axes.

### Colour picker
The colour is chosen from a **color palette** with all gradations. 

To change it, in **WebGL** one needs to select the object with the *right button* and click on the *color button*, while in **VR** one has to hold down the *trigger* to open the context menu and select the color button.

:::tip[note]
In order to obtain a 3d asset with **colour picker**, the mesh of the object must be organised in a hierarchy where the father is the container (without mesh) and the **first child** will be the part of the mesh that will be coloured.  
:::

### Explosion
**Exploding an object** means breaking it down into several parts, if the **3D model** provides for this.

:::tip[note]
In order to obtain an **explodable 3D asset**, the mesh of the object must be organised in a **hierarchy** where the parent is the container (without mesh) and the children are the parts of the mesh into which we want it to split during the explosion.
All these sub-meshes **must be placed** at the same level in the hierarchy.
:::

To apply this property, in **WebGL** the user has to select the object with the *right mouse button* and click on the *explosion* icon.
A **slider** will appear below the object to gradually **decompose** the object and a **drop-down box** to select whether the explosion is to start **radially**, on the **X, Y** or **Z axis**.

Similarly, in **VR** the property can be activated by holding down the *trigger* on the object and clicking the *explosion* icon from the contextual menu.

### Non-proportional scaling
Finally, **non-proportional scaling** allows the 3D model to be stretched on one of the three axes.

To adjust this property, in **WebGL** the user needs to select the object with the *right button* and select the *resize* icon. 
Handles will appear on **each face** of the object, and by holding down on one of these with the *left button*, one can stretch or shrink the relative face.

Similarly in **VR**, the user has to hold the trigger on the object to open the contextual menu and select the resize icon.