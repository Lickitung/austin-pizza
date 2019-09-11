import Firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB6ITXlLyEe4fE6ae63hxKnRCI5ijPpucs",
    authDomain: "austin-pizza.firebaseapp.com",
    databaseURL: "https://austin-pizza.firebaseio.com",
    projectId: "austin-pizza",
    storageBucket: "",
    messagingSenderId: "357633493417",
    appId: "1:357633493417:web:d5d0b7666826ada2d79cb8"
  };
const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu')