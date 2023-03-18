import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp, getApp, getApps } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase for SSR

// avoids calling the server both on the client and server
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { firestore, auth, storage };
