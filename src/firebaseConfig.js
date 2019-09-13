import Firebase from 'firebase'

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_HOST,
    projectId: procdess.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu');
export const dbOrdersRef = db.ref('orders')
