---
sidebar_position: 1
---

# Prerequisites

To use the **Reflectis Creator Kit**, you must follow several steps, starting with **creating a new project** in Unity and using **addressables** to **publish** the created world on the Reflectis platform.

## What you need

1. The first thing you need is to install **Git** on your computer, otherwise the **package manager of Unity** won't be able to read the packages from the correct Github's repositories.
Go to https://git-scm.com/ and download the latest release for the correct platform.

	:::danger[Warning]
	Git must be downloaded while Unity and Unity Hub are **closed** or the Unity system won't read the new installed application. 
	:::

2. Then, you have to install **Unity 2022.3.1**. For more details, see [Unity setup](./startanewproject/Unity-setup)

3. After configuring Unity, you need to properly set up **addressables**, a series of packages that will be used to generate a build to be published on the online platform. 
For more details, see [Addressable setup](./startanewproject/Addressable-setup)

4. The next step is to **setup the Unity scene**, adding the necessary components for operation. For more details, see [Scene setup](./startanewproject/Scene-setup)

5. Finally, [here](./startanewproject/Graphic-guidelines) are some guidelines for managing the environment **graphically**, to optimize the scene and avoid possible issues.