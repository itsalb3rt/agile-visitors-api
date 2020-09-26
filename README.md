# Agile Visitors API

API for application that registers visiting employees.

# Table of content


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