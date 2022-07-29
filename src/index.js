import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Sketchy } from './components/Sketchy';
import { getUserByFirebaseId } from './components/modules/UserManager';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

const getLoggedInUser = () =>{
  
  const firebaseUserId = getUserByFirebaseId(firebase.auth().currentUser.uid.toString())
  return firebaseUserId
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
};
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sketchy getLoggedInUser={getLoggedInUser}/>
  </React.StrictMode>
);
