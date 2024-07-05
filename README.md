# PERSONEL API

### ERD:

![ERD](./erdPersonnelAPI.png)

### Personnel API Folder/File Structure:

```
|
|
├── logs
├── src
|    ├── configs
|    │   └── dbConnection.js
|    ├── controllers
|    │   ├── auth.controller.js
|    │   ├── department.controller.js
|    │   ├── personnel.controller.js
|    │   └── token.controller.js
|    ├── helpers
|    │   ├── passwordEncrypt.js
|    │   └── sync.js
|    ├── middlewares
|    │   ├── authentication.js
|    │   ├── errorHandler.js
|    │   ├── findSearchSortPagi.js
|    │   ├── idValidation.js
|    │   ├── logging.js
|    │   └── permissions.js
|    ├── models
|    │   ├── department.model.js
|    │   ├── personnel.model.js
|    │   └── token.model.js
|    ├── routes
|    │   ├── auth.router.js
|    │   ├── department.router.js
|    │   ├── documents.router.js
|    │   ├── index.js
|    │   ├── personnel.router.js
|    │   └── token.router.js
|    ├── .env-sample
|    ├── .gitignore
|    ├── erdPersonnelAPI.png
|    ├── index copy.js
|    ├── index.js
|    ├── LICENSE
|    ├── package-lock.json
|    ├── package.json
|    ├── README.md
|    ├── swagger.json
└──  └── swaggerAutogen.js
```
