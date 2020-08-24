import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCyByRR2NYs01TQI-n7RWskBTp5r5Y8Sy4",
    authDomain: "crown-db-58763.firebaseapp.com",
    databaseURL: "https://crown-db-58763.firebaseio.com",
    projectId: "crown-db-58763",
    storageBucket: "crown-db-58763.appspot.com",
    messagingSenderId: "885987699281",
    appId: "1:885987699281:web:976119392ce6c6e81e6670"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;