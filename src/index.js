import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAqNx9KgVdukJF9cJioiGaAHS_2Mi0er2A",
  authDomain: "cart-ab8c3.firebaseapp.com",
  projectId: "cart-ab8c3",
  storageBucket: "cart-ab8c3.appspot.com",
  messagingSenderId: "830028316388",
  appId: "1:830028316388:web:8767567f782bef0002f6f1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


