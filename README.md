# Backend Todo API

> This is a Backend API for Todo App, with user Authentication functionality. Users are able to perform CRUD operations using the Task API. The API was built using `Node.js`, `Express`, and `MongoDB`.

> This API provides the necessary endpoints for user authentication and task management. Users can register, log in, and delete their accounts using the `User API`.

> Once authenticated, users can create, read, update, and delete tasks using the `Task API`.

### **Host URL**: [https://todo-api-with-auth.onrender.com](https://todo-api-with-auth.onrender.com)

## **Routes**

### **User API**

#### GET Method

    Get profile details: /api/v1/user/me

    Logout user: /api/v1/user/logout

#### POST Method

    Register user: /api/v1/user/new
    Required: { name, email, password }

    Login user: /api/v1/user/login
    Required: { email, password }

#### DELETE Method

    Delete account: /api/v1/user/delete

### **Task API**

#### GET Method

    Get my tasks: /api/v1/task/mytasks

#### POST Method

    Create new Task: /api/v1/task/new
    Required: { title, description }

    Update task: /api/v1/task/id
    Reaquired: replace `id` to task id in params

#### DELETE Method

    Delete Task: /api/v1/task/id
    Reaquired: replace `id` to task id in params

## .env file info

- config.env file path: `/data/confin.env`
- variable in .env file:

```
PORT =

MONGO_URI = <Mongodb database path>

JWT_SECRET =

NODE_ENV = Development

FRONTEND_URL =

```
