//Importing the core functionalities of firebase
import firebase from 'firebase/app';
//Importing the firestore Database
import 'firebase/firestore';
//Importing the firebase authentication to authenticate the application
import 'firebase/auth';


 export const firebaseConfig = {
    apiKey: "AIzaSyDXQQdSggAdAlbOdY-b9resB_hdLtaI1qU",
    authDomain: "workflowapp-problemstatement.firebaseapp.com",
    databaseURL: "https://workflowapp-problemstatement.firebaseio.com",
    projectId: "workflowapp-problemstatement",
    storageBucket: "workflowapp-problemstatement.appspot.com",
    messagingSenderId: "227696855038",
    appId: "1:227696855038:web:15030959aa4d6994b7a2af"
  };
  //Initializing Firebase
  firebase.initializeApp(firebaseConfig);
  //Initializing Firestore
  firebase.firestore().settings({});
  

  export default firebase;