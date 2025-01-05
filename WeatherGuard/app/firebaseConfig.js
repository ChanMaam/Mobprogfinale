// Import the Firebase modules you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import auth module

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEg7OdjNsjR_bkfxw4bfDm_wWwbDuk5jo",
  authDomain: "weatherguard2-4d843.firebaseapp.com", // Fixed authDomain
  projectId: "weatherguard2-4d843",
  storageBucket: "weatherguard2-4d843.appspot.com", // Fixed storage bucket
  messagingSenderId: "629257255711",
  appId: "1:629257255711:web:08c01d90a237d308094e2a",
  measurementId: "G-001DELYN4C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize authentication

// Export authentication for use in other parts of the app
export { auth };
