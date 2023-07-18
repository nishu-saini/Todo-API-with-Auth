# USER API

> Developed a Node.js and Express-based backend for the USER API, utilizing a MongoDB database.

> This User API is designed to perform CRUD (Create, Read, Update, Delete) operations for managing users.

> It allows for creating new user entries in the database, retrieving information for all users, deleting existing users, and updating user details as needed.

> To create a new user using the User API, the user is required to provide three pieces of information: name, email, and password.

## Routes:

### GET:

    1. /api/v1/user/all -> Get All users
    2. /api/v1/user/:id -> Get User By id

### POST:

    1. /api/v1/user/new -> Create New User

### PUT

    1. /api/v1/user/:id -> Update User Info

### DELETE

    1. /api/v1/user/:id -> DELETE USER

## Config.env

- Create a config.env file at given path.
- Path: `/data/config.env`
- Define following variable inside config.env
  ```
  PORT = 5555
  Mongodb_URI = mongodb://localhost:27017
  ```
