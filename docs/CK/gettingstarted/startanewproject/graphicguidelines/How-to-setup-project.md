---
sidebar_position: 3
---

# How to setup your project
In this section you will find information about **AnotheReality guidelines**, such as:

- How to organize **folders** and **assets** inside the project
- How to name files following the **naming convention**.

## Files hierarchy
For each asset is required a folder which contains:

- The **.FBX/.OBJ model**
- Its **textures** and **maps**
- Its **materials** 

The folder must be named with the **asset name** (e.g., If there is an asset with a chair and a table that share the same maps, you will create a parent folder named “ChairTable” and it has to contain the .FBX/.OBJ with both objects, the maps and the materials). 

The files has to follow **AnotheReality naming convention**.

## Naming convention
Here are the naming convention guidelines that have to be followed:

- The **.FBX/.OBJ** models must be named following the [Pascal case](https://www.theserverside.com/definition/Pascal-case) convention (e.g., ChairTable) 
- The **texture** files must be named with this rule: a prefix “T_” + “AssetName_” + “MapsTypes” (e.g., T_ChairTable_ColorSmoothness)
- The **materials** must be named with this rule: a prefix “M_” + “AssetName” (e.g., M_ChairTable)