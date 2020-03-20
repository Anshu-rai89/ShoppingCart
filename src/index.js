import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCIg1SDbW6rEplhbRv4i4NppFvQkgkbku0",
    authDomain: "cart-a7b06.firebaseapp.com",
    databaseURL: "https://cart-a7b06.firebaseio.com",
    projectId: "cart-a7b06",
    storageBucket: "cart-a7b06.appspot.com",
    messagingSenderId: "1056273638314",
    appId: "1:1056273638314:web:8f6b18f805be05910081d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));


