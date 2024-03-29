# Simple React Shopping Cart App

This is a simple React-based shopping cart application that allows users to view a list of products, add and remove products from the cart, and see the total price of items in the cart.

## Getting Started

To use this React app, follow these steps:

1. Download or clone this repository to your local machine.

2. Install the required dependencies using npm:

```
npm install
```

3. Set up Firebase for this project:

   - Go to the Firebase console (https://console.firebase.google.com/) and create a new project.
   - Copy the Firebase configuration object (apiKey, authDomain, projectId, storageBucket, messagingSenderId, and appId) from your Firebase project settings.
   - Replace the `firebaseConfig` object in the `index.js` file with your Firebase configuration.

4. Start the development server:

```
npm start
```

5. The application should now be running on `http://localhost:3000/`.

## Features

- View a list of products with their titles, prices, quantities, and images.
- Increase or decrease the quantity of a product in the cart using the "+" and "-" buttons.
- Remove a product from the cart using the trash icon.
- See the total price of all items in the cart.

## Folder Structure

- `public`: Contains the public files, including `index.html` and other static assets.
- `src`: Contains the source files for the React application.
  - `App.js`: The main component that manages the cart state and handles product operations.
  - `CartItem.js`: A component that renders an individual cart item.
  - `Cart.js`: A component that renders the cart and maps over the cart items to display them.
  - `Navbar.js`: A simple component for the top navigation bar that displays the cart icon and count.
  - `index.js`: The entry point of the React application.

## Dependencies

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Firebase](https://firebase.google.com/): Backend-as-a-Service (BaaS) platform for database and authentication (Firestore used in this app).
- [ReactDOM](https://reactjs.org/docs/react-dom.html): Provides DOM-specific methods for React.

## Credits

- The product images used in the app are from Unsplash (https://unsplash.com/) and are for demo purposes only.
- The cart icon images used in the app are from Flaticon (https://www.flaticon.com/) and are free to use with proper attribution.

## License

This project is provided under the MIT License. Feel free to use, modify, and distribute it for personal and commercial projects. However, attribution to the original author is appreciated but not required.

## Support

For any issues or questions related to this project, feel free to contact me at adarshkumar.dev16@gmail.com.

Thank you for using the Simple React Shopping Cart App! Happy shopping!