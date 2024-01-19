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
When you start using the project, on **Visual Studio** (or other IDE) you will find **this hierarchy**:

![image](https://github.com/AnotheRealitySrl/Reflectis-Documentation/assets/11877743/183fc371-87f6-446f-af8d-8a0d3c2ff7aa)

The folders that affect the changes you need to do are `docs` and `static/img`, into which you upload images to be inserted into documents.

The files to be edited are those with **`.md` extension** and are written in the markup language "**Markdown**". 
For more information on the rules of writing with this language, see [this guide](https://docusaurus.io/docs/markdown-features#standard-features).

To immediately **see the changes made**, you can simply save the file and it will automatically **update the browser window**.

## How to build
When you want to publish the changes **online** on the Reflectis site, you have to **build** the project, by typing on the terminal inside the IDE:

```
$ npm run build
```
This command generates **static content** into the `build` directory and can be served using any static contents hosting service.

Finally, you can use **FileZilla**, with website credentials, to upload the content of `build` directory.

**Note: Remember to push changes to Git once completed!**
