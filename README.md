# API Template

API Template using Node, Sequelize, Nodemon, Babel, and more...

# Table of content

- [Conventions](#conventions)

- [Controllers](#controllers)

- [Models](#models)

- [Routes](#routes)

- [Development](#development)

# ENV file

The `env` file contains a series of variables that modify the behavior of the api.

```text
# API
PORT=5000 

# Database
DATABASE_HOST=localhost
DATABASE_PORT=5444
DATABASE_NAME=postgres
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres

# Sequelize
FORCE_SYNC=true # Create tables from models
```

# Conventions

### Controllers

The `controllers` directory contains the files which in turn contains `classes` with `static methods`, this helps keep the application logic away from the `routers` and other important parts.

**Exmaple**
```javascript
//Imports 

// Class with Controller subfix
class ProjectsController {

    //Method with static and async instruction
    static async getProjects(req, res) {
      //Try and catch for manage errors
    try {
      const projects = await Project.findAll();
      res.json({
        data: projects
      })
    } catch (error) {
      res.status(500).json({
        message: 'Something goes wrong',
        data: error
      })
    }
  }
}
```

### Models

The `models` are the ones in charge of interacting with the database, they contain all our columns in an abstraction layer.

**Example**

```javascript
import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Project = sequelize.define('projects', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: { type: Sequelize.TEXT },
  // More columns...
},{});

export default Project;
```
[Sequelize documentation (V6)](https://sequelize.org/)

### Routes

The `routes` are in charge of passing the request data to the `controllers` and invoking these.

```javascript
import {Router} from 'express';
import ProjectsController from '../controllers/Project.controller';

const router = Router();

router.get('/:id', ProjectsController.getProject );

export default router;
```


# Development

For development

```bash
$ npm run dev
```

**Build**

For created a production version
```bash
$ npm run build
```

**Run Production**

```bash
$ npm run start
```