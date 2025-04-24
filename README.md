# User Auth Front End

<img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" /> <img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'> <img src='https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white'> <img src='https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white'>

A React application built to consume the [User Auth API](https://github.com/dappernerddesigns/user_auth). With Axios for http requests and Redux for global state management.

Users can register for an account, login, logout and permenantly delete their user data.

Styled with Material Mui components, this responsive application has a fully accessible cohesive theme throughout.

## 💫 Live application

This application has been hosted on Netlify [here](https://portalauth.netlify.app/). The backend of this application has been hosted on a free tier for the purpose of this repo, the service will spin down from inactivity and can take up to 50 seconds to respond.

## 💻 Local Setup

To run this locally users must have:

- node >version 20

1 - Clone the repo and install all dependencies

```
git clone https://github.com/dappernerddesigns/user_auth_fe
cd user_auth
npm i
```

2 - Define the base url variable
If this application is being run locally in conjunction with the supported backend [User Auth API](https://github.com/dappernerddesigns/user_auth) then the server address will be different than the hosted database.
Create a file with the name .env and define the following variable:

```
VITE_BASE_URL=http://localhost:9090/api
```

3 - Run the development server

```
npm run dev
```

3- Go to http://localhost:5173/ in browser
