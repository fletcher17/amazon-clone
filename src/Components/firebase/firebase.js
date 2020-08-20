import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCJPz-c7kI2fxtqdSNmpBUck-iMlubppes",
  authDomain: "clone-f1c85.firebaseapp.com",
  databaseURL: "https://clone-f1c85.firebaseio.com",
  projectId: "clone-f1c85",
  storageBucket: "clone-f1c85.appspot.com",
  messagingSenderId: "493086088441",
  appId: "1:493086088441:web:be2d00dbbec3cac67e5628",
  measurementId: "G-40Y5ZKMSXC"
});


const auth = firebase.auth();

export {auth};
