# Frontend Application

## Guidance for setup

1.Go inside of 'frontend' folder and execute,
```
npm install
```
2.install 'axios' package using the command of,
```
npm install -s axios
```
(it handles the http request sending and receiving to React.)

3.Install @lls/react-light-calendar via npm :
```
npm install --save @lls/react-light-calendar
```

4.Install react-datepicker via npm :
```
npm install --save react-datepicker
```

## Frontend Application


1. 'index.js' - this is the main entry point of the application
  -  routes are defined here

2. 'adminRoutes.js','clerkRoutes.js','ownerRoutes.js','conductorRoutes.js','managerRoutes.js'- contain routes related to the sidebar of each user type.

  
3. 'src/views/{moduleName}/{pageName}' - contains frontend of each view type and the relevant css files

4. 'src/layouts/{userType}'- contains the layouts of different types of users.
		-import the relevant routes from the route files.

5. 'documentation'- documentation related to the template

