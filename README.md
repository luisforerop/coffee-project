# COFFEE PROJECT

`v1.0.0`

The first version of [coffee project](https://coffee-project-luisforerop.herokuapp.com) contains all the necessary endpoints to create and remove users, update their information and read all the users and their current information existing in the coffee project data base.

This project uses typescript for develop mode and mongoDb as a persistance layer.

## Get starter

### Starting the project

After cloning the repository, run `npm i` to install all dependencies and prepare it to run in dev mode.

### Environment variables

This server uses environment variables. Create an .env file with your own variables. You can use the .sample.env file as a guide.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the production mode. This command runs build script to create a dist folder that containig a javascript version of coffee project. 

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view the endpoints documentation, or check it in a [markdown](./docs/api/endpoints.md) version.

### `npm run build`

Builds the app for production. This script uses TSC for transpiles TypeScript code to JavaScript.

## Documentation

This project has two document modules. The first is the [API documentation,](./docs/api/endpoints.md) which can be used by the frontend developer to consume the API. The second is the development documentation, which will provide a [development guide](./docs/notebook/NOTES.md) and some useful tips and topics. This module is currently under development.
