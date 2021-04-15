import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDnotdZrbK8uOpdUn51mSI8o_GZstrnXB8',
  authDomain: 'passwordmanager-ccab4.firebaseapp.com',
  databaseURL: 'https://passwordmanager-ccab4-default-rtdb.firebaseio.com/',
  projectId: 'passwordmanager-ccab4',
  storageBucket: 'passwordmanager-ccab4.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: '1:896305151807:ios:e72c649f8322ff60b11d8a',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };