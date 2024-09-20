// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "devils-unite.firebaseapp.com",
  projectId: "devils-unite",
  storageBucket: "devils-unite.appspot.com",
  messagingSenderId: "83391673252",
  appId: "1:83391673252:web:cab313c3c8e2479b5a0731",
  measurementId: "G-4KEY1F5PVK"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Auth with persistence
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
