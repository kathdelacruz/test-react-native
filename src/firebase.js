import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCrxCkqlo0BQKkQRn6GV4pa3vYxKPmE-v4",
  authDomain: "testreact-51b14.firebaseapp.com",
  databaseURL: "https://testreact-51b14.firebaseio.com",
  projectId: "testreact-51b14",
  storageBucket: "testreact-51b14.appspot.com",
  messagingSenderId: "654810697638"
};

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();

export default firebase;