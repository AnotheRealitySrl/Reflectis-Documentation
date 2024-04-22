---
sidebar_position: 1
---

# Unity setup

First of all, you have to install **Unity** (version 2022.3.1) to be able to test in your sandbox space. 

If you don't have the **Unity Hub** installed yet, you need to install it first (download [here](https://unity.com/download)). 

Once you have Unity Hub, you can install **Unity 2022.3.1**:
- Go to [this page](https://unity.com/releases/editor/archive) (tab "**Unity 2022.X**")
- Click the "**Unity Hub**" button next to 2022.3.1
- You have to select **these modules** to install:
	- **Android Build Support** - to compile a build for VR headset
	- **WebGL Build Support** - to compile a build for browser
	- **Windows Build Support** - recommended, especially in the case of support from AnotheReality.
	
	
	![Add DOTween folder](/img/unitysetup_3.png)
	
:::tip[Note]
If you install the modules **later**, you need to **build the addressables again** for generating the relevant folders.
:::


## Configuration
1. Open Unity Hub and create a **new Unity project** with the **3D (URP) Template**

	:::danger[Warning]
	It's mandatory that the project has the **URP pipeline** and **not HDRP**, otherwise the project can't be compiled correctly and display the graphic assets.
	:::

2. On the open Unity project, go to: _Edit → Project Settings → Player → Settings for Windows → Other Settings → Configuration → API compatibility level → .NET Framework_
3. Download **DOTween** (http://dotween.demigiant.com/download.php)
4. Add the **unzipped** DOTween folder into the "**Assets**" folder of Unity project

	![Add DOTween folder](/img/unitysetup_1.png)

5. Click on "**Open DOTween Utility Panel**" from the panel that appears automatically or follow the path: _Tools → Demigiant → DOTween Utility Panel_
6. Click on "**Setup DOTween**"
7. Click on "**Apply**" once it has finished installing the packages automatically

	![Apply](/img/unitysetup_2.png)

8. Click on "**Create ASMDF**" on the DOTween Utility Panel and confirm the creation of the DOTween Modules
9. **Import the packages** from these links into the scene using the package manager, selecting the "**Add package from git URL**" option:
					
	- https://github.com/AnotheRealitySrl/Reflectis-SDK.git#v6.0.0
	- https://github.com/AnotheRealitySrl/Reflectis-SDK-CreatorKit.git#v4.0.0.
	
:::danger[Warning]								
	The Reflectis 2024.4 works **only** with packages v6.0.0 (SDK) and v4.0.0 (SDK-CreatorKit).
:::

Now the project has all the necessary packages to start using the **Reflectis SDK**. 
**Import 3D elements** into the scene and **give them new logic**!