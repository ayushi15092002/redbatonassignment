# redbatonassignment : HackerNews Clone Project

## Overview

This project is a HackerNews clone built using the MERN stack (MongoDB, Express.js, React, and Node.js) with Vite for the frontend and Firebase for authentication.

## Backend Setup

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file and add your MongoDB connection string:

    ```env
    CONNECTION_STRING=your_mongo_db_connection_string
    ```

4. Run the backend server:

    ```bash
    node index.js
    ```

   The backend will be running on port 3001.

## Frontend Setup

1. Set up a Firebase Web App project and copy the `firebaseConfig` from the project settings into `frontend/src/firebaseConfig.js`.
   Also set the firebase suthentication and add providers into it. 

3. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

4. Install dependencies:

    ```bash
    npm install
    ```

5. Run the frontend development server:

    ```bash
    npm run dev
    ```

   The frontend will be accessible at [http://localhost:5713](http://localhost:5713).

## Project Structure

- Frontend runs on port 5713, and the backend runs on port 3001.
- Frontend routes: '/', '/hidden-items', 'login', 'signup'.


## Additional Information

If you get Uncaught SyntaxError: Export 'import_react3' is not defined in module  in console while running project, then do 2 steps: 
1. npm install --save @emotion/react
2. npm install --save @emotion/styled
and re-run the frontend project. 
 

