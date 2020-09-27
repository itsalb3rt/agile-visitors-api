# Agile Visitors API

API for application that registers visiting employees.

# Table of content

- [ENV file](#env-file)

- [Development](#development)

- [API Query String Filters and More](#filters-and-more)


# Get Started

```bash
$ git clone https://github.com/itsalb3rt/agile-visitors-api.git
$ cd agile-visitors-api
```

Now copy and rename the `.env.example` file.

```bash
$ cp .env.example .env
```

By default the project is ready for using with docker

```bash
$ docker-compose up
```

Now you have now the API running in `http://localhost:5000/api` or `http://local.agile-visitors.api/api`

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
---

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

# Filters and More


## Query string

**Filters**

**Like**

For using `like` operator you can pass `search` query string var with `where` for indicate columns.

```
api/visits?search=some&where=reasonVisit
```

This search for `some` in `reasonVisit` column.

**Limit and offset**

You can use `limit` and `offset` for paginate.

```
api/visits?limit=10&page=2
```

This example return the records between 11 to 20

**Order**

Use `-` sign for descending while `+` for ascending, by default if sign is not presented it will automatically set to `+` sign (ex: `sort=-created_at` or `sort=+created_at`). Value can be separated by a comma if multiple sort condition is needed (ex: `sort=id,name`).

```
api/visits?sort=-created_at
```

More information: [https://github.com/perbert27/sequelize-querystring-converter](https://github.com/perbert27/sequelize-querystring-converter)