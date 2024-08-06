# Pantry Tracker

## Overview

The Pantry Tracker is a pantry management application built using Next.js, Material UI, and Firebase. It allows users to add, delete, and update pantry items, as well as search and filter through their items.

## Features

- **Add Items**: Users can add new items to their pantry.
- **Delete Items**: Users can remove items from their pantry.
- **Update Items**: Users can update the names of existing items.
- **Search and Filter**: Users can search for specific items in their pantry.
- **Responsive Design**: The application is styled using Material UI for a clean and responsive UI.

## Technologies

- **Next.js**: Framework for server-rendered React applications.
- **Material UI**: Component library for React, providing a set of React components that implement Google's Material Design.
- **Firebase**: Backend-as-a-Service platform for real-time database and authentication.

## Setup

### 1. Set Up the Next.js Project with Material UI Components

1. **Initialize the Next.js Project**:
    ```bash
    npx create-next-app@latest pantry-tracker
    cd pantry-tracker
    ```

2. **Install Material UI**:
    ```bash
    npm install @mui/material @emotion/react @emotion/styled
    ```

3. **Configure Material UI**:
    Create `_app.js` in the `pages` directory:
    ```jsx
    import * as React from 'react';
    import { ThemeProvider, createTheme } from '@mui/material/styles';
    import CssBaseline from '@mui/material/CssBaseline';

    const theme = createTheme({
      // Customize your theme here
    });

    export default function MyApp({ Component, pageProps }) {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      );
    }
    ```

### 2. Implement a Firebase Backend for Data Storage

1. **Set Up Firebase**:
    Go to [Firebase Console](https://console.firebase.google.com/) and create a new project. Add a web app to get your Firebase configuration.

2. **Install Firebase SDK**:
    ```bash
    npm install firebase
    ```

3. **Initialize Firebase**:
    Create `firebase.js` in the `lib` directory:
    ```jsx
    import firebase from 'firebase/app';
    import 'firebase/firestore';

    const firebaseConfig = {
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
      projectId: 'YOUR_PROJECT_ID',
      storageBucket: 'YOUR_PROJECT_ID.appspot.com',
      messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
      appId: 'YOUR_APP_ID'
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.firestore();

    export { db };
    ```
