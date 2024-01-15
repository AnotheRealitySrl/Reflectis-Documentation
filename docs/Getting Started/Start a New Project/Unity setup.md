---
sidebar_position: 1
---

# Unity setup
1. Create a **new Unity project** with the **3D (URP) Template**
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
					
	- https://github.com/AnotheRealitySrl/Reflectis-SDK.git#develop
	- https://github.com/AnotheRealitySrl/Reflectis-SDK-CreatorKit.git#develop.

Now the project has all the necessary packages to start using the **Reflectis SDK**. 
**Import 3D elements** into the scene and **give them new logic**!