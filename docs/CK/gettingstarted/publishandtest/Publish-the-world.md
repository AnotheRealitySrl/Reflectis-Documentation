---
sidebar_position: 6 
---

# Publish the world
When addressables have been compiled, they need to be published. The creator must use the **back office portal** to send specific data to the main server and allow the world to be selectable to be visited in an event. 
:::tip[Note] 
	Remember that the name of the scene addressable will give the name to the **final uploaded environment**.
:::

The steps to upload an environment are as follows:
- Search for the following addressables folders from the "**ServerData**" folder of the project.

	![PublishWorld](/img/publishworld_1.png)

- Browsing the folders internally, after also going through the version folder, the **display of files** will look like this:

	![PublishWorld](/img/publishworld_2.png)

- Now we need to drag and drop the **thumbnail files** named like this: "**thumbnails_assets_ENVNAME**" with the extension .png (**without spaces** in the name)

	:::danger[Warning] 			
	"**ENVNAME**" must be changed to the name of the environment with that thumbnail.
	:::

	![PublishWorld](/img/publishworld_3.png)

- Zip the **three folders together** (the zipped file must be a **.ZIP** file only)

	![PublishWorld](/img/publishworld_4.png)

- Open the **back office** page, click on "**New Environment**" and upload the zipped file.

	(*Testing back office*: https://reflectisCOMPANYNAME-bo-sandbox.anothereality.io/)

	:::danger[Warning]
	"**COMPANYNAME**" in the link must be changed to your company/team name.
	:::

	![PublishWorld](/img/publishworld_5.png)

- The new environment is **ready to be used** in an event for testing.

	![PublishWorld](/img/publishworld_6.png)

- Setting an event as **public** and **static**

	![PublishWorld](/img/publishworld_7.png)

	:::tip[Note]
	Only environments that have a **static** event associated with it can be referenced to the **scene changer** teleports, that can be placed in the lobby. 
	:::

	For more info about [Scene Changer](/docs/CK/creatorkitcomponents/listofcomponents/SceneChanger), see here.

Once published, it's time to [test the new environment](Test-the-world)!