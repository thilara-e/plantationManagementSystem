# Backend Application

## Guidance for setup

1. start mqsql server(xampp/wampp or something)

2. go inside of 'backend' folder and execute,
```
npm install
```

3. open and edit the db configuration file at 'backend/src/config/db.config.js' according to your settings.

4. after that go to root folder again and execute,
```
npm start
```
[if you use nodemon(suggest to use), 'nodemon start']

5. now backend will run and listen to 'localhost:8000' port





## Backend Application

1. 'app.js' - this is the main entry point of the application
  -  import router file.(after importing, create an empty file at routers folder)
  -  add router with relavant path at 'app.use()'

2. 'src/routers/{created file}' - seperated routers for each functionality
  - define all the routings here according to the sample laborer router.(get, post, put, delete as you need)
  - in here you have to import controller file.(create an empty file at controllers folder)

3. 'src/controllers/{created file}' - handle the functionalities
  - have to import sqlGenerator(src/utils/sqlGenerator.js) file. add relavant sql query parts in that file as you want.
  - have to import connection(src/utils/connection.js) file. this will establish the db connection to backend.
  - then write query execution and callback parts as you want.(callback works like return method)
  - to write execution part you needs classes and that can be created at 'models' folder.

4.'src/utils/sqlGenerator.js' - contains relavant sql queries.
