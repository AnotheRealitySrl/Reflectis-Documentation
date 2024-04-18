# Reflectis Documentation

**Reflectis Documentation** is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## How to install
1. **Clone this repo** on your favourite **Git client**
2. Install [**Node.js**](https://nodejs.org/en/download/)
3. Open **Visual Studio** (or any other IDE)
4. Open on the IDE the **folder** related to the repository of "**Reflectis-Documentation**" on your PC
5. Open the **terminal** on your IDE
6. Type this command:
```
$ npm install
```

7. And then:
```
$ npm start
```
This command starts a **local development server** and opens up a **browser window**. Most changes are reflected live without having to restart the server.

## How to use
When you start using the project, on **Visual Studio** (or other IDE) you will find **this hierarchy** (*will be continuously updated*):

![image](https://github.com/AnotheRealitySrl/Reflectis-Documentation/assets/11877743/9cd3ea9c-3bbf-476f-bc6c-d256a664e0d1)

The folders that affect the changes you need to do are `docs` and `static/img`, into which you upload images to be inserted into documents.

The files to be edited are those with **`.md` extension** and are written in the markup language "**Markdown**". 

For more information on the rules of writing with this language, see [this guide](https://docusaurus.io/docs/markdown-features#standard-features).

To immediately **see the changes made**, you can simply save the file and it will automatically **update the browser window**.

### Add a section
If you want to add a **section** in an existing guide (**the dropdowns in the sidebar of Reflectis site**), you must add a folder in the subfolder that identifies the reference guide (CK, Backoffice, etc.).

Each **new folder** must always contain at least one `.md file` and the `category.json` file, changing the parameters below to your own specifications:

![image](https://github.com/AnotheRealitySrl/Reflectis-Documentation/assets/11877743/f20946a9-d78b-4bde-a740-9fc222162e15)

- **"label"**: you have to enter the section name
- **"position"**: you have to enter the number corresponding to the sort in the side hierarchy
- **"type"**: must always remain the same, it's used to identify the type of category
- **"description"**: you have to enter the category description.

### Add a new guide
If you want to **add a new guide**, with a corresponding section in the top bar of the **Reflectis site**, you need to add the new sidebar information in the `siderbars.js` file.

The section you need to add must be contained in `const sidebars`:

![image](https://github.com/AnotheRealitySrl/Reflectis-Documentation/assets/11877743/4901958e-95ff-48bc-934d-aeebefc7f7cf)

The steps to be taken are:
- Add a **new section**, choosing an id for the sidebar (**NAME+Sidebar**)
  
  ![image](https://github.com/AnotheRealitySrl/Reflectis-Documentation/assets/11877743/d02f7408-840a-4d55-b7b6-b48a85ca06fd)

- Enter the name of the **introduction document** of the guide or any other **single document**, not in a subsection (*with the specific path, if it is inside a folder*)
  
  ![image](https://github.com/AnotheRealitySrl/Reflectis-Documentation/assets/11877743/d2a775fa-79ae-474d-9bee-93f282f34450)

- For each **subsection** of the guide, you must enter **this portion of code**, where in:
  - **"label"** you enter the name of the section
  - **"dirName"** you enter the path where the folder that corresponds to the section inside the sidebar is located.
    
  ![image](https://github.com/AnotheRealitySrl/Reflectis-Documentation/assets/11877743/9af45638-d21c-4b9b-86ff-e6b3abf91035)

Finally, you need to go into the `docusaurus.config.js` file and add **this portion of code** in `themeConfig`, under the last sidebar added:

![image](https://github.com/AnotheRealitySrl/Reflectis-Documentation/assets/11877743/3f56aeb6-5c42-4bd3-9dfb-2122f0f5b074)

Here you need to write in:
- **"sidebarId"** the id of the newly created sidebar
- **"position"** the position of the sidebar button in the top bar 
- **"label"** the name of the sidebar that will appear on the site.
  
## How to build
When you want to publish the changes **online** on the Reflectis site, you have to **build** the project, by typing on the terminal inside the IDE:

```
$ npm run build
```
This command generates **static content** into the `build` directory and can be served using any static contents hosting service.

Finally, you can use **FileZilla**, with website credentials, to upload the content of `build` directory.

**Note: Remember to push changes to Git once completed!**

## Versioning
Should you want to **store the current version** of the documentation and move to the next one, you need to type this command:
```
$ npm run docusaurus docs:version 20XX.Y
```
The structure of the Reflectis changelog to follow is: **20XX.Y** (XX is the year, Y is the month).

Then, automatically, Docusaurus will create a new folder in `versioned_docs/version-[versionName]/`.
![image](https://github.com/AnotheRealitySrl/Reflectis-Documentation/assets/11877743/8648a50c-7d1f-4975-a2a6-d18d27437746)

So if you want to **change the contents** of the previous version, you have to access the related folder of the version.
