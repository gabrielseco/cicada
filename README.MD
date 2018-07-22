# CICADA

## Install
```sh
cd server && npm install
cd client && npm install
```

## Run Server
```sh
  cd server
  npm start
```

## Run Client
```sh
  cd client
  npm run dev
```

## What I used

A server with express as a proxy making the api calls.
I hosted the project in heroku.

In the client I have an adapter for axios to make the api calls.

I used React with a custom configuration that I am always improving to get better understanding of webpack.

I used CSS Modules for styling.

I used React Router and used the hash from the location to change the city and used React Loadable for code-splitting.

For the global CSS I have something inspired by ITCSS Arquitecture.

I used flow for some static analysis.

For the layout I tried to mix flexbox and grid layout.


## What I need to improve.
* [ ] I need to improve the Responsive design.
* [ ] Fix button toggle mobile
* [ ] Loader for ---> PropertyList
* [ ] Error Handling API calls
* [ ] Test the code with unit tests
* [ ] Support IE Polyfill Object assign, Css Grid...
