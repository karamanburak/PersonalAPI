# PERSONEL API
This API allows for comprehensive management of personnel and departments within an organization. It provides endpoints for user registration, login, department creation and management, as well as personnel management. Below is a detailed guide to each endpoint and its usage.
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

## Task Scenarios

1. User Registration

- [ ] A user can create a new account in the system.

Endpoint: POST /personnels

```json
{
  "username": "john_doe",
  "password": "Password123!",
  "email": "john_doe@example.com"
}
```

Validation:

- [ ] The username must be unique.
- [ ] The password must be at least 8 characters long and contain uppercase/lowercase letters, numbers, and special characters.
- [ ] The email address must be in a valid format.

Response:

- Success: HTTP 201 Created
- Failure: HTTP 400 Bad Request with validation error messages

2. User Login

- [ ] A registered user can log in with their username and password.

Endpoint: POST /login

```json
{
  "username": "john_doe",
  "password": "Password123!"
}
```

Validation:

- [ ] The username or email and password must match the stored credentials.

  3.Create Department

- [ ] A user with admin privileges can CRUD operations for a new department to the system.

Endpoint: POST /departments

```json
{
  "name": "Human Resources"
}
```

Validation:

- [ ] The department name must be unique and not empty.

4. Create Personnel

- [ ] A user can add, read and update their own personnel record in the system. Only the administrator will be authorized to delete the personnel.

Endpoint: POST /personnel

```json
{
  "departmentId": "60b6a9f1e1d1b24bfc13e0a8",
  "username": "jane_doe",
  "password": "Password123!",
  "firstName": "Jane",
  "lastName": "Doe",
  "phone": "123-456-7890",
  "email": "jane_doe@example.com",
  "title": "Manager",
  "salary": 75000,
  "description": "Experienced manager",
  "isActive": true,
  "isAdmin": false,
  "isLead": true
}
```

Validation:

- [ ] The departmentId must refer to an existing department.
- [ ] The username and email must be unique.
- [ ] The email must be in a valid format.
- [ ] The password must meet complexity requirements.

7. List Personnel

- [ ] A user with admin privileges can list all personnel records in the system.

Endpoint: GET /personnel
Response:
Success: HTTP 200 OK with a list of personnel records
Failure: HTTP 400 Bad Request with error messages

8. Create Token

- [ ] A token is created for a user upon successful login.

Response:

- Success: HTTP 200 OK with a simple token
- Failure: HTTP 400 Bad Request with error messages
