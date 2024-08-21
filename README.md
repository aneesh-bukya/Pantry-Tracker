# Inventory Management App

A modern web application for managing inventory using Next.js, React, Material-UI, and Firebase. This app allows users to add, view, and remove inventory items with real-time updates.

## Features

- Add new items to inventory
- View current inventory items with quantities
- Remove items from inventory
- Real-time updates with Firebase Firestore
- Responsive design with Material-UI

## Technologies Used

- **Next.js:** A React framework for server-side rendering and static site generation.
- **React:** A JavaScript library for building user interfaces.
- **Material-UI:** A popular React UI framework for creating a sleek and responsive design.
- **Firebase Firestore:** A NoSQL cloud database for real-time data synchronization.

## Getting Started

### Prerequisites

- Node.js (LTS version) and npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/inventory-management-app.git
    cd inventory-management-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up Firebase:
    - Go to the Firebase Console, create a new project, and add a web app.
    - Copy the Firebase configuration object.

4. Configure Firebase:
    - Create a `firebase.js` file in the root of the project and add your Firebase configuration:
    ```javascript
    import { initializeApp } from 'firebase/app';
    import { getFirestore } from 'firebase/firestore';

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT_ID.appspot.com",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    export { firestore };
    ```

### Running the Application

- Start the development server:
    ```bash
    npm run dev
    ```
- Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Application Structure

- `pages/index.js`: The main component where inventory items are displayed and managed.
- `firebase.js`: Contains Firebase configuration and initialization.

## Deployment

Deploy your app using Vercel:

1. Install Vercel CLI:
    ```bash
    npm i -g vercel
    ```

2. Deploy your app:
    ```bash
    vercel
    ```

3. Configure Environment Variables on Vercel:
    - Go to the Vercel dashboard for your project.
    - Add your Firebase configuration values as environment variables.

4. Redeploy if necessary:
    ```bash
    vercel --prod
    ```

## Potential Improvements

- User Authentication with Firebase Auth
- Item Categories and search/filter functionality
- Pagination for large inventories
- Detailed item information and data export options
- Enhanced responsive design for mobile devices

## Contributing

Feel free to submit issues or pull requests to improve the app. Your contributions are welcome!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or feedback, please reach out to [aneeshbsri@outlook.com](mailto:aneeshbsri@outlook.com).
