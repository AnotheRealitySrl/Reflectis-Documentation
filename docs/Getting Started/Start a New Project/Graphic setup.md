---
sidebar_position: 4
---

# Graphic setup
To have a graphically optimized scene, it is **strongly recommended** to configure the environment in this way:

- Ideally, **avoid** exceeding **200 draw calls** and **300K tris** per scene 
	:::tip[Note] 

	These are approximate values, each case needs precise evaluation and testing.

	:::
- For single and small objects, try where possible to **avoid textures** with resolution higher than **1024X1024 px**
- In case of **groups of objects** always framed together, try to merge the textures into an atlas with a maximum resolution of **4096X4096 px**
- For large areas, use **textures in tiling**
- **Avoid realtime lights** in the scene and, in case, **try not to go beyond one directional light**
- For baking the lights, use "**Subtractive**" and "**Non-Directional**" modes and try to package the lightmaps into **one or maximum two** images of **4096X4096 px** resolution.

	Check **this information** in: *Window → Rendering → Lighting panel*

	![SceneSetup](/img/scenesetup_3.png)

- When baking and with shader "**PBR Packed**"/"**PBR Packed Add**" make sure the "**double sided global illumination**" flag on the material is **checked** and the ""shadows** on the object are **two sided**

	![SceneSetup](/img/scenesetup_4.png)

- Use **light probes** and **reflection probes**. In the latter case, if possible, **don’t go beyond** the size of **1024X1024 px**
- Use "**static batching**" as much as possible, where there is duplication of objects/prefabs, but still **avoid** having **too many objects** in the scene, by joining the pieces even from **external program** and trying to use a logic related to **how the pieces are framed** (e.g. if you were to create a square plan fence, avoid having all the laths separate and in “static batching” but rather join all the sides)
- Should other shaders be needed to **handle transparencies** (e.g., transparent shaders with cut off for possible vegetation) always evaluate on a case-by-case basis by testing in build to **avoid significant performance drops** on Meta Quest VR
- Should there be a need to use **emissive objects**, separate the affected part and assign a material with "**simple lit**" shader. Before baking make sure the material is set with "**Both**" under "**Render Face**" parameter
- Try to avoid patterns with **under materials**
- In the **post process volume** use only **color corrections** and **curves**
- Don’t use **external plugins** that implement **runtime scripts** (e.g., plugins/scripts to animate or generate objects procedurally)
- Don’t use **URP's decal system**
- In case you should use an "**Amplify Shader Editor**" set the shader model to 2.5 and uncheck "**Force template min. shader model**" from *Edit → Preferences → Amplify Shader Editor*.
	
	![SceneSetup](/img/scenesetup_5.png) ![SceneSetup](/img/scenesetup_6.png) 

## Shader
Except in specific cases for VFX and other exceptional situations, materials in the scene should use **two custom shaders**:

- **PBR Packed**: allows to collect only in **two images** all the information needed to be able to use **PBR materials** with the exception of the emissive map.
	*Setup:*
	- Export maps from "**Substance Painter**" using the exporter provided
	- Import **normal maps** with the following settings:
					
			![SceneSetup](/img/scenesetup_7.png) 

	- **Assign maps** to material and **set values** as needed: 
	
							
	        ![SceneSetup](/img/scenesetup_8.png) 

- **PBR Packed Add**: this shader is to be used to get **transparent materials**. 

	:::tip[Note] 

	The shader works in **additive**, so the closer the “**Color**” parameter is to **black**, the **more transparent** the material will be. If there should be sorting problems between materials, make sure the render queue is set to **3001**.
	:::
	
### Exporter substance painter and map packing

To install the map exporter for "**Substance Painter**", copy the file "**PBR_Packed.spexp**" into the "**Documents\Adobe\Adobe Substance 3D Painter\assets\export-presets**" folder.

To use maps taken **from other libraries** or to **create new maps**, use in "**Substance Designer**" the file "**PBR_Packed_Exporter.sbs**" and follow the instructions in the comments to the nodes.

[Exporter download link](https://drive.google.com/drive/folders/1pARQ-Til3EdZ2WHmuXyeH-ji5SzO6i-_?usp=drive_link).