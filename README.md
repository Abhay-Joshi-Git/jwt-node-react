# jwt-node-react
simple implementation of jwt node/express server and using it in react

# server - 

To run the server -

```
cd server
npm install
npm start
```

## description - 
```
- uses express-jwt as authentication middleware and jsonwebtoken to sign in user and creating token
- authentication related APIs - login (POST - expects userName and password), isloggedin (GET)
```

# client - 

To run the client app - 
```
cd client
npm install
npm start
```


## auth flow - 
```
- services folder have services related to authentication, token (set, get, remove), axios interceptor

- axios interceptor does 2 things - 
  -- on request - checks if token exists, if yes - it sets Authorization header with that Bearer token
  -- on response - checks if response status is 401 - dispatches SET_AUTHENTICATION_STATE action as false

- services/authentication/saga - provides side effect of setting SET_AUTHENTICATION_STATE as false - it removes the token and redirects to login page. It also places correct redirect query in login url so that user will be redirected to the appropriate page

- widgets/login provides UI for login. It also has apis, saga to call login API, sets token using token service and calls   setAuthentication action as true

- component/withAuthorizationCheck provides routes auth check - if user tries to go to the routes directly using address bar without login it checks whether user is logged-in or not and redirect to login page if not. This is useful while reloading the pages as well.

```


