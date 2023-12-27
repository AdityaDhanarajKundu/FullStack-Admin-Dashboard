# FullStack(MERN) Admin Dashboard Web Application

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) admin panel web application created in order to gain knowledge about the structure
of a typical MERN application.

## Overview

Like any other FullStack applications this too has separate Backend(server side) and Frontend(Client Side).
The backend server and frontend are deployed live on Render.com.
<a href="https://admin-frontend-5kmh.onrender.com">Click Here See the app</a>

### Server/Backend

The server handles the backend logic, database interaction, and serves API endpoints.

#### Tech Stack

- Node.js with Express.js for the server
- MongoDB for the database
- Mongoose for MongoDB object modeling
- Other middleware like body-parser, cors, helmet, morgan for various functionalities

#### Setup and Installation

1. Install dependencies using `npm install`
2. Start the server in development mode: `npm run dev`
3. To start the server in production mode: `npm start`

### Client/Frontend

The client is the user-facing part of the application, built using React.js and Vite

#### Tech Stack

- React.js for building the UI components
- Redux Toolkit for state management
- Material-UI for styling and UI components
- Vite as the build tool
- Redux Toolkit Query for handling the API endpoints query
- React Router to navigate between the different components(Not pages. This is single page application)
- Nivo for the interactive and responsive charts and maps

#### Setup and Installation

1. Install dependencies using `npm install`
2. Start the development server: `npm run dev`
3. To build the production-ready application: `npm run build`

## Getting Started

To run the full application locally:

1. Clone this repository
2. Navigate to the server directory: `cd server` and follow the backend setup instructions mentioned above.
3. Navigate to the client directory: `cd client` and follow the frontend setup instructions mentioned above.

## Application Features

1. This application lets user monitor their business insights and analytics.
2. This application has separate components for separate functions all placed under tabs in the sidebar.
3. A dedicated dashboard to see all the important insights and information in one place.
4. A World map to locate where most of the customers of a particular business are from.
5. Interactive Line and Pie charts for the daily and monthly sales and revenue
6. Evaluate performance of user comparing with other database tables.

## Contributing

Contributions and feedback are welcome! Feel free to open an issue or submit a pull request
