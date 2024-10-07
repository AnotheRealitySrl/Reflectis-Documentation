---
sidebar_position: 6 
---

# Publish the experience

When addressables have been compiled, they need to be published. The creator must use the **back office portal** to send specific data to the main server and allow the world to be selectable to be visited in an event. 
:::tip[Note] 
	Remember that the name of the scene addressable will give the name to the **final uploaded environment**.
:::

## Upload via external client

To upload an environment, it's necessary to connect to **Azure Storage Explorer** and to follow these steps:
- Download **Azure Storage Explorer** [here](https://azure.microsoft.com/en-us/products/storage/storage-explorer).
Credentials have been shared through email and will expire at the end of **Reflectis license** lifetime.

- Follow the **instructions** defined in the images below:

	![PublishWorld](/img/publishworld_1.png)

	![PublishWorld](/img/publishworld_2.png)

	![PublishWorld](/img/publishworld_3.png)

	![PublishWorld](/img/publishworld_4.png)

	![PublishWorld](/img/publishworld_5.png)

	![PublishWorld](/img/publishworld_6.png)

- Drag your **.zip file** here:

	![PublishWorld](/img/publishworld_7.png)

Now the .zip file will be **selectable** from the backoffice’s environments section as described below.

:::danger[Warning] 	
.zip files with the same name will be **overwritten**, it’s recommended to name each .zip commit with a different name to prevent data loss and have a better way to rollback content.
:::

## Import environment in backoffice

- Open the **backoffice** page, go to **Environment** section and click on "**Import environment**".

	(*Testing back office*: https://reflectisCOMPANYNAME-bo-sandbox.anothereality.io/)

	:::danger[Warning]
	"**COMPANYNAME**" in the link must be changed to your company/team name.
	:::

	![PublishWorld](/img/publishworld_8.png)

- A side menu will appear. Here, you will be prompted to select the environment you wish to import.

- Once you have selected the desired environment, proceed by confirming your selection using the confirmation button.

	![PublishWorld](/img/publishworld_9.png)

- After confirming the import, the webpage will provide visual feedback to indicate whether the action was successful or not.

Once published, it's time to [test the new environment](Test-the-world)!